let amounts = document.getElementById("amount");
let description = document.getElementById("des");
let details = document.getElementById("detail");
let button = document.getElementById("btn");
let ul = document.getElementById('items');

let editIndex = -1;
button.addEventListener("click", function (e) {
  e.preventDefault();

  let obj = {
    "expenseAmount": amounts.value,
    "category": details.value,
    "description": description.value
  }

  /* In local storage setItem data in the form of "Whole string" by using JSON.stringify 
  In local storage getItem data in the original form by using JSON.parse. */

  let localExpenses = JSON.parse(localStorage.getItem("Expenses")); //this convert whole data(object) into original form without string
  console.log(editIndex);
  if (editIndex == -1) {

    if (localExpenses === null)
      localExpenses = [];

    localExpenses.push(obj);
    showAllDataOnDocumtent(obj);
  }
  else {
    localExpenses[editIndex] = obj;
    //console.log(localStorage.getItem("Expenses"))
    let textNode = document.createTextNode(obj.expenseAmount + " -- " + obj.category + " -- " + obj.description);
    console.log(ul.children[editIndex].firstChild);
    ul.children[editIndex].replaceChild(textNode, ul.children[editIndex].firstChild)

    editIndex = -1  //after edit and update, change index to -1 to add new data 
  }

  localStorage.setItem("Expenses", JSON.stringify(localExpenses));  //this convert whole data(object) into single string

  amounts.value = "";
  details.value = "";
  description.value = "";
  //location.reload();
})

function showAllDataOnDocumtent(obj) {
  let li = document.createElement("li");
  //li.innerText = `${amounts.value} -- ${details.value} -- ${description.value}`;
  let textNode = document.createTextNode(obj.expenseAmount + " -- " + obj.category + " -- " + obj.description);

  let div = document.createElement("div");
  div.className = "float-right";
  div.id = "button-arrange";

  let deleteButton = createDeleteBtn();
  let editButton = createEditBtn();


  deleteButton.addEventListener("click", (e) => {
    if (confirm("Are you soure?")) {
      removeExpensesFromLocalStorage(e);
      removeExpenses(e);
    }
  })

  editButton.addEventListener("click", (e) => {
    showTextOnTextField(e);
  })

  div.appendChild(deleteButton);
  div.appendChild(editButton);
  li.appendChild(textNode);
  li.appendChild(div);
  ul.appendChild(li);
}

//creation of delete button
function createDeleteBtn() {
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.className = "btn delete float-left mb-1 mr-sm-1 btn btn-danger btn-sm pb-1 pt-1";
  deleteBtn.value = "Delete Expenses";
  return deleteBtn;
}

//remove expenses from document
function removeExpenses(e) {
  if (e.target.classList.contains("delete")) {
    let li = e.target.closest("li");
    ul.removeChild(li);
  }
}

//remove and update expenses from local storage
function removeExpensesFromLocalStorage(e) {
  let clickId = getClickedIndex(e);

  let localExpense = JSON.parse(localStorage.getItem("Expenses"));
  localExpense.splice(clickId, 1); //remove expense of that index by splic 

  if (localExpense.length === 0) {
    localStorage.removeItem("Expenses");
  }
  else {
    localStorage.setItem("Expenses", JSON.stringify(localExpense));
  }
}


//creation of edit button
function createEditBtn() {
  const editBtn = document.createElement("input");
  editBtn.type = "button";
  editBtn.className = "btn edit float-left mb-1 mr-3 btn btn-info btn-sm pb-1 pt-1";
  editBtn.value = "Edit Expenses";
  return editBtn;
}

function showTextOnTextField(e) {
  let clickedId = getClickedIndex(e);
  let localExpenseArray = JSON.parse(localStorage.getItem("Expenses"));
  let ExpensesObj = localExpenseArray[clickedId];

  amounts.value = ExpensesObj.expenseAmount;
  details.value = ExpensesObj.category;
  description.value = ExpensesObj.description;

  editIndex = clickedId;
}


getClickedIndex = (e) => {
  let li = e.target.closest('li');
  //var ulArray = Array.from(ul.children);
  //or if you want to not depend on externally defined variables
  let ulArray = Array.from(li.closest("ul").children);  //gives ul children in the form of array to easily find index of li
  let index = ulArray.indexOf(li);
  return index;
}