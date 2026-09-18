// This is a single line comment and is ignored by the browser 

/* 
This is a multi-line comment 
*/

console.log("Name: Adau Mawein, 16")       // display value to the console
console.warn("you gotta be careful dude")
console.error("btw this means u have error")

//Write a script that logs ur name, age
// and customized warning and error messages 

//syntax error=typing error


//String (spoken words)
console.log("10")
console.log("Portland High School")

//Numbers
console.log(10.54)
console.log(10)

//Boolean (true or false)
console.log(true)
console.log(false)

// checking data-types using "typeof" property
console.log(typeof 10.5)
console.log(typeof 10)
console.log(typeof "hello")

// variables are used to store values for later use
// must choose "let" (the value may change) 
// or "const" (the value will remain the same)

 const schoolName = "Portland High School"
 let middleSchool = "Lyman Moore MS"
 console.log(schoolName)
 console.log(middleSchool)


middleSchool = "Lyman Moore Middle School"


 console.log(schoolName)
 console.log(middleSchool)


 // Interactive User Input

 //alert(message) --> creates a popup window with message 
// alert("wassup")

// const response = input(message). --> creates a popup with message and entry widget 

const userName = prompt("whats ur name?") 
const favFood = prompt("whats ur fav food?") 
    
console.log("--- User Profile ---")
console.log("Name: ", userName)
console.log("Favorite Food: ", favFood)
alert("Thanks " + userName + ".")


