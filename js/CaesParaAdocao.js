fetch('https://api.petfinder.com/v2/animals?type=dog&limit=30', {
  headers: {Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxazlyU0s2NUZlbXp2VUNDMUpHZWZNTUZwT1R4YmdYVE4zcFNxVUtFTFZMVDFhNFJaSiIsImp0aSI6IjZiNmVlMWIzMDNhMzEzYmEyNjA0NTE0MjMxOTI4NzBmMTY0NzUyNjNhNmE1MGVkMWExNjQyNWFkOTI5ZjQzODY2ZGFiYWIxYzEzNGFlMjMyIiwiaWF0IjoxNzA1ODgwMjU4LCJuYmYiOjE3MDU4ODAyNTgsImV4cCI6MTcwNTg4Mzg1OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.WC2wjETAKQ0TzxTo5VXMt2EoMudp1T99ndKyvIAvfTJG2mVpjvc20bxNm8AV9lwa2I1Vgoea0K5sdD3vQaAsCa3W4Vm50qVHO-Q5NC_qjA4o6VKNgH9kh2WHkgfvhwBreT2jI_7D-SYlsAk-NEFjpLYNa6V0hQZ_i45TN1hNGWRmysZFSBSXYfnIcaIQdt8f_TyulGLKyrsJ0bfihrwHFtQs1H_lwF16uyBYIVH-zNUvVGQlCp3LrodvNgkSZNk9-HiSoKthgzIwOVe2M2mlYAln1_AV13k3pBkUA5ovyOEBQ0TVtqP4YFRd7nn3719VEGVZ4j2c6kPqJ2jghynTNQ'}
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
                        <p id="description">${item.description}</p>
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
    var arrayFavoritos = [];
    var dadosStorage = localStorage.getItem("listaAnimaisFavoritos");
    if(dadosStorage !== null){
        arrayFavoritos = JSON.parse(dadosStorage);
    }
    arrayFavoritos.push(animalFavorito);
    var favoritosString = JSON.stringify(arrayFavoritos);
    localStorage.setItem("listaAnimaisFavoritos",favoritosString);
}   
