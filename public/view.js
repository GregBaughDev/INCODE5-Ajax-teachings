const base_URL = 'https://api.themoviedb.org/3';
const api_key = '?api_key=db5aa479f09189d059e839777dcb08f9';
const poster_URL = 'https://image.tmdb.org/t/p/original/'

$.ajax(`${base_URL}/movie/${movie_id}${api_key}`)
    .then(data => {
        let filmDisplay = $("<div>")
        filmDisplay.append(`<h2>${data.title}`)
        filmDisplay.append(`<p>${data.overview}`)
        filmDisplay.append(`<img src='${poster_URL}${data.poster_path}' style='height: 50vh'>`)
        $(".film-view").append(filmDisplay)
    })

$("#rate").on("click", (e) => {
    e.preventDefault()
    console.log($("#rating").val())
    // $.ajax({
    //     type: "POST",
    //     url: "http://localhost:3000/rate",
    //     dataType: 'json',
    //     data: {
    //         rating: $("#rating").val()
    //     }
    // })
    $.post("http://localhost:3000/rate", {
        rating: $("#rating").val()
    })
    $("#rate-div").append(`<h4>You rated the movie ${$("#rating").val()}`)
    $("#rate-div form").remove()
})