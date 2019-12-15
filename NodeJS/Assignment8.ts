class Advertisement
{
    Id: number;
    description: string;

    constructor(id: number, des: string)
    {
        this.Id = id;
        this.description = des;
    }

    display()
    {
        console.log("ID is: " + this.Id);
        console.log("Description: " + this.description);
    }
}

class MatrimonilAdd extends Advertisement
{
    gender: string;
    age: number;
    occupation: string;
    constructor(Id:number, desc: string, gender: string, age: number, occupation: string)
    {
        super(Id, desc);
        this.gender = gender;
        this.age = age;
        this.occupation = occupation;
    }

    display()
    {
        super.display();
        console.log("Gender: " + this.gender);
        console.log("Age: " + this.age);
        console.log("Occupation: "+ this.occupation);
    }
 
}

class RealEstateAdd extends Advertisement
{
    estateType: string;
    price: number;
    size: number;
    constructor(Id:number, desc: string, type: string, price: number, size: number)
    {
        super(Id, desc);
        this.estateType = type;
        this.price = price;
        this.size = size;
    }
    display()
    {
        super.display();
        console.log("Estate Type: " + this.estateType);
        console.log("Price: " + this.price);
        console.log("Size: "+ this.size)+ "acre";
    }
    
}

let mobj : MatrimonilAdd = new MatrimonilAdd(1, "A bride", "Female", 27, "Enginner");
mobj.display();

let esobj: RealEstateAdd = new RealEstateAdd(2, "Coffee estate","Coffee", 10000, 2000);
esobj.display();
