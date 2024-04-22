'use strict'

// // Практика

// // Проверка на введение значения
// let number;

// do{
//     number = prompt('Введите число больше 100', 0)
// }  while(number <= 100 || number === null || number === 'String');


// function truncate(str, maxLength){
//     str = str.length
//     maxLength = 20

//     if(str > maxLength) {
//         return  (str.slice(0, 20) + '...' )
//     } else {
//         return str
//     }
// }

// alert(truncate('Hi guys my name is Hoach'))


// // Проверка на спам
// function checkSpam(str) {
//     str = str.toLowerCase()

//     if(str.includes('хуй') || str.includes('еблан') || str.includes('сука') || str.includes('гондон') || str.includes('гандон') || str.includes('пидарас')) {
//         return ('Вы спамите, поэтому будете заблакированы на 24 часа')
//     } else {
//         return true
//     }
// }

// alert(checkSpam('Ты Пидарас'))

// function censur(str) {
//     str = str.toLowerCase()

//     if(str.includes('хуй') || str.includes('еблан') || str.includes('сука') || str.includes('гондон') || str.includes('гандон') || str.includes('пидарас')) {
//         delete str.slice(0, 4);
//         return str;
//     }
// }

// alert(censur('Hello хуйсос Блять Сука БЕлАн'))

// let chislo = prompt('Введите число');
// let result;

// function chisloDelimoeNaSebya(a) {
// nextPrime:
// 	for(let i = 2; i <= a; i++) {
//         result = i;

//   	    for(let j = 2; j < i; j++) {
//     	    if(i % j == 0) continue nextPrime;
// 	    }
//         alert(result);
//  	}
// }
// console.log(chisloDelimoeNaSebya(chislo))


// DOM - дерево

const bodyElement = document.body;
const firstChild = bodyElement.firstChild;
const lastChild = bodyElement.lastChild;
const childNodes = bodyElement.childNodes;
const previousSiblingNode = bodyElement.previousSibling;
const nextSiblingNode = bodyElement.nextSibling;
const parentNode = bodyElement.parentNode;
const windowNavigator = window.navigator
const h1Element = document.getElementById('h1');
const children = bodyElement.children;
const items = document.querySelector('li')
const itemParentUl = items.closest('ul')
// let question = confirm('Хотите сказать привет мир?');
// let arr = ['tomato', '#fe4a49', '#2ab7ca', '#fed766', '#e6e6ea'];


// for(let child of children) {
//     console.log(child)
// }
// for(let link of children) {
//     if(link.matches('a[href$="zip"]')) {
//         alert(link.href)
//     }
// }

h1Element.style.background = 'tomato';
h1Element.style.color = 'yellow';
h1Element.style.padding = '20px';
h1Element.style.borderRadius = '10px';
h1Element.style.transition = '.2s ease'
h1Element.style.cursor = 'pointer'
h1Element.style.maxWidth = '300px'
h1Element.style.textAlign = 'center'

// h1Element.addEventListener('click', () => {
//   let delay = 2000;

//   setTimeout(function timer() {
//     if(h1Element.style.backgroundColor === 'tomato') {
//       h1Element.style.backgroundColor = '#000'
//       h1Element.textContent = 'You are best'
//       h1Element.style.maxWidth = '50%'
//     } else {
//       h1Element.style.backgroundColor = 'tomato'
//       h1Element.textContent = 'Hello best man in the world'
//       h1Element.style.maxWidth = '300px'
//     }
//     return setTimeout(timer, delay)
//   }, 0);
// })
// if(question === true) {
//     itemParentUl.innerHTML = 'Hello World!';

//     if(true) {
//         itemParentUl.style.color = 'tomato'
//         itemParentUl.style.background = '#000'
//         itemParentUl.style.padding = '20px'
//         itemParentUl.style.maxWidth = '50%'
//         itemParentUl.style.borderRadius = '10px'
//         itemParentUl.style.textAlign = 'center'
//         itemParentUl.style.fontSize = '30px'
//         itemParentUl.style.fontFamily = 'sans serif'
//     }
// }

// setInterval(() => h1Element.hidden = !h1Element.hidden, 1000)

// console.log(bodyElement.children[1])
// console.log(bodyElement.children[2].lastElementChild)
// // console.dir(document.body)

// let str = 'Hello';
// let iterator = str[Symbol.iterator]();

// while(true) {
//     let result = iterator.next();
//     if(result.done) break;
//     console.log(result.value)
// }

// let range = {
//     from: 0,
//     to: 5,

//     [Symbol.iterator]() {
//         this.current = this.from
//         return this
//     },

//     next() {
//         if(this.current <= this.to) {
//             return {done: false, value: this.current++}
//         } else {
//             return {done: true}
//         }
//     }
// }


// let arr2 = Array.from(range, num => num * num);

// console.log(arr2);

// let str = '𝒳😂';
// let chars = Array.from(str);

// console.log(chars[0]);
// console.log(chars[1]);
// console.log(chars.length);

// let str = '𝒳😂';
// let chairs = [];

// for(let chair of str) {
//     chairs.push(chair);
// }

// console.log(chairs)

// let slice = function(str, start, end) {
//     return Array.from(str).slice(start, end).join('')
// }
// let str = '𝒳😂hh';

// console.log(slice(str, 1, 4))

// Map - это коллекция/значение, как и объект. Но основное отличие в том, что Map позволяет использовать ключ любого типа


// let map = new Map();
// let john = {name: 'john'}
// let visitsCountMap = new Map;
// let recipeMap = new Map([
//     ['огурец', 500],
//     ['помидор', 350],
//     ['лук', 50]
// ])
// let obj = {
//     name: 'John',
//     age: 30
// }
// let map2 = new Map(Object.entries(obj))
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
// ])
// let map3 = new Map;


// for(let vegetable of recipeMap.keys()) {
//     console.log(vegetable)
// }
// for(let amount of recipeMap.values()) {
//     console.log(amount)
// }
// for(let entry of recipeMap.entries()) {
//     console.log(entry)
// }

// recipeMap.forEach((value, key, map) => {
//     alert(`${key}: ${value}руб.`)
// })

// visitsCountMap.set(john, 123);
// map.set(1, 'num1')
// .set('1', 'str1')
// .set(true, 'bool1');
// map2.set(obj, 'Johns object')
// map3.set('banana', 1)
// .set('orange', 2)
// .set('meat', 4);

// let obj2 = Object.fromEntries(map3.entries())


// console.log(map.get(1))
// console.log(map.get('1'))
// console.log(map.get(true))
// console.log(map.size)
// console.log(visitsCountMap.get(john))
// console.log(map2.get(obj))
// console.log(prices.banana)
// console.log(obj2.orange)





// let set = new Set();
// let set2 = new Set(['orange', 'apple', 'banana'])

// let john = { name: 'John' };
// let pete = { name: 'Pete' };
// let mary = { name: 'Maty' };

// set.add(john)
// set.add(pete)
// set.add(mary)
// set.add(john)
// set.add(mary)

