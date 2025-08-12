type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;


function checkValue(value:ValueType):void{
  if(typeof value ==='string'){
    console.log(value.toLowerCase());
    return;
  }
  if(typeof value ==='number'){
    console.log(value.toFixed(2));
    return;
  }
 console.log(`boolean : ${value}`)
}



type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

// function makeSound(animal:Animal){
//   if(animal.type ==='dog'){
//     animal.bark()
//   }
//   else{
//     animal.meow();
//   }
// }

//used propery here
function makeSound(animal:Animal){
  if('bark' in animal){
    animal.bark()
  }
  else{
    animal.meow()
  }
}

//Truthy / Falsy guard

function printLength(str:string | null | undefined){
  if(str){
    console.log(str.length)
  }
  else{
    console.log('No string provided')
  }
}
printLength('hello')
printLength('')
printLength(null)
printLength(undefined)









