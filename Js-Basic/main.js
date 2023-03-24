const x = document.querySelector(".lists"); //select ul list node
console.log(x);
//x.firstElementChild.style.color = "red";
//x.style.color = "red";  //if we want to change color of whole list
console.log(x.children);
x.children[0].innerHTML = "Hello"; //change Item1=Hello
x.children[0].style.color = "green"; //change Item1 color="green"
x.children[1].style.color = "red"; //change Item2 color="red"
