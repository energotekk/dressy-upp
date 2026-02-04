function setClothes(image) {
  document.getElementById("clothes").src = image;
}

function setEarring(image) {
  document.getElementById("earring").src = image;
}
function setHeadwear(image) {
  document.getElementById("headwear").src = image;
}
function setShoes(image) {
  document.getElementById("shoes").src = image;
}
function setTops(image) {
  document.getElementById("tops").src = image;
}
function clearClothes() {
  document.getElementById("clothes").src = "";
  currentClothes = null;
}

function clearEarrings() {
  document.getElementById("earring").src = "";
  currentEarring = null;
}

function clearHeadwear() {
  document.getElementById("headwear").src = "";
  currentHeadwear = null;
}

function clearShoes() {
  document.getElementById("shoes").src = "";
  currentShoes = null;
}

function clearTops() {
  document.getElementById("tops").src = "";
  currentTops = null;
}