// console.log(set.size)

// for (let user of set) {
//     console.log(user)
// }
// for (let value of set2) {
//     console.log(value)
// }

// set2.forEach((value, valueAgain, set2) => {
//     console.log(value)
// });

// let map = new Map();
// map.set("name", "John");

// let keys = Array.from(map.keys())

// keys.push('more')


// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// console.log(keys)

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//     let map = new Map();
//     let compare = arr.map((result) => {
//         let resultChar = result.toUpperCase().split('').sort().join('');

//         map.set(resultChar, result)

//     })
//     return Array.from(map.values())
// }

// console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"


// let str = 'ТЫ ГАНдон пидАр Ебаный Принимающий ВиаГру';
// let alphabet = ['гандон', 'ебаный', 'виагру', 'пидар'];

// function spamCheck(str) {
//     str = str.toLowerCase().split(' ');

//     let arr = str.map((word) => {
//         if(alphabet.includes(word)) {
//             str = str.filter(item => item !== word);
//         }
//     });
//     return str.join(' ');
// }


// console.log(spamCheck(str))



// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//     let map = new Map();
//     let initialValue = ['anagram'];
//     let compare = arr.reduce((accumulator, currentValue) => {
//         return map.set(accumulator = currentValue.toLowerCase().split('').sort().join(''), currentValue)
//     }, initialValue)
//     return Array.from(map.values())
// }

// console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"


// let arr = [1, 2, 4, 5, 7, 9];
// let newArr = [];

// arr = arr.forEach(num => {
//     newArr.push(num * num)
// });

// console.log(newArr)


// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, "ok"); // работает (объект в качестве ключа)

// console.log(weakMap)


// let john = { name: "John" };
// let weakMap = new WeakMap();

// weakMap.set(john, 'cекретные документы');



// console.log(weakMap)


// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
// ];
// let readMessages = new WeakMap();

// readMessages.set(messages[0]);
// readMessages.set(messages[1]);
// readMessages.set(messages[2]);

// console.log('Read message 0:' + readMessages.has(messages[0]))


// messages.shift();


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function sumSalaries(salaries) {
//     let salariesArr = Object.values(salaries)
//     let sum = 0;

//     for(let item of salariesArr) {
//         sum += item
//     }
//     return sum
// }

// console.log( sumSalaries(salaries) ); // 650

// let user = {
//     name: 'John',
//     age: 30
// };

// function count(user) {
//     let userObj = Object.keys(user);
//     return userObj.length
// }

// console.log(count(user)); // 2

// let arr = ['Ilya', 'Kantor', 'age', 35];
// let [firstname, surname, ...rest] = arr;
// let user = {};

// [user.name, user.surname] = 'Ilya Kantor'.split(' ')

// for(let [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
// }

// console.log(user.name, user.surname)
// console.log(rest[0])
// console.log(rest[1])

// let [username = prompt('name?'), surname = prompt('surname')] = ['Julius'];

// console.log(username, surname)


// let options = {
//     title: 'Menu',
// };
// let {width:w = prompt('width?', 0), height:h = prompt('height?', 0)} = options;

// console.log(w, h)
// let title, width, height;


// ({title, width, height} = {title: 'menubar', width: 50, height: 50});

// console.log(title, width, height)


// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ['Cake', 'Donut'],
//     extra: true
// }
// let {
//     size: {
//         width,
//         height
//     },
//     items: [item1, item2],
//     title = 'Menu'
// } = options;

// console.log(width)
// console.log(height)
// console.log(item1)
// console.log(title)
// console.log(item2)

// let options = {
//     title: 'My menu',
//     items: ['Item1', 'Item2']
// }

// function showMenu({
//     title = 'Untitled',
//     width: w = 200,
//     height: h = 100,
//     items = []
// }) {
//     console.log(`${title} ${w} ${h}`)
//     console.log(items)
// }

// showMenu(options)

// let user = { name: "John", years: 30 };

// let {name, years: age, isAdmin = false} = user

// console.log( name ); // John
// console.log( age ); // 30
// console.log( isAdmin ); // false


// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function topSalary(salaries) {
//     let entries = Object.entries(salaries);
//     let max = 0;
//     let maxName = null;

//     for(let [name, number] of entries) {
//         if(max < number) {
//             max = number;
//             maxName = name;
//         }
//     }
//     return maxName
// }

// console.log(topSalary(salaries))

// let now = new Date();
// let Jan01_1970 = new Date(0);
// let Jan02_1970 = new Date(24 * 3600 * 1000)
// let Dec31_1969 = new Date(-24 * 3600 * 1000)
// let date = new Date(2021, 11, 17)

// console.log(date)
// console.log(Dec31_1969)
// console.log(Jan02_1970)
// console.log(Jan01_1970)
// console.log(now)

// let date = new Date();

// console.log(date.getHours());
// console.log(date.getUTCHours());
// console.log(date.getTime())
// console.log(date.getTimezoneOffset())


// let today = new Date();

// today.setHours(0);
// today.setHours(0, 0, 0, 0)

// console.log(today)


// let date = new Date(2021, 11, 32);
// let date2 = new Date(2021, 1, 28);
// let date3 = new Date();

// date2.setDate(date2.getDate() + 2)
// date3.setSeconds(date3.getSeconds() + 70)

// console.log(date)
// console.log(date2)
// console.log(date3)

// let date = new Date();
// console.log(+date)

// let start = Date.now()

// for(let i = 0; i < 100000; i++) {
//     let doSomething = i * i * i;

// }

// let end = Date.now();

// console.log(`Цикл отработал за ${end - start} миллисекунд`)


// function diffSubtract(date1, date2) {
//     return date1 - date2;
// }
// function diffGetTime(date1, date2) {
//     return date1.getTime() - date2.getTime();
// }
// function bench(f) {
//     let date1 = new Date();
//     let date2 = new Date();

//     let start = Date.now();

//     for(let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// for(let i = 0; i < 10; i++) {
//     time1 += bench(diffSubtract);
//     time2 += bench(diffGetTime)
// }


// console.log(time1)
// console.log(time2)

// let ms = Date.parse('2021-12-19T10:28:00')
// let date = new Date(ms)

// console.log(date)


// let date = new Date(2012, 1, 1)
// let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];


// function getWeekDay(date) {
//     return days[date.getUTCDay()]
// }

// console.log(getWeekDay(date))
// console.log(date)

// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//     let copyDate = new Date(date)

//     copyDate.setDate(date.getDate() - days)
//     return copyDate.getDate()
// }

// console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// console.log( getDateAgo(date, 365)); // 2, (2 Jan 2014)

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1, 0);

//     return date.getDate()
// }

// console.log(getLastDayOfMonth(2021, 1))


// function getSecondsToday() {
//     let date = new Date();
//     let startDay = new Date();
//     let miliSeconds;
//     let second;

//     startDay.setHours(0, 0, 0, 0);
//     miliSeconds = date - startDay
//     second = Math.round( miliSeconds / 1000 )

