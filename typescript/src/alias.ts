// //Alias - we can aswell import it
//  export type User = { id: number; name: string; isActive: boolean }




// const john:User = {
//   id: 1,
//   name: 'john',
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: 'susan',
//   isActive: false,
// };

// function createUser(user:User): {
//   id: number;
//   name: string;
//   isActive: boolean;
// } {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);
//   return user;
// }

// //what issue do we have here -we keep repeating code 
// //we need type alias to solve this-we are not creating a new type

// type StringOrNumber = string | number;

// let value:StringOrNumber;
// value = 'hello'
// value = 123

// type Theme = 'light' | 'dark'
// let theme:Theme;
// theme = 'dark'
// function setTheme(t:Theme){
//   theme = t;
// }
// setTheme('dark');

//challenge



type Employee = {id:number;name:string;department:string};

type Manager = {id:number;name:string;emplooyes:Employee[]};

type Staff = Employee | Manager

function printStaffDetails(staff:Staff):void{

  if('emplooyes' in staff){
    console.log(
      `${staff.name} is a manager in the ${staff.emplooyes.length} emplooyees`
    )


  }
  else{
    console.log(`${staff.name} is an employee in the ${staff.department}`)
  }

}




const alice:Employee = {id:1,name:'alice',department:'Sales'}
const steve:Employee = {id:1,name:'steve',department:'HR'}

const bob:Manager = {id:1,name:'bob',emplooyes:[alice,steve]}

printStaffDetails(alice)
printStaffDetails(steve)
printStaffDetails(bob)


//Intersection type


type Book = {id:number;name:string;price:number}
type DiscountedBook = Book & {discount:number}

const book1:Book = {
  id:1,name:'how to cook a dragon',price:15,
}
const book2:Book = {
  id:2,name:'how to cook a snake',price:18,
}
const book3:Book = {
  id:5,name:'how to cook a snake',price:18,
}
const discountedBook:DiscountedBook= {
  id:3,name:'how to cook a snake',price:18,
  discount:0.25
}
//computed properties

type Animal = {
  [propName] :number;
}
const propName = 'age'
let tiger = {[propName]:5};








