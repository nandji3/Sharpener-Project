//Now take the value from the form and console log the value in the browsers
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const mobileInput = document.querySelector("#phone");
const msg = document.querySelector(".msg");  //for display error
const userList = document.querySelector("#users");  //for adding no. of users
const div = document.querySelector(".container");

let editIndex = -1;  //assign for both boolean(true) and index purpose
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "" || mobileInput.value === "") {
    msg.classList.add("error");  //this gives error background color which is added from CSS style sheet
    //msg.innerHTML = "<h6>Please enter all text field *</h6> ";  //text display as a error
    msg.innerText = "Please enter all text field * ";  //text display as a error
    setTimeout(() => {
      msg.remove();
    }, 3500); //after 3Sec. error will be dissappeared
  }
  else {
    //create an object/dictionary to store the each user information and push into the whole array
    const object = {
      name: nameInput.value,
      email: emailInput.value,
      mobile: mobileInput.value
    };

    let localStudents = JSON.parse(localStorage.getItem("Students1"));

    if (editIndex == -1) {
      if (localStudents == null) {
        localStudents = []
      }
      localStudents.push(object);
      showUserOnScreen(object);
    }
    else {
      localStudents[editIndex] = object;
      //console.log(localStorage.getItem("Students1"))
      let textNode = document.createTextNode(object.name + " - " + object.email + " - " + object.mobile);
      userList.children[editIndex].replaceChild(textNode, userList.children[editIndex].firstChild)

      editIndex = -1;  //after edit and update, change index to -1 to add new data 
    }

    localStorage.setItem("Students1", JSON.stringify(localStudents));
  }

  //To clear user details from text fieldafter after submit data
  nameInput.value = "";
  emailInput.value = "";
  mobileInput.value = "";
}


function showUserOnScreen(object) {
  const liList = document.createElement("li");
  let textNode = document.createTextNode(object.name + " - " + object.email + " - " + object.mobile);

  //Add Delete items functionality
  const deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.className = "btn delete float-right";
  deleteButton.value = "Delete";

  deleteButton.onclick = (e) => {
    if (confirm('Are You Sure?')) {
      removeLocalStorageItems(e);
      removeItem(e);
    }
  }

  //Add Edit items functionality
  const editBtn = document.createElement("input");
  editBtn.type = "button";
  editBtn.className = "btn edit float-right";
  editBtn.value = "edit";

  //onclick on delete button pass a unique id to delete button
  editBtn.onclick = (e) => {
    showItem(e);
  }

  liList.appendChild(textNode);
  liList.appendChild(deleteButton);
  liList.appendChild(editBtn);
  userList.appendChild(liList);
  div.appendChild(userList);
}

//to get index of delete or edit button 
getClickedIndex = (e) => {
  var li = e.target.closest('li');
  //var nodes = Array.from(userList.children);
  //or if you want to not depend on externally defined variables
  var nodes = Array.from((li.closest('ul')).children);  //gives ul children in the form of array to easily find index of li
  var index = nodes.indexOf(li);
  return index;
}

// Remove item form documents
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    //var li = e.target.closest("li");  //or
    let li = e.target.parentElement;  //means (e.target=delete button) kaa parent which is li 
    userList.removeChild(li);
  }
}

//remove/update items from local storage
function removeLocalStorageItems(e) {
  let clicked_id = getClickedIndex(e);

  let localStudents = JSON.parse(localStorage.getItem("Students1"));
  localStudents.splice(clicked_id, 1);

  if (localStudents.length === 0) {
    localStorage.removeItem("Students1");
  }
  else {
    localStorage.setItem("Students1", JSON.stringify(localStudents));
  }
}

//show items on textfiled when we click on the edit button
function showItem(e) {
  let clicked_id = getClickedIndex(e);

  const storedData = localStorage.getItem(("Students1"));
  const storedArray = JSON.parse(storedData);

  const studentObj = storedArray[clicked_id];

  nameInput.value = studentObj.name;
  emailInput.value = studentObj.email;
  mobileInput.value = studentObj.mobile;
  editIndex = clicked_id;
}


/* function showAllUserOnScreen() {
 
    let localStudents = localStorage.getItem("Students1");
    let students = JSON.parse(localStudents)
 
    students.forEach(e => {
      console.log(e.name, e.email, e.mobile)
 
      const liList = document.createElement("li");
      liList.innerText = (e.name + "  -  " + e.email + "  -  " + e.mobile);
 
      const deleteButton = document.createElement("input");
      deleteButton.type = "button";
      deleteButton.className = "btn delete float-right";
      deleteButton.value = "Delete";
      deleteButton.onclick = () => {
        localStorage.removeItem("Students1");
        userList.removeChild(liList);
      }
      liList.appendChild(deleteButton)
      userList.appendChild(liList);
      console.log(userList);
      div.appendChild(userList);
    });
  }*/
