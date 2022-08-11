'use script' ;
// let date = new Date();

// document.write(date.getFullYear() + '<br>' ); // год
// document.write(date.getMonth() + '<br>' );    // месяц
// document.write(date.getDate() + '<br>' );     // день

// document.write(date.getHours() + '<br>' );    // часы
// document.write(date.getMinutes() + '<br>' );  // минуты
// document.write(date.getSeconds() + '<br>' );  // секунды

// ведите на экран текущий день. 

// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
// Используйте для всех частей даты (кроме года)
//  созданную нами функцию для добавления нуля при необходимости. 

// let date = new Date();

// function addZero(num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }
// let arr = [ 
//     date.getHours() , 
//     date.getMinutes() ,
//     date.getSeconds() , 
//     date.getDate(), 
//     date.getMonth(),
//     date.getFullYear()
//  ]

// let [ a , b ,c , d , e , f ] = arr ;

// +function func ( arrNum )
// {
//     let res = arrNum.map(addZero)
//     let [ a , b ,c , d , e , f ] = res ;
//     document.write
//     (`
//     ${a}:${b}:${c} || ${d}.${e}.${f}
//     `)
// }(arr);

// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.
// let date = new Date();
// let arr = [ 
//     date.getDate(), 
//     date.getMonth(),
//     date.getFullYear()
//  ] 
//  let [a , b , c] = arr ;
//  let str = arr.join('-');
// console.log(str);

// let k = str.split('-').reverse().join('/');
// console.log(k);

// let date = new Date();
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);

//  Пусть дан следующий массив:
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// Выведите с помощью этого массива название текущего месяца.

// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// let date = new Date();
// let mons = date.getMonth() ;
// console.log(months[mons]);

// Возможность задания момента времени можно использовать, 
// например, для того, чтобы узнать день недели за определенную дату: 

// let date = new Date(1988, 31, 8); // установим 5 ноября 2025 года
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);

// let date = new Date(2025, 1, 1);
// console.log(date.getTime());
// let i = date.getTime() ;
// let res = ((((i /1000)/60)/60)/24)/365 ;
// console.log(res);

// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года. 
// let a = new Date(2000 , 1 , 10) ;
// let b = new Date(1988 , 3 , 1)  ;

// let func = (n) => { return n.getTime()} ;

// let res = Math.trunc(((((func(a) - func(b)) /1000)/60)/60)/24 );
// console.log(res);

// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

// let a = new Date() ;
// let b = new Date(1988 , 8 , 31)  ;
// let func = (n) => { return n.getTime()} ;

// let res = Math.trunc(((((((func(a) - func(b)) /1000)/60)/60)/24)/365)*12);
// console.log(res);


// let now  = new Date();
// let date = new Date(2015, 4, 25, 12, 59, 59);

// let diff = now - date; // вычитаем два объекта с датами друг от друга
// console.log(diff);     // увидим разницу в миллисекундах

// let a = new Date() ;
// let b = new Date(1988 , 8 , 31) ;
// let c = a - b ;
// console.log(c);

// let res = Math.trunc((((c /1000)/60)/60)/24);
// console.log(res);
// res = Math.trunc((((((c/1000)/60)/60)/24)/365)*12) ;
// console.log(res);
// res = Math.trunc(((((c/1000)/60)/60)/24)/365) ;
// console.log(res);

// Оформите этот способ решения проблемы в виде функции, которая параметрами будет принимать 
// месяц и год и возвращать номер последнего дня этого месяца. 



// let f = ( y ,m ) => 
// {
//     let a = new Date (y , m  ,0) ;
//     let res = (a.getDate());
//     return console.log(res);

//  };
//  f(1988 , 2);

// Определите, какой день недели будет в последнем дне пятого месяца 2025 года. 
// let f = ( y ,m  ,v) => 
// {
//     let a = new Date (y , m -1 , v) ;
//     let res = (a.getDay());
//   console.log(res);
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     res = days[res] ;
//     return console.log(res);

//  };
//  f(2022 , 12, 31 );

// Сделайте функцию checkDate, которая будет выполнять описанную проверку.
//  Пусть функция возвращает true, если дата корректна и false,
//  если нет. Пример работы этой функции для 31 января и 32 января: 


// function checkDate (year, month , day)
// {
//     let a = new Date(year, month , day);
//     if (a.getFullYear() == year && a.getMonth() == month && a.getDate() == day) {
//       return true ;
//     } else {
//         return false ;
//     }
// }
// console.log(checkDate(2025, 0, 31)); // выведет true
// console.log(checkDate(2025, 0, 32)); // выведет false

// Определите, какой день недели будет 31 декабря текущего года. 
// let k = new Date();
// let data = new Date(k.getFullYear(),-1,31);
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// let day = data.getDay()+1;
// let res = days[day];
// console.log(res);

// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени. 

// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1, 12);
// let date1 = new Date() ;
// let res = Math.trunc(((((date1 - date)/1000)/60)/60));
// console.log(res);

// Определите, сколько часов прошло между началом дня и текущим моментом времени. 
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// let res = Math.trunc(((((now - date)/1000)/60)/60));
// console.log(res);

// Определите, сколько часов осталось до конца дня. 
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() ,24);
// let res = Math.trunc(((((date- now)/1000)/60)/60));
// console.log(res);

// Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января
//  в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье. 
// let now  = new Date();
// let sum = 0
// let arr = [] ;


// for (let year = 2000; year <= now.getFullYear(); year ++) 
// {
// 	let date = new Date(year, 0 , 1);

	
// 	if (date.getDay() == 0) {
// 		sum += 1
//         arr.push(year) ;
// 	}
// }
//     console.log(sum);
//     console.log(arr);

// let date = '01-20';

// if (date >= '01-01' && date <= '03-08') {
// 	console.log('1 промежуток');
// }

// if (date >= '03-09' && date <= '06-17') {
// 	console.log('2 промежуток');
// }

// if (date >= '06-18' && date <= '12-31') {
// 	console.log('3 промежуток');
// }

// Получите объект с датой, содержащий текущий момент времени. 
// Получите объект с датой, содержащий полдень текущего дня.
//  Сравните два этих объекта и определите, был ли уже полдень или нет. 

// let a = new Date() ;
// let b = new Date(a.getFullYear (),a.getMonth() ,a.getDate(), 12) ;
// if (a > b) {
//     console.log('yes');
// }else{
//     console.log('no');
// }

// Получите объект с датой, содержащий текущий момент времени. Получите объект 
// с датой, содержащий 15 число текущего месяца.
//  Сравните два этих объекта и определите, прошла ли уже половина месяца или нет.
// let a = new Date() ;
// let b = new Date( a.getFullYear (),a.getMonth() ,15 ) ; 

// if (a > b) {
//     console.log('yes');
// }else{
//     console.log('no');
// }