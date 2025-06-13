let count = 0
let countValue = 1;

function click1() {
    count += countValue;
    updateCount();

    if (count == 100){
        showSurpriseImage();
    } else {
        hideSurpriseImage();
    }
}

function updateCount(){
    document.getElementById("count").innerHTML = "Breads: " + Math.floor(count);
}

function showSurpriseImage() {
    const img = document.getElementById("surpriseImage");
    img.src = "../images/baking_bread.jpg";
    img.alt = "Surprise Image";
}

function hideSurpriseImage() {
    const img = document.getElementById("surpriseImage");
    img.src = "";
    img.alt = "";
}

