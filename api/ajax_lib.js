function AjaxLib() {
  this.xhr = new XMLHttpRequest();

  // GET request

  this.get = (url, callback) => {
    // set up AJAX object / engine
    this.xhr.open("GET", url);

    // define AJAX callback
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        let data = this.xhr.response;
        let dogs = JSON.parse(data);
        callback(null, dogs);
      } else {
        callback("Error has occured with a GET request");
      }
    };
    this.xhr.send();
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
}

export { AjaxLib };
