class EmployeeDetails
{
    empID: number;
    salary : number ;
    basic: number = 0 ;
    allowance: number;
    deductions: number;
    firstName : string;
    lastName : string;
    address : string;
    pincode: number;
    realname: string;

    constructor(id: number, salary: number, basic: number, allowance: number, deductions: number, 
        fname: string, lname : string, address: string, pincode: number)
        {
            this.empID = id;
            this.salary = salary;
            this.basic = basic;
            this.allowance = allowance;
            this.deductions = deductions;
            this.firstName = fname;
            this.lastName = lname;
            this.address = address;
            this.pincode = pincode;
        }

        RealName()
        {
            this.realname = this.firstName + this.lastName;
        }



        calculateSalary()
        {
            this.salary = this.basic + this.allowance - this.deductions;
        }

        show()
    {
        console.log(`EmployeeID: ${this.empID}`);
        console.log(`Salary: ${this.salary}`);
        console.log(`BAsic Salary: ${this.basic}`);
        console.log(`Allowance: ${this.allowance}`);
        console.log(`Deductions: ${this.deductions}`);
        console.log(`FirstName: ${this.firstName}`);
        console.log(`LastName: ${this.lastName}`);
        console.log(`Address: ${this.address}`);
        console.log(`Pincode: ${this.pincode}`);
        console.log(`Real Name: ${this.realname}`);
    }
}

let emp1 : EmployeeDetails = new EmployeeDetails(1, 20000, 10000, 1000, 500, "A", "B", "Mglr", 5729373);
emp1.RealName();
emp1.show();



class PartTimeEmployee extends EmployeeDetails
{
    calculateSalary()
    {
        this.salary = this.allowance + this.deductions;
    }
}


interface FullTimeEmployee
{
    workhours();
}

interface NightShiftEmployee
{
    allowance(): void;
}

class Manager implements FullTimeEmployee, NightShiftEmployee
{
    allowanceAmt : number;
    workhours()
    {
        console.log("The working hours for full time employee is from 9 AM to 5 PM");
    }
    allowance(): void
    {
        this.allowanceAmt = 1000;
    }
}