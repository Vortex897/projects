let money = 100.0;

let inventory = {
    inventoryGUI: false,
    water: 10,
    wheat_seeds: 10,
    wheat: 0
};

const inventoryDiv = document.getElementById("inventory")

function toggleInventory() {
    inventory.inventoryGUI = !inventory.inventoryGUI;

    if (inventory.inventoryGUI) {
        showInventory();
        inventoryDiv.style.display = "block";
    } else {
        hideInventory();
        inventoryDiv.style.display = "none";
    }
}

function showInventory() {
    inventoryDiv.innerHTML = "";

    for (let item in inventory) {
        if (item === "inventoryGUI") continue;
        const p = document.createElement("p");

        p.textContent = `${capitalize(item)}: ${inventory[item]}`;

        inventoryDiv.appendChild(p);
    }
}

function hideInventory() {
    document.getElementById("inventory").innerHTML = "";
}

function capitalize(str) {
    return str.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}
