let store = false;

let itensStore = {
    itensStoreGUI: false,
    water: 5.0,
    wheat_seed: 5.0
}

const itensStoreBtn = document.getElementById("itensStore");
const toolsStoreBtn = document.getElementById("toolsStore");
const sellBtn = document.getElementById("sell");

const itensStoreDiv = document.getElementById("itensStoreDiv");

function openStore() {
    store = !store;

    if (store) {
        itensStoreBtn.style.display = "block";
        toolsStoreBtn.style.display = "block";
        sellBtn.style.display = "block";
    } else {
        hideItensStore();
        itensStore.itensStoreGUI = false;

        itensStoreBtn.style.display = "none";
        toolsStoreBtn.style.display = "none";
        sellBtn.style.display = "none";
    }
}

function openItensStore() {
    itensStore.itensStoreGUI = !itensStore.itensStoreGUI;

    if (itensStore.itensStoreGUI) {
        showItensStore();
        itensStoreDiv.style.display = "block";
    } else {
        hideItensStore();
        itensStoreDiv.style.display = "none";
    }
}

function showItensStore() {
    itensStoreDiv.innerHTML = "";

    for (let i in itensStore) {
        if (i === "itensStoreGUI") continue;
        const btn = document.createElement("button");

        btn.textContent = `${capitalize(i)} $${itensStore[i].toFixed(2)}`;

        itensStoreDiv.appendChild(btn);
    }
}

function hideItensStore() {
    itensStoreDiv.innerHTML = "";
}

function capitalize(str) {
    return str.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}
