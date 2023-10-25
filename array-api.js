// ctrl click-> api checking
//Q1. make a string out of an array
{
    const fruits = ['apple','banana','arange'];
    const result =  fruits.join();
    console.log(result);//apple,banana,arange
    const result1 =  fruits.join('^');
    console.log(result1);//apple^banana^arange
}

//Q2. make an array out of a string
{
    const fruits = 'apple,kiwi,banana,cherry';
    const result = fruits.split(',',2);
    console.log(result);//[ 'apple', 'kiwi' ]

}
//Q3. make this array look like this: [5,4,3,2,1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);//[ 5, 4, 3, 2, 1 ]
}
//Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5);
    // const result = array.splice(2);
    console.log(result);//[ 3, 4, 5 ]
    // console.log(array);//[ 1, 2 ]
    console.log(array);//[1, 2, 3, 4, 5]
    
}
class Student {
    constructor(name, age, enrolled, score){
        this.name=name;
        this.age=age;
        this.enrolled=enrolled;
        this.score=score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
]
//Q5. find a student  with the score 90
//find: searching, 
//find(함수)--함수가 true때 실행
{
    const result = students.find((student, index) =>  student.score === 90);//true
    console.log(result);//Student { name: 'C', age: 30, enrolled: true, score: 90 }
}
//.Q6. make an array of enrolled students