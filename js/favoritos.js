document.addEventListener('DOMContentLoaded', function(){
    console.info("obtiods");
    var arrayFavoritos = [];
    var dadosStorage = localStorage.getItem("listaAnimaisFavoritos");
    console.log(dadosStorage);
    if(dadosStorage !== null){
        arrayFavoritos = JSON.parse(dadosStorage);
    }

    createCard(dadosStorage)

    console.log(arrayFavoritos);
});

function createCard(dadosStorage) {
    const div = document.createElement('div');

    //const photo = item.photos[0] ? item.photos[0].medium : "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg";

    div.className = 'row';

    //console.log(item.photos[0].medium)

    div.innerHTML = `
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
            <div class="card shadow-sm">
                    <img src="" class="card-img-top" alt="...">
                    <div class="card-body" id="${dadosStorage}">
                        <h5 id="name"></h5>
                        <p id="description"></p>
                        <p id="type"></p>
                    </div>
            </div>
        </div>
    </div>
    `;
  
    document.getElementById('content').appendChild(div);
   }