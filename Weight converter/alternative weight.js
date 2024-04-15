// Selecting DOM elements and assigning them to variables
let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");
let stRef = document.getElementById("st");

// Function to convert from kilograms to other units
function convertFromKg() {
  let kg = parseFloat(kgRef.value);
  if (!isNaN(kg)) {
    lbRef.value = (kg * 2.205).toFixed(2);
    ozRef.value = (kg * 35.274).toFixed(2);
    stRef.value = (kg / 6.35).toFixed(2);
  }
}

// Function to convert from pounds to other units
function convertFromLb() {
  let lb = parseFloat(lbRef.value);
  if (!isNaN(lb)) {
    kgRef.value = (lb / 2.205).toFixed(2);
    ozRef.value = (lb * 16).toFixed(2);
    stRef.value = (lb / 14).toFixed(2);
  }
}

// Function to convert from ounces to other units
function convertFromOz() {
  let oz = parseFloat(ozRef.value);
  if (!isNaN(oz)) {
    kgRef.value = (oz / 35.274).toFixed(2);
    lbRef.value = (oz / 16).toFixed(2);
    stRef.value = (oz / 224).toFixed(2);
  }
}

// Function to convert from stones to other units
function convertFromSt() {
  let st = parseFloat(stRef.value);
  if (!isNaN(st)) {
    kgRef.value = (st * 6.35).toFixed(2);
    lbRef.value = (st * 14).toFixed(2);
    ozRef.value = (st * 224).toFixed(2);
  }
}

// Add event listeners for input fields
kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);
stRef.addEventListener("input", convertFromSt);

// Initial conversion from kilograms when the window loads
window.addEventListener("load", convertFromKg);
