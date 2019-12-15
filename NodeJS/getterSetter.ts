let passcode = 'secret passcode';
class Employee
{
    private _fullName : string = '';

    //Getter function
    get fullName(): string
    {
        return this._fullName;
    }

    //Setter function
    set fullName(newName: string)
    {
        this._fullName = newName;
    }
}