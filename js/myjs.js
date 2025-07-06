var isFirst3 = false;
var original3 = null;

function updateF3() {
    getOriginalF3();
    document.getElementById("f3").innerHTML = "f3가 변경 됨"
}

function restoreF3() { 
    getOriginalF3();
    document.getElementById("f3").innerHTML = original3;
}

function getOriginalF3() {
    if (!isFirst3) {
        original3 = document.getElementById("f3").innerText;
        isFirst3 = true;
    }
}