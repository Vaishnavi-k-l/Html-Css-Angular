interface IMobile
{
    dialOnMobile();
}

interface ITelephone
{
    dialOnTelephone();
}

abstract class Mobile implements IMobile, ITelephone
{
    dialOnMobile()
    {
        console.log("Calling from mobile");
    }

    dialOnTelephone()
    {
        console.log("Calling from telephone");
    }
    abstract ConnectBluetooth();
    abstract Dial();
    abstract GetEMICode();
    abstract WifiConnection();
    abstract Recieve();
    abstract SendMessage();
}

class Samsung extends Mobile
{
    ConnectBluetooth()
    {
        console.log("Bluetooth being connected on Samsung");
    }

    Dial()
    {
        console.log("Dialing from Samsung");
    }

    GetEMICode()
    {
        console.log("Dial #123 to get EMI code on Samsung");
    }

    WifiConnection()
    {
        console.log("Enter your wifi password on Samsung to connect to wifi");
    }

    Recieve()
    {
        console.log("Message recieved on Samsung");
    }
    SendMessage()
    {
        console.log("Message sent on Samsung");
    }
}

class Nokia extends Mobile
{
    ConnectBluetooth()
    {
        console.log("Bluetooth being connected on Nokia");
    }

    Dial()
    {
        console.log("Dialing from Nokia");
    }

    GetEMICode()
    {
        console.log("Dial #123 to get EMI code on Nokia");
    }
    WifiConnection()
    {
        console.log("Enter your wifi password on Nokia to connect to wifi");
    }
    Recieve()
    {
        console.log("Message recieved on Nokia");
    }
    SendMessage()
    {
        console.log("Message sent on Nokia");
    }
}

class Iphone extends Mobile
{
    ConnectBluetooth()
    {
        console.log("Bluetooth being connected on IPhone");
    }
    Dial()
    {
        console.log("Dialing from Iphone");
    }
    GetEMICode()
    {
        console.log("Dial #123 to get EMI code on IPhone");
    }
    WifiConnection()
    {
        console.log("Enter your wifi password on IPhone to connect to wifi");
    }
    Recieve()
    {
        console.log("Message recieved on Iphone");
    }
    SendMessage()
    {
        console.log("Message sent on Iphone");
    }

}

class SamsungA50 extends Samsung
{
    price: number = 15000;

}

class Nokia900 extends Nokia
{
    price: number = 20000;
}

let  s1 : SamsungA50 = new SamsungA50();
console.log("Price of A50 is "+ s1.price);
s1.ConnectBluetooth();
s1.Dial();
s1.dialOnMobile();