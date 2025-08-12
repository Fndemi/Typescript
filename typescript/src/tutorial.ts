




//Arrays
let prices:number[] = [100,23,5];
//prices.push('hello)
let fruit:string[] = ['apple','orange']
// let randomVales:[] =['hello']
let names = ['peter','susan',];
let array:(string | boolean)[] = ['apple',true,'orange']


//Array challenge
let tempratures:number[] =[20,23]
// tempratures.push('hot')


//Objects
let colors:string[] = ['red','green','blue']
let mixedArray:(number | string) [] = [1,'two',3]

let car:{brand:string;year:number} = {brand: 'toyota',year:2020}
car.brand ='ford'

let book = {title:'book',cost:20}
let pen = {title:'pen',cost:10}
let notebook = {title:'notebook'}
let items:{readonly title:string;cost?:number}[] = [book,pen,notebook]

// items[0].title ='new book'
//objects challenge

let bike:{brand:string;year:number} = {brand:'Dell',year:2030}
//bike.year = 'old
let laptop:{brand:string;year:number} = {brand:'yamaha',year:20110}
let laptop2:{brand:string;year?:number} = {brand:'Hp'}
let product1= {title : 'shirt',price:20}
let product2= {title:'pants'};
let products:{title:string; price?:number}[] = [product1,product2]









let discount:number | string = 20;

discount = '20%'

// discount = true;
let orderStatus:'processing' | 'shipped' |'delivered' = 'processing'

orderStatus = 'shipped'
// orderStatus = 'cancelled'








const books = ['1984','Brave New World','Fahreinheit 451'];

let foundBook:string | undefined;

for(let book of books){
  if(book === '1983'){
    foundBook = book;
    foundBook = foundBook.toUpperCase()
    break;
  }
}
console.log(foundBook?.length)













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


