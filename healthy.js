// Get each Fruit Img
healthHC = document.getElementById("healthHC");
thermoHC = document.getElementById("thermoHC");
watchHC = document.getElementById("watchHC");
ambHC = document.getElementById("ambHC");
xHC = document.getElementById("xHC");
labHC = document.getElementById("labHC");


// Get each Fruit Showcase
healthHC.affect = document.getElementById("HT");
thermoHC.affect = document.getElementById("noSens");
watchHC.affect = document.getElementById("appWatch");
ambHC.affect = document.getElementById("ambi");
xHC.affect = document.getElementById("xrr");
labHC.affect = document.getElementById("lato");


// Add event listeners to each Fruit Img
healthHC.addEventListener("click", show);
thermoHC.addEventListener("click", show);
watchHC.addEventListener("click", show);
ambHC.addEventListener("click", show);
xHC.addEventListener("click", show);
labHC.addEventListener("click", show);


// When a Fruit Img is pressed, display the coresponding Showcase
function show(event) {
    healthHC.affect.style.display = "none";
    thermoHC.affect.style.display = "none";
    watchHC.affect.style.display = "none";
    ambHC.affect.style.display = "none";
    xHC.affect.style.display = "none";
    labHC.affect.style.display = "none";

    showcase = event.currentTarget.affect;
    showcase.style.display = "block";
}
