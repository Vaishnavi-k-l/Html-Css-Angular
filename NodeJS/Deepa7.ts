class Petition {
    PetitionID: string;
    Name: string;
    DateRegistered: string;
    Location1: string;
    City: string;
    ProblemDescription: string;
    Status: string;

    constructor(PetitionID: string, Name: string, DateRegistered: string, Location1: string, City: string, ProblemDescription: string,
        Status: string) {
        this.PetitionID = PetitionID;
        this.Name = Name;
        this.DateRegistered = DateRegistered;
        this.Location1 = Location1;
        this.City = City;
        this.ProblemDescription = ProblemDescription;
        this.Status = Status;
    }

}

class FinancialPetition extends Petition {

    AmountInvolved: number;

    constructor(PetitionID: string, Name: string, DateRegistered: string, Location1: string, City: string, ProblemDescription: string,
        Status: string, AmountInvolved: number) {

        super(PetitionID, Name, DateRegistered, Location1, City, ProblemDescription, Status);
        this.AmountInvolved = AmountInvolved;
    }

    displayInfo(): void {
        console.log(`
        PETITION ID: ${this.PetitionID}
        NAME: ${this.Name}
        DATE OF REGISTER: ${this.DateRegistered}
        LOCATION: ${this.Location1}
        CITY: ${this.City}
        PROBLEM DESCRIPTION: ${this.ProblemDescription}
        STATUS: ${this.Status}
        AMOUNT INVOLVED: ${this.AmountInvolved}
        `)
    }

}

class NonFinancialPetition extends Petition {
    CitizenName: string;
    ImplementationDate: string;

    constructor(PetitionID: string, Name: string, DateRegistered: string, Location1: string, City: string, ProblemDescription: string,
        Status: string, CitizenName: string, ImplementationDate: string) {

        super(PetitionID, Name, DateRegistered, Location1, City, ProblemDescription, Status);
        this.CitizenName = CitizenName;
        this.ImplementationDate = ImplementationDate;
    }

    displayInfo(): void {
        console.log(`
        PETITION ID: ${this.PetitionID}
        NAME: ${this.Name}
        DATE OF REGISTER: ${this.DateRegistered}
        LOCATION: ${this.Location1}
        CITY: ${this.City}
        PROBLEM DESCRIPTION: ${this.ProblemDescription}
        STATUS: ${this.Status}
        NAME OF THE CITIZEN: ${this.CitizenName}
        DATE OF IMPLEMENTATION: ${this.ImplementationDate}
        `)
    }
}


let financialP1: FinancialPetition = new FinancialPetition('1AC', 'GST', '12 AUG 2018', 'KARNATAKA HIGH COURT', 'BANGALORE',
    'GST Bill clarification', 'Under review', 10000);
financialP1.displayInfo();

let nonFinancialP1: NonFinancialPetition = new NonFinancialPetition('2QW', 'Deforestation in Western Ghats', '12 OCT 2016', 'KARNATAKA HIGH COURT',
    'BANGALORE', 'Petition to prevent deforestation in western ghat', 'Under review', 'Ram Murthy', '12 Aug 2020');
nonFinancialP1.displayInfo();