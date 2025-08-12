type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User; //type union

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') };
};

// const person = randomPerson();
const person:Person = {
  name:'Anna',
  login:() =>console.log('study...')
}
//type predicate
function isStudent(person:Person):person is Student{
  return (person as Student).study !== undefined
}
if(isStudent(person)){
  person.study();
}
else{
  person.login();
}