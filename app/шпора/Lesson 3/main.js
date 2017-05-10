//Тег скрипт на початку або в кінці документа. Асинхронне завантаження async

// --------------- Глобальний об’єкт window!!!!


//--------------- Функції виводу повідомлень --------
// console.log(window.alert('Hi'));
// console.log(window.confirm('Hi'));
// console.log(window.prompt('Hi'));


// ----------- Функції пошуку елементів на сторінці ---------


// document.getElementById(); // повертає ОДИН елемент!
// document.getElementsByTagName();
// document.getElementsByName();
// document.getElementsByNameNS();
// document.querySelectorAll();

// window.onload = function(){
// 	console.log(document.querySelectorAll('.header__menu li').length);
// }

// window.onload = function(){
// 	document.write('Allo!');
// }
//document.write('Allo!');
// document.getElementsByClassName('content')[0].innerHTML = "Hello";

// ---------  http://jshint.com/ --------

// --------- if (вираз) інструкція; --------

// if (true) console.log('True');
// if (false) ;
// 	else console.log('False');

var x='John';
// if (x<100) {
// 	console.log('Var is less than 100');
// } else if (x>100) {
// 	console.log('Var is more than 100');
// } else 
// 	console.log('Var is equal 100');

// switch(x){
// 	case 'John': console.log('Your native city is London');break;
// 	case 'Fedor': console.log('Your native city is Moscow');break;
// 	case 'Petro': console.log('Your native city is Lviv');break;
// 	default: console.log('Maybe you r from Madagaskar');
// }

// switch (true) {
// 	case (x<100): console.log('Var is less than 100');break; 
// 	case (x>100): console.log('Var is more than 100');break;
// 	case (x==100): console.log('Var is equal 100');break;
// 	default:  console.log('THis var is crazy');
// }

// Антонім до break - continue;

// --------- Тернарний (ternary) оператор ?: ———— 

// console.log (x<100 ? 'Var is less than 100' : x >100 ? 'Var is more than 100' : 'Var is equal 100');

// --------- Цикли --------
var i=1;
// for (i=1; i<=100; i++){
//  console.log (i);
// }
// for(;;);

// for (i=10; i--;){
// 	console.log(i)
// }
 
// while (i<=10) { 
// 	console.log(++i);
// }
// do {
// 	console.log(++i);
// } while (i<=10);

// --------- Функції --------

var a=231,b=432;

var myFunc1 = function(){ //оголошення функції через присвоєння
	var sum=0;
	for(i=1;i<=arguments.length-1;i++){
		sum +=Number(arguments[i]);
	}
	console.log(sum);
}

function myFunc(){//класичне оголошення функціїя
	console.log(arguments);
	console.log(Number(arg1)+Number(arg2));
}

myFunc1(a,b,2,3,4,5,6);


