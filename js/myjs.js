var isFirst = false;
var original3 = null;

function updateF3() {
    if (!isFirst) {
        original3 = document.getElementById("f3").innerText;
        isFirst = true;
    }
    document.getElementById("f3").innerHTML = "f3가 변경 됨"
}

function restoreF3() {
    document.getElementById("f3").innerHTML = original3;
}