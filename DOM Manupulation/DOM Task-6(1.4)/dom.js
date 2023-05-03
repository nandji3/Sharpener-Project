//const li = document.querySelector(".list-group-item:nth-child(2)");
//console.log(li);

const ul = document.querySelector(".list-group");
console.log(ul);
ul.children[1].style.background = "green";
ul.children[2].style.color = "white";

//OR

/* 
const li = document.querySelectorAll(".list-group-item");
console.log(li);
for (let i = 0; i < li.length; i++) {
  li[1].style.background = "green";
  li[2].style.color = "white";
}
*/

/*
const li = document.querySelectorAll(".list-group-item");
console.log(li);
for (let i = 0; i < li.length; i++) {
  li[1].style.color = "green";
  li[2].style.color = "white";
}

const odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
console.log(odd);
for (let i = 0; i < odd.length; i++) {
  odd[i].style.background = "green";
}

*/
