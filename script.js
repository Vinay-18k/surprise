document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("stage1").classList.remove("hidden");
});

// Stage 1 Buttons
document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("stage2").classList.remove("hidden");
});

document.getElementById("noButton").addEventListener("click", function() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Stage 2 Buttons
document.getElementById("yesButton2").addEventListener("click", function() {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("stage3").classList.remove("hidden");
});

document.getElementById("noButton2").addEventListener("click", function() {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Stage 3 - Only "No" button should work
document.getElementById("noButton3").addEventListener("click", function() {
    document.getElementById("stage3").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Gift Button - Works on both mobile & desktop
document.getElementById("giftButton").addEventListener("click", showGift);
document.getElementById("giftButton").addEventListener("touchstart", showGift);

function showGift() {
    document.getElementById("giftMessage").classList.remove("hidden");
}

