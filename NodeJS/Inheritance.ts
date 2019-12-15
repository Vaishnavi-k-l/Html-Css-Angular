class Animal
{
    name:string;
    readonly color: string = "Golden";

    constructor(name:string)
    {
        this.name = name;
    }

    move(distanceInMeters: number = 0)
    {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal
{
    bark()
    {
        console.log(`Woof!`);
    }
}

const dog = new Dog(`Casper`);
dog.bark();
dog.move(10);

console.log(dog.color);
//dog.color = "black";  Readonly property cannot be assigned a value
