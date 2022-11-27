const inputTexto = document.getElementById('input1');
const btn1 = document.getElementById('btn1');
const container = document.getElementsByClassName('main');




    let myDiv = ducument.createElement("div");
    myDiv.className = "fir-image-figure mob border";

    let myImg = ducument.createElement("img");
    myImg.className = "fir-author-image img-box";
    myImg.setAttribute("src", "https://bit.ly/3UjIS8X");
    myImg.setAttribute("alt", "Profile");


    let divName = ducument.createElement("div");
    divName.className = "fig-author-figure-title img-username";

    let divMessage = ducument.createElement("div");
    divMessage.className = "fig-author-message";

    let divTime = ducument.createElement("div");
    divTime.className = "fig-author-figure-title";
// Divs for message 

    let myFigcaption= ducument.createElement("figcaption");
    myFigcaption.appenChild(divName, divMessage, divTime);


    myDiv.appenChild(myImg);

    myDiv.appenChild(myFigcaption);
    // append fugcaption to main div
    container.appendChild(myDiv);

console.log(myDiv);
