let saltcount = 0;

function buySalt() {
    if (count >= 15) {
        count -= 15;
        countValue += 0.1;
        saltcount += 1;
        updateCount()
        saltCount()
    }
}

function saltCount() {
    if (saltcount > 0) {
        document.getElementById("salt").innerHTML = "Salt: " + saltcount;
    }
}
