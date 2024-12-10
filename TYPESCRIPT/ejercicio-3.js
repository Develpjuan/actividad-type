/*clase para representar un libro*/
var Book = /** @class */ (function () {
    function Book(title, author, year) {
        this.title = title,
            this.author = author,
            this.year = year;
    }
    Book.prototype.showInfo = function () {
        console.log("title: ".concat(this.title, ", Author: ").concat(this.author, ", Year: ").concat(this.year));
    };
    Book.prototype.isMoreRecentThan = function (anotherBook) {
        return this.year > anotherBook.year;
    };
    return Book;
}());
var book1 = new Book("One hundred Years of solitude", "Gabriel Garcia Marquez", 1967);
var book2 = new Book("Don Quixote", "Miguel de cervantes", 1605);
book1.showInfo();
console.log(book1.isMoreRecentThan(book2));
