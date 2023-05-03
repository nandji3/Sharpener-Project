//Now take the value from the form and console log the value in the browsers
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const mobileInput = document.querySelector("#phone");
const msg = document.querySelector(".msg");  //for display error
const userList = document.querySelector("#users");  //for adding no. of users
const div = document.querySelector(".container");

let i = 0;
const students = []; //create the big array which is store the data of multiple user by pushing objects
myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  i = i + 1;  //this integer count assign as a id for each users

  if (nameInput.value === "" || emailInput.value === "" || mobileInput.value === "") {
    msg.classList.add("error"); //this gives error background color which is added from CSS style sheet
    //msg.innerHTML = "<h6>Please enter all text field *</h6> ";  //text display as a error
    msg.innerText = "Please enter all text field *";  //text display as a error
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
    students.push(object);
    //while setItem in localStorage then convert whole object into string
    localStorage.setItem("Students1", JSON.stringify(students));
    //while getItem from localStorage then convert whole string into object
    console.log(JSON.stringify(students))
    //let localStudents = localStorage.getItem("Students1");
    //console.log(JSON.parse(localStudents));
    showUserOnScreen(object);
  }

  function showUserOnScreen(object) {
    const liList = document.createElement("li");
    liList.innerText = (object.name + "  -  " + object.email + "  -  " + object.mobile);

    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.className = "btn delete float-right";
    deleteButton.value = "Delete";
    deleteButton.id = i;

    //onclick on delete button pass a unique id to delete button
    deleteButton.onclick = (e) => {
      removeLocalStorageItems(this.id);
      removeItem(e);
    }

    liList.appendChild(deleteButton)
    userList.appendChild(liList);
    // console.log(userList);
    div.appendChild(userList);

  }

  // Remove item
  function removeItem(e) {
    console.log(e.target.classList.contains('delete'));

    if (e.target.classList.contains('delete')) {
      if (confirm('Are You Sure?')) {
        var li = e.target.parentElement;
        userList.removeChild(li);
      }
    }
  }

  //clicked_id = this.id
  function removeLocalStorageItems(clicked_id) {
    //students.removeItem(clicked_id);
    students.splice(clicked_id, 1);
    localStorage.setItem("Students1", JSON.stringify(students));
    //while getItem from localStorage then convert whole string into object
    //console.log(JSON.stringify(students))
  }


  /*
   function showUserOnScreen() {
 
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
   }
   */

  //To clear user details from dashboard after submit data
  nameInput.value = "";
  emailInput.value = "";
  mobileInput.value = "";
}
