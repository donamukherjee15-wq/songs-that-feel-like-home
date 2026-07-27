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

// Gift → Cassette 
document.querySelector(".gift-box").addEventListener("click", () => { 
showScreen("cassette"); 
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