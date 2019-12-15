function add1(a, b)
{
    return a+b;
}

//Anonymous functions
let add = function(a, b)    { return a+b;}

//Arrow function
let add3 = (x, y) => x+y;
console.log(add3(10, 20));

//Named function
function add4(a: number, b: number, c?:string, d=1) : number    //optional parameter and default parameter
{
    console.log(a+b);
    return a+b;
    //return "a";
}

function addition(a:number, b=1):number{
    return a+b;
}

console.log(addition(10, undefined));   //op: 11