//Promises in ts and js are an API that helps to make asynchronous programming easier to writre and read.
//a Promise is nothing more than an object that represents("promises") the eventual completion of an asyncronous task.
//Many finctions will return promises other than undefined

// import { promises } from "fs";
// const fileName = "my_notes.txt"

// const readFileReturns = promises.readFile(fileName, {encoding: "utf8"});
// console.log(`reading returns ${readFileReturns}`);
// console.log("Continouing processing.......");

// readFileReturns.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("we caught the erroe");
//     console.log(err);
// }).finally(() => {
//     console.log("This happens after completion of trhe promise , regardless of success or error");
// });


///chaining the promises///

import { log } from 'console';
import {promises} from 'fs';

const fileName = "my_notes.txt";

const readFileReturns = promises.readFile(fileName, {encoding: "utf-8"});
console.log(`readfile returns ${readFileReturns}`);
console.log("Continue Processing........");

readFileReturns
.then((data) => {
    console.log("First then().......");
    console.log(data);
    return promises.readFile(data.split("\n")[0], {encoding:"utf-8"})
})
.then((data) => {
    console.log("Second .then().....");
    console.log(data);   
})
.catch((err) => {
    console.log("we caught an Error");
    console.log(err);  
})
.finally(() => {
    console.log("this must always happen");
})

