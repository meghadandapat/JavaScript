/* 1. High Level Lang
   2. Interpreted lang (no compiler required)
   3. Multi-Paradigm (OOP, Functional, etc) */ 


//**********Variables*********
//think of variable as a container that stores a value in the memory
//IMP: In actuality the variable points to a memory address, which then holds a value
//variable names in JavaScript follows camelCase Convention

//identifiers are names of variables/classes/funtions
/* Few Naming Conventions:
1. Must be Unique 
2. Can begin with either alphabet,$ or _
3. Cannot be a JS keyword */

//var, let, const can be used to assign variables in js
//var is globally scoped (when not written inside a function) hence less preferred as it can cause conflicts

//When JavaScript variables are declared, they have an initial value of undefined.
var myVar; //declaration of variable, myVar is undefined

//Mathematical operation on an undefined variable will give result as NaN 
myVar = myVar + 4 //NAN(Not A Number)

//Concatenating a string with an undefined variable, will result in a literal string of "undefined".
myVar = myVar + "hello" //undefined

// let and const were added in ES-6 or ES 2015. They have block scope

let marks=90;
marks=31;
console.log(marks);
//let can be reassigned but const cannot
//always use const unless you know you are going to reassign. Makes your code robust 
//for eg a score in game should use let as the value has to be reassigned with time as per condition


//***********Operators in JS************

/* 1. Arithmetic Operator +, -, *, /, **, %, ++, --, %
NOTE: x ** y produces the same result as Math.pow(x,y)
NOTE: % IS REMAINDER OPERATOR. IT IS NOT MODULUS OPERATOR (Modulus works differently with negative numbers)
   2. Assignment Operators =, +=, *=, -=, /=, %=, **=  
NOTE: FIRST RIGHT SIDE IS CALCULATED COMPLETELY AND THEN ASSIGNED TO THE VARIABLE IN LEFT
   3. Type Operators typeof, instanceof */  
var check = "hello";
console.log(typeof check); //typeof returns the data type
/* 4. Comparison Operators ==, ===, >, <,  >=, <=, !=, !==, ?
NOTE: They return a boolean true or false value. 
NOTE: All comparison operators accept === and !== will perform type conversion while comparing and then evaluate the values. */
console.log(10 <= '50') //true
console.log(30 > '5'); //true 
console.log(3 == '3'); //true
console.log(3 === '3'); //false 
//The strict equality operator will compare both the data type and value , without converting one type to the other.
/* 5. Logical Operators &&, ||, !
   6. Bitwise Operators &, |, ^, ~, <<, >>, >>>
NOTE:In Js, a number is stored as a 64-bit floating-point number
But the bit-wise operation is performed on a 32-bit binary number
i.e. to perform a bit-operation Js converts the number into a 32-bit binary number (signed) and perform the operation and convert back the result to a 64-bit number. */

//If you add a number and a string, the result will be a string!
var v = "45" + 9; //NOTE: WE DO NOT GET ANY ERROR HERE
console.log(v); //459
var v1 = "Hi" + 5;
console.log(v1); //Hi5


//*********** Data Types**********
//JavaScript is dynamically typed language
//This means data types get determined automatically at run-time 
//It isn't necessary to declare variable data types

//PRIMITIVE DATA TYPES is a single simple data value with no additional properties and methods
//String, Numbers, Boolean, null, undefined, symbol
//They are assigned to memory directly

//const isthisvalid=hello;  This will give error, as "" or '' is absent
const myname='megha';//String
const age=19;//number
const sgpa=9.1;//number
//Note: In js there is no long int float etc. All are number
const iscool=true;//boolean, putting true between '' will obvio make it a string
const x=null;//object is returned by typeof method but its a bogus value. Actually it should be null
const y = undefined;//undefined
let z; //undefined

//************Strings*************
//Series of zero or more characters enclosed in single or double quotes. 
//Unlike some other programming languages, single and double quotes work the same in JavaScript.

goodStr = 'Jake asks Amy, "Hey, let\'s go on an adventure?"'; 
console.log(goodStr);
//badStr = 'Finn responds, "Let's go!"'; // Throws an error
// backslash \ can be used as an escape character
// uses of backslash are: \' \" \t \\ \n \f \b \r
var myStr= "FirstLine \n\t\\SecondLine \nThirdLine"; 
console.log(myStr);


