//*************Document Object Model*********
/* 1. Tree of nodes/elements created by browser
   2. Js can be used to manupulate to the DOM
   3. Object Oriented Reperesentation */

   console.dir(document); 
   console.log(document.domain);
   console.log(document.url);
   console.log(document.title);
   document.title = "new title";
   console.log(document.doctype);
   console.log(document.head);
   console.log(document.body);
   console.log(document.all) //html collection of everything in dom
   //indexing can be used in collection similar to arrays
   document.all[10].textContent = "Hello"; //not the preferred way of selecting
   console.log(document.forms);  //returns collections of forms
   console.log(document.forms[0]);
   console.log(document.links); //collection of links
   console.log(document.images); //collection of images 


//************SELECTORS**************

//GetElementById
//console.log(document.getElementById('header-title'));
var myHeaderTitle = document.getElementById('header-title');
console.log(myHeaderTitle);
// myHeader.innerText = 'Hey! There';
// myHeader.textContent = 'See ya letter';
// myHeader.innerHTML = '<h3>I am inner HTML</h3>';
var myHeader = document.getElementById('main-header');
myHeader.style.borderBottom = 'solid 4px black';
myHeader.style.borderTop = 'solid 4px white';

//GetElementsByClassName
var listItems = document.getElementsByClassName('list-group-item');
console.log(listItems);
listItems[0].textContent = 'Item 1 changed';
listItems[0].style.backgroundColor = 'yellow';
listItems[0].style.fontWeight = 'bolder';

//listItems.style.fontSize ='20px'; throws an error since one particular element has not been selected
//So when we need to change property of all elemets of a particular class we have to loop through the collection
for(var i = 0; i< listItems.length; i++){
   listItems[i].style.fontSize = '20px';
}

//GetElementsByTagName
//works in the same way as classes
var listTags = document.getElementsByTagName('li');
console.log(listTags);
listTags[1].textContent = 'Item 2 changed';
listTags[1].style.backgroundColor = 'yellow';
listTags[1].style.fontWeight = 'bolder';
//Iterating through all elements using tags
for(var i = 0; i< listTags.length; i++){
   listTags[i].style.color = 'red';
}

//QUERYSELECTOR
//selectors works identical to css
var header = document.querySelector('#header-title');
header.style.color = 'black';

var input = document.querySelector('input'); //only first input will be selected by default
input.value ='enter'; 

var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';

var item = document.querySelector('.list-group-item');
item.style.color = 'blue';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.textContent = 'I have been changed using query selector';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.textContent = 'I have been changed using query selector';

var titles = document.querySelectorAll('.title'); //returns NodeList
//All array operations can be performed in NodeList
console.log(titles);
console.log(titles[0]);
titles[0].textContent = 'Hey There';

