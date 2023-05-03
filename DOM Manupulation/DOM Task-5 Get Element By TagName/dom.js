const list = document.querySelector(".list-group-new-item");

list.style.color = "red";
list.textContent = "Hello world";
list.style.fontWeight = "bold";
list.style.fontSize = "20px";

const li = document.getElementsByTagName("li");
console.log(li);
li.style.color = "green";
li.textContent = "Hello world";
li.style.fontWeight = "bold";
li.style.fontSize = "15px";
