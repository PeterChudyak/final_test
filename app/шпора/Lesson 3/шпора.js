//Розташування скрипта на початку або в кінці документа - немає особливого значення.
//Якщо в кінці - працює дещо швидше, і DOM уже доступний!

//Асинхронне завантаження опція async тега <script>  - завантаження відбувається одночасно з усіма іншими компонентами.
//У випадку асинхронної загрузки бажано використовувати перевірку на повне завантаження DOM:

window.onload = function(){ // перевірка на завантаженість повного DOM

	 // ващ код тут
}

// --------------- Глобальний об’єкт window!!!!
// Усі глобальні змінні і функції є властивостями і методами об’єкту window

//приклади:

window.console.log('test');
window.alert('Hi');


//--------------- Функції виводу повідомлень --------
alert('Hi'); //Виводить діалогове вікно з повідомленням 
confirm('Hi'); //Виводить діалогове вікно з повідомленням і вертає true або false
prompt('Hi');  //Виводить діалогове вікно з полем для вводу. Вертає введений string або udefined


// ----------- Функції пошуку елементів на сторінці ---------


document.getElementById(); // повертає ОДИН елемент!
document.getElementsByTagName();
document.getElementsByName();
document.getElementsByNameNS();
document.querySelectorAll(); // працює у відносно нових браузерах.

// Приклад пошуку елемента та запису в нього коду чи тексту.
// У innerHTML підтримуєтья HTML код, який одразу рендериться!
document.getElementsByClassName('content')[0].innerHTML = "<h1>Hello</h1>";

// ---------  http://jshint.com/  - валідатор коду. Також дає рекомендації щодо оформлення коду.

// --------- Логічні вирази ----------------
// --------- if (вираз) інструкція; --------

if (true) console.log('True'); // виводить True
if (false) ; // допускається порожня інструкція
	else console.log('False'); 

var x=112;
if (x<100) {
	console.log('Var is less than 100');
} else if (x>100) {
	console.log('Var is more than 100');
} else 
	console.log('Var is equal 100');

// --------- Логічний оператор switch; --------
var x='John';
switch(x){
	case 'John': console.log('Your native city is London');break;// якщо не поставити break - виконаються також всі комнди нижче.
	case 'Fedor': console.log('Your native city is Moscow');break;
	case 'Petro': console.log('Your native city is Lviv');break;
	default: console.log('Maybe you r from Madagaskar');
}

// Реалізація вищенаведеного прикладу з if через оператор switch
switch (true) {
	case (x<100): console.log('Var is less than 100');break; 
	case (x>100): console.log('Var is more than 100');break;
	case (x==100): console.log('Var is equal 100');break;
	default:  console.log('THis var is crazy');
}

// --------- Тернарний (ternary) оператор ?: ———— 
var x=112;
console.log (x<100 ? 'Var is less than 100' : x >100 ? 'Var is more than 100' : 'Var is equal 100');//виведе 'Var is more than 100'

// --------- Цикли --------
// for (ініціалізація; перевірка умови; виконання комади кожної ітерації)
for (i=1; i<=100; i++){
 console.log (i);
}

for(;;); // допускаються порожні інструкції, дана команда створює вічний цикл

for (i=10; i--;){ //цикл який робить 10 (або скільки потрібно) ітерацій
	console.log(i)
}

// while(вираз)// якщо вираз true - цикл виконується
while (i<=10) { 
	console.log(++i);
}

do {
	console.log(++i);
} while (i<=10);// цикл з перевіркою умови після тіла циклу. Завджи виконується мінімум 1 раз. 

// --------- Функції --------
// У JS функції є об’єктами

var myFunc1 = function(){ //оголошення функції через присвоєння
	var sum=0;
	for(i=0;i<=arguments.length-1;i++){//arguments - службовий масив, який містить всі аргументи виклику функції
		sum +=Number(arguments[i]);
	}
	return sum; //якщо потрібно повернути якесь значення. Інакше функція завжди повертає undefined
}

function myFunc(){//класичне оголошення функціїя
	console.log(arguments);
	console.log(Number(arg1)+Number(arg2));
}

var a=231,b=432;
myFunc1(a,b,2,3,4,5,6); //запуск функції
