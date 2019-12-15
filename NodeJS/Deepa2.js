// Vehicle abstract class
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
var Vehicle = /** @class */ (function () {
    function Vehicle(RegNumber) {
        this.RegNumber = RegNumber;
    }
    Object.defineProperty(Vehicle.prototype, "getRegNo", {
        get: function () {
            return this.RegNumber;
        },
        enumerable: true,
        configurable: true
    });
    Vehicle.prototype.equals = function (obj) {
        return this.getRegNo === obj.getRegNo;
    };
    return Vehicle;
}());
//TwoWheeler class
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler(RegNumber) {
        return _super.call(this, RegNumber) || this;
    }
    TwoWheeler.prototype.getNumberOfWheels = function () {
        return 2;
    };
    return TwoWheeler;
}(Vehicle));
//ThreeWheeler class
var ThreeWheeler = /** @class */ (function (_super) {
    __extends(ThreeWheeler, _super);
    function ThreeWheeler(RegNumber) {
        return _super.call(this, RegNumber) || this;
    }
    ThreeWheeler.prototype.getNumberOfWheels = function () {
        return 3;
    };
    return ThreeWheeler;
}(Vehicle));
//FourWheeler class
var FourWheeler = /** @class */ (function (_super) {
    __extends(FourWheeler, _super);
    function FourWheeler(RegNumber) {
        return _super.call(this, RegNumber) || this;
    }
    FourWheeler.prototype.getNumberOfWheels = function () {
        return 4;
    };
    return FourWheeler;
}(Vehicle));
//Class Car 
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(RegNumber) {
        return _super.call(this, RegNumber) || this;
    }
    Car.prototype.displayDetails = function () {
        var noOfWheels = this.getNumberOfWheels();
        console.log("\n    Register number of the car: " + this.getRegNo + "\n    No of wheels in the car: " + noOfWheels);
    };
    return Car;
}(FourWheeler));
//Class Auto
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(RegNumber) {
        return _super.call(this, RegNumber) || this;
    }
    Auto.prototype.displayDetails = function () {
        var noOfWheels = this.getNumberOfWheels();
        console.log("\n    Register number of the auto: " + this.getRegNo + "\n    No of wheels in the auto: " + noOfWheels);
    };
    return Auto;
}(ThreeWheeler));
//Class MotorBike
var MotorBike = /** @class */ (function (_super) {
    __extends(MotorBike, _super);
    function MotorBike(RegNumber) {
        return _super.call(this, RegNumber) || this;
    }
    MotorBike.prototype.displayDetails = function () {
        var noOfWheels = this.getNumberOfWheels();
        console.log("\n    Register number of the motorbike: " + this.getRegNo + "\n    No of wheels in the motorbike: " + noOfWheels);
    };
    return MotorBike;
}(TwoWheeler));
var car1 = new Car('123ABC');
car1.displayDetails();
var car2 = new Car('123CBA');
car2.displayDetails();
console.log("    \n    Are car1 and car2 same: " + car1.equals(car2));
console.log("    Are car1 and and a vehicle with register number '123ABC' same?: " + car1.equals(car1));
var auto1 = new Auto('2345TY');
auto1.displayDetails();
var motorbike1 = new MotorBike('768UIY');
motorbike1.displayDetails();
