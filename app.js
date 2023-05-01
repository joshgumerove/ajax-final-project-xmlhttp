let para = document.querySelector("p");
let table = document.getElementById("tableResults");
let getButton = document.getElementById("get");

const SERVER_URL = "http://localhost:3006/api";

getButton.addEventListener("click", () => {
  fetchDogs();
  para.className = "get";
  para.textContent = "GET request was successful";
});

const fetchDogs = () => {
  let url = `${SERVER_URL}/dogs`;
  let method = "GET";

  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = xhr.response;
      let dogs = JSON.parse(data); // converts JSON object to JS object

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
    } else {
      throw new Error("GET request did not succeed");
    }
  };
  xhr.send();
};
