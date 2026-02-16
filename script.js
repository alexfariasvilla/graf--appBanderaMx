const greenRange = document.getElementById("greenRange");
const redRange = document.getElementById("redRange");

const verde = document.getElementById("verde");
const rojo = document.getElementById("rojo");

const greenHex = document.getElementById("greenHex");
const redHex = document.getElementById("redHex");

greenRange.addEventListener("input", function() {
    let value = greenRange.value;
    let hex = "#" + value.toString(16).padStart(2, '0') + "9900";
    verde.style.backgroundColor = hex;
    greenHex.textContent = hex.toUpperCase();
});

redRange.addEventListener("input", function() {
    let value = redRange.value;
    let hex = "#9D0000";
    hex = "#" + value.toString(16).padStart(2, '0') + "0000";
    rojo.style.backgroundColor = hex;
    redHex.textContent = hex.toUpperCase();
});
