// finalButton = document.getElementById("fButtton");
// showit = document.getElementById("allFinal")

// showit.addEventListener("click", open);
// finalButton.addEventListener("click", close);

// function open(){

//     finalButton.classList.add("dontshow")
// }

// function close(){
// finalButton.classList.add("dontshow");
// }

function show() {
   var x = document.getElementById("allFinal");

    if (x.style.display === "none") {
       x.style.display = "block";
       x.style.backgroundColor="rosybrown";
       x.style.width= "80%";
      x.style.marginLeft="10%";
    //   x.style.border="2px | sold| black";
      } else {
        x.style.display = "none";
      }
    }



function noshow(){
    document.getElementById('allFinal')
           .style.display="none";

}