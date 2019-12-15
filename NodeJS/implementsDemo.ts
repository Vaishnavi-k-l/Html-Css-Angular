interface Person
{
    Fname:string;
    age? : number;

    introduce(lastname  : string) : void;
   // introduce(lastname  : string) => void; ALTERNATE SYNTAX

}

class Employee implements Person
{
    Fname: string = "Vaish";
    introduce(lastname: string): void
    {
        console.log("Hello I am " + lastname);
    }
}

let e2 = new Employee();
e2.introduce("Advi");
console.log(e2.Fname);
const e1 : Employee = new Employee();
// Employee e1 = new Employee();
console.log(e1.Fname);
e1.introduce("KL");
