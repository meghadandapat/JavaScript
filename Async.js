//async code is non-blocking code
//starts now.....finishes later

//HTTP requests are made to get data from another server
//We make request to API endpoints
//Most APIs return data in JSON format
const getTodos = (callback) => {
  const request = new XMLHttpRequest(); //request object

  //we can track the progress of a request using EventListener. A specific event called readystatechange
  //This fires every time there is a state change in request
  // 4 states:
  // open -> 1
  // send -> 2
  // loading -> 3
  // done -> 4
  request.addEventListener("readystatechange", () => {
    //console.log(request, request.readyState);

    //checking only the state is not sufficient since an inavalid api would also go through all four stages
    //so we need to check the status of http response as well
    if (request.readyState === 4 && request.status == 200) {
      //   console.log(request.responseText);
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      //   console.log("couldn't fetch the data");
      callback("couldn't fetch the data", undefined);
    }
  });

  //HTTP response Status Codes:
  /* Informational responses (100–199)
    Successful responses (200–299)
    Redirects (300–399)
    Client errors (400–499)
    Server errors (500–599) */

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); //sets up the request
  request.send(); //sends request
};

//To Check that HTTP request are async
console.log("statement 1 printed");
console.log("statement 2 printed");
getTodos((err, data) => {
  console.log("callback fired!");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log("statement 3 also printed because async code is  non-blocking");

//when we need to make http requests in a particular order for rg when we need data from one api to make requests to another api then we must know when is the former requet completed.
/* doSomething(firstResource, (err, data) => {
  console.log(data);
  doSomething(secondResource, (err, data) => {
    console.log(data);
    doSomething(ThirdResource, (err, data) => {
      console.log(data);
    });
  });
}); */

//nesting allbacks result in unmaintainable code
//This is callback hell
//To prevent this chaining of promises is prefered

/* var getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    resolve("some data");
    // reject("some error");
  });
};
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  }); */
