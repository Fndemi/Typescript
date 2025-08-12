enum UserRole {
  Admin,
  Manager,
  Employee,
}
type User = {
  id:number;
  name:string;
  role:UserRole,
  contact:[string,string]
};

function createUser(user:User):User{
  return user;
}
const user:User = createUser({
  id:1,
  name:'john doe',
  role: UserRole.Admin,
  contact:['john@gmail.com','123-456-789'],
})
console.log(user)



let someValue:any = 'this is a string';

let strLength:number  = (someValue as string).length;

type Bird={
  name:string;

}

let birdString = '{"name":"Eagle"}';
let dogString = '{"breed":"poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);


let bird = birdObject as Bird
let dog = dogObject as Bird  //type assertions

console.log(bird.name)

enum Status{
  Pending = 'pending',
  Declined = 'declined'
}

type Usser = {
  name:string;
  status:Status;
}


const statusValue = 'pending'
const usser:Usser = {name:'John',status:statusValue as Status}


//typeunknown


