var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function fun() {
    console.log("Fun!");
}
//combine 2 arrays and return the combined array using generic function syntax
function combineArray(a1, a2) {
    return __spreadArrays(a1, a2);
}
fun();
var arrayvar1 = combineArray(['A', 'B', 'C'], ['D', 'E', 'F']);
console.log(arrayvar1);
//let arrayvar  = combineArray<string> ([10, 20], [1,2]);
//console.log(arrayvar);
var arrayvar2 = combineArray([10, 20], [1, 2]);
console.log(arrayvar2);
var arrayvar3 = combineArray([10, "a"], [true, undefined]);
console.log(arrayvar3);
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var hrEmployees = [
    new Employee(), new Employee()
];
var itEmployees = [
    new Employee(), new Employee()
];
var allEmployees = combineArray(hrEmployees, itEmployees);
console.log(allEmployees);
