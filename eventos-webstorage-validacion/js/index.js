window.addEventListener('load', function(){

// fetch

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=653d947e0c0b2c57f0d55f7a8c550926`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos.results);

        for(let i = 0; i < datos.results.length; i++){   
            document.querySelector('section').innerHTML += `
                <article>
                    <h3>${datos.results[i].title}</h3>
                    <div><img src="https://image.tmdb.org/t/p/w342${datos.results[i].poster_path}" alt="Imagen del GIF"></div>
                    <a href="detalle.html?idGif=${datos.results[i].id}">Ver más información</a>
                </article>
            `;   
        }

    })
    .catch(function(error){
        console.log(`El error fue:  ${error}`);
    })

})
