
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

if (window.Telegram && window.Telegram.WebApp) {
    document.getElementById("test").innerHTML = "Работает!";
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    console.log(user);

} else {
    document.getElementById("test").innerHTML = " не работает(";
    console.error("Telegram WebApp is not initialized.");
}

// Убедитесь, что Telegram WebApp инициализирован
if (window.Telegram && window.Telegram.WebApp) {
    // Установите цвет заголовка
    window.Telegram.WebApp.setHeaderColor("#1E90FF"); // Укажите ваш цвет в формате HEX

    // Установите цвет фона
    window.Telegram.WebApp.setBackgroundColor("#FFFFFF"); // Укажите ваш цвет в формате HEX
}
