window.addEventListener('load', function(){

// Array para almacenar ids de Gifs favoritos
let favoritos = [];

// Acceder a la Query String

let queryString = location.search;
let objetoQueryString = new URLSearchParams(queryString);
let idGif = objetoQueryString.get('idGif');
console.log(idGif)

// fetch

fetch(`https://api.giphy.com/v1/gifs/${idGif}?api_key=QWhylJzN2YEo4E02DqmuPkRgUfg2dvK2`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){

        console.log(datos.data);

        document.querySelector('section').innerHTML = `
            <article>
                <h3>${datos.data.title}</h3>
                <div><img src="${datos.data.images.original.url}" alt=""></div>
                <p><b>Username:</b> ${datos.data.username}</p>
                <p><b>idGIF:</b> ${datos.data.id}</p>
                <button class="fav">Agregar a favoritos</button>
            </article>
        `;

        // Selector del botón favorito
        let buttonFav = document.querySelector('.fav');
        
        // localStorage
            
        if(localStorage.getItem('favoritosToString')!=null){
            favoritos = JSON.parse(localStorage.getItem('favoritosToString'));
            if(favoritos.includes(idGif)) {
                buttonFav.innerHTML = `Remover de favoritos`;
            }else{
                buttonFav.innerHTML = `Agregar a favoritos`;
            }
        }
        
        // Evento del botón agregar/remover favorito

        buttonFav.addEventListener('click', function(e){

            // e.preventDefault(); En caso de ser un hipervínculo (etiquetas <a href="">Enlace</a>)

            if (favoritos.includes(idGif)){
                favoritos.splice(favoritos.indexOf(idGif),1);
                buttonFav.innerHTML = `Agregar a favoritos`;
            }else{
                favoritos.push(idGif);
                buttonFav.innerHTML = `Remover de favoritos`;
            }
            
            localStorage.setItem('favoritosToString', JSON.stringify(favoritos));
            console.log(localStorage);

        })

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })

})
