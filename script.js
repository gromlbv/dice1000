
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
    const fadeInElements = document.querySelectorAll(".fade-in");

    function addShowClass(elements, delay) {
        elements.forEach(function(element, index) {
            setTimeout(function() {
                element.classList.add("show");
            }, delay * index);
        });
    }

    addShowClass(fadeInElements, 300);
});



let clicked = false;

$("button").on("mousedown touchstart", function() {
    $(this).css("transform", "scale(0.95)");
    $(this).css("border-radius", "100px");
});
$("button").on("mouseup mouseleave touchend", function() {
    $(this).css("transform", "scale(1)");
    $(this).css("border-radius", "25px");
});
document.addEventListener('DOMContentLoaded', () => {
    const interactives = document.querySelectorAll('.interactive');

    interactives.forEach(interactive => {
        interactive.addEventListener('touchstart', () => {
            addActiveState(interactive);
        });

        interactive.addEventListener('touchend', () => {
            removeActiveState(interactive);
        });

        interactive.addEventListener('mousedown', () => {
            addActiveState(interactive);
        });

        interactive.addEventListener('mouseup', () => {
            removeActiveState(interactive);
        });

        interactive.addEventListener('mouseleave', () => {
            removeActiveState(interactive);
        });
    });
});

function addActiveState(element) {
    const randomAngle = Math.floor(Math.random() * 31) - 15;
    element.style.transform = `scale(0.95) rotate(${randomAngle}deg)`;
    element.classList.add('active');
}

function removeActiveState(element) {
    element.style.transform = 'scale(1) rotate(0deg)';
    element.classList.remove('active');
}
