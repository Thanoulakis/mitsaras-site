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

// Array of DVD logo URLs
const dvdLogos = [
    "https://media1.tenor.com/m/X3w-LOtBU-AAAAAd/roshhashanah-excited.gif",
    "https://cdn.discordapp.com/attachments/1064922301591728329/1318559813067604000/bounce.gif?ex=67b286c5&is=67b13545&hm=877ba597ead702c6d33dffcfa07e53881b8eeae5ac6e2dc920e3e11ae305ecca&",
    "https://media1.tenor.com/m/GAZlMVSWrY0AAAAd/nature-blue.gif"
];

// Counter to keep track of the current GIF
let currentGifIndex = 0;

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
    newDvd.className = "dvd-logo spawn"; // Add the spawn class
    newDvd.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    newDvd.style.top = Math.random() * (window.innerHeight - 200) + 'px';
    newDvd.style.backgroundImage = `url('${dvdLogos[currentGifIndex]}')`;
    document.body.appendChild(newDvd);

    // Update the GIF index to the next one
    currentGifIndex = (currentGifIndex + 1) % dvdLogos.length;

    moveDvdLogo(newDvd);
}

// Function to move DVD logos
function moveDvdLogo(dvd) {
    let x = Math.random() * (window.innerWidth - 200);
    let y = Math.random() * (window.innerHeight - 200);
    let dx = 2, dy = 2;

    function animate() {
        x += dx;
        y += dy;

        // Bounce off the edges
        if (x + 200 >= window.innerWidth || x <= 0) dx = -dx;
        if (y + 200 >= window.innerHeight || y <= 0) dy = -dy;

        dvd.style.left = x + 'px';
        dvd.style.top = y + 'px';
        requestAnimationFrame(animate);
    }

    animate();
}

// Variable to store the current audio
let currentAudio = null;

// Function to play a sound effect
function playLigdasSound() {
    // Stop the previous sound if it's playing
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Play the new sound
    const randomAudio = audioUrls[Math.floor(Math.random() * audioUrls.length)];
    currentAudio = new Audio(randomAudio);
    currentAudio.play();
}

// Function to create the rain animation
function makeItRain() {
    const rainImageURL = '/assets/jimaras.jpg'; // Replace with the path to your image in the assets folder
    for (let i = 0; i < 30; i++) { // Adjust the number of rain drops as needed
        const rainDrop = document.createElement("div");
        rainDrop.className = "rain-drop";
        rainDrop.style.left = Math.random() * window.innerWidth + 'px';
        rainDrop.style.backgroundImage = `url('${rainImageURL}')`;
        document.body.appendChild(rainDrop);

        // Remove the rain drop after it has completed its animation
        rainDrop.addEventListener('animationend', () => {
            rainDrop.remove();
        });
    }
}

// Move the initial DVD logo
moveDvdLogo(document.getElementById("dvdLogo"));