//     console.log(second)
// }

// getSecondsToday()

// function getSecondsToTomorrow() {
//     let now = new Date();
//     let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//     let diff = tomorrow - now;

//     return Math.round(diff / 1000)
// }

// console.log(getSecondsToTomorrow())

// function formatDate(date) {
//     let diff = new Date() - date;
//     let sec =  Math.floor(diff / 1000)
//     let min = Math.floor(diff / 60000)

//     if(diff < 1000) {
//         return 'Прямо сейчас'
//     } else if(sec < 60) {
//         return sec + 'сек. назад'
//     } else if(min < 60) {
//         return min + 'мин. назад'
//     }

//     let d = date;

//     d = [
//         '0' + d.getDate(),
//         '0' + (d.getMonth() + 1),
//         '' + d.getFullYear(),
//         '0' + d.getHours(),
//         '0' + d.getMinutes()
//     ].map(component => component.slice(-2))

//     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':')
// }

// console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// console.log( formatDate(new Date(new Date - 86400 * 1000)) );


// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'javascript'],
//     wife: null
// };
// let json = JSON.stringify(student)

// console.log(typeof json)
// console.log(json)

// let age = {
//     number: 30
// };
// let meetup = {
//     title: "Conference",
//     room: {
//         number: 23,
//         participants: [{name: "John"}, {name: 'Ann'}],
//     },
//     old: age
// }


// age.occupiedBy = meetup;
// //age.all = meetup // будет ошибка из-за цикличных ссылок

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);

//     if(key === 'occupiedBy') {
//         return undefined
//     } else {
//         return value
//     }
// }, 2))


// let room = {
//     number: 23,
//     toJSON() {
//         return this.number
//     }
// }
// let meetup = {
//     title: 'Conference',
//     date: new Date(Date.UTC(2021, 0, 1)),
//     room
// }

// console.log(JSON.stringify(meetup))
// console.log(JSON.stringify(room))

// let numbers = "[0, 1, 2, 3, 4]"

// numbers = JSON.parse(numbers);

// console.log(numbers)

// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// user = JSON.parse(user);

