// add your solutions here

// Array, Object, and Functions examples

// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

arr = [-3, -2, -1, 0, 1, 2, 3,]

function positiveNumbers(array) {
    return array.filter(value => value > 0);
    
}

console.log(positiveNumbers(arr))

// Even Numbers - Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array. 

// 1. Create the array to look through.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function evenNumbers(arr) {

// // 2. Use filter to iterate over each value in the array. Check the values first to make sure they are even.

evenNumber = arr.filter(number => number % 2 !== 1);

// // 3. return the new array 

return evenNumber;

}

// // 4.  call the evenNumbers function 

console.log(evenNumbers(arr));


// Square the Numbers - Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. 


// 1. create the array.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. create squareNumbers function and pass in the array as an argument.

function squareNumbers(array) {

    // 3. Go over each value, squaring each value with my square function, and mapping it into a new array.
    
const squares = arr.map(square => Math.sqrt(square));
    return squares;
}

console.log(squareNumbers(arr));


// Cities 1 - Write a function which takes an array of city objects like such:

// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 }
//   ];
//   as input and returns a new array containing the cities whose temperature is cooler than 70 degrees.



var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0},
];

// // 1. Write the coolCities function and pass in the 'cities' array as an argument.

function coolCities(cool) {

// // 2. scan through the cities array, filtering out cities with the desired temp range.

return cool.filter(myObject => myObject.temperature < 70);

// }

console.log(coolCities(cities));

// Cities 2 - Write a function which takes an array of city objects like the above problem as input and returns an array of the cities names. 



var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 },
];

// 1. Write a function which takes in an array of city objects.

function cityNames(array) {

// // 2. Iterate over the city values, only returning the city names. (Use map)
    
let names = cities.map(myObject => myObject.name)
return names;

}

// // 4. call the cityNames function.

console.log(cityNames(cities))



3 times - Given this function: 

function call3Times(fun) {
    fun();
    fun();
    fun();
}

// Use the call3Times function to print "Hello, world!" 3 times

function helloWorld() {
    console.log('Hello, World!');
}

function call3Times(fun) {
    fun();
    fun();
    fun();
}

call3Times(helloWorld);

// Good Job! Given an array of people's names
// print out 'Good job, {name} for each person's name, one on a line. 

// 1. Create an array assigned to 'people'

const people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

// 2. Create a function that goes over each value, attaching each name to the phrase, "Good job, x!"

function goodJob(array) {
const greeting = people.map(people => `Good job, ${people}!`);
    return greeting;
}
// 3. print the results.

console.log(goodJob(people));

// You will write a function `callNTimes` that takes two arguments: times as a number, and fun as a function. It will call
// that function for that many times.

function helloWorld() {
    console.log('Hello, World!');
}
function callNTimes(times, fun) {
for(i = 0; i < times; i++) {
    fun();

}
}
callNTimes(5, helloWorld);

// Str Multiply 

function strMultiply(str, times) {
    let sentence = '';
    range(0, times).forEach( arr => sentence += str);
    return sentence;
}


function range(min, max) {
    var arr = [];
    for (var i = min; i < max; i++) {
        arr.push(i);
    }
    return arr;
}



console.log(strMultiply('abc', 5));

// Sort an array of strings such as the array of names given above. Sort them alphabetically. 

const people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];


const aNames = people.sort((a, b) => (a.length - b.length));

console.log(aNames);


// Sort an a array of products by price 

const products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
];

const productPrices = products.sort((a, b) => a.price - b.price);

console.log(productPrices);