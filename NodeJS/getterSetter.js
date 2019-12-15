var passcode = 'secret passcode';
var Employee = /** @class */ (function () {
    function Employee() {
        this._fullName = '';
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        //Getter function
        get: function () {
            return this._fullName;
        },
        //Setter function
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
