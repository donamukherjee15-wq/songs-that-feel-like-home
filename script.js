// Songs That Feel Like Home

const screens = document.querySelectorAll(".screen");

function showScreen(id) { 
screens.forEach(screen => { 
screen.classList.remove("active"); 
});

document.getElementById(id).classList.add("active");

window.scrollTo({
    top: 0,
    behavior: "smooth"
});
}

// Loading → Gift 
document.getElementById("begin").addEventListener("click", () => { 
showScreen("gift"); 
});

// Gift → Cassette (Animated)

const giftBox = document.querySelector(".gift-box");

giftBox.addEventListener("click", () => {

    // Prevent multiple taps
    if (giftBox.classList.contains("open")) return;

    giftBox.classList.add("open");

    // Wait for animation to finish
    setTimeout(() => {
        showScreen("cassette");
    }, 1200);

});

// Cassette → Letter 
document.getElementById("letterBtn").addEventListener("click", () => { 
showScreen("letter"); 
});

// Letter → Photo 
document.getElementById("photoBtn").addEventListener("click", () => { 
showScreen("photo"); 
});

// Photo → Playlist 
document.getElementById("playlistBtn").addEventListener("click", () => { 
showScreen("playlist"); 
});

// Playlist → Ending 
document.getElementById("endingBtn").addEventListener("click", () => { 
showScreen("ending"); 
});

// Replay 
document.getElementById("restart").addEventListener("click", () => { 
showScreen("loading"); 
});