// Get each Fruit Img
fridgeHome = document.getElementById("fridgeHome");
ringHome = document.getElementById("ringHome");
speakHome = document.getElementById("speakHome");
alexHome = document.getElementById("alexHome");
roomHome = document.getElementById("roomHome");
washHome = document.getElementById("washHome");


// Get each Fruit Showcase
fridgeHome.affect = document.getElementById("Frin");
ringHome.affect = document.getElementById("Ringo");
speakHome.affect = document.getElementById("Speaks");
alexHome.affect = document.getElementById("Alexs");
roomHome.affect = document.getElementById("Rooms");
washHome.affect = document.getElementById("Washes");


// Add event listeners to each Fruit Img
fridgeHome.addEventListener("click", show);
ringHome.addEventListener("click", show);
speakHome.addEventListener("click", show);
alexHome.addEventListener("click", show);
roomHome.addEventListener("click", show);
washHome.addEventListener("click", show);


// When a Fruit Img is pressed, display the coresponding Showcase
function show(event) {
    fridgeHome.affect.style.display = "none";
    ringHome.affect.style.display = "none";
    speakHome.affect.style.display = "none";
    alexHome.affect.style.display = "none";
    roomHome.affect.style.display = "none";
    washHome.affect.style.display = "none";

    showcase = event.currentTarget.affect;
    showcase.style.display = "block";
}
