// Get each Fruit Img
waterAGRO = document.getElementById("waterAGRO");
farmAGRO = document.getElementById("farmAGRO");
trackAGRO = document.getElementById("trackAGRO");
droneAGRO = document.getElementById("droneAGRO");
cowAGRO = document.getElementById("cowAGRO");
floorAGRO = document.getElementById("floorAGRO");


// Get each Fruit Showcase
waterAGRO.affect = document.getElementById("WATTER");
farmAGRO.affect = document.getElementById("SSENSOR");
trackAGRO.affect = document.getElementById("TRACK");
droneAGRO.affect = document.getElementById("Drones");
cowAGRO.affect = document.getElementById("Cows");
floorAGRO.affect = document.getElementById("Floors");


// Add event listeners to each Fruit Img
waterAGRO.addEventListener("click", show);
farmAGRO.addEventListener("click", show);
trackAGRO.addEventListener("click", show);
droneAGRO.addEventListener("click", show);
cowAGRO.addEventListener("click", show);
floorAGRO.addEventListener("click", show);


// When a Fruit Img is pressed, display the coresponding Showcase
function show(event) {
    waterAGRO.affect.style.display = "none";
    farmAGRO.affect.style.display = "none";
    trackAGRO.affect.style.display = "none";
    droneAGRO.affect.style.display = "none";
    cowAGRO.affect.style.display = "none";
    floorAGRO.affect.style.display = "none";

    showcase = event.currentTarget.affect;
    showcase.style.display = "block";
}
