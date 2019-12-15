var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(id, salary, basic, allowance, deductions, fname, lname, address, pincode) {
        this.basic = 0;
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
    EmployeeDetails.prototype.RealName = function () {
        this.realname = this.firstName + this.lastName;
    };
    EmployeeDetails.prototype.calculateSalary = function () {
        this.salary = this.basic + this.allowance - this.deductions;
    };
    EmployeeDetails.prototype.show = function () {
        console.log("EmployeeID: " + this.empID);
        console.log("Salary: " + this.salary);
        console.log("BAsic Salary: " + this.basic);
        console.log("Allowance: " + this.allowance);
        console.log("Deductions: " + this.deductions);
        console.log("FirstName: " + this.firstName);
        console.log("LastName: " + this.lastName);
        console.log("Address: " + this.address);
        console.log("Pincode: " + this.pincode);
        console.log("Real Name: " + this.realname);
    };
    return EmployeeDetails;
}());
var emp1 = new EmployeeDetails(1, 20000, 10000, 1000, 500, "A", "B", "Mglr", 5729373);
emp1.RealName();
emp1.show();
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartTimeEmployee.prototype.calculateSalary = function () {
        this.salary = this.allowance + this.deductions;
    };
    return PartTimeEmployee;
}(EmployeeDetails));
var Manager = /** @class */ (function () {
    function Manager() {
    }
    Manager.prototype.workhours = function () {
        console.log("The working hours for full time employee is from 9 AM to 5 PM");
    };
    Manager.prototype.allowance = function () {
        this.allowanceAmt = 1000;
    };
    return Manager;
}());
