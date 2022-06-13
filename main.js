import { getApiKey } from "./env.js";
let apiKey = getApiKey();


let cardsContainer = document.querySelectorAll(".poster-container")
let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let container = document.querySelector(".container");
let row = document.querySelectorAll(".row");
let posterContainer = document.querySelector(".row-poster-container");
let numberContainer = document.querySelector(".container-movie");

let displayDialogContainer = document.querySelector('.dialog-container');
let dropDownIcon = document.getElementById('circle-down-icon');
let closeIcon = document.getElementById('close-icon');




const getMovies = async()=>{
    let resultApi = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&quot`)
    resultApi = await resultApi.json()
    return resultApi
}


cardsContainer.forEach((element)=>{
    getMovies().then(res => {
        displayMovies(element, res.results)
    });
})


function displayMovies(container, res){
    res.forEach(element=>{
        container.innerHTML +=
        `
        <div class="general-container">
            <div class="card">
                <div class="card__info">
                    <div class="container-button">
                        <div class="box-button">
                            <div>
                                <span class="material-symbols-outlined">
                                    play_circle</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">
                                    add_circle</span>
                            </div>
                            <div>
                                <span class="material-symbols-outlined">
                                    recommend
                                </span>
                            </div>
                        </div>
                        <div class="box-button">
                            <div class="circle-down">
                                <span class="material-symbols-outlined" id="circle-down-icon">
                                    expand_circle_down</span>
                            </div>
                        </div>
                    </div>
                    <div class="section-info">
                        <div class="info">
                            <p><strong class="text">90% compatibile</strong></p>
                        </div>
                        <div class="info">
                            <span class="vm14">VM14</span>
                            <span>6 stagioni</span>
                            <span class="material-symbols-outlined"> hd </span>
                        </div>
                    </div>
                        <div class="show-description">
                            <ul>
                                <li>Anticonformistico</li>
                                <li>Crudo</li>
                                <li>Dramma</li>
                            </ul>
                            </div>
                        </div>
                </div>
                <img class="card-container" src="https://image.tmdb.org/t/p/original${element.backdrop_path}"   alt="Snowpiercere"/>
            </div>
        </div>
        `
    })
}

//SCROLL ARROWS
function scrollEffect(res){
    rightArrow.addEventListener("click", ()=>{
        document.querySelector('.cards').scrollLeft += 150;
    });
    leftArrow.addEventListener("click", ()=>{
        document.querySelector('.cards').scrollLeft -= 150;
    });
}
scrollEffect()




// getMovies().then(res => {
//     res.results.forEach(element=>{
//         posterContainer.innerHTML += `
//         <div class="card-container">
//             <div class="card-poster">
//                 <img class="poster-img" src="https://image.tmdb.org/t/p/original${element.backdrop_path}" alt="poster1" />
//             </div>
//         </div>
//         `
//     })
// });


// ROW POSTER
let posterArray = ['./assets/images/poster1.png', './assets/images/poster2.png', './assets/images/poster3.png', './assets/images/poster4.png'];

function displayPosterImages (){
    for(let i = 0; i < 5; i++){
        for(let j = 0; j < posterArray.length; j++){
            posterContainer.innerHTML += 
            `
                <div class="card-container">
                    <div class="card-poster">
                        <img class="poster-img" src="${posterArray[j]}" alt="poster" />
                    </div>
                </div>
            `
        }
    }
}
displayPosterImages ();



// CARD NUMBER
// getMovies().then(res => {
//     res.results.map((element, i)=>{
//         numberContainer.innerHTML +=
//         `
//         <span class="number-movie">${i + 1}</span>
//         <div class="movie">
//             <img class="img-number" src="https://image.tmdb.org/t/p/original${element.backdrop_path}" alt="movie1">
//         </div>
//         `
//     })
// });


// CARD NUMBER MOVIE LIST
let numberArray = ['./assets/images/Movie1.png', './assets/images/Movie2.png', './assets/images/Movie3.png', './assets/images/Movie4.png', './assets/images/Movie1.png', './assets/images/Movie2.png', './assets/images/Movie3.png', './assets/images/Movie4.png', './assets/images/Movie1.png', './assets/images/Movie2.png'];

function numberListMovie () {
    for(let j = 0; j < numberArray.length; j++){
        numberContainer.innerHTML +=
        `
        <span class="number-movie">${j + 1}</span>
        <div class="movie">
            <img class="img-number" src="${numberArray[j]}" alt="movie1">
        </div>
        `
    }
}
numberListMovie ();


let dialog = document.getElementById('mid');


// EPISODE LIST DIALOG
function episodeListDialog(){
    for (let i=1; i<6; i++){
        dialog.innerHTML += 
        `
        <div class="episode">
            <h3>${i}</h3>
            <img src="./assets/images/New-amsterdam.png" alt="">
            <div class="description">
                <h4>Questione di chimica</h4>
                <p>58min</p>
                <p>Dopo la diagnosi di cancro terminale ai polmoni, un insegnante di chimica del
                liceo si da alla produzione di metanfetamina per garanatire la sopravivvenza della
                famiglia.
                </p>
            </div>
        </div>`
    }
};
episodeListDialog();





// DIALOG ACTION
function openDialog(){
    dropDownIcon.addEventListener('click', () => {
        displayDialogContainer.addClassList('display');
        alert("Prova");
    })
}

openDialog();
