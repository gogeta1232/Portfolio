// **Mute/Unmute Button Functionality**
const video = document.getElementById('background-video');
const muteBtn = document.getElementById('mute-btn');

// Toggle mute state and button icon
muteBtn.addEventListener('click', () => {
    const isMuted = video.muted;
    video.muted = !isMuted;
    muteBtn.innerHTML = isMuted ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
});

// **Clock Update Function**
function updateClock() {
    const clockElement = document.getElementById("corner-clock");
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format

    // Update the clock element with formatted time
    clockElement.innerHTML = `
        <span id="corner-hours">${hours}</span>:<span id="corner-minutes">${minutes}</span>:<span id="corner-seconds">${seconds}</span> 
        <span id="corner-ampm">${ampm}</span>
    `;
}

// Initialize clock immediately and update it every second
updateClock();
setInterval(updateClock, 1000);

// **Scroll to Top Button Functionality**
const scrollToTop = document.getElementById('scroll-to-top');

// Show/hide scroll-to-top button based on scroll position
window.addEventListener('scroll', () => {
    scrollToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Smooth scroll to the top when button is clicked
scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Get view count from localStorage or initialize to 0 if not present
let viewCount = parseInt(localStorage.getItem('viewCount') || '0');

// Check if the user has already visited the page
const hasVisited = localStorage.getItem('hasVisited');

// If the user hasn't visited before, increment the view count and set the 'hasVisited' flag
if (!hasVisited) {
    viewCount++; // Increment the view count
    localStorage.setItem('viewCount', viewCount); // Save the updated view count to localStorage
    localStorage.setItem('hasVisited', 'true'); // Set a flag indicating the user has visited
}

// Display the current view count
document.getElementById("view-count").textContent = viewCount;

// **AOS Initialization**
AOS.init();
