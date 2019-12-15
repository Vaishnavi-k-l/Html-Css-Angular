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
var Petition = /** @class */ (function () {
    function Petition(PetitionID, Name, DateRegistered, Location1, City, ProblemDescription, Status) {
        this.PetitionID = PetitionID;
        this.Name = Name;
        this.DateRegistered = DateRegistered;
        this.Location1 = Location1;
        this.City = City;
        this.ProblemDescription = ProblemDescription;
        this.Status = Status;
    }
    return Petition;
}());
var FinancialPetition = /** @class */ (function (_super) {
    __extends(FinancialPetition, _super);
    function FinancialPetition(PetitionID, Name, DateRegistered, Location1, City, ProblemDescription, Status, AmountInvolved) {
        var _this = _super.call(this, PetitionID, Name, DateRegistered, Location1, City, ProblemDescription, Status) || this;
        _this.AmountInvolved = AmountInvolved;
        return _this;
    }
    FinancialPetition.prototype.displayInfo = function () {
        console.log("\n        PETITION ID: " + this.PetitionID + "\n        NAME: " + this.Name + "\n        DATE OF REGISTER: " + this.DateRegistered + "\n        LOCATION: " + this.Location1 + "\n        CITY: " + this.City + "\n        PROBLEM DESCRIPTION: " + this.ProblemDescription + "\n        STATUS: " + this.Status + "\n        AMOUNT INVOLVED: " + this.AmountInvolved + "\n        ");
    };
    return FinancialPetition;
}(Petition));
var NonFinancialPetition = /** @class */ (function (_super) {
    __extends(NonFinancialPetition, _super);
    function NonFinancialPetition(PetitionID, Name, DateRegistered, Location1, City, ProblemDescription, Status, CitizenName, ImplementationDate) {
        var _this = _super.call(this, PetitionID, Name, DateRegistered, Location1, City, ProblemDescription, Status) || this;
        _this.CitizenName = CitizenName;
        _this.ImplementationDate = ImplementationDate;
        return _this;
    }
    NonFinancialPetition.prototype.displayInfo = function () {
        console.log("\n        PETITION ID: " + this.PetitionID + "\n        NAME: " + this.Name + "\n        DATE OF REGISTER: " + this.DateRegistered + "\n        LOCATION: " + this.Location1 + "\n        CITY: " + this.City + "\n        PROBLEM DESCRIPTION: " + this.ProblemDescription + "\n        STATUS: " + this.Status + "\n        NAME OF THE CITIZEN: " + this.CitizenName + "\n        DATE OF IMPLEMENTATION: " + this.ImplementationDate + "\n        ");
    };
    return NonFinancialPetition;
}(Petition));
var financialP1 = new FinancialPetition('1AC', 'GST', '12 AUG 2018', 'KARNATAKA HIGH COURT', 'BANGALORE', 'GST Bill clarification', 'Under review', 10000);
financialP1.displayInfo();
var nonFinancialP1 = new NonFinancialPetition('2QW', 'Deforestation in Western Ghats', '12 OCT 2016', 'KARNATAKA HIGH COURT', 'BANGALORE', 'Petition to prevent deforestation in western ghat', 'Under review', 'Ram Murthy', '12 Aug 2020');
nonFinancialP1.displayInfo();
