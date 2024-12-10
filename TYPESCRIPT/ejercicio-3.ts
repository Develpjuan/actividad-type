/*clase para representar un libro*/
class Book {
    title: string;
    author: string;
    year: number;

    constructor(title: string, author: string, year: number) {
        this.title = title,
        this.author = author,
        this.year = year;
    }

    showInfo(): void {
        console.log(`title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    isMoreRecentThan(anotherBook: Book): boolean {
        return this.year > anotherBook.year;
    }
} 

const book1 = new Book("One hundred Years of solitude", "Gabriel Garcia Marquez", 1967);
const book2 = new Book("Don Quixote", "Miguel de cervantes", 1605);

book1.showInfo();
console.log(book1.isMoreRecentThan(book2));