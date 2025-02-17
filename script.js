const memes = [
    "https://i.imgur.com/KrMLbOQ.jpeg",
    "https://i.imgur.com/ISbie3F.jpeg",
    "https://i.imgur.com/wzKESsR.jpeg",
    "https://i.imgur.com/oMfy2ec.jpeg",
    "https://i.imgur.com/3co8g0P.jpeg"
];

function selectImage(index) {
    const memeImage = document.getElementById("memeImage");
    memeImage.style.opacity = 0;
    setTimeout(() => {
        memeImage.src = memes[index];
        memeImage.style.opacity = 1;

        // Remove the "Change Image" button
        const changeImageButton = document.getElementById("changeImageButton");
        if (changeImageButton) {
            changeImageButton.remove();
        }
    }, 500);
}

// Existing code...

function openNewTab() {
    window.open("https://www.youtube.com/watch?v=odt6-6k6Aks", "_blank");
}

function changeMeme() {
    const memeImage = document.getElementById("memeImage");
    memeImage.style.opacity = 0;
    setTimeout(() => {
        memeImage.src = memes[currentMemeIndex];
        memeImage.style.opacity = 1;
        currentMemeIndex = (currentMemeIndex + 1) % memes.length;
    }, 500);
}

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

function makeItRain() {
    const rainImageURL = '/assets/favicon-32x32.png';
    for (let i = 0; i < 30; i++) {
        const rainDrop = document.createElement("div");
        rainDrop.className = "rain-drop";
        rainDrop.style.left = Math.random() * window.innerWidth + 'px';
        rainDrop.style.top = '-50px';
        rainDrop.style.backgroundImage = `url('${rainImageURL}')`;
        document.body.appendChild(rainDrop);
        rainDrop.style.animation = "rain 3s linear infinite";

        rainDrop.addEventListener('animationend', () => rainDrop.remove());
    }
}