//concatenation
console.log("My name is "+myname+" and I am "+age);
//ES6 template strings or template literals
console.log(`My name is ${myname} and I am ${age}`);
const hello = `My name is ${myname} and I am ${age}`;
console.log(hello);

//String Methods and properies
const s="hello world";
console.log(s.length); //property does not have paranthesis
console.log(s[2]); //0 based inexing is followed
//NOTE: STRING VALUES ARE IMMUTABLE ie individual characters cannot be changed using indexing
// s[2] = "H" will throw error
console.log(s.toUpperCase())//method 
console.log(s.substring(0,5)); //upper bound is exclusive
console.log(s.substring(0,5).toUpperCase());//chaning of methods
console.log(s.split(''))
const s1="shreya, megha, esha, shweta";
console.log(s1.split(", "))


//NON PRIMITIVE or COMPLEX DATA TYPES
//Objects such as functions and arrays 
//They are mutable
//stored in heap

//**************Arrays************
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
console.log(fruits[1]); //accessing elements using zero based indexing
fruits[3]='grapes'// array elements are mutable unlike strings
/*note that even if array is const type the individual elements can be reassigned its value. But complete fruits array cannot be*/
console.log(fruits);

//******commonly used Array methods******
fruits.push('mango' ,'kiwi');//push means to append
//NOTE: More than one elements can be appended
console.log(fruits);
fruits.unshift('strawberries');//unshift means to add at beginning of array
fruits.pop();//removes the last element from an array and returns that element.
fruits.shift(); //removes first element and returns it
console.log(fruits);
console.log(Array.isArray(fruits));//check if a variable is array or not
console.log(fruits.indexOf('oranges'));//index of certain value

//Multi-dimensional Arrays or nested arrray are arrays within an array
const myArray = [["hello", 9], "ghagd",[true, false, 8]];
console.log(myArray);
//Accessing Multi-dimensional arrays using Indexes
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
  console.log(arr[3]); // equals [[10,11,12], 13, 14]
  console.log(arr[3][0]); // equals [10,11,12]
  console.log(arr[3][0][1]); // equals 11
  console.log(arr.push([55,89, 44],11,22));

//********Object Literals **********

//similar to DICTIONARY in Python
//key value pair in python
//here, properties and data
//DIFFERENCE: Python keys are needed to be written as strings (or ints or floats or whatever)
//here the keys can be non-string as well. js will automatically typecast as strings
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
};
console.log(person);

//***********Accessing property of object using dot operator**********
//only possible when property name of an object is a single word with no space
//Syntax: objectName.property
console.log(person.firstName, person.lastName) ;
console.log(person.hobbies[2]);
console.log(person.address.state);

//adding properties or modifying existing properties(if already exits)
person.email ='megha13dandapat@gmail.com';
console.log(person);

//deleting properties
delete person.firstName;
console.log(person);

//**********destructuring(ES-6)*********
/* expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables*/
//firstName becomes a variable here
const {firstName, lastName} = person;
console.log(firstName)

const {address: {city}}=person;
console.log(city);

//**********Access property of object using bracket notation*************
//can be used when property name has space as well as when it doesn't
//Used when property name is stored in a variable. 
//Also, used when name is created dynamically during execution For eg. Function can return the property name which can be stored in variable
//Syntax: objectName["property"]
//Syntax: objectName[variable]         
var myObj = {
    "Space Name": "Hello",
    "More Space": "I am",
    "NoSpace": "Megha"
  };
  var secondProperty = "More Space";
  console.log(myObj["Space Name"]); // Hello
  console.log(myObj[secondProperty]); // I am
  console.log(myObj["NoSpace"]);    // Megha
// NOTE: property names with spaces in them MUST be in quotes (single or double).

myObj["Space Name"] = "Hyy";  //Modifying using []
delete myObj["NoSpace"];    //deleteing using []
console.log(myObj);
console.log(myObj.hasOwnProperty("NoSpace")); //checking if property is present, returns boolean value

 
//**********Functions*********
//Reusable pieces of code

