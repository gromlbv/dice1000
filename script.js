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


    $("button").on("mousedown touchstart", function() {
        $(this).css("transform", "scale(0.95)");
    });
    $("button").on("mouseup mouseleave touchend", function() {
        $(this).css("transform", "scale(1)");
    });

    $('button').on('mousedown touchstart', function() {
        addActiveState(this);
    });
    $('button').on('mouseup mouseleave touchend', function() {
        removeActiveState(this);
    });
    
    
    const fadeInElements = document.querySelectorAll(".fade-in");
    function removeShowClass(elements, delay) {
        elements.forEach(function(element, index) {
            setTimeout(function() {
                element.classList.remove("show");
            }, delay * index);
        });
    }
    $('#rules-redirect').click(function() {
        removeShowClass(fadeInElements, 100);
        window.location.href = 'rules.html';
    });
    $('#create-game-redirect').click(function() {
        removeShowClass(fadeInElements, 100);
        window.location.href = '/lobby';
    });
    $('#main-menu-redirect').click(function() {
        removeShowClass(fadeInElements, 100);
        window.location.href = '/';
    });
    $('#bonus-redirect').click(function() {
        removeShowClass(fadeInElements, 100);
        window.location.href = 'bonus.html';
    });

    window.Telegram.WebApp.setHeaderColor('bg_color', '#ffffff');
});
