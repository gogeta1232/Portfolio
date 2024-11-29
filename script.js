const video = document.getElementById("background-video");
const muteButton = document.getElementById("mute-btn");

// Play the video with muted sound initially
window.addEventListener("load", () => {
    video.play().catch((error) => {
        console.warn("Autoplay failed:", error);
    });
});

// Mute/Unmute button functionality
muteButton.addEventListener("click", () => {
    if (video.muted) {
        video.muted = false;
        muteButton.innerHTML = '<i class="fas fa-volume-up"></i>'; // Icon for unmuted
    } else {
        video.muted = true;
        muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>'; // Icon for muted
    }
});
