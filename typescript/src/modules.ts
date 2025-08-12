//everything we type is saved in to a global scope
import newStudent ,{sayHello,person, type Student} from './actions'


sayHello('TypeScript')
console.log(newStudent)
console.log(person)


const anotherStudent:Student = {
  name:'bob',
  age:23,
};

console.log(anotherStudent)