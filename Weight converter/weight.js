let kgRef = document.getElementById("kg");
let lbRef = document.getElementById("lb");
let ozRef = document.getElementById("oz");
let stRef = document.getElementById("st");
let convertFromKg = () => {
  let kg = kgRef.value;
  //toFixed(2) limits the decimals to 2 digits.
  lbRef.value = (kg * 2.205).toFixed(2);
  ozRef.value = (kg * 35.274).toFixed(2);
  stRef.value = (kg / 6.35).toFixed(2);
};
let convertFromLb = () => {
  let lb = lbRef.value;
  kgRef.value = (lb / 2.205).toFixed(2);
  ozRef.value = (lb * 16).toFixed(2);
  stRef.value = (lb / 14).toFixed(2);
};
let convertFromOz = () => {
  let oz = ozRef.value;
  kgRef.value = (oz / 35.274).toFixed(2);
  lbRef.value = (oz / 16).toFixed(2);
  stRef.value = (oz / 224).toFixed(2);
};
let convertFromSt = () => {
  let st = stRef.value;
  kgRef.value = (st * 6.35).toFixed(2);
  lbRef.value = (st * 14).toFixed(2);
  ozRef.value = (st * 224).toFixed(2);
}
kgRef.addEventListener("input", convertFromKg);
lbRef.addEventListener("input", convertFromLb);
ozRef.addEventListener("input", convertFromOz);
stRef.addEventListener("input", convertFromSt);
window.addEventListener("load", convertFromKg);