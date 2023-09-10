const Box = document.getElementById("gift-box");
const giftBox = document.getElementById("gift-image");
const giftLid = document.getElementById("gift-shed");
const message = document.getElementById("message");
const sus = document.getElementById("sus");



Box.addEventListener("click", () => {
    giftLid.classList.add("open"); // Добавляем класс для сдвига крышки
    setTimeout(() => {
        giftLid.classList.add("fade"); // Скрываем крышку после сдвига
        giftBox.classList.add("fade"); // Скрываем крышку после сдвига
        sus.classList.add("fade"); // Скрываем крышку после сдвига
        
    }, 2500); // Ждем 0.5 секунды, прежде чем скрыть крышку
});
