let li = document.getElementsByClassName('abcd');

getEditButton = () => {
  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm mr-2 float-right edit";
  let editTextNode = document.createTextNode("Edit");
  editBtn.appendChild(editTextNode);
  return editBtn;
}
for (let i = 0; i < li.length; i++) {
  button = getEditButton();
  //li[i] = button + li[i];
  li[i].appendChild(button);
}


//addDescription field
let addDescription = document.createElement("input");  //create new input element
addDescription.type = "text";
addDescription.className = "form-control mr-2";
addDescription.id = "description";
const formParent = document.getElementById("addForm");
const newNode = addDescription;
let referenceNode = formParent.children[1];
formParent.insertBefore(newNode, referenceNode);


/*
//insert edit button element with added list item
let li = document.getElementsByClassName('list-group-item');

getEditButton = () => {
  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm mr-2 float-right edit";
  let editTextNode = document.createTextNode("Edit");
  editBtn.appendChild(editTextNode);
  return editBtn;
}

for (let i = 0; i < li.length; i++) {
  button = getEditButton();
  li[i] = button + li[i];
  li[i].appendChild(button);
}
*/


let form = document.getElementById('addForm');   //Getting form node
let itemList = document.getElementById('items');  //Getting item node
let descriptionList = document.getElementById('description');  //Getting description node

// Form submit event
form.addEventListener('submit', addItem);

// Add item
//itemList <---li <--- liTextNode
//             li <--- newDiv <--- editBtn
//                            <--- deleteBtn

function addItem(e) {
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value;   //gives value of new item added in the list 
  let newDescription = document.getElementById('description').value;   //gives value of name of item which is added to the list 


  if (newItem === "" || newDescription === "") {
    alert("Add new items which you want ??");
  }
  else {

    // Create new li element --- (which is known as parentNode)
    let li = document.createElement('li');  //parent ---console.log(li);
    // Add class
    li.className = 'list-group-item';
    // create textNode --- (which is known as childNode)
    let liTextNode = document.createTextNode(newItem + " " + newDescription);


    // Add text node with input value -- (means append "childNode" with "parentNode")
    li.appendChild(liTextNode);
    //console.log(liTextNode.textContent);


    //insert edit button element now added to list item
    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-primary btn-sm mr-2 float-right edit";
    let editTextNode = document.createTextNode("Edit");
    editBtn.appendChild(editTextNode);
    li.appendChild(editBtn);


    //insert delete button element now added to list item
    let deleteBtn = document.createElement('button');  //parent
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm mr-1 float-right delete';
    // create deleteTextNode --- (which is known as childNode)
    let deleteTextNode = document.createTextNode('Delete');
    //console.log(deleteTextNode);
    // Append deleteTextNode to deleteBtn
    deleteBtn.appendChild(deleteTextNode);  //it's also childNode of "li"


    //create newDiv
    let newDiv = document.createElement("div");
    newDiv.className = "abcd float-right";
    // Append  editBtn to newDiv
    newDiv.appendChild(editBtn);
    // Append  deleteBtn to newDiv
    newDiv.appendChild(deleteBtn);
    // Append newDiv to li
    li.appendChild(newDiv);
    // Append li to itemList
    itemList.appendChild(li);  //li is also the childNode of itemList
  }
}

// Delete event
itemList.addEventListener('click', removeItem);

// Remove item
function removeItem(e) {
  console.log(e.target);
  if (e.target.classList.contains('delete')) {

    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      //console.log(li);
      itemList.removeChild(li.parentElement);
    }
  }
}


//added filter functionality

let filter = document.getElementById("filter");  //give input search node
//console.log(filter);
filter.addEventListener("keyup", filterItem)  //event listener

function filterItem(e) {
  //console.log(e.target);
  let text = e.target.value.toLowerCase();  //convert input text which is enterd in the search box into lowerCase
  console.log(text);
  let item1 = itemList.getElementsByTagName('li');  //all items show in HTML collection
  //now HTML collection of item is converted into array object and loop through it
  Array.from(item1).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    //console.log(itemName.toLowerCase().indexOf(text));
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    }
    else {
      item.style.display = "none";
    }
  });
}