function addNums(num1 = 1, num2 = 5){ //num1 and num2 are PARAMETERS with default values
    return num1 + num2;
}
//NOTE: Parameters are variables that act as placeholders for the values that are to be input while calling
console.log(addNums()); //calling or invoking of function
console.log(addNums(7,2));  //actual values of parameters are called ARGUMENTS


//******Scope******
//scope refers to the visibility of variables
//Variables which are defined outside of a function block have Global scope.
//Variables which are used without the var keyword are automatically created in the global scope. This can create unintended consequences
//Variables which are declared within a function, as well as the function parameters have local scope
//When local and gloabl variable have same name local will take precedence

//************ Arrow Functions(ES-6)********
//return keyword is not used 
//incase of single parameter no paranthesis is needed
//incase function body has a single statement { } is not reqired  
const subNums = (num1 = 1, num2 = 5) => num1-num2;
console.log(subNums(4,1));

//*********Conditionals*********

//if statement
const c = '10';
const d = 4;

if(c == 10){
    console.log('c is equal to 10');
}

//if-else ladder
//as soon as one block is executed below condition won't be checked   

if(c === 10 || d>10){     
    console.log('Either c is 10 or d is less than 10 or both');
}
else if(c === 10 && d<10){   
    console.log('c is 10 and d is less than 10');
}
else if(c === '10'){
    console.log('c is deeply equal to 10');
}
else{
    console.log('None of the above conditions satisfied')
}

//NOTE: SINCE WE ARE USING RETURN IN EACH BLOCK THUS IT WILL GIVE SAME OUTPUT AS AN IF-ELSE LADDER 
//MEANING, FUNCTION EXECUTION STOPS AFTER RETURNING A VALUE HENCE ONLY ONE OF THESE BLOCKS WILL BE EXECUTED
//If we would have used console.log instead of return then there would have been a possibility of multiple block getting executed 
function testGreaterOrEqual(val) {
    if (val>=20) {
      return "20 or Over";
    }
  
    if (val>=10) { 
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  console.log(testGreaterOrEqual(10));

//Ternary operator
//shorthand for if else
// ? corresponds to if and : corresponds to else
const p = 10;
const color = p>10 ? 'red' //if
    : 'blue'; //else
console.log(color); //blue

//Multiple Ternary operators
//alternative for elseif ladder
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal"  //if
      : (a > b) ? "a is greater" // else if
      : "b is greater"; // else
  }
console.log(findGreaterOrEqual(8, 4));

//Switch case
//use switch when you have MANY option to choose from
//Cases are compared using === operator
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
val = 3;
//multiple input single output
switch(val) {
  case 1:
  case 2:
  case 3:
   console.log( "1, 2, or 3");
    break;
  case 4:
    console.log( "4 alone");
}

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
let varWhile=0;
while(varWhile<10){
    console.log(`I am ${varWhile} using WHILE`);
    varWhile++;
}

//do-while
//will execute at least once irrespetive of condition
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5)

//********Arrays of Objects**********
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
//looping throgh multi-dimensional array
var arr = [
    [1,2], [3,4], [5,9,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
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


//*********OOP*******

//******Constructor Functions and Prototypes*****
 function Profile(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob); //Date object

}
Profile.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Profile.prototype.getFullName = function(){
    return `${this.firstname} ${this.lastname}`;
}
//instantiate objects
//multiple objects having the same properties can be instantiated
const profile1 = new Profile('Megha', 'Dandapat', '6-7-2001');
const profile2 = new Profile('Sayak', 'Dandapat', '8-12-2008');
console.log(profile1);
console.log(profile2); 
console.log(profile1.getBirthYear());
console.log(profile1.getFullName());


//Doing the same thing as above using Es-6 Classes
//note that since class name is an identifer we have to change it to something else from Profile
class ProfileClass{
    constructor(firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob); //Date object
    
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName = function(){
        return `${this.firstname} ${this.lastname}`;
    }
    }
    const profile3 = new ProfileClass('Megha', 'Dandapat', '6-7-2001');
    const profile4 = new ProfileClass('Sayak', 'Dandapat', '8-12-2008');
    console.log(profile3);
    console.log(profile4); 
    console.log(profile3.getBirthYear());
    console.log(profile3.getFullName());

    