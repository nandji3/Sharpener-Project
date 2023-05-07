
const myForm = document.getElementById("my-form");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMobile = document.getElementById("mobile");
const button = document.getElementById("button");  //submit button
const tableBody = document.getElementById("data-output");


function getItem() {
  axios.get("https://crudcrud.com/api/a98a01760cdb45e3bfa5069101bf1d67/appointmentData")
    .then((resposne) => {
      showUserOnScreen(resposne.data);
    })
    .catch((error) => {
      console.log(error);
    })
}
getItem();


let newID = -1;
/*for data editing(update) or newData addting purpose --at on same button which is submit
if (newID = -1) ---> add new data when click on submit 
if (newID = other) ---> update edited data when click on submit*/
myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  //  console.log(inputName.value + "  " + inputEmail.value + "  " + inputMobile.value);
  const obj = {
    name: inputName.value,
    email: inputEmail.value,
    mobile: inputMobile.value
  }

  if (newID === -1) {
    axios.post("https://crudcrud.com/api/a98a01760cdb45e3bfa5069101bf1d67/appointmentData", obj)
      .then((resposne) => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  }
  else {
    axios.put("https://crudcrud.com/api/a98a01760cdb45e3bfa5069101bf1d67/appointmentData/" + newID, obj)
      .then((resposne) => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  }
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


function editElement(id) {
  console.log(id);
  axios.get("https://crudcrud.com/api/a98a01760cdb45e3bfa5069101bf1d67/appointmentData/" + id)
    .then((resposne) => {
      let editableData = resposne.data;

      inputName.value = editableData.name;
      inputEmail.value = editableData.email;
      inputMobile.value = editableData.mobile;

      newID = id;
      //location.reload();
    })
    .catch((error) => {
      console.log(error);
    })
}


function deleteElement(id) {
  axios.delete("https://crudcrud.com/api/a98a01760cdb45e3bfa5069101bf1d67/appointmentData/" + id)

    .then((resposne) => {
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    })
}