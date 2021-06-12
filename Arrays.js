const newArray = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//loop through array using traditional For loop

for(let i=0; i<newArray.length; i++){
    console.log(newArray[i]);
}

//****************HIGHER ORDER FUNCTIONS AND ARRAYS**************//

//For Each
//returns undefined
//Hence cannot be CHAINED further with other methods like map,filter,sort,reduce

newArray.forEach(function(num){
    console.log(num);

});


//Print numbers greater than 21 using bad old For loop
const greaterThan21 = [];
for(let i=0; i<newArray.length; i++){
    if(newArray[i]>21){
        greaterThan21.push(newArray[i]);
    }
}
console.log(greaterThan21);

 //Filter returns a new array after certain condition is true

// const lessThan21 = newArray.filter(function(num){
//     if(num<21){
//         return true;
//     }
// });
const lessThan21 = newArray.filter(
    num => (num<21)
);
console.log(lessThan21);

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];


//filter out all companies whose category is Retail 
  const allRetails = companies.filter(retail=>(retail.category=="Retail"));
  console.log(allRetails); //This will print an array of objects whose category is Retail

//If we are interested in only the names of those objects then loop through array of objects
//   allRetails.forEach(function(myname){
//       console.log(myname.name)
//   });
allRetails.forEach(myname => console.log(myname.name));


//Map Returns an new array
//works like foreach but the elements will be returned in array

// return an array of the values stored in category prperty of each object

// Using normal functions 
// const allCategories = companies.map(function(arrayOfCategory){
//     return arrayOfCategory.category;
// });
// console.log(allCategories);

//using arrow functions
const allCategories = companies.map(arrayOfCategory => arrayOfCategory.category);
console.log(allCategories);

const myArr = companies.map(comp => `${comp.name}: ${comp.start}-${comp.end}`);
console.log(myArr)

const square = newArray.map(num => num**2);
console.log(square);

//chaining of map
const original = newArray.map(num => num**2).map(num => num**0.5);
console.log(original);


//Sort
//sort companies by their start date
const sortedByStart = companies.sort(function(a, b){
    if(a.start > b.start)  //will sort in ascending order of start
        return 1;
    else
        return-1;
});
console.log(sortedByStart);

//using arrow functions
//sort companies by their end date
const sortedByEnd = companies.sort((a,b) => a.end > b.end ? 1:-1);
console.log(sortedByEnd);

const arraySort = newArray.sort((a,b) => a>b ? 1:-1);
console.log(arraySort);

//find
//returns first item of array that matches with the condition
const foundCompany = companies.find(search => search.name === "Company Seven");
console.log(foundCompany);

//includes
//takes a single parameter only and not a function
//returns true or false if item is present in array
const isPresent = newArray.includes(22);
console.log(isPresent);

//some
//returns true and false if ANYONE of the item satisfies given condition
const modernCompany = companies.some(comp => comp.start >= 2000);
const veryModernCompany = companies.some(comp => comp.start >= 2019);
console.log(modernCompany); //True since company eight started in 2011
console.log(veryModernCompany); //false since none of them started in 2019 or later

//every
//returns true and false if ALL of the item satisfies given condition
const oldCompany = companies.every(comp => comp.start <= 2000);
console.log(oldCompany); //False 

//Reduce

//calculate sum of all numbers in new array
//here 0 is starting initial value of our first parameter total
// const arraySum = newArray.reduce(function(total, num){
//     return total+num;
// }, 0);
//using arrow functions
const arraySum = newArray.reduce((total,sum) => total+sum,0);
console.log(arraySum)

//calculate total years in companies using reduce and arrow
const years = companies.reduce((total,comp) => total+(comp.end-comp.start),0);
console.log(years);

//******************Destructuring Arrays*************************//

const alpha = ['A', 'B','C','D','E','F','G'];
const num = [1, 4, 8, 3, 2, 7, 6, 3]; 

//****Typical way of accessing*******//
// console.log(alpha[0]);
// console.log(alpha[1]);

//ES-6
const [a, b, , ...others] = alpha;  //3rd element will be skipped
// putting commas consecutively will skip value at that place
// ... is spread operator 
console.log(a);
console.log(b);
console.log(others);
//spread operator to add two arrays
console.log([...alpha, ...num]);
//Note: Addition of arrays can also be done using concat
console.log(alpha.concat(num));

//*******Destructing when Function return multiple values in an Array*****//
sumAndMultiply = (a,b) => [a+b, a*b];
const [sum, multiply] = sumAndMultiply(6,2);
console.log(sum);
console.log(multiply);

const [add, product, divide="No Division"] = sumAndMultiply(5,2);   //we can give default values as well
console.log(add);
console.log(product);
console.log(divide); //since array in function hs no 3rd value it will print the default value only


//******************Destructurig Objects**********************//
const book1 = {
    bookTitle: "The Da Vinci Code",
    price: 350,
    characters : {
        leadMale:"Robert",
        leadFemale: "Sarah" 
    }
};

const book2 = {
    bookTitle: "Gone Girl",
    characters : {
        leadMale:"Jake",
        leadFemale: "Dua" 
    },
    type: "hardcover",
    status: "To be read"

};

/*Note: 1. In objects destructing do not follow index rule
        2. They follow property rule i.e. propertyName should match with that of object
        3. The order of property which appears in original object do not matter */ 
const {price, bookTitle} = book1;
console.log(price); //350
console.log(bookTitle);

//if we want to use a different variable than original propertyName:
const{price: cost, pages = 673} = book1;   //default falues can be given just like array
console.log(cost); //350
console.log(pages);

//spread operator
//Note that spread operator gives us an new OBJECT itself after deleting required properties and value
//whereas when we use specific propertyName we get only VALUE of that property
const{bookTitle : heading, ...rest} = book2;
console.log(rest);   //an object without the name property and its value

//Destructure Nested Objects
const{characters:{leadFemale}} = book1; 
console.log(leadFemale);

//Combining two objects
const book3 = {...book1, ...book2};  //book2 will override book1 
const book4 = {...book2, ...book1}; //book1 will override book 2
//Override means object1+object2  will be printed and if some properties have same name then value of the rightmost object will be considered
console.log(book3);
console.log(book4);

//Functions and destructuring Objects

//Without Destructuring
function showDetails(demo){
console.log(`Name: ${demo.bookTitle}, price: ${demo.price} `)
}
showDetails(book1);

//Efficient way using Destructuring
function showDetails({bookTitle, price}){
    console.log(`Name: ${bookTitle}, price: ${price} `)
    }
    showDetails(book1);
