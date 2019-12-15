class Petition
{
    Id: number;
    name: string;
    dateRegistered: Date;
    location: string;
    city: string;
    problemDesc: string;
    status: string;

    constructor(id: number, name:string, date: Date, loc: string, city: string, desc: string, status: string)
    {
        this.Id = id;
        this.name = name;
        this.dateRegistered = date;
        this.location = loc;
        this.city = city;
        this.problemDesc = desc;
        this. status = status;
    }
}

class FinancialPetition extends Petition
{
    amt: number;
    constructor(id: number, name:string, date: Date, loc: string, city: string, desc: string, status: string, amt: number)
    {
        super(id, name, date, loc, city, desc, status);
        this.amt = amt;
    }

}

class NonfinancilaPetition extends Petition
{
    citizenName: string;
    implementationDate: Date;

    constructor(id: number, name:string, date: Date, loc: string, city: string, desc: string, status: string, citiname: string, implementationDate: Date)
    {
        super(id, name, date, loc, city, desc, status);
        this.citizenName = citiname;
        this.implementationDate = implementationDate;
    }
}

let finobj : FinancialPetition = new FinancialPetition(1, "A", "1/2/2019", "HSR","Bglr","court", "under consideration", 1000);