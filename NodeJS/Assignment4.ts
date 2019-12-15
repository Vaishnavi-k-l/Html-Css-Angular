/* *******Account class*********** */
class Account
{
    AccNo: number;
    Name: string;
    contact: number;
    balance: number;

    constructor(accnum: number, name: string, contact: number, balance: number)
    {
        this.AccNo = accnum;
        this.Name = name;
        this.contact = contact;
        this.balance = balance;
    }

    Deposit(amt: number)
    {
        this.balance = this.balance + amt;
    }

    Withdraw(amt: number)
    {
        this.balance = this.balance - amt;
    }

    GetBalance(): number
    {
        return this.balance;
    }

    show()
    {
        console.log(`Account Number: ${this.AccNo}`);
        console.log(`Name: ${this.Name}`);
        console.log(`Contact: ${this.contact}`);
        console.log(`Balance: ${this.balance}`);
    }
}

/* *******Current Account class*********** */
class CurrentAccount extends Account
{
    interestRate: number = 8;

    addInterest()
    {
        console.log("Your previous balance is : " + this.balance);
        this.balance = this.balance + (0.08* this.balance);
        super.show();
    }
}

/* *******checking Transaction class*********** */
class CheckingTransaction extends Account
{
    static tranCount: number = 3;
    NoOffreetransactions: number = 3;

    makeTransaction(amt: number)
    {
        if (CheckingTransaction.tranCount > 0)
        {
            console.log("This is a free transaction!");
            console.log("Your previous balance was :" + this.balance);
            this.balance = this.balance - amt - 100;
            console.log("Your current balance is :" + this.balance);
            CheckingTransaction.tranCount--;
            console.log("----------------------------");
        }
        else
        {
            console.log("You are being charged");
            this.balance = this.balance - amt;
            console.log("Your previous balance was :" + this.balance);
            this.balance = this.balance - amt - 100;
            console.log("Your current balance is :" + this.balance);
            console.log("----------------------------");
        }
    }
}

let checkingaccobj : CheckingTransaction = new CheckingTransaction(1, "A", 987458846, 10000);
checkingaccobj.show();
checkingaccobj.makeTransaction(1000);
checkingaccobj.makeTransaction(1000);
checkingaccobj.makeTransaction(1000);
checkingaccobj.makeTransaction(1000);
checkingaccobj.makeTransaction(1000);
checkingaccobj.makeTransaction(1000);

let curaccobj : CurrentAccount = new CurrentAccount(1, "Abc", 734839372087, 10000);
curaccobj.addInterest();
