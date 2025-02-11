document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("stage1").style.display = "block";
});

document.getElementById("yes1").addEventListener("click", function() {
    document.getElementById("stage1").style.display = "none";
    document.getElementById("stage2").style.display = "block";
});

document.getElementById("no1").addEventListener("click", function() {
    showFinalStage();
});

document.getElementById("yes2").addEventListener("click", function() {
    document.getElementById("stage2").style.display = "none";
    document.getElementById("stage3").style.display = "block";
});

document.getElementById("no2").addEventListener("click", function() {
    showFinalStage();
});

document.getElementById("yes3").addEventListener("mouseenter", function() {
    let button = document.getElementById("yes3");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    button.style.left = x + "px";
    button.style.top = y + "px";
});

document.getElementById("no3").addEventListener("click", function() {
    showFinalStage();
});

function showFinalStage() {
    document.getElementById("stage1").style.display = "none";
    document.getElementById("stage2").style.display = "none";
    document.getElementById("stage3").style.display = "none";
    document.getElementById("finalStage").style.display = "block";
}



