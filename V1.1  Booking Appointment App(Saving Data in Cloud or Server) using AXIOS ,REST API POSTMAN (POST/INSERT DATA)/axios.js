
const myForm = document.getElementById("my-form");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMobile = document.getElementById("mobile");
const button = document.getElementById("button");  //submit button
const tableBody = document.getElementById("data-output");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  //  console.log(inputName.value + "  " + inputEmail.value + "  " + inputMobile.value);
  const obj = {
    name: inputName.value,
    email: inputEmail.value,
    mobile: inputMobile.value
  }

  axios.post("https://crudcrud.com/api/a98a01760cdb45e3bfa5069101bf1d67/appointmentData", obj)
    .then((resposne) => {
      console.log(resposne);
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
        <td>${object.email}</td>
        <td>${object.mobile}</td>
        <td>
          <input type="button" onclick="editElement('${object._id}')" class="btn-primary" "id="edit" value="Edit"> 
          <input type="button" onclick="deleteElement('${object._id}')" class="btn-danger" id="delete" value="Delete"> 
        </td>
    </tr>`
  })
  tableBody.innerHTML = tableData;
}

