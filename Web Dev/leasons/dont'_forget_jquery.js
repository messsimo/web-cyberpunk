// Скрытие и появлиние скрытого блока + функции к ним
jQuery(".block").hide(2000);
jQuery(".another-block").show(1000, function() {
    console.log("Hello World")
})

// Автоматические циклы (вместо for, while, do while)
jQuery(".nav-links > li").hide(1000) // Процесс проходит через дочерние селекторы

// Анимация затухания и проявления объекта
jQuery(".another-block").fadeOut(2000)
jQuery(".another-block").fadeIn(2000)

// Прозрачность элемента
jQuery(".block").fadeOut(1000, 0.5)
jQuery(".block").fadeOut(1000, 0.5).fadeTo(1000, 1) // +восстановление прозрачность до 100%

// Анимация скрытия и расскрытия 
jQuery(".block").slideDown(100)
jQuery(".block").slideUp(1000)

// Удаление и добавления атрибута
$(".block img").Attr("src", "back.jpg")
$(".block img").removeAttr("src")

// Добавление и удаление класса
jQuery(".block").addClass("new")
jQuery(".block").removeClass("new")

// Добавление стилей CSS
jQuery(".nav-links li a").css("color", "blue")
// Добавление нескольких стилей
jQuery(".nav-links li a").css("color", "blue").css("font-size", "12px") 
jQuery(".nav-links li a").css({
    "color": "red",
    "font-size": "50px"
})

// Анимация для ЧИСЛОВЫХ стилей CSS 
jQuery(".nav-links li a").animate({
    "font-size": "50px"
}, 5000, function() {
    alert()
})

// Добавление тега html сверху/снизу блока и внутри блока сверху/снизу
jQuery(".another-block").before("<span>Text</span>")
jQuery(".another-block").after("<span>Text</span>")
jQuery(".another-block").append("<span>Text</span>")
jQuery(".another-block").prepend("<span>Text</span>")

// Ручные циклы
// each() - для каждого ел. по отдельности. $(this) - для текущего обрабатываемого ел.
jQuery(".nav-links li a").each(function() {
    if ($(this).attr("name") == "Services") {
        $(this).css("color", "red")
    }
})

// Клонирование и удаление блока
var block = jQuery(".block").clone()
jQuery(".another-block").before(block)

var block = jQuery(".block").remove()
jQuery(".another-block").after(block)

// События
// При наведении на объект
jQuery(".button").mouseout(function() {
    $(".button").css({
        "background-color": "black",
        "color": "white"})
    })
// При отведении от объекта
jQuery(".button").mouseout(function() {
    alert("Hello ")
})
// При клике
jQuery(".button").click(function() {
    $(".button").css("color", "red")
}) 

