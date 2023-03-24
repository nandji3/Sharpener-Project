//select the all list by className = .items
/*var x = document.querySelector(".items");
console.log(x);
x.remove();*/

//select the all list by id = #un-ordered-list
/* var y = document.querySelector("#un-ordered-list");
console.log(y);
y.remove();*/

//select the all list by tag_name=ul
/*var z = document.querySelector("ul");
console.log(z);
z.remove();*/

//var x = document.querySelector(".items");
//console.log(x);
//x.firstElementChild.remove();  //delete Item 1
//x.lastElementChild.remove();   //delete Item 3
//x.children[1].remove();     //delete Item 2

//var x = document.querySelector(".items");
//x.firstElementChild.textContent = "Hello"; //Item=Hello   or
//x.firstElementChild.innerHTML = "Hello"; //Item=Hello   or
//x.firstElementChild.innerHTML = "<strong>Hello</strong>";  //Item=Hello and bold it

/*
var y = document.querySelector(".items");
//y.firstElementChild.style.color = "green"; //or
y.children[0].textContent = "Hello"; //or
y.children[0].style.color = "green"; //or
y.children[1].style.color = "rgb(31, 164, 252)"; //or
*/

/*
y.children[1].style.color = "green";  //or
y.children[2].style.color = "green";  //or
*/

/*
var y = document.querySelector("#first"); //by id=#first
y.style.color = "green";
*/

/*const btn = document.querySelector(".btn"); //to change background color
console.log(btn);
btn.style.backgroundColor = "#7303fc";   //or  without written Color keyword
//btn.style.background = "#7303fc";   
*/

/*
const x = document.querySelector("body"); //to change body/page background color
//console.log(x);
x.style.backgroundColor = "#50f2e5";
//x.style.background = "#50f2e5";   //or  without written Color keyword
//or
//document.body.style.backgroundColor = "red";
*/

/*
const h1 = document.querySelector("h1"); //to change body/page background color
console.log(h1);
h1.style.backgroundColor = "#2bf087";
//h1.style.background = "#2bf087";      //or  without written Color keyword
*/

/*
const form = document.querySelector("#my-form"); //to change form background color
console.log(form);
form.style.backgroundColor = "#d1c6ae";
//form.style.background = "#d1c6ae";     //or  without written Color keyword
*/

/*
const footer = document.querySelector("footer"); //to change form background color
console.log(footer);
footer.style.background = "#e3e8e8"; //or  without written Color keyword
footer.style.textAlign = "center"; //or  without written Color keyword
footer.style.padding = "25px"; //or  without written Color keyword
*/

/* //on click check all result
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click");
  console.log(e);
  console.log(e.target);
  console.log(e.target.className);
  console.log(e.target.id);
});
*/

/*
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#bfbfbf";
  document.querySelector("body").classList.add("bg-dark"); //this class(bg-dark) is added from css
  document.querySelector("body").style.background = "#7df1f5";
  document.querySelector("header").style.background = "#bfbfbf"; //this class is added from css
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h4>Hello</h4>";
  document.querySelector(".items").lastElementChild.style.color = "#ed0ecc";
});
*/

/* 
//when mouse taken on submit button --->mouseover
const btn = document.querySelector(".btn");
btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#bfbfbf";
  document.querySelector("body").classList.add("bg-dark"); //this class(bg-dark) is added from css
  document.querySelector("body").style.background = "#7df1f5";
  document.querySelector("header").style.background = "#bfbfbf"; //this class is added from css
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h4>Hello</h4>";
  document.querySelector(".items").lastElementChild.style.color = "#ed0ecc";
});
*/

/*
//when mouse taken out from submit button --->mouseout
const btn = document.querySelector(".btn");
btn.addEventListener("mouseout", (e) => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#bfbfbf";
  document.querySelector("body").classList.add("bg-dark"); //this class(bg-dark) is added from css
  document.querySelector("body").style.background = "#7df1f5";
  document.querySelector("header").style.background = "#bfbfbf"; //this class is added from css
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h4>Hello</h4>";
  document.querySelector(".items").lastElementChild.style.color = "#ed0ecc";
});
*/

/*  //this is in same window
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#user");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  //console.log(nameInput.value);
  //console.log(email.value);
  if (nameInput.value === "" || email.value === "") {
    alert("Please enter text field");
  } else {
    console.log(nameInput.value);
    console.log(email.value);
    console.log("User information Submitted Successfully ");
  }
}
*/

/*  //this is display error in same form not window also dissapeared after some time
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#user");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  //console.log(nameInput.value);
  //console.log(email.value);
  if (nameInput.value === "" || email.value === "") {
    msg.classList.add("error"); //this is error background color added from CSS style sheet
    msg.innerHTML = "Please enter all text field * ";
    setTimeout(() => msg.remove(), 3000); //after 3Sec. error will be dissappeared
  } else {
    console.log(nameInput.value);
    console.log(email.value);
    console.log("User information Submitted Successfully ");
  }
}
*/

/*
//Now take the value in the form and console log the value in the browsers
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();

  //console.log(nameInput.value);
  //console.log(email.value);
  if (nameInput.value === "" || email.value === "") {
    msg.classList.add("error"); //this is error background color added from CSS style sheet
    msg.innerHTML = "Please enter all text field * ";
    setTimeout(() => msg.remove(), 3000); //after 3Sec. error will be dissappeared
  } else {
    const node = document.createElement("li");
    const textNode = document.createTextNode(
      `Name : ${nameInput.value} : ${emailInput.value}`
    );
    node.appendChild(textNode);
    userList.append(node);
    //clear fields
    nameInput.value = " ";
    emailInput.value = " ";
  }
}
*/
