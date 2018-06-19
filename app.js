const inputText = document.querySelector("input")
const contenedorimg = document.getElementById(Element)

inputText.addEventListener("keypress", (event) => {
    let key = event.which || event.keyCode;
    if(key === 13){
        let gif = inputText.value;
        console.log(gif)
        inputText.value = "";

        fetch(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling${gif}&api_key=93ePOjRX0BY9dX5QhGDoC2J6XdoMasrR&limit=5`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderInfo(data);
        })
    }
    
})

const renderInfo = data =>{
   
}