function AjaxLib() {
  // GET request

  this.get = (url, callback) => {
    fetch(url)
      .then((data) => data.json())
      .then((result) => callback(result))
      .catch((err) => console.log("there has been an error: ", err));
  };

  // POST request

  this.post = (url, dog, callback) => {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      let data = this.xhr.response;
      let postRequestData = JSON.parse(data);
      callback(postRequestData);
    };

    // with POST request we must pass in data to the send method
    this.xhr.send(JSON.stringify(dog)); // sending raw JSON data to the server
  };

  this.put = (url, updatedDog, callback) => {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      let data = this.xhr.response;
      let putRequestData = JSON.parse(data);
      callback(putRequestData);
    };
    this.xhr.send(JSON.stringify(updatedDog));
  };

  this.delete = (url, callback) => {
    this.xhr.open("DELETE", url);
    this.xhr.onload = () => {
      let data = this.xhr.response;
      let deleteRequestData = JSON.parse(data);
      callback(deleteRequestData);
    };
    this.xhr.send();
  };
}

export { AjaxLib };
