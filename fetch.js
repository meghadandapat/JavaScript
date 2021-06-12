//response is a object created by fetch
fetch("dummyapis/names.json")
  .then((response) => {
    console.log("resolved", response);
    return response.json(); //returns a promise
  })
  .then((data) => {
    console.log(data); //here we have access to actual data
  })
  .catch((err) => {
    console.log("rejected", err);
  });

//The request isonly rejected in case of a network error
//fetch works in a way that the resource will be resolvedeven if the status is 404


//******Async and wait********//
/*const asyncFunction = async () => {
    async function always returns a promise
    regardless of what is present inside it
}*/

//asyncawait make promise chaining extremely readable


const getContacts = async () => {
    const response = await fetch('dummyapis/contacts.json');
    //since fetch does not reject a request even in case of problemetic api endpoints we have to handle it explicitly
    if (response.status !== 200) {
        //custom error, this will now be set equal to err.message in catch method
        throw new Error('cannot fetch the data');
  }
    const data = await response.json();
    return data;
};
//await keyword stalls js to assign the value until the promise has been resolved

//getcontacts is an async function so we will get a promise in return.
//to access the actual data we neee to use then and catch
getContacts().then(data => console.log('resolved:', data))
.catch(err => console.log('rejected:', err.message)) 
