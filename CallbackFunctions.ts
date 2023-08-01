//A callback is a function passed as a paramater into another function

// import { readFile, readFileSync } from "fs";
// const fileName = "my_notes.txt";
// const readFileSyncReturns = readFileSync(fileName, "utf-8");
// console.log(`readFileSync returns:\n${readFileSyncReturns}`);


/////////Callback function example////////
import { readFile,readFileSync } from "fs";
const fileName = "my_notes.txt";

const callback = (err:any, data: any) => {
    console.log("--Callback ----");
    console.log(data);
};

const readFileReturns = readFile(fileName, {encoding:"utf8"}, callback);
console.log(`readFile returns ${readFileReturns}`);
console.log("Continue processing....");

const sysJsonData: any = readFileSync(fileName,"utf8");
console.log(sysJsonData);


