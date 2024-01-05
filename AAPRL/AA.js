

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//IMAGE SLIDER FOR UPCOMING 



//// VIEWS FOR BLACK SHORTS
function BackView1() 
{

    let img = document.getElementById("BlackShortsF");
    img.src = "images/BLKS-BK.png";
}


function FrontView1() 
{

    let img = document.getElementById("BlackShortsF");
    img.src= "images/BLKS-FR.png";
}




///VIEWS FOR BLACK SHIRT

function BackView2() 
{

    let img = document.getElementById("BlackShirtF");
    img.src = "images/BLK-TB.png";
}

function FrontView2() 
{

    let img= document.getElementById("BlackShirtF");
    img.src= "images/BLK-TF.png";
}





///VIEWS FOR GREY SHORTS
function BackView3() 
{

    let img = document.getElementById("GreyShortsF");
    img.src = "images/GS-BK.png";
}

function FrontView3() 
{

    let img= document.getElementById("GreyShortsF");
    img.src= "images/GS-FR.png";
}







///VIEWS FOR GREY HOODIE
function BackView4() 
{

    let img = document.getElementById("GreyHoodieF");
    img.src = "images/GH-BK.png";
}

function FrontView4() 
{

    let img= document.getElementById("GreyHoodieF");
    img.src = "images/GH-FR.png";
}








