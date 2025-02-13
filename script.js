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

// Stage 3 (FIXED: Only the "No" button will proceed)
document.getElementById("noButton3").addEventListener("click", function() {
    document.getElementById("stage3").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
});

// Show final gift message
document.getElementById("giftButton").addEventListener("click", function() {
    document.getElementById("giftMessage").classList.remove("hidden");
});
