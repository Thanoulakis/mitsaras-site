let ligdasAudio = null;

function playLigdasSound() {
    const soundUrl = [
        "https://docs.google.com/uc?export=download&id=1JwtTdT7w_sGpH_XlC7zKfsXPP5UL6uDr",
        "https://docs.google.com/uc?export=download&id=1ut8F7zOAU0B2UQhBRQGJ1K5Mjo4-EQ4l"
    ];

    // Stop the previous sound if it's playing
    if (ligdasAudio) {
        ligdasAudio.pause();
        ligdasAudio.currentTime = 0; // Reset to start
    }

    // Select a random sound from the array
    const randomSoundUrl = soundUrl[Math.floor(Math.random() * soundUrl.length)];

    // Play the new sound
    ligdasAudio = new Audio(randomSoundUrl);
    ligdasAudio.play();
}