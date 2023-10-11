const obj1 = {};
const obj2 = new Object();

const ellie = { name: 'ellie', age:34};
console.log(ellie);
ellie.hasJob = true;

console.log(ellie);
//
console.log(ellie.name);
console.log(ellie['name']);
//
function printValue(obj, key){
    console.log(obj[key]);
}
printValue(ellie, 'name');

//
console.log('name' in ellie);

//for-in for-of
//for(key in obj){}
for (key in ellie){
    console.log(key);
}

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    //methods
    speak(){
        console.log(`${this.name} : hello`);
    }
}

const John = new Person('john', 30);
console.log(John.name);
console.log(John.age);
John.speak();


//GETTER vs SETTER
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = value<0 ? 0: value;

    }
}

const user1 = new User('Steve', ' Job', -1);
console.log(user1.age);

//Fields(public, private)
class Experiment{
    publicField = 2;
    // privateField =0;
    
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//static properties and methods
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;

    }
    static printPublisher(){
        console.log(Article.publisher);

    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//Inheritance
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('red triangle')
    }
    getArea(){
        return(this.width * this.height) /2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//instance of
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);