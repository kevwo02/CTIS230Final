positive = document.getElementById("posList");

positive.addEventListener("mouseover", onmouseover);

function onmouseover(){
    positive.style.fontSize="1.8em";
    positive.style.textAlign="center";
    positive.style.left="100px";
    positive.style.top="-50px";

}

positive.addEventListener("mouseout", onmouseout);

function onmouseout(){
    positive.style.fontSize="1.6em";
    positive.style.textAlign="center";
    positive.style.left="100px";
    positive.style.top="-100px";
}

negative = document.getElementById("negList");

negative.addEventListener("mouseover", mouseover2);

function mouseover2(){
    negative.style.fontSize="1.8em";
    negative.style.textAlign="center";
    negative.style.right="150px";
    negative.style.top="-50px";

}

negative.addEventListener("mouseout", mouseout2);

function mouseout2(){
    negative.style.fontSize="1.6em";
    negative.style.textAlign="center";
    negative.style.right="150px";
    negative.style.top="-100px";
}

