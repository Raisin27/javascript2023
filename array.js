//javascript: dynamically typed language
//배열: 같은 타입의 자료를 모아서
//Array
//1. Declaration
const arr1 = new Array();
const arr2= [1, 2];

//2. Index position
const fruits = ['apple','banana'];
console.log(fruits);//[ 'apple', 'banana' ]
console.log(fruits.length);//2
console.log(fruits[0]);//apple
console.log(fruits[1]);//banana
console.log(fruits[2]);//undefined
console.log(fruits[fruits.length - 1]);//banana
console.clear();

//3. Looping over an array
//print all fruits
//a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//b. for of
for(let fruit of fruits){
    console.log(fruit);
}

//c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));
fruits.forEach((fruit) => console.log(fruit));

//4.  Addition, deletion, copy
//push: add an item to the end
fruits.push('strawberry','peach');
console.log(fruits);//[ 'apple', 'banana', 'strawberry', 'peach' ]

//pop: remove an item from the end
fruits.pop();
console.log(fruits);//[ 'apple', 'banana', 'strawberry' ]

//unshift: add an item to the beginning
fruits.unshift('strawberry','lemon');
console.log(fruits);//[ 'strawberry', 'lemon', 'apple', 'banana', 'strawberry' ]
//shift: remove an item to the beginning
fruits.shift()
fruits.shift();
console.log(fruits);//[ 'apple', 'banana', 'strawberry' ]

//note!! unshift, shift are slower than push, pop

//splice: remove an item by index position
fruits.push('strawberry','peach','lemon');
console.log(fruits);//[ 'apple', 'banana', 'strawberry', 'strawberry', 'peach', 'lemon' ]
fruits.splice(1, 1);
console.log(fruits);//[ 'apple', 'strawberry', 'strawberry', 'peach', 'lemon' ]

fruits.splice(1, 1, 'greenapple', 'melon');
console.log(fruits);//[ 'apple', 'greenapple', 'melon', 'strawberry', 'peach', 'lemon' ]

//concat: combine two arrays
const fruits2 = ['grape','coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);//['apple','greenapple','melon','strawberry','peach','lemon','grape','coconut']

//5. Searching
//find the index
console.clear();
console.log(fruits);//[ 'apple', 'greenapple', 'melon', 'strawberry', 'peach', 'lemon' ]
console.log(fruits.indexOf('apple'));//0
console.log(fruits.indexOf('melon'));//2
console.log(fruits.indexOf('coconut'));//-1

//includes
console.log(fruits.includes('melon'));//true
console.log(fruits.includes('coconut'));//false

//lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);//['apple','greenapple','melon','strawberry','peach','lemon','apple']
console.log(fruits.indexOf('apple'));//0
console.log(fruits.lastIndexOf('apple'));//6

