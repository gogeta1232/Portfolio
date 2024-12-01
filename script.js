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

// Clock Update Function
function updateClock() {
    const clockElement = document.getElementById("corner-clock");
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    clockElement.innerHTML = `<span id="corner-hours">${hours}</span>:<span id="corner-minutes">${minutes}</span>:<span id="corner-seconds">${seconds}</span> <span id="corner-ampm">${ampm}</span>`;
}

// Initialize the clock and update it every second
setInterval(updateClock, 1000);
updateClock(); // Call once immediately to avoid delay

// Scroll to Top Button Functionality
const scrollToTop = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
    scrollToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Simulate View Count Increment with localStorage
let viewCount = localStorage.getItem('viewCount') || 0; // Get value or initialize to 0
viewCount = parseInt(viewCount) + 1; // Increment by 1
localStorage.setItem('viewCount', viewCount); // Save updated view count
document.getElementById("view-count").textContent = viewCount;


// AOS Initialization
AOS.init();



