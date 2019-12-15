namespace Validation
{
    //export members to rpovide visibility outside the namespace
    export interface StringValidator
    {
        isValid(s : string): boolean;
    }

    export class PincodeValidator implements StringValidator
    {
        isValid(s : string): boolean
        {
            return s.length === 6;
        }
    }

    export class UsernameValidator implements StringValidator
    {
        isValid(s : string): boolean
        {
            return s.indexOf(' ') <0;
        }
    }

    var pv = new PincodeValidator();
    pv.isValid("500006");
}

var pv1 = new Validation.PincodeValidator();
pv1.isValid("5000009");

namespace ns 
{
    var pv3 = new Validation.PincodeValidator();
    console.log(pv3.isValid("5992393"));
}