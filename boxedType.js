//1. 기본 자료형과 객체 자료형의 차이
///기본 자료형은 객체가 아니므로 속성과 메소드를 추가할 수 없음

///객체 자료형
let number = new Number(273);
let string = new String('안녕하세요');
let boolean = new Boolean(true);

//자료형을 출력
console.log(typeof number);//object
console.log(typeof string);//object
console.log(typeof boolean);//object

//2. Number 객체
//변수를 선언
let number1 = 273.5210332;

//출력: toFixed(x) 반로림 x: 자릿수 
console.log(number1.toFixed(1));//273.5
console.log(number1.toFixed(4));//273.5210

//3. String 객체

let string1 = 'abcdefg';
//자기 자신을 변경하지 않고 리턴하는 것뿐이므로 소문자 상태로 출력
//그래서 string= string.toUpperCase()

string1= string1.toUpperCase();
console.log(string1);//ABCDEFG

//3.2: indexOf() 메서드: 특정 문자열이 있는지 확인, 위치를 리턴함
///문자열이 포함되어 있지 않을 때는 -1을 리턴

//변수 선언
let string2 = '안녕하세요. 좋은 아침입니다.';

//문자열 내부에 '아침'이라는 문자열이 있는지 확인합니다.
if( string2.indexOf('아침') >=0 ){//true
    console.log('좋은 아침이에요...!');//좋은 아침이에요...!
}

//4. Date 객체
//5. Array 객체