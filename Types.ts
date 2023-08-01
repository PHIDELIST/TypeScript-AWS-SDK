//Strings
//npx ts-node Types.ts
import { log } from "console";
import { type } from "os";


//let Fname: string = "Phidel";

//Adding strings together, this concatinates them

// let fName: string = "phidelist";
// let lName: string = "oluoch";
// console.log(fName + " " +lName)

//Using Variables in Strings

//let fName: string = 'Phidel';
//let lName: string = 'Oluoch';
//console.log("my names are" + " " + fName + " " +"and" +" " + lName)
//let message: string = "my names are " + fName +" and " + lName; 

 
//using template strings
//let message: string = `My names are ${fName} and ${lName}` 
//console.log(message);

//New Lines and Indentation

//the "\n" tells typescript to put text on the next line
//the "\t" tells typescript to add a tab spacing
//these are called escape characters

// let myValue: string = "This is A STRING OVER\nTHREE LINES\n\tWITH THE THIRD LINED INDENTED";
// console.log(myValue);

// let myValue: string = `
// all    
// my friends are currently learning .NET
//             while an learning TypeScript on AWS`
//             ;
// console.log(myValue);


//////////////NUMBERS////////////
//in typescript numbers are either floating points value or BigIntegers

//Numbers
//let age :number =15;
//BigIntegers
//The biggest number can be 253 - 1 if you neeed to represent a number bigger that 253 - 1 you need to use bigint type

//let veryBig: big = BigInt(100); //BingInt constructure
//let veryBig: big = 100n; //BigInt literal assignment

////////Using Number variables in string

// let myNumber: number = 50;
// let name : string = "phideist";
// console.log(myNumber + name);//50phidelist

// console.log(myNumber.toString() + name); //50phidelist

///converting string to number

// let x:string="20"
// let y:number= +x;
// console.log(y);


////////////////OBJECTS///////////////////
//name\:value pair in ts are called properties

// let person = {fName: "phidel",lName: "omuya"}
// console.log(person.fName);

////objects are very common in AWS
//+ They are used to exchange information between different services and functions
//+They are returned by application Programming Interfaces(API)
//+They are used to Tag Values

/////////CRUD OPS IN AN OBJECT//////////////
//create an Object
//  let person: {fName?:string; lName:string}; //we use question mark to make fName optional
//  person = {fName:"PHIDELIST", lName:"OLUOCH"};
// console.log(person);

 //Access object properties
 //console.log(`my names are ${person.fName} and am from ko ${person.lName}`);

 //Update an Object Property
//  person.lName = "Omuya"
//     console.log(person);

  //Delete an object property
  
//  delete person.fName;
//   console.log(person);
  


/////////////////////////////ARRAYS//////////////////////
////////CRUD OPS IN AN ARRAY

//Create an Array
//  let numbers:number[]; //array of numbers
//  let names:string[]; //array of strings
 //using generic array types
//  let numbersgeneric: Array<number>;
//  let namesgeneric:Array<string>;
//let ages:Array<number> = [3,5,3,6,2,7,2,8,3];

//Access elements from an array
// console.log("first age is", ages[0]);
//console.log("array length", ages.length);///to get length of an array
//console.log("last element", ages[ages.length-1]);

//Add an element to an Array
//let people:Array<string> = ["Roy", "Omondi"];
//people.push("Otiya");
//console.log(people);
//people.unshift("Phidel"); //add element to the beginning of an Array
// console.log(people);

//Remove element from an Array
// let people:Array<string> = ["otiya","jakoti","phidel"];
// // let LastElement= people.pop();//removes last element and returns it
// // console.log(LastElement);

// let firstElement = people.shift();
// console.log(firstElement);

//Add and Remove elements using Splice()
//with splice method you can target any index in the array
//splice(start index, number of elemnts to be removed,[array of elements to be added])

// let people:Array<string> = ['phidel','combo','omuga','oliech'];
// //let removedElement = people.splice(1,1);//remove one element
// // console.log(removedElement);
// //let remove2elemnts = people.splice(1,2);//remove two elements
// //console.log(remove2elemnts);
// let added = people.splice(1,2,"Richard"); //
// console.log(people);

//Sort an Array
// let ages:Array<number> = [3,5,3,6,2,7,2,8,3];
// console.log("Sorted: ", ages.sort());


/////////////Custom Types////////////
// type Person = {
//   fName: string;
//   lName: string;
//   sName: string;
//   // sName?: string;
// };

// let person: Person = {fName:"PHIDEL",lName: "Oluoch",sName:"OMUYA"};
// let sama: Person = {fName:"samantha", lName:"achieng",sName:"Omuya"};

// console.log(`I am ${person.fName} and my sister is ${sama.fName}`);





