/*var v1: number = 10;
v1 = 20;
//v1= "a";

var v2 : any= 10;   //allows any type of assignment
v2="hey";
v2 = true;
v2=10.5;*/

//Assertion Demo
let code : any=123;
let emploeeCode = <number> code;

let code2 : any= 123;
let empCode2 = code as number;
console.log(typeof code);
console.log(typeof emploeeCode);