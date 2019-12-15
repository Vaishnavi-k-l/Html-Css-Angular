// let a = 10;
// let b = "10";
// a = b;
//  var c = 10;
//  var d = "10";
//   c = d;

let variable : string | number;
variable = 1;
variable = "a";
//variable = true;   Cannot assign anything except string and number


function padLeft(value: string, padding:string| number)
{
    //.....
}

let str;
str = padLeft("Hello", 0);
str = padLeft("Hello", "*");
// str = padLeft("Hello", true);    Cannot assign anything except string and number
