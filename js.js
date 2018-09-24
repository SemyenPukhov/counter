var total = document.getElementById("total");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");

plus.addEventListener("click", function() {
    writeResult("plus");
    setAnimation(plus);
});

minus.addEventListener("click", function() {
    writeResult("minus");
    setAnimation(minus);
});

function writeResult(type) {
    if (type == "plus") {
        if (total.textContent == 0) {
            total.textContent = 1;
            return;
        }
        total.textContent = +total.textContent + 1;
    }
    if(type == "minus") {
        if (total.textContent == 0) {
            total.textContent = -1;
            return;
        }
        total.textContent = +total.textContent - 1;
    }
}

function setAnimation(node) {
    var img = node.firstChild.style.animationName = "pulse";
    setTimeout(function(){node.firstChild.style.animationName = "none";}, 100);
}