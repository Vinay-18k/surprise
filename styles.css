document.getElementById("startButton").addEventListener("click", function() {
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
// Existing JavaScript remains the same

// Function to create jumping emojis
function createEmoji() {
    const emojis = ["❤️", "💌", "🌹", "🎀", "💘", "💝", "💖", "💕"];
    const emojiContainer = document.getElementById("emojiContainer");

    // Create 5 emojis
    for (let i = 0; i < 5; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 90}vw`; // Random horizontal position
        emoji.style.top = `${Math.random() * 90}vh`; // Random vertical position
        emoji.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random speed

        emojiContainer.appendChild(emoji);

        // Make emojis move around randomly
        setInterval(() => {
            emoji.style.left = `${Math.random() * 90}vw`;
            emoji.style.top = `${Math.random() * 90}vh`;
        }, 3000); // Change position every 3 seconds
    }
}

// Call the function to create emojis
createEmoji();



