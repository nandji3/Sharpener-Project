/*
const x = document.querySelector(".list-group");
console.log(x);
//x.style.color = "red";
x.children[1].style.color = "red";
*/

/*
const y = document.getElementsByClassName("list-group-item");
console.log(y);
y[0].style.background = "yellow";

for (let i = 0; i < y.length; i++) {
  y[i].style.background = "#4ff5";
}

const input = document.querySelector("input");
input.value = "Hello World";

var submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND";
//console.log(submit);

const lastIteam = document.querySelector(".list-group-item:last-child");
lastIteam.style.color = "blue";

const secondChild = document.querySelector(".list-group-item:nth-child(2)");
secondChild.style.color = "red";
*/

//if more then one class name is same if we want to select all class at single time us "querySlectorAll()";

/*const titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "Hello Nandji";

//below this method is known as pseduo selector
const odd = document.querySelectorAll("li:nth-child(odd)");
//console.log(odd);
const even = document.querySelectorAll("li:nth-child(even)");
//console.log(even);
for (let i = 0; i < odd.length; i++) {
  odd[i].style.background = "#d4d5d9";
  even[i].style.background = "#a2d8db";
}

const header = document.getElementById("header-title");
header.style.borderBottom = "solid 4px black";

const ul = document.getElementsByClassName("list-group-item");
for (let i = 0; i < ul.length; i++) {
  ul[i].style.color = "green";
  ul[i].style.fontWeight = "bold";
}
//ul.style.color = "green";
*/

/*const li = document.querySelector(".list-group-item:nth-child(3)");
//console.log(li);
li.style.color = "green";
*/
//or

const ul = document.getElementsByClassName("list-group-item");
//console.log(ul);
for (let i = 0; i < ul.length; i++) {
  ul[2].style.background = "green";
  ul[i].style.fontWeight = "bold";
  ul[i].style.color = "#f27a4b";
}
console.log("Hello");
console.log("Hello");
