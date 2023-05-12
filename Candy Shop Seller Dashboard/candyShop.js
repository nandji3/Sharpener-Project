
const myForm = document.getElementById("my-form");
const candyName = document.getElementById("name");
const candyDescription = document.getElementById("description");
const candyPrice = document.getElementById("price");
const candyQuantity = document.getElementById("qty");
const addItemBtn = document.getElementById("button");  //submit button
const tableBody = document.getElementById("add-items");
const showError = document.getElementById("error");


function getItem() {
    axios.get("https://crudcrud.com/api/4c8b4f6735f9436080915e4c8668ff59/availableCandyOnShop")
        .then((resposne) => {
            showUserOnScreen(resposne.data);
        })
        .catch((error) => {
            console.log(error);
        })
}
getItem();


myForm.addEventListener("submit", addItem);
function addItem(e) {
    e.preventDefault();

    const obj = {
        name: candyName.value,
        description: candyDescription.value,
        price: candyPrice.value,
        quantity: candyQuantity.value
    }
    axios.post("https://crudcrud.com/api/4c8b4f6735f9436080915e4c8668ff59/availableCandyOnShop", obj)
        .then((resposne) => {
            console.log(resposne)
            location.reload();
        })
        .catch((error) => {
            console.log(error);
        })

}


function showUserOnScreen(responseData) {
    tableData = "";
    responseData.forEach((object) => {
        tableData += `
      <tr>
          <td>${object.name}</td>
          <td>${object.description}</td>
          <td>${object.price}</td>
          <td>${object.quantity}</td>
          <td>
            <input type="button" onclick="updateQuantity('${object._id}',1)" class="btn-primary" "id="BuyOne" value="BuyOne"> 
            <input type="button" onclick="updateQuantity('${object._id}',2)" class="btn-primary" "id="BuyOne" value="BuyTwo"> 
            <input type="button" onclick="updateQuantity('${object._id}',3)" class="btn-primary" "id="BuyOne" value="BuyThree"> 
          </td>
      </tr>`
    })
    tableBody.innerHTML = tableData;
}


function updateQuantity(id, qty) {
    axios.get("https://crudcrud.com/api/4c8b4f6735f9436080915e4c8668ff59/availableCandyOnShop/" + id)
        .then((resposne) => {

            let newQty = (resposne.data.quantity);

            if (newQty !== 0) {
                let newObj = {
                    name: resposne.data.name,
                    description: resposne.data.description,
                    price: resposne.data.price,
                    quantity: resposne.data.quantity - qty
                }
                axios.put("https://crudcrud.com/api/4c8b4f6735f9436080915e4c8668ff59/availableCandyOnShop/" + id, newObj).then((resposne) => location.reload())
            }
            else {
                showError.innerHTML = `Qty. is not available`
            }

        })
        .catch((error) => {
            console.log(error);
        })
}
