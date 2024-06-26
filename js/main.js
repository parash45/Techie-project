// variables and data types: loosely and dynamically typed
// programming involves storage and manipulation

// variables are containers for data, so that we can refer to that data later

// there are certain keywords to declare variables
// empty, var, let, const

// num = 10: always global: not preferred
// var num = 10: is hoisting: all the variables are hoisted to the top of the top
// let num = 10
// const num = 10: cannot be redeclared

// variables must start with a alphabet, or underscore,
// cannot contain special characters
// since space cannot be included, first name is not valid as a variable name
// we use snakeCase to separate words in the variables,
//  first name looks like firstName
// first letter is lowercase, then first letter of every following word is capital
// mySchoolName
// importantFunction

// data types

// number: integer, decimal points: floats, +ve, -ve 
// const age = 35;
// const shoeSize = 31.75;
// const balance = -10;

// console.log(typeof age)

// string: text: inside double quotes, single quotes, backticks ``
// const name = "Rizwan"
// // const lastName = "Ahamad"

// console.log(typeof name)


// boolean: true, false
// const isRaining = false
// const isSunny = true

// null, undefined, NaN
// let myNumber // undefined
// let noOfStudent = parseInt("asdas"); //NaN
// let student = null;
// console.log(noOfStudent)


// Operators
// Arithmetic operators: + - / * % **


// comparison operators < > <= >= == !=
// == no type cheking
// === strict equals

// logical operators: combine comparison operators in a logical manners && || !


// Control Flow

// conditionals: if else, else if


// const age = 17

// if(age >= 18){
//     console.log("Is a voter");
// }else{
//     console.log("Is not a voter")
// }


// const income = 40000
// const expense = 52000

// if(income < expense){
//     console.log("You will get in debt")
// }else{
//     console.log("You are okay")
// }


// if(){

// }else if(){

// }else if(){

// }else if(){

// }else{

// }

// const profession = "engineer"

// if(profession === "teacher"){
//     console.log("You will be teaching");
// }else if(profession === "developer"){
//     console.log("You will be developing applications")
// }else{
//     console.log("We don't know what you will do")
// }




// let age = parseInt(prompt("Enter your age"))
// write a program that logs is a voter if age > 18 else logs is not a voter


// 2. write a program that takes income and expense and logs will be in debt if the income < expense else logs you're okay

// 3. write a prgogram that logs the grade of a student by taking in the percentage, this will utilize multiple else if
// const age = 18;
// if(age >= 18){
//     console.log("log is a voter");

// }else{
//     console.log("log is not a voter");
// }

// let income = parseInt(prompt("Enter your income"))
// let expense = parseInt(prompt("Enter your expense"))
// if(income < expense){
//     console.log("you will in debt")

// }else{
//     console.log("you are not in debt")
// }

// let percentage = parseInt(prompt("Enter your percentage"))
// if(percentage > 90){
//     console.log("A+")
// }else if(percentage > 80){
//     console.log("A")
// }else if(percentage > 70){
//     console.log("B+")
// }else{
//     console.log("Below B+")
// }
 
// let percentageofRam = 87 
// let percentageofLaxman = "87" 
// if (percentageofRam === percentageofLaxman){
//     console.log("Ram and Laxman get same percentage")
// }




// const student = {
//     fullName:"parash thapa",
//     subject:"computer science",
//     ageofRoshan:23,
// };
// console.log(student)
// console.log(typeof student)
// console.log(typeof student["age"])

//  student["fullName"]="Roshan Thapa";
// console.log(student["fullName"]);
// student["ageofRoshan"]=31;
// console.log(student["ageofRoshan"])

// const product = {
//     title: "Ball Pen",
//     price: 205,
//     rating: 4,
//     offer: 5,


// };
// console.log(product)
// console.log(product["title"]+  ' Black')

// const profile = {
//     username: "shradhakhapra",
//     follower:569,
//     following:4,
//     isfollow:false,


// };
// let a = 7;
// let b = 5;
// console.log("a!=b",a!=b)
 
//  let x = 3;
//  let y = 5;
//  console.log("a+b",)
// const fruits = ["Apple" , "Mango" , "Banana"];
// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
// let Grade = prompt("Enter the grade of respective student");
//  if(Grade == A+){
//     console.log("Full scholarship ")
//  }


// switch: check a variable for equality with multiple values

// const profession = "astronaut"

