 
namespace Validation
{
    /// <reference path="f1.ts" /> #
    export class PinValidator implements StringValidator
    {
        isValid(s:string) : boolean
        {
            return s.length === 6;
        }
    
    }
    var p1 = new PinValidator();
    console.log(p1.isValid("527678"));
}