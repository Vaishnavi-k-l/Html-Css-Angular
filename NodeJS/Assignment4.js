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
var Account = /** @class */ (function () {
    function Account(accnum, name, contact, balance) {
        this.AccNo = accnum;
        this.Name = name;
        this.contact = contact;
        this.balance = balance;
    }
    Account.prototype.Deposit = function (amt) {
        this.balance = this.balance + amt;
    };
    Account.prototype.Withdraw = function (amt) {
        this.balance = this.balance - amt;
    };
    Account.prototype.GetBalance = function () {
        return this.balance;
    };
    Account.prototype.show = function () {
        console.log("Account Number: " + this.AccNo);
        console.log("Name: " + this.Name);
        console.log("Contact: " + this.contact);
        console.log("Balance: " + this.balance);
    };
    return Account;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interestRate = 8;
        return _this;
    }
    CurrentAccount.prototype.addInterest = function () {
        console.log("Your previous balance is : " + this.balance);
        this.balance = this.balance + (0.08 * this.balance);
        _super.prototype.show.call(this);
    };
    return CurrentAccount;
}(Account));
var CheckingTransaction = /** @class */ (function (_super) {
    __extends(CheckingTransaction, _super);
    function CheckingTransaction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NoOffreetransactions = 3;
        return _this;
    }
    CheckingTransaction.prototype.makeTransaction = function (amt) {
        if (CheckingTransaction.tranCount > 0) {
            console.log("This is a free transaction!");
            console.log("Your previous balance was :" + this.balance);
            this.balance = this.balance - amt - 100;
            console.log("Your current balance is :" + this.balance);
            CheckingTransaction.tranCount--;
            console.log("----------------------------");
        }
        else {
            console.log("You are being charged");
            this.balance = this.balance - amt;
            console.log("Your previous balance was :" + this.balance);
            this.balance = this.balance - amt - 100;
            console.log("Your current balance is :" + this.balance);
            console.log("----------------------------");
        }
    };
    CheckingTransaction.tranCount = 3;
    return CheckingTransaction;
}(Account));
var checkingaccobj = new CheckingTransaction(1, "A", 987458846, 10000);
checkingaccobj.show();
checkingaccobj.makeTransaction(1000);
checkingaccobj.makeTransaction(1000);
checkingaccobj.makeTransaction(1000);
checkingaccobj.makeTransaction(1000);
checkingaccobj.makeTransaction(1000);
checkingaccobj.makeTransaction(1000);
var curaccobj = new CurrentAccount(1, "Abc", 734839372087, 10000);
curaccobj.addInterest();
