abstract class Vehicle
{
    regNumber : number;

    constructor(regnum : number)
    {
        this.regNumber = regnum;
    }

    abstract getNumberOfWheels() : number;
    abstract get registerNum() : string;
}

class TwoWheeler extends Vehicle
{
    getNumberOfWheels() : number
    {
        return 2;
    }

    get registerNum(): string
    {
        return "str";
    }
}


class ThreeWheeler extends Vehicle
{
    getNumberOfWheels() : number
    {
        return 3;
    }

    get registerNum(): string
    {
        return "str";
    }
}


class FourWheeler extends Vehicle
{
    getNumberOfWheels() : number
    {
        return 4;
    }

    get registerNum(): string
    {
        return "str";
    }
}

class Car extends FourWheeler
{
    constructor(regno : number)
    {
        super(regno);
    }
}