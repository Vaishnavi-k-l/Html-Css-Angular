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
//Super class Advertisement
var Advertisement = /** @class */ (function () {
    function Advertisement(AdvertisementId, AdDescription) {
        this.AdvertisementId = AdvertisementId;
        this.AdDescription = AdDescription;
    }
    return Advertisement;
}());
//Subclass MatrimonialAdvertisement
var MatrimonialAdvertisement = /** @class */ (function (_super) {
    __extends(MatrimonialAdvertisement, _super);
    function MatrimonialAdvertisement(AdvertisementId, AdDescription, Gender, Age, Occupation) {
        var _this = _super.call(this, AdvertisementId, AdDescription) || this;
        _this.Gender = Gender;
        _this.Age = Age;
        _this.Occupation = Occupation;
        return _this;
    }
    MatrimonialAdvertisement.prototype.displayInfo = function () {
        console.log("\n        ID: " + this.AdvertisementId + "\n        DESCRIPTION:" + this.AdDescription + "\n        GENDER: " + this.Gender + "\n        AGE: " + this.Age + "\n        OCCUPATION: " + this.Occupation + "\n        \n        ");
    };
    return MatrimonialAdvertisement;
}(Advertisement));
//Subclass RealEstateAdvertisement
var RealEstateAdvertisement = /** @class */ (function (_super) {
    __extends(RealEstateAdvertisement, _super);
    function RealEstateAdvertisement(AdvertisementId, AdDescription, RealEstateType, Size, Price) {
        var _this = _super.call(this, AdvertisementId, AdDescription) || this;
        _this.RealEstateType = RealEstateType;
        _this.Size = Size;
        _this.Price = Price;
        return _this;
    }
    RealEstateAdvertisement.prototype.displayInfo = function () {
        console.log("\n        ID: " + this.AdvertisementId + "\n        DESCRIPTION: " + this.AdDescription + "\n        REAL ESTATE TYPE: " + this.RealEstateType + "\n        LAND SIZE: " + this.Size + "\n        LAND PRICE: " + this.Price + "\n        ");
    };
    return RealEstateAdvertisement;
}(Advertisement));
//RealEstateAdvertisement object
var realEstate = new RealEstateAdvertisement('123ABC', 'LAND SALE ADD', 'Housing', '1 ACRE', 20000000);
realEstate.displayInfo();
//MatrimonialAdvertisement object
var matrimony1 = new MatrimonialAdvertisement('987ABC', 'MARRIAGE ADD', 'Male', 28, 'Architect');
matrimony1.displayInfo();
