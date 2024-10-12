
//try {
//    const user = window.Telegram.WebApp.initDataUnsafe.user;
//    console.log(user);
//    
//    // Проверяем, существует ли пользователь и имеет ли он данные
//    if (user) {
//        document.getElementById("test").innerHTML = JSON.stringify(user); // Преобразуем объект в строку для отображения
//    } else {
//        document.getElementById("test").innerHTML = "aa"; // Сообщение, если пользователь не существует
//    }
//} catch (error) {
//    document.getElementById("test").innerHTML = "Ошибка";
//}
//const user = window.Telegram.WebApp.initDataUnsafe.user;
//console.log(user);
//
//if (user && user.photo_url) {
//    // Получаем URL фото профиля
//    const profilePhotoUrl = user.photo_url;
//
//    // Заменяем источник изображения
//    document.getElementById("profile-pic").src = profilePhotoUrl;
//} else {
//    console.log("Пользователь не имеет фото профиля");
//    document.getElementById("profile-pic").src = "default-profile-pic.png"; // Укажите путь к изображению по умолчанию
//}
window.addEventListener("load", function() {
    const fadeIn1Elements = document.querySelectorAll(".fade-in1");
    const fadeIn2Elements = document.querySelectorAll(".fade-in2");
    const fadeIn3Elements = document.querySelectorAll(".fade-in3");

    fadeIn1Elements.forEach(function(element) {
        element.classList.add("show");
    });

    fadeIn2Elements.forEach(function(element) {
        element.classList.add("show");
    });

    fadeIn3Elements.forEach(function(element) {
        element.classList.add("show");
    });
});

const tg = window?.Telegram?.WebApp
console.log(tg.initDataUnsafe.user)
document.addEventListener("DOMContentLoaded", () => {
    // Убедитесь, что Telegram WebApp инициализирован
    if (tg) {
        // Установите цвет заголовка
        tg.setHeaderColor("#1E90FF"); // Задайте ваш цвет

        // Установите цвет фона
        tg.setBackgroundColor("#FFFFFF"); // Задайте ваш цвет
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('touchstart', () => {
            button.classList.add('active');
        });

        button.addEventListener('touchend', () => {
            button.classList.remove('active');
        });

        button.addEventListener('mousedown', () => {
            button.classList.add('active');
        });

        button.addEventListener('mouseup', () => {
            button.classList.remove('active');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('active');
        });
    });
});
