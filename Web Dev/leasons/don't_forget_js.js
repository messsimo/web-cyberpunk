// Использования цикла for
for (var number = 0; number <= 10; number += 1) {
   if (number <= 5)
   continue;
   document.write(number);
}

// Использования цикла while
var number = 23
while (number >= 13) {
    number -= 1;
    console.log(number)
}

// Использования цикла do while
var number = 10
do {
    number += 5;
    console.log(number)
} while (number >= 50); 

// Использования цикла для перебора массива
var numbers = [1, 2, 3, 4, 5, 10]

for (var el = 0; el , numbers.length; el++) {
    console.log("Element" + el + ":" + numbers[el])
}

// Получение данных из окн, с помощью перменной
var data = confirm("Are you here?");
if (data == true) {
    console.log("It's True");
    alert("Good Job!");
} else {
    console.log("It's False");
}

// Простая функия + использование
var result_age = prompt('Введите ваш возраст', 18);

function data(age) {
    console.log(age + "!!!");
}

if (result_age >= 18) {
    data(result_age);
}
// Современная функция
const click = () => console.log("Hiiii")

// Вывод переменной из функции 
var user_age = prompt('Введите ваш возраст: ');

function double(age) {
    age *= 2;
    return age;
}
var result = double(user_age);
console.log(result + "!!!")

// Изменения тега с помощью JS
<button onclick="clickButton(this)">Submit</button>

function clickButton(el) {
    el.innerHTML = "Already signed"
}

// Стили по ID
var text = document.getElementById('text')

text.style.color = 'white';
text.style.backgroundColor = 'black';
text.style.width = '150px'

// Нахождение обьектов по классу, ид, тегу
var text = document.getElementsByClassName('text'); // класс
var text = document.getElementByID('text'); // ид
var span = document.getElementsByTagName('span'); // тег

// Провека форм 
function clickForm(el) {
    var name = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var error = "";

    if (name == "" || pass == "") {
        error = "Заполните все поля!";
    } else if (pass.length > 12 || pass.length < 6) {
        error = "Введите пароль от 6 до 12 символов!";
    } else if (name.passlength > 10 || name.length < 4) {
        error = "Введите имя от 6 до 10 символов!";
    } 

    if (error != "") {
        document.getElementById('error').innerHTML = error;
        return false;
    } else {
        window.location = "web1.html"
    }
}

// Работа с интервалом 
var count = 0
var stop = setInterval(myFunc, 500) 

function myFunc() {
    count ++;
    console.log("Counter: " + count)

    if(count == 5) {
        clearInterval(stop)
    }
}

// Таймер 
setTimeout(myFunc, 1000)

function myFunc() {
    console.log("Таймер сработал")
}

// Класы и объекты (полный функционал)
class population {
    constructor(name, age, country) {
        this.name = name
        this.age = age
        this.country = country
    }

    about() {
        console.log("Имя: " + this.name + "  Возраст: " + this.age + "  Страна: " + this.country)
    }
}

var daniel = new population('Daniel', 18, "Republic of Moldova")
daniel.about();