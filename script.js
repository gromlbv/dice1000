
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
console.log(window.Telegram.WebApp.initDataUnsafe.user)
document.addEventListener("DOMContentLoaded", () => {
    // Убедитесь, что Telegram WebApp инициализирован
    if (window.Telegram && window.Telegram.WebApp) {
        // Установите цвет заголовка
        window.Telegram.WebApp.setHeaderColor("#1E90FF"); // Задайте ваш цвет

        // Установите цвет фона
        window.Telegram.WebApp.setBackgroundColor("#FFFFFF"); // Задайте ваш цвет
    }
});
