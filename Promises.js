const getDummyData = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest(); //request object

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status == 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resource); //sets up the request
    request.send(); //sends request
  });
};


//promises are objects that return a value which you hope to receive in the future
//Anology: receipt is a promise by the restaurant that you will receive your order
//pass a callback function inside Promise

getDummyData("dummyapis/names.json")
  .then((data) => {
    console.log("First promise resolved", data);
    return getDummyData("dummyapis/contacts.json");
  })
  .then((data) => {
    console.log("Second promise resolved", data);
    return getDummyData("dummyapis/address.json");
  })
  .then((data) => {
    console.log("Third promise resolved", data);
  })
  .catch((err) => {
    console.log(err);
  });
