function AjaxLib() {
  this.xhr = new XMLHttpRequest();
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
}

export { AjaxLib };
