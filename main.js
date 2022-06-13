import { getApiKey } from "./env.js";
let apiKey = getApiKey();


let cardsContainer = document.querySelectorAll(".poster-container")
let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let container = document.querySelector(".container");
let row = document.querySelectorAll(".row");
let posterContainer = document.querySelector(".row-poster-container")

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
                                <span class="material-symbols-outlined">
                                    expand_circle_down</span>
                            </div>
                        </div>
                    </div>
                    <div class="section-info">
                        <div class="info">
                            <p><strong>90% compatibile</strong></p>
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
function scrollEffect(){
    rightArrow.addEventListener("click", ()=>{
        document.querySelector('.cards').scrollLeft += 150;
    });
    leftArrow.addEventListener("click", ()=>{
        document.querySelector('.cards').scrollLeft -= 150;
    });
}
scrollEffect()


// ROW POSTER
getMovies().then(res => {
    res.results.forEach(element=>{
        posterContainer.innerHTML += `
        <div class="card-container">
            <div class="card-poster">
                <img class="poster-img" src="https://image.tmdb.org/t/p/original${element.backdrop_path}" alt="poster1" />
            </div>
        </div>
        `
    })
});