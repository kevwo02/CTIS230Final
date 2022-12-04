positive = document.getElementById("posList");

positive.addEventListener("mouseover", onmouseover);

function onmouseover(){
    positive.style.fontSize="1.8em";
    positive.style.textAlign="center";
    positive.style.left="46px";
    positive.style.top="-50px";

}

positive.addEventListener("mouseout", onmouseout);

function onmouseout(){
    positive.style.fontSize="1.4em";
    positive.style.textAlign="center";
    positive.style.left="-25px";
    positive.style.top="-35px";
}

negative = document.getElementById("negList");

negative.addEventListener("mouseover", mouseover2);

function mouseover2(){
    negative.style.fontSize="1.8em";
    negative.style.textAlign="center";
    negative.style.right="50px";
    negative.style.top="-50px";

}

negative.addEventListener("mouseout", mouseout2);

function mouseout2(){
    negative.style.fontSize="1.4em";
    negative.style.textAlign="center";
    negative.style.right="55px";
    negative.style.top="-50px";
}

