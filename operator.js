//1.  String concatenation
console.log('my' + 'cat');
console.log(1 + '2' );
console.log(`string literals: 
'''
1 + 2 = ${1 + 2}`);

console.log('ellise\'s book');


//2.Numberic operators
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(5 % 2);
console.log(5 ** 2);


//3.Increment and decrement operators
let counter = 2;

const preIncrement = ++counter;
//counter = counter +1 ;
//preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter : ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter : ${counter}`);


//4.Assignment operators
let x = 3;
let y= 6;
console.log(x += y); //x = x + y
console.log(x -= y);
console.log(x *= y);
console.log(x /= y);

//5.Comparision operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);
// console.log(10 != 6);

//6. Logical operators : ||(or), &&(and), !(not)
const value1 = true;
// const value1 = false;
const value2 = 4 < 2;

// || or
console.log(`or: ${value1 || value2 || check()}`);

// && and
console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for(let i=0;i<10;i++){
        console.log('*-*');
    }
    return true;
}
// ! not 
console.log(!value1);

//7. 연습
const num1= (34 % 6) <5;
const num2= 56>100;
console.log(`num1 || num2: ${num1 || num2}`);
console.log(`num1 && num2: ${num1 && num2}`);
console.log(`!num1: ${!num1}`);

//7. Equality
const stringFive = '5';
const numberFive = 5;
//== with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//=== no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
console.log();
//object equality by reference
//메모리에 다른 reference 때문에 (위치) false, reference가 같으면 true로 변환
// const e1 = { name: 'ellie'};
// const e2 = { name: 'ellie'};
// const e3 = e1;
// console.log(e1 == e2);
// console.log(e1 === e2);
// console.log(e1 === e3);

//equality - puzzler
console.log(0 == false);//t
console.log(0 === false);//f
console.log('' == false);//t
console.log('' === false);//f
console.log(null == undefined);//t
console.log(null === undefined);//f
