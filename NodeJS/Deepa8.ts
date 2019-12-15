//Super class Advertisement
class Advertisement {
    AdvertisementId: string;
    AdDescription: string;

    constructor(AdvertisementId: string, AdDescription: string) {
        this.AdvertisementId = AdvertisementId;
        this.AdDescription = AdDescription;
    }
}

//Subclass MatrimonialAdvertisement
class MatrimonialAdvertisement extends Advertisement {
    Gender: string;
    Age: number;
    Occupation: string;

    constructor(AdvertisementId: string, AdDescription: string, Gender: string, Age: number, Occupation: string) {
        super(AdvertisementId, AdDescription);
        this.Gender = Gender;
        this.Age = Age;
        this.Occupation = Occupation;
    }

    displayInfo(): void {
        console.log(`
        ID: ${this.AdvertisementId}
        DESCRIPTION:${this.AdDescription}
        GENDER: ${this.Gender}
        AGE: ${this.Age}
        OCCUPATION: ${this.Occupation}
        
        `)
    }

}

//Subclass RealEstateAdvertisement
class RealEstateAdvertisement extends Advertisement {
    RealEstateType: string;
    Size: string;
    Price: number;

    constructor(AdvertisementId: string, AdDescription: string, RealEstateType: string, Size: string, Price: number) {
        super(AdvertisementId, AdDescription);
        this.RealEstateType = RealEstateType;
        this.Size = Size;
        this.Price = Price;
    }

    displayInfo(): void {
        console.log(`
        ID: ${this.AdvertisementId}
        DESCRIPTION: ${this.AdDescription}
        REAL ESTATE TYPE: ${this.RealEstateType}
        LAND SIZE: ${this.Size}
        LAND PRICE: ${this.Price}
        `)
    }
}


//RealEstateAdvertisement object
let realEstate: RealEstateAdvertisement = new RealEstateAdvertisement('123ABC', 'LAND SALE ADD', 'Housing', '1 ACRE', 20000000);
realEstate.displayInfo();

//MatrimonialAdvertisement object
let matrimony1: MatrimonialAdvertisement = new MatrimonialAdvertisement('987ABC', 'MARRIAGE ADD', 'Male', 28, 'Architect');
matrimony1.displayInfo();