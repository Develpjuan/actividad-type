function greet(name: string) {
    return `Hello, ${name}`;
}

let username = "Juan";
console.log(greet(username));

/*Filtrar numeros pares de un arreglo*/
function filterPairs(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const pairs = filterPairs(numbers);
console.log(pairs);

/*suma de las diagonales de una matriz*/
function sumDiagonals(matrix: number[][]): { diagonalPrincipal: number, diagonalSecondary: number} {
    let sumPrincipal = 0;
    let sumSecondary = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumPrincipal += matrix[i][i];
        sumSecondary += matrix[i][matrix.length - 1 - i];
    }

    return { diagonalPrincipal: sumPrincipal, diagonalSecondary: sumSecondary };
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const { diagonalPrincipal, diagonalSecondary } = sumDiagonals(matrix);
console.log(`Sum diagonal Principal: ${diagonalPrincipal}`);

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

/*Leer y escribir un archivo*/
import * as fs from 'fs';

interface Product {
    id: number;
    name: string;
    price: number;
}

//Read JSON file
function readJsonFile(path: string): Product[] {
    const data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}

//Write JSON file
function writeJsonFile(path: string, products: Product[]): void {
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync(path, data, 'utf-8');
}

const filePath = './products.json';

//Read data 
let products = readJsonFile(filePath);

//Modify a product
products[0].price = 99.99;

//Write changes
writeJsonFile(filePath, products);

console.log('File updated successfully');

/*ordenar un arreglo de objetos*/
interface Person {
    name: string;
    age: number;
}

function sortByAge(people: Person[]): Person[] {
    return people.sort((a, b) => a.age - b.age);
}

const people: Person[] = [
    {name: "John", age: 30},
    {name: "Anna", age: 25},
    {name: "Louis", age: 35}
];

const peopleOrdered = sortByAge(people);
console.log(peopleOrdered);