interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printAuthor():void;
  printTitle(message:string):string
  printSomething:(someValue:number)=> number
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  //  printAuthor(){
  //   console.log(this.author)
  // },
  printTitle(message){
  return `${this.title} ${message}`
  
  },
  // first option
  printSomething:function(someValue){
    return someValue;
  }
//second option
// printSomething:(someValue)=>{
//   console.log(deepWork.author);
//   return someValue;
// },
//third option
// printSomething(someValue){
//   return someValue;
// }
,

 printAuthor:()=>{
 console.log(deepWork.author)
},


}

console.log(deepWork.printSomething(34));
deepWork.printAuthor()
deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed
const result = deepWork.printTitle('is awesome book')
console.log(result)
//challenge for the interface
interface Computer{
  readonly id:number;
  brand:string;
  ram:number;
  upgradeRam(increase:number):number;
  storage?:number;
}

const laptop:Computer = {
  id:1,
  brand:'random brand',
  ram:8,
  upgradeRam(amount){
    this.ram += amount;
    return this.ram;
  },
}
laptop.storage = 256
console.log(laptop.upgradeRam(4))

//challenge type guard with interface
interface Person {
  name:string;
  getDetails():string;
}
interface DogOwner{
  dogName:string;
  getDogDetails():string

}
//merged the two interfaces also called Reopen
interface Person{
  age:number;
}
const person:Person={
  name:'flo',
  age:30,
  getDetails(){
    return `Name:${this.name},Age: ${this.age}`
  }
}


//extends interface
interface Employee extends Person{
  employeeId:number;
}

const employee = {
  name:'shee',
  age:78,
  employeeId:123,
  getDetails(){
  return `Name:${this.name},Age: ${this.age}, Employee Id:${this.employeeId}`

  }
}

console.log(person.getDetails())
interface Manager extends Person,DogOwner {
  managePeople():void;
}


const Manager:Manager = {
  name:'bob',
  age:35,
  dogName:'Rex',
  getDetails(){

    return `Name: ${this.name}, Age: ${this.age}`
  },
  getDogDetails(){
    return `Name ${this.dogName}`
  },
  managePeople(){
    console.log('Managing people...')
  }
}





















