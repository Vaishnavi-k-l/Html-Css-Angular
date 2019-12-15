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
var Advertisement = /** @class */ (function () {
    function Advertisement(id, des) {
        this.Id = id;
        this.description = des;
    }
    Advertisement.prototype.display = function () {
        console.log("ID is: " + this.Id);
        console.log("Description: " + this.description);
    };
    return Advertisement;
}());
var MatrimonilAdd = /** @class */ (function (_super) {
    __extends(MatrimonilAdd, _super);
    function MatrimonilAdd(Id, desc, gender, age, occupation) {
        var _this = _super.call(this, Id, desc) || this;
        _this.gender = gender;
        _this.age = age;
        _this.occupation = occupation;
        return _this;
    }
    MatrimonilAdd.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Gender: " + this.gender);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    };
    return MatrimonilAdd;
}(Advertisement));
var RealEstateAdd = /** @class */ (function (_super) {
    __extends(RealEstateAdd, _super);
    function RealEstateAdd(Id, desc, type, price, size) {
        var _this = _super.call(this, Id, desc) || this;
        _this.estateType = type;
        _this.price = price;
        _this.size = size;
        return _this;
    }
    RealEstateAdd.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Estate Type: " + this.estateType);
        console.log("Price: " + this.price);
        console.log("Size: " + this.size) + "acre";
    };
    return RealEstateAdd;
}(Advertisement));
var mobj = new MatrimonilAdd(1, "A bride", "Female", 27, "Enginner");
mobj.display();
var esobj = new RealEstateAdd(2, "Coffee estate", "Coffee", 10000, 2000);
esobj.display();
