function fun()
{
    console.log("Fun!");
}

//combine 2 arrays and return the combined array using generic function syntax
function combineArray<T>(a1 : T [], a2 : T[]) : T[]
{
    return [...a1, ...a2];
}

fun();

let arrayvar1 : string[]  = combineArray<string> (['A', 'B', 'C'], ['D', 'E', 'F']);
console.log(arrayvar1);


//let arrayvar  = combineArray<string> ([10, 20], [1,2]);
//console.log(arrayvar);


let arrayvar2 : number[]  = combineArray<number> ([10, 20], [1,2]);
console.log(arrayvar2);


let arrayvar3 : any[] = combineArray<any> ([10, "a"], [true, undefined]);
console.log(arrayvar3);

class Employee
{
    eid : number;
}

const hrEmployees : Employee [] = 
[
    new Employee() ,  new Employee() ];

const itEmployees : Employee  [] =
[
    new Employee(), new Employee()
];

let allEmployees :Employee[]  = combineArray<Employee>(hrEmployees, itEmployees);
console.log(allEmployees);
