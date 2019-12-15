// Vehicle abstract class

abstract class Vehicle {

    private RegNumber: string;

    constructor(RegNumber: string) {
        this.RegNumber = RegNumber;
    }

    abstract getNumberOfWheels(): number;

    get getRegNo(): string {
        return this.RegNumber;
    }

    public equals(obj: Vehicle): boolean {
        return this.getRegNo === obj.getRegNo;
    }

}


//TwoWheeler class
class TwoWheeler extends Vehicle {

    constructor(RegNumber: string) {
        super(RegNumber);
    }
    getNumberOfWheels(): number {
        return 2;
    }

   
}


//ThreeWheeler class
class ThreeWheeler extends Vehicle {

    constructor(RegNumber: string) {
        super(RegNumber);
    }
    getNumberOfWheels(): number {
        return 3;
    }

    
}

//FourWheeler class
class FourWheeler extends Vehicle {

    constructor(RegNumber: string) {
        super(RegNumber);
    }
    getNumberOfWheels(): number {
        return 4;
    }

    
}



//Class Car 
class Car extends FourWheeler{

    constructor(RegNumber: string){
        super(RegNumber);
    }

    
    displayDetails(): void{
        let noOfWheels = this.getNumberOfWheels();
        console.log(`
    Register number of the car: ${this.getRegNo}
    No of wheels in the car: ${noOfWheels}`)
    }

}

//Class Auto
class Auto extends ThreeWheeler{

    constructor(RegNumber: string){
        super(RegNumber);
    }

    displayDetails(): void{
        let noOfWheels = this.getNumberOfWheels();
        console.log(`
    Register number of the auto: ${this.getRegNo}
    No of wheels in the auto: ${noOfWheels}`)
    }

}


//Class MotorBike
class MotorBike extends TwoWheeler{

    constructor(RegNumber: string){
        super(RegNumber);
    }

    displayDetails(): void{
        let noOfWheels = this.getNumberOfWheels();
        console.log(`
    Register number of the motorbike: ${this.getRegNo}
    No of wheels in the motorbike: ${noOfWheels}`)
    }

}


let car1: Car = new Car('123ABC');
car1.displayDetails();
let car2: Car = new Car('123CBA');
car2.displayDetails();
console.log(`    
    Are car1 and car2 same: ${car1.equals(car2)}`);
console.log(`    Are car1 and and a vehicle with register number '123ABC' same?: ${car1.equals(car1)}`);


let auto1: Auto = new Auto('2345TY');
auto1.displayDetails();

let motorbike1: MotorBike = new MotorBike('768UIY');
motorbike1.displayDetails();

