
try {
    const user = window.Telegram.WebApp.initDataUnsafe.user;
    console.log(user);
    
    // Проверяем, существует ли пользователь и имеет ли он данные
    if (user) {
        document.getElementById("test").innerHTML = JSON.stringify(user); // Преобразуем объект в строку для отображения
    } else {
        document.getElementById("test").innerHTML = "aa"; // Сообщение, если пользователь не существует
    }
} catch (error) {
    document.getElementById("test").innerHTML = "Ошибка";
}