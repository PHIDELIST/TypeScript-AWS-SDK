import { log } from "console";
import {promises} from "fs";
const fileName = "my_notes.txt";

async function myReadFile(){
const readFileReturns = await promises.readFile(fileName, {encoding: "utf8"});
console.log(`readfile returns ${readFileReturns}`);
}
myReadFile();