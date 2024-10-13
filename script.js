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
});
$("button").on("mouseup mouseleave touchend", function() {
    $(this).css("transform", "scale(1)");
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

$(document).ready(function() {
    $('#create-game').click(function() {
        window.location.href = 'game.html';
    });
    $('#rules').click(function() {
        window.location.href = 'rules.html';
    });
    $('#create-game').click(function() {
        window.location.href = 'game.html';
    });
    $('#main-menu').click(function() {
        window.location.href = 'main.html';
    });
    try {
        if (window.Telegram && window.Telegram.WebApp) {
            let user = window.Telegram.WebApp.initDataUnsafe.user;
            console.log(user);
            
            // Меняем цвет хедера на белый
            window.Telegram.WebApp.setHeaderColor('bg_color', '#ffffff');
            
            if (user) {
                document.getElementById("test").innerHTML = JSON.stringify(user); // Преобразуем объект в строку для отображения
            } else {
                document.getElementById("test").innerHTML = "aa"; // Сообщение, если пользователь не существует
            }
    
            if (user && user.photo_url) {
                let profilePhotoUrl = user.photo_url;
                document.getElementById("profile-pic").src = profilePhotoUrl;
            } else {
                console.log("Пользователь не имеет фото профиля");
                document.getElementById("profile-pic").src = "source/profile-pic.png"; // Изображение по умолчанию
            }
        } else {
            console.log("Запуск не в Telegram WebApp");
        }
    } catch (error) {
        console.log("Ошибка:", error);
        document.getElementById("test").innerHTML = "Ошибка";
    }    
});