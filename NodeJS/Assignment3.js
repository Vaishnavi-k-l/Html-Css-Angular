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
var Mobile = /** @class */ (function () {
    function Mobile() {
    }
    Mobile.prototype.dialOnMobile = function () {
        console.log("Calling from mobile");
    };
    Mobile.prototype.dialOnTelephone = function () {
        console.log("Calling from telephone");
    };
    return Mobile;
}());
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Samsung.prototype.ConnectBluetooth = function () {
        console.log("Bluetooth being connected on Samsung");
    };
    Samsung.prototype.Dial = function () {
        console.log("Dialing from Samsung");
    };
    Samsung.prototype.GetEMICode = function () {
        console.log("Dial #123 to get EMI code on Samsung");
    };
    Samsung.prototype.WifiConnection = function () {
        console.log("Enter your wifi password on Samsung to connect to wifi");
    };
    Samsung.prototype.Recieve = function () {
        console.log("Message recieved on Samsung");
    };
    Samsung.prototype.SendMessage = function () {
        console.log("Message sent on Samsung");
    };
    return Samsung;
}(Mobile));
var Nokia = /** @class */ (function (_super) {
    __extends(Nokia, _super);
    function Nokia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nokia.prototype.ConnectBluetooth = function () {
        console.log("Bluetooth being connected on Nokia");
    };
    Nokia.prototype.Dial = function () {
        console.log("Dialing from Nokia");
    };
    Nokia.prototype.GetEMICode = function () {
        console.log("Dial #123 to get EMI code on Nokia");
    };
    Nokia.prototype.WifiConnection = function () {
        console.log("Enter your wifi password on Nokia to connect to wifi");
    };
    Nokia.prototype.Recieve = function () {
        console.log("Message recieved on Nokia");
    };
    Nokia.prototype.SendMessage = function () {
        console.log("Message sent on Nokia");
    };
    return Nokia;
}(Mobile));
var Iphone = /** @class */ (function (_super) {
    __extends(Iphone, _super);
    function Iphone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Iphone.prototype.ConnectBluetooth = function () {
        console.log("Bluetooth being connected on IPhone");
    };
    Iphone.prototype.Dial = function () {
        console.log("Dialing from Iphone");
    };
    Iphone.prototype.GetEMICode = function () {
        console.log("Dial #123 to get EMI code on IPhone");
    };
    Iphone.prototype.WifiConnection = function () {
        console.log("Enter your wifi password on IPhone to connect to wifi");
    };
    Iphone.prototype.Recieve = function () {
        console.log("Message recieved on Iphone");
    };
    Iphone.prototype.SendMessage = function () {
        console.log("Message sent on Iphone");
    };
    return Iphone;
}(Mobile));
var SamsungA50 = /** @class */ (function (_super) {
    __extends(SamsungA50, _super);
    function SamsungA50() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 15000;
        return _this;
    }
    return SamsungA50;
}(Samsung));
var Nokia900 = /** @class */ (function (_super) {
    __extends(Nokia900, _super);
    function Nokia900() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 20000;
        return _this;
    }
    return Nokia900;
}(Nokia));
var s1 = new SamsungA50();
console.log("Price of A50 is" + s1.price);
s1.ConnectBluetooth();
s1.Dial();
s1.dialOnMobile();
