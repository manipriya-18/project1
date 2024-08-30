//declaring a variable
let x=5;
console.log(x);
//declaring a string
const y="Hello i am priya"
console.log(y);

//boolean 
const isActive=true
console.log(isActive)

//undefined as not initialized with any value
let z;
console.log(z);

//object having name : value pair
let person={"name":"priya","age":20};
console.log(person);

//Array
let numbers=[1,3,5,2,7]
console.log(numbers)

//functions in javascript
function great(){
    console.log("Hello!")
}
great();
//function with parameter
function hello(name){
    console.log(name)
}
hello("priya");

//function with multiple parameters
function userdata(name,age,address){
    console.log("name:"+name)
    console.log("age:"+age)
    console.log("address:"+address)
}
userdata("priya",20,"Gudivada");

//NOTE:functions are designed to perform specific tasks
// it is reusable place of code, means we can use/call the function

// function expression-->assigning a function to a variable
const  showDetails=function(){
    console.log("user details")
}
showDetails();

//Arrow function
const display=()=>{
    console.log("Arrow function")
}
//calling arrow function
display();

