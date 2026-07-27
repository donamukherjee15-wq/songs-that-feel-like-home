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

/* ==========================
   NEW GIFT REVEAL
========================== */

const giftWrapper = document.querySelector(".gift-wrapper");
const giftBox = document.querySelector(".gift-box");
const playGift = document.getElementById("playGift");

giftBox.addEventListener("click", () => {

    if(giftWrapper.classList.contains("open")) return;

    giftWrapper.classList.add("open");
    giftBox.classList.add("open");

});

playGift.addEventListener("click", () => {

    showScreen("letter");

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
// Gift Cassette → Letter

document.getElementById("playGift").addEventListener("click", () => {

    showScreen("letter");

});