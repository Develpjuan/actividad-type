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