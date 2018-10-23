var roadImg = document.getElementById("road");
var roadScore = document.getElementById("road_score");

var blockImg = document.getElementById("block");
var blockScore = document.getElementById("block_score");

var legalImg = document.getElementById("legal");
var legalScore = document.getElementById("legal_score");

var calmImg = document.getElementById("calm");
var calmScore = document.getElementById("calm_score");

var angryImg = document.getElementById("angry");
var angryScore = document.getElementById("angry_score");

var bikeImg = document.getElementById("bike");
var bikeScore = document.getElementById("bike_score");

roadScore.style.display = "none";
blockScore.style.display = "none";
legalScore.style.display = "none";
calmScore.style.display = "none";
angryScore.style.display = "none";
bikeScore.style.display = "none";

roadImg.addEventListener("click", displayRoad);
blockImg.addEventListener("click", displayBlock);
legalImg.addEventListener("click", displayLegal);
calmImg.addEventListener("click", displayCalm);
angryImg.addEventListener("click", displayAngry);
bikeImg.addEventListener("click", displayBike);

function displayRoad(){
    if(roadScore.style.display == "block"){
        roadScore.style.display = "none";
    }
    else{
        roadScore.style.display = "block";
    }
}

function displayBlock(){
    if(blockScore.style.display == "block"){
        blockScore.style.display = "none";
    }
    else{
        blockScore.style.display = "block";
    }
}

function displayLegal(){
    if(legalScore.style.display == "block"){
        legalScore.style.display = "none";
    }
    else{
        legalScore.style.display = "block";
    }
}

function displayCalm(){
    if(calmScore.style.display == "block"){
        calmScore.style.display = "none";
    }
    else{
        calmScore.style.display = "block";
    }
}

function displayAngry(){
    if(angryScore.style.display == "block"){
        angryScore.style.display = "none";
    }
    else{
        angryScore.style.display = "block";
    }
}

function displayBike(){
    if(bikeScore.style.display == "block"){
        bikeScore.style.display="none";
    }
    else{
        bikeScore.style.display = "block";
    }
}

var btn_tohl = document.getElementById("current_page");
btn_tohl.addEventListener("DOMContentLoaded", highlight);

function highlight(){
    btn_tohl.setAttribute("class", "highlighted");
}
