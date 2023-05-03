//TRAVERSING THE DOM

const itemList = document.querySelector("#items");

/*
//"parentNode"

console.log(itemList.parentNode);
itemList.parentNode.style.background = "#d9d9d9";
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);
*/

//"parentElement"

console.log(itemList.parentElement);
/*itemList.parentNode.style.background = "#d9d9d9";
console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);
*/

//"childNodes" -gives NodeList basically as an array  --->better to use "children" property in place of childNode which is similar

console.log(itemList.childNodes); //not prefer
console.log(itemList.children); //so prefer it in-place of childNode
console.log(itemList.children[0]);
itemList.children[0].style.background = "#ffd9cc";
console.log(itemList.children[1]);
itemList.children[1].style.background = "#99c2ff";
console.log(itemList.children[2]);
itemList.children[2].style.background = "#b3ffec";
console.log(itemList.children[3]);
itemList.children[3].style.background = "#d9d9d9";

//firstChild -->gives #text
console.log(itemList.firstChild); //useless not used

//firstElementChild -- gives 1st items from item-group ---> preferd after "children" property
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.color = "red";
itemList.firstElementChild.style.fontWeight = "bold";
itemList.firstElementChild.textContent = "Hello";

//lastChild -->gives #text
console.log(itemList.firstChild); //useless not used

//lastElementChild -- gives last items from item-group---> preferd after "children" property
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.color = "red";
itemList.lastElementChild.style.fontWeight = "bold";
itemList.lastElementChild.textContent = "Hello";

//nextSibling --- gives #text ----//useless not used
console.log(itemList.nextSibling);

//nextElementSibling -- prefered
console.log(itemList.nextElementSibling); //null

//previousSibling --- gives #text ---//useless not used
console.log(itemList.previousSibling);

//nextElementSibling -- prefered
console.log(itemList.previousElementSibling); //<h2 class="title">Items</h2>
itemList.previousElementSibling.style.color = "green";



// <<<--- How to createElement ???? --->>>

//1st create a new div
let newDiv = document.createElement("div");
//console.log(newDiv);

//2nd Add className in new div
newDiv.className = "Hello";

//3rd Add id in new div
newDiv.id = "hello1";

//4th Add Attribute in new div  --SetAttribute
newDiv.setAttribute("title", "Hello Div");
//console.log(newDiv);

//5th create a textNode in new div
let newDivText = document.createTextNode("Hello World");
//console.log(newDivText);

//6th add/append textNode to new div
newDiv.appendChild(newDivText);
console.log(newDiv);

//7th how to insert/display on page using DOM
let container = document.querySelector("header .container"); //parentNode
console.log(container);
let h1 = document.querySelector("header h1");  //childNode or refrenceNode
container.insertBefore(newDiv, h1);
newDiv.style.color = "#ffff00";
newDiv.style.fontWeight = "bold";
newDiv.style.fontSize = "15px";

//OR

let parentNodeh1 = document.querySelector("header .container h1");
//console.log(parentNodeh1.innerHTML);
//parentNodeh1.innerHTML = "<h6>Hello Nand Ji</h6>" + parentNodeh1.innerHTML;

//add element at begining of item1
let parentNode = document.getElementById("items");
//console.log(parentNode.innerHTML);
parentNode.innerHTML = "<li>Hello World</li>" + parentNode.innerHTML;
parentNode.style.color = "blue";
parentNode.style.fontSize = "90%";
parentNode.style.color = "blue";
parentNode.style.fontWeight = "bold";

//OR



/*
//add element at begining of item1
// Create a "li" element: know as parentNode
const newNode = document.createElement("li");
// Create a text node: know as Child node
const textNode = document.createTextNode("Hello World");
// Append text node to "li" element:
newNode.appendChild(textNode);

// Insert before existing child:
const list = document.getElementById("items");
list.insertBefore(newNode, list.children[0]);
newNode.style.color = "blue";
newNode.style.fontSize = "90%";
newNode.style.color = "blue";
newNode.style.fontWeight = "bold";
*/

/*   //add element at last end of list
const node = document.createElement("li");
// Create a text node:
const textnode = document.createTextNode("Hello World");

// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("items").appendChild(node);
*/
//
