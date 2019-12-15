console.log("Hello World!");

var num1 = 10;
function fun() {
    console.log(num1);
}

fun();

function f1() {
    var a = 1;
    console.log('a = ' + a);

    console.log('b = ' + b);    //outputs undefined

    var b = 2;  // b is defined here

    console.log('b = ' + b); // outputs 2
}

f1();

console.log();
console.log();

var strTen = '10';
var numTen = 10;

console.log(strTen == numTen);
console.log(strTen === numTen);

console.log();
console.log();


console.log(1/0);
console.log(-1/0);

/*--------------------------while loop-------------------------*/

var kanVoc = ['Beku', 'Beda', 'Haudu'];
var wordind = 0;
var howmanywordsIknow = kanVoc.length;
while(wordind <  howmanywordsIknow )
{
    console.log(kanVoc[wordind]);
    wordind++;
}


console.log();
console.log();

/*--------------------------for loop-------------------------*/

var arr1 =['a', 'b', 'c'];
for( var wordind = 0, howmanyiknow = arr1.length; wordind < howmanyiknow; wordind++)
{
    console.log(arr1[wordind]);
}

console.log();
console.log();

/*--------------------------functions-------------------------*/

function sayHello()
{
    console.log('Hello there!');
}

sayHello();
console.log(sayHello());

/*--------------------------Anonymous function-------------------------*/

var sumOrConacat = function(a, b)
{
    return a+b;
}

console.log( sumOrConacat('Mr. ', 'Bond' ));
console.group(sumOrConacat(1,2));


/*--------------------------IIFE-------------------------*/
//Synatx 1
(function(x)
{
    var y = 20;
    console.log(x,y);
})(10);

//Synatx 2
(function(x)
{
    var y = 20;
    console.log(x,y);
}(10));


/*----------------------Function Hoisting-------------------*/
console.log(sayHello);
//sayHello();
var sayHello = function()
{
    console.log('Hello there');
}
sayHello();

/*----------------------Function arguements--------------

function sum1(a, b)
{
    return a+b;
}

console.log(sum1(1));
console.log(sum1('hello'));
*/

