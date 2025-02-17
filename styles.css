/* Basic Reset */
body, h1, button, img, div {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body Styling */
body {
    font-family: 'Comic Sans MS', sans-serif;
    text-align: center;
    background-color: #f0f0f0; /* Fallback background color */
    background-image: url('https://i.imgur.com/nms09KJ.png'); /* Replace with your image URL */
    background-size: cover; /* Fullscreen Background */
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; /* Added for stacking context */
}

/* Meme Image Styling */
.meme-img {
    width: 300px;
    margin-top: 20px;
    z-index: 2; /* Ensures meme images are above GIFs */
    position: relative;
    max-width: 100%; /* Ensure it doesn't overflow on smaller screens */
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

/* Meme Image Transition Animations */
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInLeft {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

@keyframes zoomIn {
    from { transform: scale(0); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

/* Apply a random animation to the meme image */
.meme-img.transition {
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

/* Button Styling */
.btn {
    padding: 10px 20px;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background-color: #ff4500;
    color: white;
    border-radius: 5px;
    z-index: 2; /* Ensures buttons are above GIFs */
    position: relative;
    transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.btn:hover {
    background-color: #d63b00;
    transform: translateY(-2px); /* Slight lift on hover */
}

.btn:active {
    transform: translateY(0); /* Reset on click */
}

.btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 69, 0, 0.5); /* Focus state for accessibility */
}

/* DVD Logo Styling */
.dvd-logo {
    position: absolute;
    width: 200px;
    height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1; /* Puts GIFs below other elements but above background */
    transition: transform 0.2s ease-in-out; /* Smooth movement */
    opacity: 0; /* Start hidden for spawn animation */
    transform: scale(0); /* Start small for spawn animation */
}

/* Spawn Animation for DVD GIFs */
@keyframes spawn {
    from { opacity: 0; transform: scale(0); }
    to { opacity: 1; transform: scale(1); }
}

.dvd-logo.spawn {
    animation: spawn 0.5s ease-in-out forwards;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    .meme-img {
        width: 200px; /* Smaller image for smaller screens */
    }

    .btn {
        padding: 8px 16px;
        font-size: 14px; /* Smaller buttons for smaller screens */
    }

    .dvd-logo {
        width: 150px;
        height: 150px; /* Smaller DVD logos for smaller screens */
    }
}

@media (max-width: 480px) {
    .meme-img {
        width: 150px; /* Even smaller image for mobile */
    }

    .btn {
        padding: 6px 12px;
        font-size: 12px; /* Smaller buttons for mobile */
    }

    .dvd-logo {
        width: 100px;
        height: 100px; /* Smaller DVD logos for mobile */
    }
}