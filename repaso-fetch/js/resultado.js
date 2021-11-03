// Acceder a la Query String

let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);
let busqueda = objetoQueryString.get('busqueda');

// fetch

fetch(`https://api.giphy.com/v1/gifs/search?api_key=QWhylJzN2YEo4E02DqmuPkRgUfg2dvK2&q=${busqueda}&limit=25&offset=0&rating=g&lang=en`)
    .then(function(response){
        return response.json();
    }).then(function(datos){
        
        console.log(datos);

        for(let i = 0; i < datos.data.length; i++){
            document.querySelector('section').innerHTML += `
                <article>
                    <h3>${datos.data[i].title}</h3>
                    <div><img src="${datos.data[i].images.original.url}" alt="Imagen del GIF"></div>
                    <a href="detalle.html?idGif=${datos.data[i].id}">Ver más información</a>
                </article>
            `;
        }

    }).catch(function(error){
        console.log(`El error fue: ${error}`);
    })
