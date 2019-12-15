var Book = /** @class */ (function () {
    function Book(name, author) {
        this.name = name;
        this.author = author;
    }
    Book.prototype.show = function () {
        console.log("Book name: " + this.name);
        console.log("Author: " + this.author);
    };
    return Book;
}());
var obj = new Book("Let us C", "Kanitkar");
obj.show();
