function sortByAge(people) {
    return people.sort(function (a, b) { return a.age - b.age; });
}
var people = [
    { name: "John", age: 30 },
    { name: "Anna", age: 25 },
    { name: "Louis", age: 35 }
];
var peopleOrdered = sortByAge(people);
console.log(peopleOrdered);
