positive = document.getElementById("posList");

positive.addEventListener("mouseover", onmouseover);

function onmouseover(){
    positive.style.fontSize="26pt";
    positive.style.textAlign="center";
    positive.style.left="46px";
    positive.style.top="20px";

}

positive.addEventListener("mouseout", onmouseout);

function onmouseout(){
    positive.style.fontSize="1.5em";
    positive.style.textAlign="center";
    positive.style.left="-8px";
    positive.style.top="38px";
}

negative = document.getElementById("negList");

negative.addEventListener("mouseover", mouseover2);

function mouseover2(){
    negative.style.fontSize="24pt";
    negative.style.textAlign="center";
    negative.style.right="50px";
    negative.style.top="28px";

}

negative.addEventListener("mouseout", mouseout2);

function mouseout2(){
    negative.style.fontSize="1.5em";
    negative.style.textAlign="center";
    negative.style.right="55px";
    negative.style.top="40px";
}

