//we can never assign any value to type never
//never is a type that represents the type of values that never occur.you cant assign
//any value to a variable of type never.Typescript will give a compile error if there are any  unhandled cases,helping ensure that all cases are handled
// let someValue: never = 0;

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme) {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }
  theme;
  // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
}


enum Color{
  Red,
  Blue,
  Green
}
function getColorName(color:Color){
  switch(color){
    case Color.Red:
      return 'Red';
    case Color.Blue:
      return 'Blue'
    case Color.Green:
      return 'Green'
      default:
        //at build  time
    let unexpectedColor:never = color
        //at run time 
      throw new Error(`Unexpected color value : ${color}`)
  }
}

console.log(getColorName(Color.Red))
console.log(getColorName(Color.Blue))
console.log(getColorName(Color.Green))//this fails quietly