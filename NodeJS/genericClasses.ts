class KeyValuePair<T, U>
{
    private key : T;
    private value : U;
    setKeyValue(key: T, value: U): void
    {
        this.key = key;
        this.value = value;
    }

    display(): void
    {
        console.log(`key: ${this.key}, value: ${this.value}`);
    }
}

let obj = new KeyValuePair<number, string>();
obj.setKeyValue(1, "Vaish");
obj.display();

let obj2 = new KeyValuePair<string, string>(); 
obj2.setKeyValue("E1", "Advika");
obj2.display();