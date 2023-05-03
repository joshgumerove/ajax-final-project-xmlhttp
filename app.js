import { AjaxLib } from "./api/ajax_lib.js";

let para = document.querySelector("p");
let table = document.getElementById("tableResults");
let getButton = document.getElementById("get");
let postButton = document.getElementById("post");
let putButton = document.getElementById("put");
let deleteButton = document.getElementById("delete");

const SERVER_URL = "http://localhost:3006/api";

getButton.addEventListener("click", () => {
  fetchDogs();
  para.className = "get";
  para.textContent = "GET request was successful";
});

const fetchDogs = () => {
  let url = `${SERVER_URL}/dogs`;
  let xhr = new AjaxLib(); // note: this is a constructor function

  xhr.get(url, (err, dogs) => {
    if (err) throw err;

    let tableRows = "";
    for (const dog of dogs) {
      tableRows += `
     <tr>
          <td>${dog.id}</td>
          <td>${dog.name}</td>
          <td>${dog.age}</td>
          <td>${dog.gender}</td>
          <td>${dog.notes}</td>
     </tr>
     `;
    }
    table.innerHTML = tableRows;
  });
};

postButton.addEventListener("click", () => {
  let dog = {
    name: "Gumerove",
    age: 25,
    gender: "Male",
    notes: "computer programmer",
  };

  let xhr = new AjaxLib();
  let url = `${SERVER_URL}/dogs`;

  xhr.post(url, dog, (responseData) => {
    fetchDogs();
    para.className = "post";
    para.textContent = responseData.message;
  });
});

putButton.addEventListener("click", () => {
  let updatedDog = {
    name: "Proud Mary",
    age: 25,
    gender: "Female",
    notes: "this should update the name in the system",
  };

  let xhr = new AjaxLib();
  let url = `${SERVER_URL}/dogs/1`;

  xhr.put(url, updatedDog, (responseData) => {
    fetchDogs();
    para.className = "put";
    para.textContent = responseData.message;
  });
});

deleteButton.addEventListener("click", () => {
  let xhr = new AjaxLib();
  let url = `${SERVER_URL}/dogs/2`;
  xhr.delete(url, (responseData) => {
    fetchDogs();
    para.className = "delete";
    para.textContent = responseData.message;
  });
});
