
let tax:number | string = 10   //union either or
tax = 100
tax = '$10'
let requestStatus: 'pending' | "sucess" | 'error' = 'pending'
requestStatus = 'sucess'
requestStatus = 'error'


let notSure:any = 4;
notSure = 'maybe a string instead'
notSure = false;











let name:string = 'Hello Florence';
name = name.toUpperCase();
let age:number = 25;
age = age+ 5;
let isAdult:boolean = age>=18;
isAdult = !isAdult;
console.log(isAdult)

// name = 10;
// age = 'thirty'
// isAdult = 'Yes'

console.log(name,age,isAdult)


