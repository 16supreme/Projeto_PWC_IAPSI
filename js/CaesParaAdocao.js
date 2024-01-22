
var validToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxazlyU0s2NUZlbXp2VUNDMUpHZWZNTUZwT1R4YmdYVE4zcFNxVUtFTFZMVDFhNFJaSiIsImp0aSI6IjU5NWFhMzVkMmQ3MDhhYTQ0YzMzMTEzZmM3YWQ0Y2M2ZGE2MzM0MTkxYmMxNjhhMmNhNjdlYzE2ZDYyNTFkYjJmZTc0MWMyODM3NzI0MmI2IiwiaWF0IjoxNzA1ODkxMzgwLCJuYmYiOjE3MDU4OTEzODAsImV4cCI6MTcwNTg5NDk4MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.lrvNnAERvkogctdf_Wu-xqGyWS93qeQ0EjtNary9jmfRrH1wvr_iBR_lgSSp-L-Kkiz5sA5EUh0-RtNcfcYZWxeitZ2HWSvSVVD5CrxnecI5Xto8T2XSRL9prHiteusrdFeXyeDBgxq9LGsYR4ZTV-prLVJPWD0s8vnT_4bgQLFQ85nHEzJPnbEQoP-aidVNmTwinxNhoyABZcHkLk7M42PxFo3JnScVCRKg3GFUEk4z5CUOMxqjafn3x7_VqB_i4OsRKxTqBaDVUGoIueNd1DuyUXgRRfJ4hwj0Bj_-wQ4JXmnb9Q-Z2fkC8zT9AmsJ8BDEd7jm-_TZBIRzxbwJiw";

/*
document.addEventListener("DOMContentLoaded", () => {

    var pf = new petfinder.Client({apiKey: "1k9rSK65FemzvUCC1JGefMMFpOTxbgXTN3pSqUKELVLT1a4RZJ", secret: "ykME0XziLqkCrYIrr5XOEdxaAGsxshM2hi1Ms2wy", mode: "no-cors"});

    pf.animal.search()
        .then(json => handleApiResponse(json))

        .catch(function (error) {
            console.error(JSON.stringify(error));
        });

    

    console.log("Hello World!");
  });



fetch('https://api.petfinder.com/v2/oauth2/token', {
    
    mode: 'no-cors',
    method: "POST",

    headers: {
            grant_type:"client_credentials",
            client_id:"1k9rSK65FemzvUCC1JGefMMFpOTxbgXTN3pSqUKELVLT1a4RZJ",
            client_secret:"ykME0XziLqkCrYIrr5XOEdxaAGsxshM2hi1Ms2wy"}
})
    .then(tokenAPI => tokenAPI.json())
    .then(json => handleApiResponse(json))


    function handleApiResponse(tokenAPI) {
    console.log(token.access_token);
    
    validToken = token.access_token

    };
*/

fetch('https://api.petfinder.com/v2/animals?type=dog&limit=30', {
   
  headers: {Authorization: `Bearer ${validToken}`}
})
   .then(resp => resp.json())
   .then(json => handleApiResponse(json))
   
   function handleApiResponse(response) {
   //console.log(JSON.stringify(response));
   console.info(`Api retornou ${response.animals.length}`)
    response.animals.forEach(item => {
        //console.log(JSON.stringify(item));
        console.log(item.name);
        createCard(item);    
    }); 

    };
    

   function createCard(item) {
    const div = document.createElement('div');

    const photo = item.photos[0] ? item.photos[0].medium : "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg";

    div.className = 'row';

    //console.log(item.photos[0].medium)

    div.innerHTML = `
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
            <div class="card shadow-sm">
                
                    <img src="${photo}" class="card-img-top" alt="...">
                    <div class="card-body" id="${item.id}">
                        <h5 id="name">${item.name}</h5>
                        <p id="type">E</p>
                        <a href="#" onclick="adicionarFavorito(${item.id})" class="btn btn-primary">Adicionar aos favoritos</a>
                    </div>
            </div>
        </div>
    </div>
    `;
  
    document.getElementById('content').appendChild(div);
   }
 
   function adicionarFavorito(animalFavorito){
    console.info("Adicionado aos favoritos");
/*
    var feedbackMessage = document.getElementById("feedbackMessage");
        
    fadeIn(feedbackMessage);
    setTimeout(function () {
        fadeOut(feedbackMessage);
    }, 4000);
*/

    var arrayFavoritos = [];
    var dadosStorage = localStorage.getItem("listaAnimaisFavoritos");
    if(dadosStorage !== null){
        arrayFavoritos = JSON.parse(dadosStorage);
    }
    arrayFavoritos.push(animalFavorito);
    var favoritosString = JSON.stringify(arrayFavoritos);
    localStorage.setItem("listaAnimaisFavoritos",favoritosString);
}   

function fadeIn(msg) {
    msg.style.opacity = '1';
}

function fadeOut(msg) {
    msg.style.opacity = '0';
    setTimeout(function () {
        msg.style.display = 'none';
    }, 400);
}