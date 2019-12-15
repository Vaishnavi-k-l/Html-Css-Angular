class Fare{
    Origin: string;
    Destination: string;
    FarePrice: number;
    Distance: number

    constructor(Origin: string,Destination: string, Distance: number){
        this.Origin = Origin;
        this.Destination = Destination;
        this.Distance = Distance;
    }

    CalculateFare(): void{
      this.FarePrice = this.Distance*5;
      this.PrintFare(this.FarePrice);
        //return this.FarePrice;

    }

    PrintFare(price: number): void{
        console.log(`Fare: ${price}`);
    }
}

class SeasonalPass extends Fare{
    Discount: number;

    constructor(Origin: string,Destination: string, Distance: number){
       super(Origin,Destination, Distance);
       this.Discount = 10;
    }

    CalculateFare(): void{
        this.FarePrice =(this.Distance*5)-((this.Discount*(this.Distance*5))/100);
        this.PrintFare(this.FarePrice);
       // return this.FarePrice;
    }

    PrintFare(price:number): void{
        console.log(`Fare: ${price}`);

    }

}

class OneTime extends Fare{
    Discount: number;

    constructor(Origin: string,Destination: string, Distance: number){
       super(Origin,Destination, Distance);
       this.Discount = 0;
    }

    CalculateFare(): void{
        this.FarePrice =(this.Distance*5)-((this.Discount*(this.Distance*5))/100);
        this.PrintFare(this.FarePrice);
       // return this.FarePrice;
    }

    PrintFare(price:number): void{
        console.log(`Fare: ${price}`);

    }
}

class FreePass extends Fare{
    Discount: number;

    constructor(Origin: string,Destination: string, Distance: number){
       super(Origin,Destination, Distance);
       this.Discount = 100;
    }

    CalculateFare(): void{
        this.FarePrice =(this.Distance*5)-((this.Discount*(this.Distance*5))/100);
        this.PrintFare(this.FarePrice);
       // return this.FarePrice;
    }

    PrintFare(price:number): void{
        console.log(`Fare: ${price}`);

    }
}

class StudentSeasonalPass extends SeasonalPass{
    Discount: number;

    constructor(Origin: string,Destination: string, Distance: number){
       super(Origin,Destination, Distance);
       this.Discount = 30;
    }

    CalculateFare(): void{
        this.FarePrice =(this.Distance*5)-((this.Discount*(this.Distance*5))/100)-((10*(this.Distance*5))/100);
        this.PrintFare(this.FarePrice);
       // return this.FarePrice;
    }

    PrintFare(price:number): void{
        console.log(`Fare: ${price}`);

    }
}


class ChildPass extends Fare{
    Discount: number;

    constructor(Origin: string,Destination: string, Distance: number){
       super(Origin,Destination, Distance);
       this.Discount = 50;
    }

    CalculateFare(): void{
        this.FarePrice =(this.Distance*5)-((this.Discount*(this.Distance*5))/100);
        this.PrintFare(this.FarePrice);
       // return this.FarePrice;
    }

    PrintFare(price:number): void{
        console.log(`Fare: ${price}`);

    }
}

class AdultPass extends Fare{
    Discount: number;

    constructor(Origin: string,Destination: string, Distance: number){
       super(Origin,Destination, Distance);
       this.Discount = 0;
    }

    CalculateFare(): void{
        this.FarePrice =(this.Distance*5)-((this.Discount*(this.Distance*5))/100);
        this.PrintFare(this.FarePrice);
       // return this.FarePrice;
    }

    PrintFare(price:number): void{
        console.log(`Fare: ${price}`);

    }
}

class PhysicallyHandicappedPass extends Fare{
    Discount: number;

    constructor(Origin: string,Destination: string, Distance: number){
       super(Origin,Destination, Distance);
       this.Discount = 40;
    }

    CalculateFare(): void{
        this.FarePrice =(this.Distance*5)-((this.Discount*(this.Distance*5))/100);
        this.PrintFare(this.FarePrice);
       // return this.FarePrice;
    }

    PrintFare(price:number): void{
        console.log(`Fare: ${price}`);

    }
}

class SeniorCitizenPass extends Fare{
    Discount: number;

    constructor(Origin: string,Destination: string, Distance: number){
       super(Origin,Destination, Distance);
       this.Discount = 60;
    }

    CalculateFare(): void{
        this.FarePrice =(this.Distance*5)-((this.Discount*(this.Distance*5))/100);
        this.PrintFare(this.FarePrice);
       // return this.FarePrice;
    }

    PrintFare(price:number): void{
        console.log(`Fare: ${price}`);

    }
}

let p: PhysicallyHandicappedPass = new PhysicallyHandicappedPass('Mangalore', 'Bangalore', 600);
p.CalculateFare();
