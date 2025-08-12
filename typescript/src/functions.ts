// -any
//-config
//type


function sayHi(name:string){
  console.log(`Hello there ${name.toUpperCase()}`)
  }
sayHi('john');
// sayHi(2)


//functions return
function calculateDiscount(price:number){
  const hasDiscount = true
  if (hasDiscount){
    return price
  }
}

const finalPrice = calculateDiscount(200)
console.log(finalPrice)


//Repurcussions of any type
function addThree(number:any){
  let anotherNumber:number = 3
  return number + anotherNumber;
}

const result = addThree(3)
const someValue = result

someValue.myMethod();

//function challenge
const names:string[] =['flo','john','jim','jill']

function isNameInList(name:string):boolean{
  return names.includes(name)
}

let nameToCheck = 'john'

if(isNameInList(nameToCheck)){
  console.log(`${nameToCheck} is in the list`)
}
else{
  console.log(`${nameToCheck} is not in the list`)
}

//math operations

function calculatePrice(price:number,discount?:number):number{
  return price - (discount|| 0);//otional parameters when there is optional parameter
}
let priceAfterDiscount = calculatePrice(100,20)


function caculateScore(initialScore:number,penaltyPoints:number = 0):number{
return initialScore - penaltyPoints
}

let scoreAfterPenalty = caculateScore(100,20)
let scoreWithoutPenalty = caculateScore(300)

//rest parameters

function sum(message:string, ...numbers:number[]):string{
const doubled = numbers.map((num)=> num * 2);
console.log(doubled)

let total = numbers.reduce((previous,current)=>{
  return previous + current
},0);
return `${message} ${total}`

}
let rs = sum('The total is : ',1,2,3,4,5);
console.log(rs)



function logMessage(message:string){
  console.log(message);
}
logMessage('Hello,TypeScript')

//Union types as Function parameters
//type guard - make sure thats its a number we are multipying
function processInput(input:string | number){

  if(typeof input ==='number'){
console.log(input * 2)
  }
else{
  console.log(input.toLowerCase());
}
}

processInput(10)
processInput('Hello')

//objects as parameters
function createEmployee({id}:{id:number}):{
  id:number;
  isActive:boolean}
  {

  return{id,isActive:id%2 === 0}
}

const first = createEmployee({id:1});
const second = createEmployee({id:2})
console.log(first,second)
//alterntive
function createStudent(student:{id:number;name:string}):void{
console.log(`Welcome to the course ${student.name.toUpperCase()}`)
}
const newStudent = {
  id:5,
  name:"Anna",
  email:'ann@gmail.com'
}
createStudent(newStudent)

// createStudent({id:1,name:'bob',email:'bob@gmail.com'})