// console.log(user)

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str, (key, value) => {
//     if(key === 'date') return new Date(value);
//     return value
// })

// console.log(meetup.date.getHours())

// let user = {
//     name: 'Василий Иванович',
//     age: 35
// }

// user = JSON.stringify(user)

// let parseUser = JSON.parse(user)

// console.log(parseUser)

// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`)

//     if(value === meetup && key !== "") {
//         return undefined
//     } else {
//         return value
//     }
// }, 2));

// /* в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */

// function pow(x, n) {
//     if(n == 1) {
//         return x
//     } else {
//         console.log(x, n)
//         return x * pow(x, n - 1)
//     }
// }

// console.log(pow(2, 3))

// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
//         internals: [{ name: 'Jack', salary: 1300 }]
//     }
// };

// function sumSalaries(department) {
//     if(Array.isArray(department)) {
//         return department.reduce((sum, current) => sum + current.salary, 0)
//     } else {
//         let sum = 0;

//         for(let subdep of Object.values(department)) {
//             sum += sumSalaries(subdep)
//         }
//         return sum
//     }
// }


// console.log(sumSalaries(company))


// function sumTo(n) {
//     let sum = 0;

//     for(let i = 0; i <= n; i++) {
//         sum += i;
//     }
//     return sum
// }
// function sumTo2(n) {
//     if(n === 1) {
//         return n;
//     } else {
//         return n + sumTo2(n - 1)
//     }
// }
// function factorial(n) {
//     if(n == 1) return n;

//     return n * factorial(n - 1)
// }


// console.log(sumTo(10))
// console.log(sumTo2(10))
// console.log(factorial(5))

// function fib(n) {
//     let fib2 = (a = 0, b = 0, c = 1) => {
//         a = b;
//         b = c;
//         c = a + b;
//         n--;

//         if(n == 1) {
//             return c
//         } else {
//             return fib2(a, b, c)
//         }
//     }
//     return fib2()
// }

// console.log(fib(7)); // 2


// let list = {
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// };

// function printList(list) {
//     if(list.next) {
//         printList(list.next)
//     }
//     console.log(list.value)
// }

// console.log(printList(list))


// let sumMid = [];

// function binary_serch(list, item) {
//     let low = 0;
//     let high = list.length - 1;

//     while(low <= high) {
//         let mid = Math.round((low + high) / 2);
//         sumMid.push(mid)


//         let guess = list[mid]

//         if(guess == item) {
//             return mid
//         } else if(guess > item) {
//             high = mid - 1;
//         } else {
//             low = mid + 1
//         }
//     }
// }

// let list = [1, 3, 5, 7, 9, 23, 75, 45, 23, 79, 34, 98, 12, 465, 10]

// console.log(`Значение 1 было найдено в массиве под индексом: ${binary_serch(list, 1)} и О большое является:${sumMid.length}`)

// function binary_search(list, item) {
//     let low = 0;
//     let high = list.length - 1;
//     let search = (mid) => {
//         mid = Math.round((high + low) / 2);
//         let guess = list[mid];

//         if(guess == item) {
//             return mid;
//         } else if(guess > item) {
//             return high = search(mid - 1)
//         } else {
//             return low = search(mid + 1);
//         }
//     }
//     return search()
// }

// let list = [1, 3, 5, 7, 9, 23, 75, 45, 23, 79, 34, 98, 12, 465, 10]

// console.log(binary_search(list, 75))

// function selectionSort(arr) {
//     let newArr = [];

//     arr.sort((a, b) => a - b).reverse()

//     for(let item of arr) {
//         newArr.push(item).reverse
//     }
//     return newArr
// }

// let arr = [5, 6, 23, 67, 3, 7]

// console.log(selectionSort(arr))

// let arr = [1, 2, 3, 4, 5, 6];

// function sum(arr) {
//     let firstElement = arr[0];
//     let lastElement = arr[arr.length - 1];

//     if(firstElement == lastElement) {
//         return firstElement;
//     } else {
//         let deleteElem = arr.shift();

//         return( deleteElem + sum(arr) );
//     }
// }

// console.log(sum(arr))

// let arr = [1, 2, 3, 4, 5, 6];

// function bigestNumber(arr) {
//     arr.sort((a, b) => a - b).reverse()

//     return arr[0]
// }
// console.log(bigestNumber(arr))


// let sumMid = [];
// let list = [1, 3, 5, 7, 9, 23]

// function binary_search(list, item) {
//     let low = 0
//     let high = list.length - 1
//     let binary_searchCircle = () => {
//         let mid = Math.round((low + high) / 2);
//         let guess = list[mid];

//         if(guess == item) {
//             return mid;
//         }
//         if(guess > item) {
//             high = mid - 1;

//             return binary_searchCircle(low, high)
//         } else if(guess < item) {
//             low = mid + 1

//             return binary_searchCircle(low, high)
//         }
//     }

//     return binary_searchCircle()
// }

// console.log(binary_search(list, 23))

// function sumAll(...args) {
//     let sum = 0;

//     for(let arg of args) sum += arg;
//     return sum;
// }
// console.log(sumAll(1, 2, 4))

// function showName(firstName, lastName, ...titles) {
//     return (firstName + ' ' + lastName + ' и его звания ' + titles)
// }

// console.log(showName("Юлий", "Цезарь", "Консул", "Император"))

// let arr = [1, 3, 5];
// let arr2 = [2, 4, 6]
// let merged = [...arr, ...arr2, 9]

// console.log(Math.max(...arr, ...arr2))
// console.log(merged)

// let str = 'Hello'

// console.log([...str])
// console.log(Array.from(str))

// function makeCounter() {
//     let count = 0;

//     return function() {
//         return count += 1
//     }
// }
// let counter = makeCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter())

// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }

// console.log(sum(1)(2));

// let arr = [1, 2, 3, 4, 5, 6, 7];
// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   }
// }
// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   }
// }

// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// function byField(field) {
//   return (a, b) => {
//     if(a[field] > b[field]) {
//       return 1
//     } else {
//       return -1
//     }
//   }
// }

// users.sort(byField('name'));
// users.forEach(user => console.log(user.name))

// users.sort(byField('age'));
// users.forEach(user => console.log(user.age + user.name))

// function makeArmy() {
//   let shooters = [];
//   let i = 0

//   while (i < 10) {
//     let x = i
//     let shooter = function() { // функция shooter
//       console.log( x ); // должна выводить порядковый номер
//     };
//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[1](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


// function varGlob(a) {
//   return (b) => {
//     console.log(hehe)

//     var hehe;

//     return a + b;
//   }
// }

// console.log(varGlob(1)(2))


// window.currentUser = {
//   name: 'Hoach',
// }

// console.log(currentUser.name)
// console.log(window.currentUser.name)


// if(!window.Promise) {
//   console.log('Your browser is very old')
// } else {
//   console.log('Your brower is very cool')
// }

// if(!window.Promise) {
//   window.Promise = 2 + 5;
// }


// function sayHi() {
//   console.log('Hello')

//   sayHi.counter++
// }
// sayHi.counter = 0;

// console.log(sayHi())
// console.log(sayHi())
// console.log(sayHi())

// console.log(sayHi.counter)

// function makeCounter() {
//   function counter() {
//     return counter.count++;
//   }
//   counter.count = 0

//   return counter
// }
// let counter = makeCounter()

// console.log(counter())
// console.log(counter())

// let sayHi = function func(who) {
//   if(who) {
//     console.log(`Hello ${who}`)
//   } else {
//     func('Guest')
//   }
// }
// let welcome = sayHi;

// sayHi = null

// welcome()

// function makeCounter() {
//   let count = 0;
//   function counter() {
//     return count++;
//   }

//   counter.set = value => count = value;
//   counter.decrease = function() {
//     return count--
//   }

//   return counter;
// }
// let counter = makeCounter()

// console.log(counter())
// console.log(counter.decrease())
// console.log(counter.decrease())
// console.log(counter.decrease())


// let plus = {

// }
// let count = 0;
// plus.sayPlus = function() {
//   return count++;
// }


// console.log(plus.sayPlus())
// console.log(plus.sayPlus())
// console.log(plus.sayPlus())

// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     currentSum += b;

//     f.toString = function() {
//       return currentSum
//     };

//     return f;
//   };
//   return f
// }

// let sumConsole = sum();

// alert( sum(1)(2) ); // 3
// console.log( sumConsole(5)(-1)(2) ); // 6 
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15


// function sayHi(phrase, who) {
//   console.log(`${phrase} ${who}`)
// }
// let TimerID = setTimeout(sayHi, 1000, 'Hello', 'Hoach')

// clearTimeout(TimerID)

// let timerID = setInterval(() => {
//   console.log('Hello hoach')
// }, 2000);

// setTimeout(() => {
//   clearInterval(timerID)
//   console.log('stop')
// }, 5000)

// let timerId = setTimeout(function tick() {
//   console.log('Hello World')

//   let timerId= setTimeout(tick, 2000)
// },2000)

// let delay = 5000;

// let timerId = setTimeout(function request() {
//   if('Erorr') {
//     delay *= 2;
//   }
//   timerId = setTimeout(request, delay)
// }, delay)

// function printNumber(from, to) {
//   let current = from;
//   let timerId = setInterval(() => {
//     if(current == to) {
//       clearInterval(timerId)
//     }

//     console.log(current)

//     current++
//   }, 1000);
// }

// printNumber(0, 9)

// let delay = 1000;

// function printNumber(from, to) {
//   let current = from;
//   let timerId = setTimeout(function ret() {
//     console.log(current)
//     if(current == to) {
//       clearTimeout(timerId)
//       return current
//     }
//     setTimeout(ret, delay)

//     current++
//   }, delay);
// }

// printNumber(0, 9)

// let count = 0;

// function makeCounter() {
//   function counter() {
//     return ++count;
//   }
//   counter.decrease = () => {
//     return --count;
//   }
//   return counter
// }
// let counter = makeCounter();

// console.log(counter())
// console.log(counter())
// console.log(counter.decrease())

let likeCount = document.getElementById('likeNumber')
let like = document.getElementById('like')
let dislike = document.getElementById('dislike')
let count = 0;

function makeCounter() {
  function counter() {
    return ++count;
  }
  counter.decrease = () => {
    return --count;
  }
  return counter
}
let counter = makeCounter();

function liking() {
  likeCount.textContent = count

  like.addEventListener('click', () => {
    likeCount.textContent = counter()

    if (count >= 10) {
      count = 10;
      likeCount.textContent = 'Max'
    }
  })
  dislike.addEventListener('click', () => {
    likeCount.textContent = counter.decrease()

    if (count <= 0) {
      count = 0;
      likeCount.textContent = 'Min'
    }
  })
}
liking()


// let worker = {
//   someMethod() {
//     return 1;
//   },
//   slow(x) {
//     console.log('Called with ' + x);
//     return x * this.someMethod();
//   }
// };


// function cachingDecorator(func, hash) {
//   let cache = new Map();

//   return function() {
//     let key = hash(arguments)
//     if(cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func.apply(this, arguments);

//     cache.set(key, result);
//     return result
//   }
// }
// // worker.slow = cachingDecorator(worker.slow) 

// // console.log(worker.slow(2))


// let worker = {
//   slow(min, max) { 
//     return min + max;
//   }
// };

// function hash() {
//   return ( [].join.call(arguments) ); // 1,2
// }

// worker.slow = cachingDecorator(worker.slow, hash)

// console.log(worker.slow(5, 3))
// console.log(worker.slow())


// function work(a, b) {
//   return( a + b ); // произвольная функция или метод
// }

// function spy(func) {
//   wrapper.calls = [];

//   function wrapper(...args) {
//     wrapper.calls.push(args)
//     return func.apply(this, arguments);
//   }
//   return wrapper
// }


// work = spy(work);

// console.log(work(1, 2)); // 3
// console.log(work(4, 5)); // 9

// for (let args of work.calls) {
//   console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }


// function f(x) {
//   console.log(x);
// }
// function delay(f, ms) {
//   return function() {
//     setTimeout(() => {
//       return f.call(this, ...arguments)
//     }, ms)
//   }
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс




// function debounce(f, ms) {
//   let isCoolDown = false;

//   return function() {
//     if(isCoolDown) return;

//     f.apply(this, arguments);

//     isCoolDown = true;

//     setTimeout(() => isCoolDown = false, ms)
//   }
// }

// let f = debounce(console.log, 1200);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// let arr = [1, 2, 3, 4, 5];

// Array.prototype.plusBy = function(n) {
//   return this.map((i) => {
//     return i * n
//   })
// }

// function mul(a, b) {
//   return a * b;
// }

// let double = mul.bind(null, 2);

// console.log(double(4))

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };
// let userMasha = {
//   name: 'Masha',
// }

