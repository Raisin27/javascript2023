// 1. function declaration
function printHello(){
    console.log('부모님');
    console.log('hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@_@');
log(1234);

//2.Parameters
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters(added in ES6)
function showMessage(message, from="unknown"){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4. Rest parameters(added in ES6)
function printAll(...args){
    for(let i=0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg)=> console.log(arg));
}
printAll('dream','coding','ellie');

//5.Local scope
let globalMessage = 'global';//global variable
function printMessage(){
    let message='hello';
    console.log(message);//local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage);//에러: childMessage is not defined
}
printMessage();

//6.Return a value
function sum(a, b){
    return a + b;
}

const result = sum(1, 2);//3
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point > 10){
    //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic...
}

//7. Function Expression
const print = function(){
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//8. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }
    else{
        printNo();
    }
}
//anonymous function
//named function
//better debugging in debugger's stack traces
const printYes = function(){
    console.log('yes!');
}
const printNo = function(){
    console.log('no!');
}
randomQuiz('wrong',printYes, printNo);
randomQuiz('love you',printYes, printNo);
//arrow function
//always anonymous 
//const simplePrint = function(){
//    console.log('simplePrint');
//}
const simplePrint = () => console.log('simplePrint!');
const add = (a,b)=> a+b;
const simpleMultiply = (a,b) =>{
    return a * b;
}
//IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();
