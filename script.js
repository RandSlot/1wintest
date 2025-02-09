document.addEventListener("DOMContentLoaded", function () {
    let playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function () {
        let sound = new Audio('click.mp3');  
        sound.play();  
        setTimeout(() => {
            window.location.href = "https://1wcneg.com/casino/list?open=register&p=o0qr";
        }, 1500);
    });

    // Автоматический переход через 5 сек
    setTimeout(() => {
        window.location.href = "https://1wcneg.com/casino/list?open=register&p=o0qr";
    }, 5000);
});
