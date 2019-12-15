interface I1
{
    id1: number;
    fun1() : void;
}

interface I2 extends I1
{
    id2: number;
    fun2(): void;
}

interface I4
{
    id4: number;
}

class C5
{
    id5 : number;
}

class C3 extends C5 implements I2, I4
{
    id1 : number;
    id2 : number;
    id3 : number;
    id4 : number;

    fun1(): void{
        console.log(this.id1);
    }

    fun2() : void
    {
        console.log(this.id2);
    }

    fun3() : void
    {
        console.log(this.id3);
    }
}