const ironmanmovies = document.getElementById("ironmanmovies")

let request = new XMLHttpRequest()

request.addEventListener("load", function(){
    const result = JSON.parse(this.responseText)
    console.log(result.Search)
})

    const movieItems = result.Search.map(function(movie){
        return `<ul>
        <img src = "${movie.Poster}"
        <li> ${movie.Title}</li>
        <li>${movie.Year}</li>
        <li>${$movie.imdbID}</li>
        </ul>
        `
    })

    ironmanmoviesList.innerHTML = movieItems.join("")

    request.open("GET", "HTTPS://WWW.OMDBAPI.COM/?S=BATMAN&APIKEY")
    request.send()