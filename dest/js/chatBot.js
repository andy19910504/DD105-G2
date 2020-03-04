let openBtn = document.getElementById('openBot')
let chatBot = document.getElementById('chatBot')
window.addEventListener('load',function(){
    openBtn.onclick = function(){
        openBtn.classList.toggle("-closeBtn");
        chatBot.classList.toggle("-chatBotOpen");
    }
})