// let loginOk = user.loginOk.bind(userMasha)
// let loginFail = user.loginFail.bind(userMasha)


// askPassword(loginOk, loginFail);

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(() => user.login(true), () => user.login(false)); // ?
// askPassword(user.login.bind(user, true), user.login.bind(user, false))


// let group = {
//   title: 'Our group',
//   students: ['Hoach', 'Arsen', 'Azamat'],

//   sholist() {
//     this.students.forEach(stu => {
//       console.log(this.title + ' ' + stu)
//     })
//   }
// }
// group.sholist()

// function defer(f, ms) {
//   return function() {
//     setTimeout(() => f.call(this, ...arguments), ms)
//   }
// }
// function sayHi(who) {
//   console.log('hello ' + who)
// }

// let sayHiDefer = defer(sayHi, 6000)

// sayHiDefer('John')


// let user = {
//   name: 'John',
//   toString() {
//     return this.name
//   }
// };
// let user2 = {}

// Object.defineProperty(user, 'name', {
//   writable: false,
//   enumerable: true,
//   configurable: false
// })
// Object.defineProperty(user, 'toString', {
//   enumerable: false,
// })
// Object.defineProperties(user2, {
//   name: {
//     value: 'Arsen',
//     writable: false,
//   },
//   surname: {
//     value: 'Symonyan',
//     writable: false,
//   }
// })

// // user.name = 'Masha'

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name')

// console.log(JSON.stringify(descriptor, null, 2))
// console.log(user2)

// for(let key in user) {
//   console.log(key)
// }


// let user = {
//   name: 'John',
//   surname: 'Smith',

// get fullname() {
//   return `${this.name} ${this.surname}`;
// },

// set fullname(value) {
//   [this.name, this.surname] = value.split(' ');
// }
// }

// user.fullname = 'Alice Cooper';

// Object.defineProperty(user, 'fullname', {
//   get() {
//     return `${this.name} ${this.surname}`;
//   },
//   set(value) {
//     [this.name, this.surname] = value.split(' ')
//   }
// })
// for(let key in user) console.log(key);

// console.log(user.fullname)
// console.log(user.name)

// let user = {
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     if(value.length < 4) {
//       console.log(`Ваше имя слишком короткое, должно быть больше 4 символов`)
//       return
//     }
//     this._name = value;
//   }
// }
// user.name = 'Pet';
// console.log(user.name)


// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday

//   Object.defineProperty(this, 'age', {
//     get() {
//       let todayYear = new Date().getFullYear();
//       return todayYear - this.birthday.getFullYear();
//     }
//   }) 
// }

// let user = new User('Hoach', new Date(2006, 3, 28));
// console.log(user.age)

// let animal = {
//   eats: true,
//   walk() {
//     console.log('Animal walk')
//   }
// }
// let rabbit = {
//   jump: true,
//   __proto__: animal,
// }
// let longEar = {
//   earLength: 10,
//   __proto__: rabbit,
// }

// rabbit.walk = function() {
//   console.log('Rabbit! Bounce bounce')
// }

// rabbit.__proto__ = animal;


// console.log(rabbit.eats)
// console.log(rabbit.jump)
// rabbit.walk()
// console.log(longEar.eats)

// let user = {
//   name: 'John',
//   surname: 'Smith',
//   set fullname(value) {
//     [this.name, this.surname] = value.split(' ')
//   },
//   get fullname() {
//     return `${this.name} ${this.surname}`
//   },
// }
// let admin = {
//   __proto__: user,
//   isAdmin: true,
// }

// console.log(admin.fullname)

// admin.fullname = 'Alice Cooper'

// console.log(admin.fullname)

// let animal = {
//   walk() {
//     if(!this.isSleeping) {
//       return 'Animal walk'
//     }
//   },
//   sleep() {
//     this.isSleeping = true
//   }
// }
// let rabbit = {
//   name: 'whiteRabbit',
//   __proto__: animal,
// }
// rabbit.sleep()

// console.log(rabbit.isSleeping)

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// }

// console.log(Object.keys(rabbit))

// for(let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop)

//   if(isOwn) {
//     console.log(`Our: ${prop}`)
//   } else {
//     console.log(`Inherited: ${prop}`)
//   }
// }


// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(pockets.pen)
// console.log(bed.glasses)

// let hamster = {
//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log( speedy.stomach ); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log( lazy.stomach ); // apple


// let animal = {
//   eats: true,

// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit('White rabbit');

// console.log(rabbit.eats)

// function narcissistic(value) {
//   // Code me to return true or false
//   value = value.toString()

//   let arr = value.split('')
//   let arrLength = arr.length

//   arr = arr.map(item => {
//     item = Number(item)

//     function power(item, n) {
//       if (n == 1) {
//         return item
//       } else {
//         return item * power(item, n - 1)
//       }
//     }
//     return power(item, arrLength)
//   });
//   arr = arr.reduce((sum, current) => sum + current, 0);
//   value = +value;

//   if(arr === value) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(narcissistic(153))


// function createLink(url) {
//   return function(domain) {
//     return `https://${url}.${domain}`;
//   }
// }
// let createLinkCom  = createLink;

// console.log(createLink('dinoland')('surge.sh'))

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }
// function bind(context, fn) {
//   return function(...args) {
//     fn.apply(context, args);
//   }
// }
// function bind2(context) {
//   return function(fn, ...args) {
//     fn.apply(context, args);
//   }
// }
// function createbind(context) {
//   return function(fn, ...args) {
//     fn.apply(context, args);
//   }
// }


// const person1 = {
//   name: 'Mich',
//   age: 22,
//   job: 'Frontender'
// }
// const person2 = {
//   name: 'Andrei',
//   age: 25,
//   job: 'GameDev'
// }

// let bind3 = createbind(person1)
// bind3(logPerson)

// bind(person1,logPerson)();
// bind2(person2)(logPerson)


