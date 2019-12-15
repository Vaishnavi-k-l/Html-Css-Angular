class Fare
{
    origin: string;
    destination: string;
    farePrice: number = 1000;

    constructor(origin: string, dest : string)
    {
        this.origin = origin;
        this.destination = dest;
    }

    calculateFare()
    {
        console.log("Your farre amount is Rs." + this.farePrice);
    }

    printFare()
    {
        console.log("Your fare amount is Rs: " + this.farePrice);
    }
}

class SeasonalPass extends Fare
{
    month: string;
    switch(month)
    {
        case "Jan":
        case "Feb":
        case "Mar":
        case "Apr":
        case "May": console.log("You earned a seasonal discount");
                        this.farePrice = this.farePrice - 1000;
                        this.printFare();
                        break;
        case "Jun":
        case "July":
        case "Aug":
        case "Sep":
        case "Oct": 
        case "Dec":console.log("You earned a seasonal discount");
                        this.farePrice = this.farePrice - 2000;
                        this.printFare();
    }
}

class OneTime extends Fare
{
    printFare()
    {
        console.log("There are no current offers avaialable");
        super.printFare();
    }
}

class FreePass extends Fare
{

}

class StudentSeasonalPass extends SeasonalPass
{
    calculateFare()
    {
        console.log("You get a discount of 30%")
        this.farePrice = this.farePrice - (0.3* this.farePrice);
        super.printFare();
    }
    
}

class ChildPass extends Fare
{
    calculateFare()
    {
        console.log("You get a discount of 50%")
        this.farePrice = this.farePrice - (0.5 * this.farePrice);
        super.printFare();
    }
}

class AdultPass extends Fare
{
    printFare()
    {
        console.log("There are no offers avaialable");
        super.printFare();
    }
}

class PhysicallyHandicappedPass extends Fare
{
    calculateFare()
    {
        console.log("You get a discount of 40%")
        this.farePrice = this.farePrice - (0.4 * this.farePrice);
        super.printFare();
    }
}

class SeniorPass extends Fare
{
    calculateFare()
    {
        console.log("You get a discount of 60%")
        this.farePrice = this.farePrice - (0.6 * this.farePrice);
        super.printFare();
    }
}