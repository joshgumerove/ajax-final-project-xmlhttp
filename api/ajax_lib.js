function AjaxLib() {
  this.get = (url, callback) => {
    fetch(url)
      .then((data) => data.json())
      .then((result) => callback(result))
      .catch((err) => console.log("there has been an error: ", err));
  };

  this.post = (url, dog, callback) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dog), // cannot send raw JavaScript: convert to JSON
    })
      .then((resp) => resp.json())
      .then((message) => callback(message))
      .catch((err) => console.log("error making POST request: ", err));
  };

  this.put = (url, updatedObject, callback) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedObject),
    })
      .then((resp) => resp.json())
      .then((message) => callback(message))
      .catch((err) => console.log("PUT request error: ", err));
  };

  this.delete = (url, callback) => {
    fetch(url, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((message) => callback(message))
      .catch((err) => console.log("DELETE request error: ", err));
  };
}

export { AjaxLib };
