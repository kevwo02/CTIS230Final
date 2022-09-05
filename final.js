const heightOutput = document.querySelector("homepage");

function resizeH(){
heightOutput.textContent = window.innerHeight
}

window.addEventListener("resize", resizeH);

