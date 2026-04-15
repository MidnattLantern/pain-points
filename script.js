const addToTrolleyButton = document.getElementById("addToTrolleyButton");
const inTrolleyIcon = document.getElementById("inTrolleyIcon");

addToTrolleyButton.addEventListener("click", handleAddToTrolley);

function handleAddToTrolley() {
    console.log("add to trolley");
    inTrolleyIcon.classList.remove("hidden");
}