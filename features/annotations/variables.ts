let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: undefined = undefined;

// build in object 
let now: Date = new Date();

// Array
let colors: string[] = ['red','green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];


// Classes
class Car {

}
let car: Car;

// Obhect literal
let point: {x: number; y: number; } = {
  x: 10,
  y: 20
};

// Function
const logNUmber: (i: number) => void  = (i: number) => {
  console.log(i);
}

const json = {"x":10, "y":20};
const coordinates: { x: number, y: number } = JSON.parse(json);


let words = ['red', 'green'];
let foundWord: boolean;

for(let i=0; i< words.length; i++) {
  if(words[i]==='green'){
    foundWord = true;
  }
}
