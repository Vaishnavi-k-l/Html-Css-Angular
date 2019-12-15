interface Person
{
    Fname:string;
    age? : number;

    introduce(lastname  : string) : void;
   // introduce(lastname  : string) => void; ALTERNATE SYNTAX

}

const p :Person =
{
    Fname : 'Vaish',
    age: 21,

    introduce(lastname: string) : void
    {
        console.log(`Hello, I am ${this.Fname} ${lastname} `);
        //console.log("Hello, I am " + this.Fname + " " + lastname );
    }
};

p.introduce('KL');
console.log(p.Fname);
