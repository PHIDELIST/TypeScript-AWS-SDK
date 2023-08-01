//let isDone: boolean =false; //boolean
//let isDone = false; //you dont need to declare type if value is assigned

//Declare isDone first , then assign a value

let isDone:boolean;
isDone = false;

let decimal:number = 6; //number
let color:string = "blue"; //string
let list:number[] =[1,2,3,]; //array of numbers

//Declare a tuple type

let x: [number, string];
//initialize it
x = [10,"hello"]

//Declare enum
enum Color{
    Red,
    Green,
    Blue,
}
let c: Color = Color.Red;

//UNKNOWN TYPES

let notSure: unknown = 4; //type is not kknown while we are writting the application
notSure = "maybe a string instade";

//any type to opt of type checking
let looselyTyped:any = 4;

//void type for no type, used in functions
function returnNothing(): void {
    console.log("I retun nothing")
}


let u: undefined = undefined; //similar to null, u can only get undefined
let n: null = null; //similar to undefined, n can only get null

const red:string = "red"; // this value can not be changed