// function highAndLow(numbers){  
//   let arr = [];
//   let arrMinMax = [];
//   let resultMax = 0;
//   let resultMin = 1e20;

//   arr.push(numbers)
//   arr = arr.join('').split(' ').map(item => +item)

//   for(let i = 0; i < arr.length; i++) {
//     let nowNumberMax = 0;
//     let nowNumberMin = 0;

//     for(let j = i; j < arr.length; j++) {
//       nowNumberMax = arr[j];
//       nowNumberMin = arr[j]

//       resultMax = Math.max(resultMax, nowNumberMax)
//       resultMin = Math.min(resultMin, nowNumberMin)
//     }
//   }
//   arrMinMax.push(resultMax, resultMin); 

//   return arrMinMax.join(' ');
// }
// console.log(highAndLow("1 2 3 4 5"))

// function highAndLow2(numbers) {
//   numbers = numbers.split(' ').map(item => +item);
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`
// }
// console.log(highAndLow2("1 2 3 4 5"))

// let animal = {
//   eats: true,
// }

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype = animal;

// let rabbit = new Rabbit('White rabbit');

// console.log(rabbit.eats)

// function Rabbit(name) {
//   this.name = name;
//   console.log(name)
// }
// let rabbit = new Rabbit('White rabbit');
// let rabbit2 = new rabbit.constructor('Black rabbit');

// console.log(Rabbit.prototype.constructor == Rabbit)

// function Rabbit() {

// }
// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit
// }
// let rabbit = new Rabbit();
// console.log(rabbit.jumps)

// function User(name) {
//   this.name = name;
// }
// User.prototype = {}; // (*)

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// alert( user2 ); // undefined

// String.prototype.show = function() {
//   alert(this)
// }
// 'Boom'.show()

// if(!String.prototype.repeat) {
//   String.prototype.repeat = function(n) {
//     return new Array(n).join(this)
//   }
// }
// console.log('la'.repeat(5))

// function f() {
//   alert("Hello!");
// }

// Function.prototype.defer = function(ms) {
//   let f = this
//   return function(...args) {
//     let timer = setTimeout(() => f.apply(this, args),ms);
//   }
// }

// function f(a, b) {
//   alert( a + b );
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

// let animal = {
//   eat: true,
// }

// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//   }
// })

// console.log(rabbit.jumps)
// console.log(Object.getPrototypeOf(rabbit))
// console.log(Object.getPrototypeOf(rabbit) == animal)

// Object.setPrototypeOf(rabbit, {})

// let person = new Object({
//   name: 'Maxim',
//   age: 25,
//   greet() {
//     console.log(`hello ${this.name}`)
//   }
// })
// let lena = Object.create(person)
// lena.greet()


// console.log('Request data...')

// setTimeout(() => {
//   console.log('Preparing data...')

//   const backendData = {
//     sever: 'aws',
//     port: 2000,
//     status: 'working',
//   }

//   setTimeout(() => {
//     backendData.modified = true

//     console.log('Data received', backendData)
//   }, 2000)
// }, 2000)

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparing data...')

//     const backendData = {
//       sever: 'aws',
//       port: 2000,
//       status: 'working',
//     }
//     resolve(backendData)
//   }, 2000)
// })

// p.then((data) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true
//       resolve(data)
//     }, 2000)  
//   })
// }).then(clientData => {
//   clientData.fromPromise = true

//   return clientData
// }).then(data => {
//   console.log('Modified', data)
// }).catch(err => console.log('Error: ', err)).finally(() => console.log('Finally'))

// const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms))

// // sleep(2000).then(() => console.log('After 2 seconds'))
// // sleep(3000).then(() => console.log('After 3 seconds'))

// Promise.all([sleep(2000), sleep(5000)]).then(() => {
//   console.log('All promises')
// })
// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//   console.log('Race promises')
// })



// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name)
//   }
// }
// let user = new User('Hoach')
// console.log(user.sayHi())

// let User = class {
//   sayHi() {
//     console.log('Hello')
//   }
// }
// let user = new User();
// user.sayHi()

// let User = class MyClass {
//   sayHi() {
//     console.log(MyClass)
//   }
// };

// new User().sayHi()

// console.log(MyClass)

// function makeClass(phrase) {
//   return class {
//     sayHi() {
//       console.log(phrase)
//     }
//   }
// }

// let User = makeClass('Whats up')

// new User().sayHi()

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if(value.length < 4) {
//       console.log('Name is short');
//       return;
//     }
//     this._name = value
//   }
// }

// let user = new User('Hoach')

// console.log(user.name)

// user = new User('')

// class User {
//   ['say' + 'Hi']() {
//     console.log('Hello world');
//   }
// }

// new User().sayHi();

// class User {
//   name = 'Hoach';

//   sayHi() {
//     console.log(`Hello ${this.name}`)
//   }
// }

// new User().sayHi()

// class Clock {
//   constructor({ template }) {
//     this.template = template
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   };

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   };

// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();


// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}м/ч`)
//   }
//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит`)
//   }
// }

// let animal = new Animal('My animal');

// animal.stop()

// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} прячется`)
//   }
//   stop() {
//     super.stop();
//     this.hide()
//   }
// }
// let rabbit = new Rabbit('My rabbit')

// rabbit.hide()
// rabbit.run(50)
// rabbit.stop()

// class Animal {
//   constructor(name) {
//     this.name = name;
//     this.speed = 0;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }
// }

// let rabbit = new Rabbit('White rabbit', 30);

// console.log(rabbit.name)
// console.log(rabbit.earLength)

// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name)
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);
// alert(rabbit.created)

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }
// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision = 1000 } = options
//     this.precision = precision
//   }
//   start() {
//     super.render();
//     this.timer = setInterval(() => this.render(), this.precision)
//   }
// }

// let clock = new Clock({ template: 'h:m:s' });
// let extendedClock = new ExtendedClock({ template: 'h:m:s' }, 1000);

// clock.start()



// class User {
//   static staticMethod() {
//     console.log(this === User)
//   }
// }

// User.staticMethod()

// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date
//   }
//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }
// }

// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("JavaScript", new Date(2019, 11, 1))
// ]

// articles.sort(Article.compare)

// console.log(articles[0].title)


// class Article {
//   static publisher = 'Ilya Kantor'
// }

// console.log(Article.publisher)

// class Animal {
//   constructor(name, speed) {
//     this.speed = speed;
//     this.name = name;
//   }

//   run(speed = 0) {
//     this.speed += speed;
//     console.log(`${this.name} runs with ${this.speed}`)
//   }

//   static compare(animalA, animalB) {
//     return animalA - animalB
//   }
// }

// class Rabbit extends Animal {
//   hide() {
//     console.log(`${this.name} does hide`)
//   }
// }

// let rabbit = [
//   new Rabbit("Белый кролик", 10),
//   new Rabbit("Чёрный кролик", 5)
// ];

// rabbit.sort(Rabbit.compare)

