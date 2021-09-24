const base_URL = 'https://api.themoviedb.org/3';
const api_key = '?api_key=db5aa479f09189d059e839777dcb08f9';

$.ajax(`${base_URL}/movie/now_playing${api_key}`)
    .then(data => {
        for(let film of data.results){
            console.log(film)
           let newFilm = $("<div style='border: 2px solid red; margin: 2vh 0'>")
           newFilm.append(`<h2><a href="${film.id}">${film.title}</a>`) 
           newFilm.append(`<p>${film.overview}`)
           $(".film-list").append(newFilm)
        }
    })