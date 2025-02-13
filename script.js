document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("intro").classList.add("hidden"); // Hide the intro section
    document.getElementById("stage1").classList.remove("hidden");
});

document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("stage2").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

document.getElementById("yesButton2").addEventListener("click", function() {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("stage3").classList.remove("hidden");
});

document.getElementById("noButton2").addEventListener("click", function() {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

document.getElementById("noButton3").addEventListener("click", function() {
    document.getElementById("stage3").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Moving button trick
let yesButton3 = document.getElementById("yesButton3");
yesButton3.addEventListener("mouseover", function(event) {
    let offsetX = (Math.random() * 200 - 100) + "px";
    let offsetY = (Math.random() * 100 - 50) + "px";
    event.target.style.transform = `translate(${offsetX}, ${offsetY})`;
});

// Floating emoji effect
function createEmoji() {
    const emojis = ["❤️", "💌", "🌹", "🎀", "💘"];
    const emojiContainer = document.getElementById("emojiContainer");

    for (let i = 0; i < 5; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;

        emojiContainer.appendChild(emoji);

        setTimeout(() => emoji.remove(), 5000);
    }
}

setInterval(createEmoji, 2000);

