let structures = {
    garden: false,
}

function buyGarden() {
    if (money >= 100) {
        money -= 100;
        garden = true;
        updateCount();
        hideBuyGardenBtn();
        showGarden();
    } else {
        alert("You don't have enough money to buy this!");
    }
}

function hideBuyGardenBtn() {
    const buyGardenBtn = document.getElementById("buyGardenBtn");
    buyGardenBtn.style.display = "none";
    updateCount();
}

function showGarden() {
    const gardenName = document.getElementById("gardenName");
    gardenName.innerHTML = "Garden";
    gardenName.style.display = "block";
}