// if(profession === "teacher"){
//     console.log("You will be teaching")
// }else if(profession === "engineer"){
//     console.log("You will be designing the brigdes")
// }

// switch(profession){
//     case "teacher": console.log("You will be teaching"); break;
//     case "engineer": console.log("You will be designing things"); break;
//     case "doctor": console.log("You will be giving medical advice");

//     default: console.log("We don't know what you will do") 
// }

// loops: while

// while(condition){
    // do something
// }

// const workingHours = 40;
// let workedHours = 0;

// while(workedHours < workingHours){
//     console.log("Work for 1 hour")
//     workedHours++;
// }


// let counter = 0;

// while(counter < 100){
//     console.log("did something " + counter + "times")

//     counter++
// }

// x number of times 
// for(let i = 0; i < 100; i++){
//     console.log("did something " + i + "times")
// }



// const randomNumber = Math.floor(Math.random() * 20)
// let userGuess = parseInt(prompt("I have a number in mind, try to guess it"))

// while(userGuess != randomNumber){

//     // conditionally give diffetent message in the prompt instead of always printing try again
//     // if userGuess < randomNumber: your guess is too low
//     // else: your guess is too high
//     if(userGuess < randomNumber){
//         userGuess = parseInt(prompt("your guess is too low"))
//     }else{
//         userGuess = parseInt(prompt("your guess is too high"))
//     }
    
//     // userGuess =  parseInt(prompt("Try again"))
// }



// alert("You won")

// for(let i=0; i < 100; i++){
    // console.log(i)
// }


// function: block of code, that can be reused whenever we want, that takes some input as arguments and returns some value
// const  oldProfession = "teacher"

// // this function takes no arguments
// const giveFeedbackOnProfession = function(){
//     switch(oldProfession){
//         case "teacher": console.log("You will be teaching"); break;
//         case "engineer": console.log("You will be designing things"); break;
//         case "doctor": console.log("You will be giving medical advice");

//         default: console.log("We don't know what you will do") 
//     }
// }

// iceCreamMachine(fruit, milk){

// }

// const giveFeedbackOnSpecificProfession = function(profession){
//     switch(profession){
//         case "teacher": console.log("You will be teaching"); break;
//         case "engineer": console.log("You will be designing things"); break;
//         case "doctor": console.log("You will be giving medical advice");

//         default: console.log("We don't know what you will do") 
//     }
// }

// function call
// giveFeedbackOnProfession()
// giveFeedbackOnSpecificProfession("engineer")

// const areaOfCirlce = function(radius){
//     const area = Math.PI * (radius**2);
//     return area;
// }

// const myArea = areaOfCirlce(10)

// console.log(myArea)

// const add = function(num1, num2){
    // return num1 + num2
// }

// const mySum = add(10,9)

// console.log(mySum)


// const isPrime = function(num){
//     if(num == 1){
//         return false;
//     }

//     if(num == 2){
//         return true;
//     }

//     for(let i=2; i < num; i++ ){
//         if(num % i == 0){
//             return false
//         }
//     }

//     return true;
// }


// const myPrimeNumber = isPrime(6)
// const myPrimeNumber2 = isPrime(11)
// const myPrimeNumber3 = isPrime(78)
// const myPrimeNumber4 = isPrime(6127612)

// console.log(myPrimeNumber)


// make a program that takes two number from the user
// has functions for four basic arithmentic operation of the signature
// (num1, num2) => return result
// perfom all those operations using these functions
// log the result

// const number1FromUser = parseInt(prompt("Enter a number"))
// const number2FromUser = parseInt(prompt("Enter another number"))

// const add = function(num1  , num2){
//     return num1 + num2;
// }
 
// const sub = function( num1, num2){
//     return num1 - num2;
// }
// const multiply = function(num1 ,num2){
//     return num1 * num2;
// }
// const div = function(num1 ,num2){
//     return num1 / num2;
// }

// const addResult = add(number1FromUser, number2FromUser)
// const subResult = sub(number1FromUser, number2FromUser)
// const multiplyResult = multiply(number1FromUser, number2FromUser)
// const divResult = div(number1FromUser, number2FromUser)


// console.log("Add result: ", addResult)

// console.log("Sub result: ", subResult)

// console.log("Multiply result: ", multiplyResult)

