// Video Mute/Unmute Button Functionality
const video = document.getElementById('background-video');
const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        video.muted = true;
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
});

// Typed.js Initialization
const typed = new Typed('#typed-text', {
    strings: ['17-year-old fella who likes editing.', 'Learning coding.', 'Sometimes writes stories.'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

