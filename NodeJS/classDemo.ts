class Book
{
    name: string;
    author: string;
    constructor(name: string, author: string)
    {
        this.name = name;
        this.author= author;
    }
    show()
    {
        console.log(`Book name: ${this.name}`);
        console.log(`Author: ${this.author}`);
    }
}

let obj: Book = new Book("Let us C", "Kanitkar");
obj.show();