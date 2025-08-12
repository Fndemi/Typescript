// let array1:string[] = ["Apple","Banana","Mango"]
// let array2:number[] = [1,2,3]
// let array3:boolean[] = [true,false,true]

// let array1:Array<string> = ['apple','banana','mango']
// function createString (arg:string):string{
//   return arg;
// }
// function createNumber (arg:number):number{
//   return arg;
// }


function genericFunction<T>(arg:T):T{
return arg;
}

const someStringValue = genericFunction<string>("Hello World");
const someNumberValue = genericFunction<number>(2);

interface GenericInterface<T>{
  value:T;
  getValue:() => T;
}

const genericString:GenericInterface<string> = {
  value:'Hello world',
  getValue(){
    return this.value;
  },
}
//async functin return a promise
async function someFunc():Promise<number>{
  return 345
}

const result = someFunc();