// console.log("Div result: ", divResult)
// let totalHoursLeft = 0;
// const workingHours = 40;
// const workedHours = parseInt(prompt("How many hours you have worked ?"))
//  const work = function(hour){
//   for(let i = 0; i <= (workingHours - workedHours); i++){
//     totalHoursLeft +=i; 
    

//   }
//  }
//  const result = work(workedHours)
//  console.log(result)

// arrays
``
// flowers = ["tulip", "sunflower","rose", "dandelion", "marigold"]

// fetch
// const firstFlower = flowers[0]
// const lastFlower = flowers[flowers.length - 1]


// add to array
// add to the end of array
// flowers.push()
// add to the beginnning of array
// flowers.unshift("Hello")


// remove from array
// flowers.pop()

// flowers.splice(start, deleteCount, newElements)

// flowers.splice(flowers.indexOf("sunflower"),1,"New flower")
// flowers.splice(flowers.indexOf("marigold"),0,"New flower")

// slice: startIndex is inclusive, endIndex is exclusive

// console.log(flowers.slice(0, 3))

// console.log(flowers)

// make a program that stores a list of friends
// ask user what they'd like to do: 1. Add, 2. Remove, 3. Display
// depending on what they choose perform appropriate function

// prompt()

// if(userhoice === 1){
//     newFriend prompt
//     friends.push(newFriend)
// }

// const displayFriends = function(){
    
//     for (let i = 0; i < friends.length; i++) {
//         console.log((i + 1) +". "+ friends[i])
        
//     }
// }
//   friends = ["Ram" , "Hari" , "sita" ,"Gita" ]
//   const userChoice = parseInt(prompt("Enter any one option you want to perform : 1. Add friend,2. Remove friend"))
//   if(userChoice === 1){
//    const newFriend = prompt("Who do you want to add?")
//     friends.push(newFriend)
//   }else if ( userChoice === 2){
//     displayFriends()
//    const oldFriend = prompt("Who do you want to remove")
   
//   if(friends.indexOf(oldFriend) === -1){
//         alert("Friend not found in the list")
//    }else{
//        friends.splice(friends.indexOf(oldFriend), 1)
//     }

//     console.log("Here is the modified list")
//     displayFriends()
    
//   }else if(userChoice === 3){

//   }


//       SECOND PROGRAM

// const displayStudents = function(){
    
//     let allStudentsString = "Here is a list of all students:\n"
    
//     for(let i = 0; i < students.length; i++){
//         allStudentsString+=((i+1) + "." + students[i])
//         allStudentsString+="\n"   
//     }

//     alert(allStudentsString)
// }
// const addStudent = function(){
//     const newStudent = prompt("Enter the name of student you want to add")

//     // const newStudent = {
//     //     name: nameFromUser,
//     //     email: emailFromUser,
//     // }
//     students.push(newStudent)
//     displayStudents()
// }

// const removeStudent =  function(){
//     displayStudents()
//     const oldStudent = prompt("Enter the name of students you want to remove")
//     if(students.indexOf(oldStudent) === -1){
//         alert("Student not found in the list")

//     }else{
//         students.splice(students.indexOf(oldStudent),1)
//     }
//     displayStudents()
// }

// students = [ "Ram" , "Hari" , "sita" , "Gita"]

// userWantsToContinue = false

// while (userWantsToContinue){
//     const userChoice = parseInt(prompt("Enter the number to perform the task you want to:\n1. Add student\n2. Remove student\n3. Display all students\n0. Exit"))
//     if(userChoice === 0){
//         userWantsToContinue = false;
//     }
//     else if(userChoice === 1) {
//         addStudent()
//     }else if(userChoice === 2) {
//         removeStudent()
//     }else if(userChoice === 3) {
//         displayStudents()
//     }
// }

// objects: very fundamental to js, it is a list of key value pairs

// modify the program so that it uses array of objects:{
//     name: some name,
//     email: some email
// }



// user = {
//     // key: value,
//     name: "Rizwan",
//     email: "rizwan@gmail.com",
// }

// alert(user.name)






// users = [{
//     name: "Rizwan",
//     email: "rizwan@gmail.com"
// }]

// displayUserDetail()
// const displayUserDetail = function(){
//     let userDetail = "Here is the detail of user:\n"

//     for (let j = 0; j < users.length; j++)  {
//         userDetail += users[j].name + " " + users[j].email
//     }
//     alert(userDetail)
// }




// for (let i = 0; i < 3; i++) {

