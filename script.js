// Array of meme images
const memes = [
    "https://i.imgur.com/KrMLbOQ.jpeg",
    "https://i.imgur.com/ISbie3F.jpeg",
    "https://i.imgur.com/wzKESsR.jpeg",
    "https://i.imgur.com/oMfy2ec.jpeg",
    "https://i.imgur.com/3co8g0P.jpeg"
];

// Array of transition animations
const transitions = ["fadeIn", "slideInLeft", "slideInRight", "zoomIn"];

// Function to change the meme image with a random transition
function changeMeme() {
    const memeImage = document.getElementById("memeImage");
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];

    // Apply the transition animation
    memeImage.style.opacity = 0; // Fade out the current image
    setTimeout(() => {
        memeImage.src = memes[randomIndex]; // Change the image
        memeImage.style.opacity = 1; // Fade in the new image
        memeImage.classList.add("transition");
        memeImage.style.animationName = randomTransition; // Apply random transition
    }, 500); // Wait for the fade-out to complete
}

// Function to spawn a new DVD logo with a spawn transition
function spawnDvdLogo() {
    const newDvd = document.createElement("div");
    newDvd.className = "dvd-logo spawn";
    newDvd.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    newDvd.style.top = Math.random() * (window.innerHeight - 200) + 'px';
    newDvd.style.backgroundImage = `url('${dvdLogos[currentGifIndex]}')`;
    document.body.appendChild(newDvd);

    // Update the GIF index to the next one
    currentGifIndex = (currentGifIndex + 1) % dvdLogos.length;

    moveDvdLogo(newDvd);
}