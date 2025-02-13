// Hide intro section when clicking start
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("stage1").classList.remove("hidden");
});

// Stage 1 buttons
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("stage2").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Stage 2 buttons
document.getElementById("yesButton2").addEventListener("click", function() {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("stage3").classList.remove("hidden");
});

document.getElementById("noButton2").addEventListener("click", function() {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Stage 3 buttons
document.getElementById("noButton3").addEventListener("click", function() {
    document.getElementById("stage3").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Moving "Yes" button in stage 3
let yesButton3 = document.getElementById("yesButton3");
let moveCount = 0;
yesButton3.addEventListener("mouseover", function() {
    moveCount++;
    let offsetX = (Math.random() * 200 - 100) + "px";
    let offsetY = (Math.random() * 100 - 50) + "px";
    yesButton3.style.transform = `translate(${offsetX}, ${offsetY})`;
    if (moveCount >= 3) {
        yesButton3.removeEventListener("mouseover", arguments.callee);
        alert("Haha! You can't catch me! 😜");
    }
});

// Floating emojis
function createEmoji() {
    const emojis = ["❤️", "💌", "🌹", "🎀", "💘", "💝", "💖", "💕"];
    const emojiContainer = document.getElementById("emojiContainer");

    for (let i = 0; i < 5; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 90}vw`;
        emojiContainer.appendChild(emoji);
    }
}

createEmoji();


