let ligdasAudio = null;

function playLigdasSound() {
    const soundUrl = [
        "https://docs.google.com/uc?export=download&id=1JwtTdT7w_sGpH_XlC7zKfsXPP5UL6uDr"
        
        ];

    if (ligdasAudio) {
        ligdasAudio.pause();
        ligdasAudio.currentTime = 0; // Reset to start
    }

    ligdasAudio = new Audio(soundUrl);
    ligdasAudio.play();
}
