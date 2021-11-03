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

        console.log(datos);

        document.querySelector('section').innerHTML = `
            <h3>${datos.data.title}</h3>
            <img src="${datos.data.images.original.url}" alt="">
            <p>${datos.data.id}</p>
            <p>${datos.data.username}</p>
        `;

    })
    .catch(function(error){
        console.log(`El error fue: ${error}`);
    })