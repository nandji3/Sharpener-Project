let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);

// Add item
//itemList <---li <--- liTextNode
// li <---- editBtn
// li <---- deleteBtn
function addItem(e) {
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value;   //get input
  //console.log(document.getElementById('item').value);
  //console.log(document.getElementById('item'));

  // Create new li element --- (which is known as parentNode)
  let li = document.createElement('li');  //parent ---console.log(li);

  // Add class
  li.className = 'list-group-item';

  // create textNode --- (which is known as childNode)
  let liTextNode = document.createTextNode(newItem);

  // Add text node with input value -- (means append "childNode" with "parentNode")
  li.appendChild(liTextNode);


  //insert edit button element with added list item
  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm mr-2 float-right edit";
  let editTextNode = document.createTextNode("Edit");
  editBtn.appendChild(editTextNode);
  li.appendChild(editBtn);


  //insert delete button element with added list item
  let deleteBtn = document.createElement('button');  //parent

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // create deleteTextNode --- (which is known as childNode)
  let deleteTextNode = document.createTextNode('Delete');
  //console.log(deleteTextNode);

  // Append deleteTextNode to deleteBtn
  deleteBtn.appendChild(deleteTextNode);  //it's also childNode of "li"

  // Append deleteBtn to li
  li.appendChild(deleteBtn);

  // Append li to itemList
  itemList.appendChild(li);  //li is also the childNode of itemList
}


// Delete event
itemList.addEventListener('click', removeItem);

// Remove item
function removeItem(e) {
  console.log(e.target.classList.contains('delete'));

  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

























