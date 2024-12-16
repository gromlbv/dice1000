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

    // $('#show-table').click(function() {
    //     console.log('aaa')
    //     $("#show-table").css("transform", "rotate(180deg)");
    // });

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
        window.location.href = '/rules';
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
        window.location.href = '/bonus';
    });

    const skins = document.getElementById('skins');
    const wallet = document.querySelector('.wallet');
    const wallet_bg = document.querySelector('.wallet-bg');
    const wallet_item = document.querySelector('.wallet-item');

    
    if (skins != null) {
        skins.addEventListener('click', toggleVisibility);
        wallet_bg.addEventListener('click', toggleVisibility);

    }
    
    function toggleVisibility() {
        wallet.classList.toggle('visible');
        wallet.classList.toggle('hidden');
        
        wallet_bg.classList.toggle('visible');
        wallet_bg.classList.toggle('hidden');
    }
    
    function isClickOnMargin(event, element) {
        const rect = element.getBoundingClientRect();        
        return event.clientX < rect.left || event.clientX > rect.right || 
               event.clientY < rect.top || event.clientY > rect.bottom;
    }
    

    window.Telegram.WebApp.setHeaderColor('bg_color', '#ffffff');
});