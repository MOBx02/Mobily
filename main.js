const inputTexto = document.getElementById('input1');
const btn1 = document.getElementById('btn1');
const container = document.getElementsByClassName('main');




//     let myDiv = ducument.createElement("div");
//     myDiv.className = "fir-image-figure mob border";

//     let myImg = ducument.createElement("img");
//     myImg.className = "fir-author-image img-box";
//     myImg.setAttribute("src", "https://bit.ly/3UjIS8X");
//     myImg.setAttribute("alt", "Profile");


//     let divName = ducument.createElement("div");
//     divName.className = "fig-author-figure-title img-username";

//     let divMessage = ducument.createElement("div");
//     divMessage.className = "fig-author-message";

//     let divTime = ducument.createElement("div");
//     divTime.className = "fig-author-figure-title";
// // Divs for message 

//     let myFigcaption= ducument.createElement("figcaption");


//     myDiv.appenChild(myImg, myFigcaption);
//     myFigcaption.appenChild(divName, divMessage, divTime);
//     // append fugcaption to main div
//     container.appendChild(myDiv);

// console.log('myDiv');

function elementHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
};

const  myDiv = elementFromHtml(
        <div class="fir-image-figure mob border">
            <img class="fir-author-image img-box " src="https://bit.ly/3UjIS8X" alt="Profile"> </img><figcaption>
        <div class="fig-author-figure-title img-username"> Mob</div>
        <div class="fig-author-message">read Solo Leveling it's the best.</div>
        <div class="fig-author-figure-title">18/10/2022 &#8212; Now</div>
    </figcaption></div> 
);