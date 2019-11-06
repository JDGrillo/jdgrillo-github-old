document.addEventListener('DOMContentLoaded', function () {
    let watchlistJSON = localStorage.getItem('watchlist')
    let watchlist = JSON.parse(watchlistJSON)
    console.log(watchlist)
    function renderMovies(movieArray) {
        moviesHTML = movieArray.map(function (currentMovie) {
            return `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src=${currentMovie.Poster} alt="Card image cap">
            <div class="card-body">
            <p class="card-text">${currentMovie.Title} ${currentMovie.Year}</p>
            <button class="btn btn-primary input-group-btn" type="submit" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</button>
            </div>
            </div>`
        })
        return moviesHTML.join()
    }
    let content = document.getElementsByClassName("movie")[0];
    content.innerHTML = renderMovies(watchlist)
    console.log(renderMovies(movieData))
})