import { getApiKey } from "./env.js";

let apiKey = getApiKey();


fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&quot`)
.then(res => res.json())
.then((data) => {
    results
    
})