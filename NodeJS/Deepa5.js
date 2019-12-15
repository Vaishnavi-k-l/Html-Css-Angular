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
var Fare = /** @class */ (function () {
    function Fare(Origin, Destination, Distance) {
        this.Origin = Origin;
        this.Destination = Destination;
        this.Distance = Distance;
    }
    Fare.prototype.CalculateFare = function () {
        this.FarePrice = this.Distance * 5;
        this.PrintFare(this.FarePrice);
        //return this.FarePrice;
    };
    Fare.prototype.PrintFare = function (price) {
        console.log("Fare: " + price);
    };
    return Fare;
}());
var SeasonalPass = /** @class */ (function (_super) {
    __extends(SeasonalPass, _super);
    function SeasonalPass(Origin, Destination, Distance) {
        var _this = _super.call(this, Origin, Destination, Distance) || this;
        _this.Discount = 10;
        return _this;
    }
    SeasonalPass.prototype.CalculateFare = function () {
        this.FarePrice = (this.Distance * 5) - ((this.Discount * (this.Distance * 5)) / 100);
        this.PrintFare(this.FarePrice);
        // return this.FarePrice;
    };
    SeasonalPass.prototype.PrintFare = function (price) {
        console.log("Fare: " + price);
    };
    return SeasonalPass;
}(Fare));
var OneTime = /** @class */ (function (_super) {
    __extends(OneTime, _super);
    function OneTime(Origin, Destination, Distance) {
        var _this = _super.call(this, Origin, Destination, Distance) || this;
        _this.Discount = 0;
        return _this;
    }
    OneTime.prototype.CalculateFare = function () {
        this.FarePrice = (this.Distance * 5) - ((this.Discount * (this.Distance * 5)) / 100);
        this.PrintFare(this.FarePrice);
        // return this.FarePrice;
    };
    OneTime.prototype.PrintFare = function (price) {
        console.log("Fare: " + price);
    };
    return OneTime;
}(Fare));
var FreePass = /** @class */ (function (_super) {
    __extends(FreePass, _super);
    function FreePass(Origin, Destination, Distance) {
        var _this = _super.call(this, Origin, Destination, Distance) || this;
        _this.Discount = 100;
        return _this;
    }
    FreePass.prototype.CalculateFare = function () {
        this.FarePrice = (this.Distance * 5) - ((this.Discount * (this.Distance * 5)) / 100);
        this.PrintFare(this.FarePrice);
        // return this.FarePrice;
    };
    FreePass.prototype.PrintFare = function (price) {
        console.log("Fare: " + price);
    };
    return FreePass;
}(Fare));
var StudentSeasonalPass = /** @class */ (function (_super) {
    __extends(StudentSeasonalPass, _super);
    function StudentSeasonalPass(Origin, Destination, Distance) {
        var _this = _super.call(this, Origin, Destination, Distance) || this;
        _this.Discount = 30;
        return _this;
    }
    StudentSeasonalPass.prototype.CalculateFare = function () {
        this.FarePrice = (this.Distance * 5) - ((this.Discount * (this.Distance * 5)) / 100) - ((10 * (this.Distance * 5)) / 100);
        this.PrintFare(this.FarePrice);
        // return this.FarePrice;
    };
    StudentSeasonalPass.prototype.PrintFare = function (price) {
        console.log("Fare: " + price);
    };
    return StudentSeasonalPass;
}(SeasonalPass));
var ChildPass = /** @class */ (function (_super) {
    __extends(ChildPass, _super);
    function ChildPass(Origin, Destination, Distance) {
        var _this = _super.call(this, Origin, Destination, Distance) || this;
        _this.Discount = 50;
        return _this;
    }
    ChildPass.prototype.CalculateFare = function () {
        this.FarePrice = (this.Distance * 5) - ((this.Discount * (this.Distance * 5)) / 100);
        this.PrintFare(this.FarePrice);
        // return this.FarePrice;
    };
    ChildPass.prototype.PrintFare = function (price) {
        console.log("Fare: " + price);
    };
    return ChildPass;
}(Fare));
var AdultPass = /** @class */ (function (_super) {
    __extends(AdultPass, _super);
    function AdultPass(Origin, Destination, Distance) {
        var _this = _super.call(this, Origin, Destination, Distance) || this;
        _this.Discount = 0;
        return _this;
    }
    AdultPass.prototype.CalculateFare = function () {
        this.FarePrice = (this.Distance * 5) - ((this.Discount * (this.Distance * 5)) / 100);
        this.PrintFare(this.FarePrice);
        // return this.FarePrice;
    };
    AdultPass.prototype.PrintFare = function (price) {
        console.log("Fare: " + price);
    };
    return AdultPass;
}(Fare));
var PhysicallyHandicappedPass = /** @class */ (function (_super) {
    __extends(PhysicallyHandicappedPass, _super);
    function PhysicallyHandicappedPass(Origin, Destination, Distance) {
        var _this = _super.call(this, Origin, Destination, Distance) || this;
        _this.Discount = 40;
        return _this;
    }
    PhysicallyHandicappedPass.prototype.CalculateFare = function () {
        this.FarePrice = (this.Distance * 5) - ((this.Discount * (this.Distance * 5)) / 100);
        this.PrintFare(this.FarePrice);
        // return this.FarePrice;
    };
    PhysicallyHandicappedPass.prototype.PrintFare = function (price) {
        console.log("Fare: " + price);
    };
    return PhysicallyHandicappedPass;
}(Fare));
var SeniorCitizenPass = /** @class */ (function (_super) {
    __extends(SeniorCitizenPass, _super);
    function SeniorCitizenPass(Origin, Destination, Distance) {
        var _this = _super.call(this, Origin, Destination, Distance) || this;
        _this.Discount = 60;
        return _this;
    }
    SeniorCitizenPass.prototype.CalculateFare = function () {
        this.FarePrice = (this.Distance * 5) - ((this.Discount * (this.Distance * 5)) / 100);
        this.PrintFare(this.FarePrice);
        // return this.FarePrice;
    };
    SeniorCitizenPass.prototype.PrintFare = function (price) {
        console.log("Fare: " + price);
    };
    return SeniorCitizenPass;
}(Fare));
var p = new PhysicallyHandicappedPass('Mangalore', 'Bangalore', 600);
p.CalculateFare();
