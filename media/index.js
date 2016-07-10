var video = document.getElementById("video"),
    playback = document.getElementById("play"),
    mute = document.getElementById("mute");

// Listener para play/pause
playback.addEventListener( "click", function(e) {
    e.preventDefault();
    if (video.paused) {
        video.play();
        playback.innerHTML = "Pause";
    } else {
        video.pause();
        playback.innerHTML = "Play";
    }
});

// Listener para mute/unmute
mute.addEventListener( "click", function(e) {
    e.preventDefault();
    if (video.muted) {
        video.muted = false;
        mute.innerHTML = "Mute";
    } else {
        video.muted = true;
        mute.innerHTML = "Unmute";
    }
});