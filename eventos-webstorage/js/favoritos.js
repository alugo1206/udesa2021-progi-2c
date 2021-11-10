window.addEventListener('load', function(){

let favoritos = [];

if (localStorage.getItem('favoritosToString')!=null) {
    
    favoritos = JSON.parse(localStorage.getItem('favoritosToString'));
    console.log(favoritos);
   
    for(let i = 0; i < favoritos.length; i++){

        console.log(favoritos[i]);

        fetch(`https://api.giphy.com/v1/gifs/${favoritos[i]}?api_key=QWhylJzN2YEo4E02DqmuPkRgUfg2dvK2`)
            .then(function(response){
                return response.json();
            })
            .then(function(datos){
                                    
                document.querySelector('section').innerHTML += `
                    <article>
                        <h3>${datos.data.title}</h3>
                        <div><img src="${datos.data.images.original.url}" alt="Imagen del GIF"></div>
                        <a href="detalle.html?idGif=${datos.data.id}">Ver más información</a>
                    </article>
                `;

            })
            .catch(function(error){
                console.log(`El error fue: ${error}`);
            })

    }

}
    
})
