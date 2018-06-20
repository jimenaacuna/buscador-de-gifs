const inputText = document.querySelector("input");
const contenedorimg = document.getElementById("giphy");

inputText.addEventListener("keypress", (event) => {
    let key = event.which || event.keyCode;
    if(key === 13){
        let gif = inputText.value;
        console.log(gif);
        inputText.value = "";
        

        fetch(`http://api.giphy.com/v1/gifs/search?q=${gif}&api_key=93ePOjRX0BY9dX5QhGDoC2J6XdoMasrR&limit=5`)
        .then(response => response.json())
        .then(data => {
           for(i = 0; i < data.data.length; i++){
               let urlGif = data.data[i].images.downsized_large.url;
               let eachGit = document.createElement("img");
               eachGit.src = urlGif;
               contenedorimg.appendChild(eachGit);
        
           }
           console.log(data);
        })
    }
})
