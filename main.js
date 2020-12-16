// alert('Helllo WOrld');
console.log('Hello World');

//**********variables*********

//think of variable as a container that stores a value in the memory
//identifiers are variables name
/* Few Naming Conventions:
1. Must be Unique name
2. Can begin with either alphabet,$ or _
3. Cannot be a JS keyword */

//var, let, const can be used to assign variables in js
//var is globally scoped hence less preferred as it can cause conflicts
//let and const were added in ES-6 or ES 2015. They have block scope

let marks=90;
marks=31;
console.log(marks);
//let can be reassigned but const cannot
//always use const unless you know you are going to reassign. It makes robust code
//for eg a score in game should use let as the value has to be reassigned with time as per condition


//*********** data types**********


//PRIMITIVE DATA TYPES is a single simple data value with no additional properties and methods
//String, Numbers, Boolean, null, undefined, symbol
//They are assigned to memory directly
//Compared by value(Deep equals comparison ===)

//const isthisvalid=hello; //error, as "" or '' is absent
const myname='megha';//String
const age=19;//number
const iscool=true;//boolean, putting this between '' will obvio make it a string
const score=4.5;//number can be float integer
const x=null;//object is returned by typeof method but its a bogus value. Actually it should have been null
const y = undefined;//undefined
let z; //undefined

//typeof returns the data type
console.log(typeof myname)

//concatenation
console.log("My name is "+myname+" and I am "+age);
//ES6 template strings or template literals
console.log(`My name is ${myname} and I am ${age}`);
const hello = `My name is ${myname} and I am ${age}`;
console.log(hello);

//String Methods and properies
const s="hello world";
console.log(s.length); //property does not have paranthesis
console.log(s.toUpperCase())//method 
console.log(s.substring(0,5)); //upper bound is exclusive
console.log(s.substring(0,5).toUpperCase());//chaning of methods
console.log(s.split(''))
const s1="shreya, megha, esha, shweta";
console.log(s1.split(", "))

//NON PRIMITIVE or COMPLEX DATA TYPES
//Objects such as functions and arrays 
//They are mutable
//Compared by Reference(Deep equals comparison ===)


//**************Arrays**********
//Arrays are variables that hold multiple values
//supports multiple datatypes within same array
//JS is not statically typed but TS is
//Statically-typed: if the type of a variable is known at compile-time instead of at run-time 

//created using constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

//created without constructor(common way of doing)
const fruits=['apples', 'oranges', 67, '9.2', true];

console.log(fruits);
console.log(fruits[1]); //accessing elements note that indexing starts from 0
fruits[3]='grapes'//changing values of array elements ie arays are mutable
/*note that even if array is const type the individual elements can be reassigned its value. But complete fruits array cannot be*/
console.log(fruits);

//commonly used methods
fruits.push('mango');//push means to add at end of array
console.log(fruits);
fruits.unshift('strawberries');//unshift means to add at beginning of array
fruits.pop();//delete from end
console.log(fruits);
console.log(Array.isArray(fruits));//check if a variable is array or not
console.log(fruits.indexOf('oranges'));//index of certain value

//********Object Literals **********

//person is an object
const person = {
    firstName:"Megha",
    lastName:"Dandapat",
    age:19,
    hobbies: ['music', 'books', 'movies'],
    //embedded object or object within an object
    address:{
        city: "lnl",
        district:"pune",
        state:"MH"
    }    
}
console.log(person);
console.log(person.firstName, person.lastName)
console.log(person.hobbies[2]) 
console.log(person.address.state);

//destructuring(ES-6)
/* expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables*/
//firstName becomes a variable here
const {firstName, lastName} = person;
console.log(firstName)

const {address: {city}}=person;
console.log(city);

//adding properties 
person.email='megha13dandapat@gmail.com'
console.log(person)

//arrays of objects
const todos=[
    {
        id:1,
        text: 'Wake Up',
        status: 'done'
    },
    {
        id:2,
        text: 'Class',
        status: 'pending'
    },
    {
        id:3,
        text: 'Sleep',
        status: 'done'
    }
];
console.log(todos);
//select from array and then select from object
console.log(todos[2].text)  //Sleep 

//JSON String converter used to send data to server
const todosJSON = JSON.stringify(todos);
console.log(todosJSON); 


//*************LOOPS*************

//For Loop
//step1: initialize i
//step2: check condition and execute
//step3: increment i
//step4: go to step 2
for(let i=0; i<10; i++){
    console.log(`I am ${i} using FOR`); // 1 to 9
} 

//While Loop
let i=0;
while(i<10){
console.log(`I am ${i} using WHILE`);
i++;
}

//****************Looping through Arrays*****************

//using FOR LOOP
for(let i=0; i<todos.length; i++){
    console.log(todos[i]); 
} 
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text); 
} 

// using FOR OF LOOP
for(let mytodo of todos){
    console.log(mytodo);
}
for(let mystatus of todos){
    console.log(mystatus.status);
}

//High Order Array Methods- preferred way for iterations

//forEach
todos.forEach(function(mytodo){
console.log(mytodo.text);

});

//map
//This returns an array
const todoText= todos.map(function(mytodo){
    return mytodo.text; 
    });
    console.log(todoText);   

//filter
 const todoStatus = todos.filter(function(mytodo){
     return mytodo.status=='done';
 });
 console.log(todoStatus);

 //chaining of higher order array methods
 const todoStatusText = todos.filter(function(mytodo){
    return mytodo.status=='done';
}).map(function(mytodo){
    return mytodo.text;
});
console.log(todoStatusText);

//************Conditionals*************
const c = '10';
const d = 4;

//checks only value hence this will be true
if(c == 10){
    console.log('c is eual to 10');
}


//if-else if-else statements
//as soon as one block is executed below condition won't be checked   

if(c === 10 || d>10){ 
    //OR operator     
    console.log('Either c is 10 or d is less than 10 or both');
}
else if(c === 10 && d<10){
    //AND operator     
    console.log('c is 10 and d is less than 10');

}
else if(c === '10'){
//check both value and data type 
//this will be true since both string type and value 10 matchess  
    console.log('c is deeply equal to 10');
}
else{
    console.log('None of the above conditions satisfied')
}

//Ternary operator
//shorthand for if else
// ? corresponds to if and : corresponds to else
const p = 10;
const color = p>10 ? 'red' : 'blue';
console.log(color);

//switch case
switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('neither blue nor red');
        break;
}
    
//***************Functions**************

function addNums(num1 = 1, num2 = 5){
    return num1 + num2;
}

console.log(addNums());
console.log(addNums(7,2));  

//************ Arrow Functions(ES-6)********
//return keyword is not used 
//incase of single parameter no paranthesis is needed
//incase function body has a single statement { } is not reqired  
const subNums = (num1 = 1, num2 = 5) => num1-num2;
console.log(subNums(4,1));


//*********OOP*******

 function Profile(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
}
//instantiate objects
//multiple objects having the same properties can be instantiated
const profile1 = new Profile('Megha', 'Dandapat', '6-7-2001');
const profile1 = new Profile('Sayak', 'Dandapat', '8-12-2008');
console.log(profile1);
console.log(profile2); 