"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*Leer y escribir un archivo*/
var fs = require("fs");
//Read JSON file
function readJsonFile(path) {
    var data = fs.readFileSync(path, 'utf-8');
    return JSON.parse(data);
}
//Write JSON file
function writeJsonFile(path, products) {
    var data = JSON.stringify(products, null, 2);
    fs.writeFileSync(path, data, 'utf-8');
}
var filePath = './products.json';
//Read data 
var products = readJsonFile(filePath);
//Modify a product
products[0].price = 99.99;
//Write changes
writeJsonFile(filePath, products);
console.log('File updated successfully');
