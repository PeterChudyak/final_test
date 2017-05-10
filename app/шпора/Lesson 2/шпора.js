// Вирази

i; // ідентифікатори
34; // Літерали, також 'string' або false
this; // this
console.log();

// Назви можуть починатися з БУКВИ, $ або _
//---------------- Типи даних ----------------

var myNum = 345,
	 myText = 'some',
	 myBool = true,
	 myNull = null,
	 myUndef = undefined;

// 	 myVar = NaN; // Число
// 	 myVar = Infinity; // Число
//		console.log(myText[3]) //e

 var myArray = [1,2,3,'stop this lesson'], // Масив
 	myFunc = function(){ // Функція
 		alert('Hello! Im tiring of your JS');
 	},
 	myObj = {msg:'Hello'}, // Об’єкт
	regexp = /\*/g; // Регулярні вирази

//---------------- Логічні значення false, всі інші - true ----------------
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));

//Увага!!!
//console.log(Boolean(Infinity)); //true 

//---------------- Оператори --------------
var i = 21;

console.log(5+4); //9
console.log('5'+4); //54
console.log(+4+'5'); //45
console.log(+'5'+4); //	9
console.log(5-4); //1
console.log(5/3);	//1.6667

console.log (i++); //спочатку бере значення, потім збільшення
console.log (++i); //спочатку збільшення, потім значення

console.log (!!'0'); //true, окрім того переведення в логічну змінну!

console.log(undefined == null); //true
console.log('0' == false); //true

i+=5; //i=i+5;
i-=5; //i=i-5;
i*=5; //i=i*5;
i/=5; //i=i/5;

// Таблиця пріоритету операторів 
'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence';

//----------------  Області видимості --------------

var i = 5; // глобальні

function hi(){
	var i = 3; //локальні, тут var ОБОВ’ЯЗКОВЕ!
	console.log(i);//3
}

//---------------- Об’єкт Math --------------

Math.pow(x,y);// x в степені y
Math.E;// Число E 
Math.PI; //Число Пі

Math.random(); //генератор випадкових чисел

Math.floor(4.55);//4 відкидання дробової частини
Math.round(4.55);//5 округлення
