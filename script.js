document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("stage1").classList.remove("hidden");
});

document.getElementById("no1").addEventListener("click", function() {
    showFinalStage();
});

document.getElementById("yes1").addEventListener("click", function() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("stage2").classList.remove("hidden");
});

document.getElementById("no2").addEventListener("click", function() {
    showFinalStage();
});

document.getElementById("yes2").addEventListener("click", function() {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("stage3").classList.remove("hidden");
});

document.getElementById("no3").addEventListener("click", function() {
    showFinalStage();
});

document.getElementById("yes3").addEventListener("mouseover", function(event) {
    event.target.style.position = "absolute";
    event.target.style.top = Math.random() * window.innerHeight + "px";
    event.target.style.left = Math.random() * window.innerWidth + "px";
});

document.getElementById("yes3").addEventListener("click", function() {
    alert("You really don't need a Valentine! 😂");
});

function showFinalStage() {
    document.getElementById("stage1").classList.add("hidden");
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("stage3").classList.add("hidden");
    document.getElementById("finalStage").classList.remove("hidden");
}


