// Array of meme images (now in order)
const memes = [
    "https://i.imgur.com/KrMLbOQ.jpeg",
    "https://i.imgur.com/ISbie3F.jpeg",
    "https://i.imgur.com/wzKESsR.jpeg",
    "https://i.imgur.com/oMfy2ec.jpeg",
    "https://i.imgur.com/3co8g0P.jpeg"
];
let currentMemeIndex = 0;



// Array of DVD logo GIFs (cycled properly)
const dvdLogos = [
    "https://media1.tenor.com/m/X3w-LOtBU-AAAAAd/roshhashanah-excited.gif",
    "https://media1.tenor.com/m/V2NAOALbN-AAAAAd/dvd-bouncing-logo.gif",
    "https://media1.tenor.com/m/4y5lX0H7-kAAAAAd/dvd-logo.gif"
];
let currentDvdIndex = 0;


function selectImage(index) {
    const mainImage = document.getElementById("mainImage");
    mainImage.style.opacity = 0;
    setTimeout(() => {
        mainImage.src = memes[index];
        mainImage.style.opacity = 1;
    }, 500);
}

// Function to change the meme image in order
function changeMeme() {
    const memeImage = document.getElementById("memeImage");
    memeImage.style.opacity = 0;
    setTimeout(() => {
        memeImage.src = memes[currentMemeIndex];
        memeImage.style.opacity = 1;
        updateDots(currentMemeIndex);
        currentMemeIndex = (currentMemeIndex + 1) % memes.length;
    }, 500);
}

// Function to update dots indicator
function updateDots(activeIndex) {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

// Function to spawn a new DVD logo cycling through different images
function spawnDvdLogo() {
    const dvdContainer = document.getElementById("dvdContainer");
    if (!dvdContainer) return;

    const newDvd = document.createElement("div");
    newDvd.className = "dvd-logo spawn";
    newDvd.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    newDvd.style.top = Math.random() * (window.innerHeight - 200) + 'px';
    newDvd.style.backgroundImage = `url('${dvdLogos[currentDvdIndex]}')`;
    dvdContainer.appendChild(newDvd);

    moveDvdLogo(newDvd);
    currentDvdIndex = (currentDvdIndex + 1) % dvdLogos.length;
}

// Function to move DVD logos
function moveDvdLogo(dvd) {
    let x = Math.random() * (window.innerWidth - 200);
    let y = Math.random() * (window.innerHeight - 200);
    let dx = 2, dy = 2;

    function animate() {
        x += dx;
        y += dy;
        if (x + 200 >= window.innerWidth || x <= 0) dx = -dx;
        if (y + 200 >= window.innerHeight || y <= 0) dy = -dy;
        dvd.style.left = x + 'px';
        dvd.style.top = y + 'px';
        requestAnimationFrame(animate);
    }
    animate();
}

// Ensure DVD logo movement starts
const initialDvdLogo = document.getElementById("dvdLogo");
if (initialDvdLogo) moveDvdLogo(initialDvdLogo);

function openNewTab() {
    window.open("https://www.youtube.com/watch?v=odt6-6k6Aks", "_blank");
}
