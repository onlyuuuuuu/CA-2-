const speaker = document.getElementById("speaker");
const backgroundMusic = document.getElementById("background-music");
let isMusicPlayed = false;

speaker.addEventListener("click", toggleMute);

window.addEventListener("click", function() {
    if (!isMusicPlayed) 
    {
        backgroundMusic.play();
        isMusicPlayed = true;
    }
});

function toggleMute() {
    if (backgroundMusic.paused) 
    {
        backgroundMusic.play();
        speaker.src = "icons/volume-on.png";
    } 
    else 
    {
        backgroundMusic.pause();
        speaker.src = "icons/volume-mute.png";
    }
}
function startGame() {
    window.location.href = "home.html";
}