// console.log(rabbit[0].run())

// class Rabbit extends Object {
//   constructor(name) {
//     super(name)
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Кроль");

// alert(rabbit.hasOwnProperty('name')); 


// class CoffeeMachine {
//   _waterAmount = 0;

//   set waterAmount(value) {
//     if(value < 0) throw new Error('Отрицательное чило')
//     this._waterAmount = value;
//   }

//   get waterAmount() {
//     return this._waterAmount;
//   }

//   constructor(power) {
//     this.power = power;
//     console.log(`Мощность кофеварки: ${this.power}`);
//   }
// }

// let coffeMachine = new CoffeeMachine(129);

// coffeMachine.waterAmount = 43;
// console.log(coffeMachine.waterAmount)

// class Rectangle {

//   constructor(width, height) {
//     this._width = width;
//     this._height = height;
//   }

//   get width() {
//     return this._width
//   }

//   set width(value) {
//     value <= 0 ? this._width = 1 : this._width = value;
//   }

//   calcArea() {
//     return this.width * this.height;
//   }
// }

// let rectangle = new Rectangle(3, 5);

// rectangle.width = -2


// console.log(rectangle.calcArea())
// console.log(rectangle.width)

// class User {
//   constructor(username, password) {
//     this._username = username;
//     this._password = password;
//     this._id = 5;
//   }

//   get username() {
//     return this._username;
//   }

//   set username(value) {
//     this._username = value
//   }

//   get password() {
//     return this._password;
//   }

//   set password(value) {
//     this.password = value
//   }

//   get id() {
//     return this._id
//   }
// }

// let user = new User('Hoach', 'hoach8906');

// user.username = 'Olesya'

// console.log(user.id)


// class Person {
//   constructor(firstname, lastname, age) {
//     this._firstname = firstname;
//     this._lastname = lastname;
//     this._age = age;
//   }

//   get firstname() {
//     return this._firstname;
//   }

//   set firstname(value) {
//     this._firstname = value
//   }

//   get lastname() {
//     return this._lastname;
//   }

//   set lastname(value) {
//     this._lastname = value
//   }

//   get fullname() {
//     return `lastname: ${this._lastname} firtname: ${this._firstname}`
//   }

//   get age() {
//     return this._age;
//   }

//   set age(value) {
//     value <= 0 ? this._age = 18 : this._age = value;
//   }

//   greeting() {
//     console.log(`I'm person and my name: ${this._firstname}`)
//   }
// }

// class Employee extends Person{
//   constructor(firstname, lastname, age, inn) {
//     super(firstname, lastname, age);
//     this._inn = inn;
//   }

//   get inn() {
//     return this._inn;
//   }

//   set inn(value) {
//     this._inn = value
//   }

//   greeting() {
//     console.log(`I'm employee and my name: ${this._firstname}`)
//   }
// }

// class Developer extends Employee{
//   constructor(firstname, lastname, age, inn, level, language) {
//     super(firstname, lastname, age, inn);
//     this._level = level;
//     this._language = language;
//   }

//   get level() {
//     return this._level;
//   }

//   set level(value) {
//     this._level = value
//   }

//   get language() {
//     return this._language;
//   }

//   set language(value) {
//     this._language = value
//   }

//   greeting() {
//     console.log(`I'm developer and my name: ${this._firstname}`)
//   }
// }

// const person = new Person('Hoach', 'Nguyen', 16)
// const employee = new Employee('Olesya', 'Mikishkina', 16, 15)
// const developer = new Developer('Hoach', 'Nguyen', 16, 23, 'Junior', 'Javasctipt')

// const personList = [person, employee, developer]

// function massGreeting(personList) {
//   personList.map((person) => {
//     return person.greeting()
//   });
// }

// massGreeting(personList)

// class Engine {
//   drive() {
//     console.log('Двигатель работает')
//   }
// }

// class Wheel {
//   drive() {
//     console.log('Колеса едут')
//   }
// }

// class Freshener {
//   fresh() {
//     console.log(`I'm freshener`)
//   }
// }

// class Car {
//   engine = Engine;
//   wheels = [];

//   constructor(freshner) {
//     this.freshener = freshner;
//     this.engine = new Engine()
//     this.wheels.push(new Wheel())
//     this.wheels.push(new Wheel())
//     this.wheels.push(new Wheel())
//     this.wheels.push(new Wheel())
//   }

//   drive() {
//     this.engine.drive();
//     this.wheels.map(wheel => wheel.drive())
//   }
// }

// let car = new Car(new Freshener);

// car.drive()
// car.freshener.fresh()

// class Rabbit {}
// let rabbit = new Rabbit();

// console.log(rabbit instanceof Rabbit)


// let sayMixin = {
//   say(phrase) {
//     console.log(phrase)
//   }
// }

// let sayHiMixin = {
//   __proto__: sayMixin,
//   sayHi() {
//     super.say(`Hello ${this.name}`)
//   },
//   sayBye() {
//     super.say(`Bye ${this.name}`)
//   }
// }

// class User {
//   constructor(name) {
//     this.name = name
//   }
// }

// Object.assign(User.prototype, sayHiMixin)
// new User('Hoach').sayBye()

// let eventMixin = {
//   /**
//    * Подписаться на событие, использование:
//    * menu.on('select', function(item) { ... }
//    */
//   on(eventName, handler) {
//     if (!this._eventHandlers) this._eventHandlers = {};
//     if (!this._eventHandlers[eventName]) {
//       this._eventHandlers[eventName] = [];
//     }
//     this._eventHandlers[eventName].push(handler);
//   },

//   /**
//    * Отменить подписку, использование:
//    * menu.off('select', handler)
//    */
//   off(eventName, handler) {
//     let handlers = this._eventHandlers && this._eventHandlers[eventName];
//     if (!handlers) return;
//     for (let i = 0; i < handlers.length; i++) {
//       if (handlers[i] === handler) {
//         handlers.splice(i--, 1);
//       }
//     }
//   },

//   /**
//    * Сгенерировать событие с указанным именем и данными
//    * this.trigger('select', data1, data2);
//    */
//   trigger(eventName, ...args) {
//     if (!this._eventHandlers || !this._eventHandlers[eventName]) {
//       return; // обработчиков для этого события нет
//     }

//     // вызовем обработчики
//     this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
//   }
// };

// class Menu {
//   choose(value) {
//     this.trigger('select', value);
//   }
// }

// Object.assign(Menu.prototype, eventMixin);

// let menu = new Menu();

// menu.on('select', value => console.log(`Вабранное значение ${value}`));

// menu.choose(123)

// class Component {
//   constructor(selector) {
//     this.$el = document.querySelector(selector)
//   }
// }

// class Box extends Component{
//   constructor(option) {
//     super(option.selector)
//     this.option = option

//     this.$el.style.width = this.$el.style.height = this.option.size + 'px';
//     this.$el.style.background = this.option.color;
//   }
// }

