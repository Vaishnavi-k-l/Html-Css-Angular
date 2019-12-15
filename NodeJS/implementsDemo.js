var Employee = /** @class */ (function () {
    function Employee() {
        this.Fname = "Vaish";
    }
    Employee.prototype.introduce = function (lastname) {
        console.log("Hello I am " + lastname);
    };
    return Employee;
}());
var e2 = new Employee();
e2.introduce("Advi");
console.log(e2.Fname);
var e1 = new Employee();
// Employee e1 = new Employee();
console.log(e1.Fname);
e1.introduce("KL");
