document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("stage1").classList.remove("hidden");
    this.style.display = "none";
});

document.getElementById("no1").addEventListener("click", function() {
    showFinalMessage();
});

document.getElementById("yes1").addEventListener("click", function() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("stage2").classList.remove("hidden");
});

document.getElementById("no2").addEventListener("click", function() {
    showFinalMessage();
});

document.getElementById("yes2").addEventListener("click", function() {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("stage3").classList.remove("hidden");
});

document.getElementById("no3").addEventListener("click", function() {
    showFinalMessage();
});

document.getElementById("yes3").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - this.offsetWidth);
    let y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.left = x + "px";
    this.style.top = y + "px";
});

function showFinalMessage() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("stage3").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
}