// let methods = {
//   hide() {
//     this.$el.addEventListener('click', () => this.$el.style.display = 'none')
//   },
//   show() {
//     this.$el.addEventListener('click', () => this.$el.style.display = 'block')
//   }
// }

// Object.assign(Component.prototype, methods)

// let box1 = new Box({
//   selector: '#box1',
//   size: 250,
//   color: 'black'
// })
// let box2 = new Box({
//   selector: '#box2',
//   size: 250,
//   color: 'tomato'
// })

// let boxes = [box1, box2];

// function hide(boxes) {
//   boxes.forEach(box => {
//     box.hide()
//   })
// }
// hide(boxes)

// try {
//   console.log('Начало работы блока try')

//   lalala;

//   console.log('Finish')
// } catch(err) {
//   console.log('We have error')
// }

// try {
//   lalala;
// } catch (error) {
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
//   console.log(error)
// }

// let json = "{ некорректный JSON }";

// try {
//   let user = JSON.parse(json)
//   console.log(user)
// } catch(error) {
//   console.log('Извините в данных нашли ошибку, мы попробуем получить их ещё раз')
//   console.log(error.name)
//   console.log(error.message)
// }

// let json = '{ "age": 30 }'; // данные неполны

// try {
//   let user = JSON.parse(json)
//   console.log(user.name)
// } catch (error) {
//   console.log('Error')
// }

// let error = new Error('Fuck it is error o_O')

// console.log(error.name)
// console.log(error.message)

// function readData() {
//   let json = '{ "age": 30 }'

//   try {
//     let user = JSON.parse(json)

//     if(!user.name) {
//       throw new SyntaxError('Данные неполны: нет имени')
//     }

//     blalala()

//     console.log(user.name)
//   } catch (error) {
//     if(error.name == 'SyntaxError') {
//       console.log(`JSON error: ${error.name}`)
//     } else {
//       throw error
//     }
//   }
// }

// function readData2() {
//   try {
//     blalala()
//   } catch (error) {
//     if(error.name != 'SyntaxError') throw error
//   }
// }

// try {
//   readData2();
// } catch(error) {
//   console.log(`Внешний catch поймал: ${error}`)
// }

// let num = +prompt('Введите число больше 0', 35);
// let diff, result;

// function fib(n) {
//   if(n < 0 || Math.trunc(n) != n) {
//     throw new Error('Должно быть целое неотрицательное число')
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2)
// }

// let start = Date.now()

// try {
//   result = fib(num);
// } catch (error) {
//   result = 0
//   console.log(error.message)
//   console.log(error.stack)
// } finally {
//   diff = Date.now() - start
// }

// console.log(result || 'You have an error')
// console.log(`${diff}ms`)


// let button = document.querySelector('.btn');

// button.addEventListener('click', () => {
//   let input = document.querySelector('.input').value;
//   let text = document.querySelector('.text')

//   text.innerHTML = input
// })


// class FormatError extends SyntaxError {
//   constructor(message) {
//     super(message)
//     this.name = 'FormatError';
//   }
// }


// let err = new FormatError("ошибка форматирования");

// console.log( err.message ); // ошибка форматирования
// console.log( err.name ); // FormatError
// console.log( err.stack ); // stack

// console.log( err instanceof FormatError ); // true
// console.log( err instanceof SyntaxError ); // true (потому что наследует от SyntaxError)

// function myFunc(callback) {
//   const arr = [3, 4, 6, 7];

//   let element = document.querySelector('.item')

//   callback(element, arr)
// }
// function out(elem, arr) {
//   elem.innerHTML = arr.join(', ')
// }
// myFunc(out) 

// function func(func) {
//   let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8];

//   func(arr)
// }

// function sumAllNumb(arr) {
//   arr = arr.reduce((current, last) => current + last, 0);

//   console.log(arr)
// }

// func(sumAllNumb) 
// ===
// func(arr => console.log(arr = arr.reduce((current, last) => current + last, 0)))

// function loadScript(src, callback) {
//   let script = document.createElement('script')

//   script.src = src

//   script.onload = () => callback(null, script)
//   script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`))

//   document.head.append(script)
// }

// loadScript('/my/script.js', (error, script) => {
//   if(error) {

//   } else {

//   }
// })  

// let promise = new Promise((resolve, rejected) => {
//   setTimeout(() => resolve('All ok'), 1000)
// })

// promise.then(
//   result => console.log(result),
// ).catch(error)(
//   console.log(error)
// ).finally(
//   console.log('Promise was finished')
// )

// function showCircle(cx, cy, radius) {
//   let div = document.createElement('div')

//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = `${cy}px`;
//   div.style.top = `${cx}px`;
//   div.className = 'circle'
//   document.body.append(div)

//   return new Promise(resolve => {
//     setTimeout(() => {
//       div.style.width = `${radius * 2}px`;
//       div.style.height = `${radius * 2}px`;
//       div.addEventListener('transitionend', function handler() {
//         div.removeEventListener('transitionend', handler);
//         resolve(div);
//       });
//     }, 0)
//   })
// }

// showCircle(550, 550, 100)
//   .then(div => {
//     div.classList.add('message-ball');
//     div.append("Hello, world!");
//     div.style.width = `${100 * 6}px`;
//     div.style.borderRadius = '20px'
//     div.style.transform = 'translateX(-90%) translateY(-90%)'

//     return new Promise(resolve => {
//       setTimeout(() => resolve(div), 2000)
//     })
//   })
//   .then(div => {
//     div.style.height = `${100 * 6}px`;

//     return new Promise(resolve => {
//       setTimeout(() => resolve(div), 2000)
//     })
//   })
//   .then(div => {
//     div.style.transform = 'translateX(50%) translateY(-90%)'
//   })

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve) {
//     setTimeout(() => resolve(this.num * 2), 1000)
//   }
// }
// new Promise(resolve => resolve(1))
//   .then(result => {
//     return new Thenable(result)
//   })
//   .then(console.log)


// function getRequest(url) {
//   return fetch(url)
//     .then(reponse => reponse.json())
// }
// function showAvatar(githubUser) {
//   return new Promise(resolve => {
//     let img = document.createElement('img');

//     img.src = githubUser.avatar_url;
//     img.className = 'avatar'

//     document.body.append(img)

//     setTimeout(() => {
//       img.remove();

//       resolve(githubUser)
//     }, 5000)
//   })
// }
// getRequest(`https://api.github.com/users/hoach-linux`)
//   .then(showAvatar)
//   .then(githubUser => console.log(`Пользователь ${githubUser.name} закончил свой показ`))

let user = {
  name: 'hoach-linux'
}

fetch(`https://api.github.com/users/${user.name}`)
  .then(response => response.json())
  .then(githubUser => new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    document.body.append(img);

    setTimeout(() => {
      img.remove();
      resolve(githubUser);
    }, 3000);
  }))
  .then(githubUser => console.log(` all ok with ${githubUser.name}`))
  .then(() => {
    throw new Error('Fuck you network')
  })
  .catch(error => console.log(error)) 