//     const nameFromUser = prompt("Enter user's name")
//     const emailFromUser = prompt("Enter user's email")
    
//     const user = {
//         name: nameFromUser ,  
//         email: emailFromUser
//     }
//     users.push(user)
//     displayUserDetail()
    
// }
// displayUserDetail()




        //    PRACTICE 


  
// workers = [ "Hari" ,"Ram" , "Laxman" , "Shyam"]


 
// const WorkerDisplay = function() {
//     let allWorker = "Here is the list of available worker:\n"
//     for (i = 0; i < workers.length; i++){
//         allWorker += ((i + 1) + "." + workers[i])
//         allWorker +="\n"
//     }
//     alert(allWorker)
// }

// const addWorker = function(){
//     let newWorker = prompt("Enter the name of the new worker:")
//     workers.push(newWorker)
    
// }


// const removeWorker = function(){
//     let oldWorker = prompt("Enter the name of old worker you want to remove:")
//     if(workers.indexOf(oldWorker) === -1){
//         alert("worker not found");
//     } else{
//         workers.splice(workers.indexOf(oldWorker),1);
//     }
// } 

// removeWorker()

// userWantsToContinue = true
// while(userWantsToContinue){
// const chooseOptions = parseInt(prompt("choose option :\n1. add-worker\n2. remove-worker\n3. display-worker-list\n4. exit"))

//     if(chooseOptions === 4){
//         userWantsToContinue = false
//     }else if(chooseOptions === 1){
//         addWorker()

//     }else if(chooseOptions === 2){
//         removeWorker()

//     }else if(chooseOptions === 3){
//         WorkerDisplay()

//     }
// }
//           Fetching
const websiteHeading = document.getElementById("website-heading");
const changeButton = document.getElementById("change-button");
//           Manupulation
const handler = function(){
    websiteHeading.innerText = "Our Heading"
}
//         events
changeButton.addEventListener("click", handler)



//          practice
const CompanyWebsiteHeading = document.getElementById("heading-company")
const changeCompanyButton = document.getElementById("change-button-company")

const handlerTwo = function(){
    CompanyWebsiteHeading.innerText = "Our Company"
}

changeCompanyButton.addEventListener('click',handlerTwo)


//       practice

const productsWebsiteHeading = document.getElementById("heading-products")
const changeProductsButton = document.getElementById("change-button-products")

const handlerThree = function(){
    productsWebsiteHeading.innerText = "Our Products"
}
changeProductsButton.addEventListener('click',handlerThree)





    <section class="product-section" id="product-section">
        <h3>Products</h3>
        <button class="btn">Product 1</button>
        <button class="btn">Product 2</button>
        <button class="btn">Product 3</button>
        <button class="btn">Product 4</button>
        <button class="btn">Product 15</button>
    </section>
    <section class="contact-section" id="contact-section">
        <h3>Contacts</h3>

        <button class="btn">Product 1</button>
        <button class="btn">Product 2</button>
        <button class="btn">Product 4</button>
    </section>
    <ul>
        <li>Hello <button id="remove-button">Remove</button></li>
    </ul>
     

     <div class="light"></div>
     
     <button id="go">Go</button>
     <button id="watch">Watch</button>
     <button id="stop">Stop</button>
     

     
    <script>
        const light = document.querySelector(".light")
        const goButton = document.getElementById("go")
        
        
        goButton.addEventListener("click", function(){
            light.classList.remove("orange")
            light.classList.remove("red")
            
            light.classList.add("green")
        })

        const watchButton  = document.getElementById("watch")
        watchButton.addEventListener("click",function(){
            light.classList.remove("green")
            light.classList.remove("red")
            
            light.classList.add("orange")
        })
      
        const stopButton = document.getElementById("stop")
        stopButton.addEventListener("click",function(){
            light.classList.remove("orange")
            light.classList.remove("green")

            light.classList.add("red")
        })




        selection

        const element = document.getElementById("home")
        const elementByQuerySelector = document.querySelector(".button")

        const links = document.getElementsByTagName("a")
        const linkByQuerySelector = document.querySelectorAll("a")

        const buttons = document.getElementsByClassName("button")
        const buttonByQuerySelector = document.querySelectorAll(".button")
                                
        
        const productSection = document.getElementById("product-section")

        productSection.getElementsByClassName("btn")

        const removeBUtton = document.getElementById("remove-button")
        const li = removeBUtton.parentElement
        

 