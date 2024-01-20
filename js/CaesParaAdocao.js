fetch("https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}")
    .then(function(res) {
        console.log(res);
    });

    var cloneCardAnimal = $(".card-animal").clone();

    cloneCardAnimal.apiKey ="1k9rSK65FemzvUCC1JGefMMFpOTxbgXTN3pSqUKELVLT1a4RZJ";
    cloneCardAnimal.apiToken ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxazlyU0s2NUZlbXp2VUNDMUpHZWZNTUZwT1R4YmdYVE4zcFNxVUtFTFZMVDFhNFJaSiIsImp0aSI6ImQzYmI3NzVkOGQ2ZmRiNTg0YjEyNTE1ZTkxMGUxNGVlMThjMzdhMjliNjc5OGRmMDc0MTU2NGEwNTBiYjIyZWUyOGFjYzA0YWExMWU2MmQyIiwiaWF0IjoxNzA1NzY4NTA3LCJuYmYiOjE3MDU3Njg1MDcsImV4cCI6MTcwNTc3MjEwNywic3ViIjoiIiwic2NvcGVzIjpbXX0.iZb8MEFOVuRfAF9h1AIZgspElPqtiEujiePbt9i6QekxrTqx0XK5ZHSdEujojV8oWQyC59jrmEopnGpanFZsM6PjGXIibSy9wj4W_DtSdzbQGDH3hwFQPZmq46HUp4QCWH7IRx78PXHKNRoSv_bf_4STmGFN0Lqdk62g0h9Ef8M-OOkWoNx6N5F8N3EhhhApvqweYcHGRR848Hl7Fhc0y3HhO1-yN_82nIT6th-JYYq4_za0NrgGwAnrQdXs6_vTcVknruK_wpH-1UIXNl9Z5mJDDDBu6b2dbbzmX5WugCbu7XnACamqKzk7fKA_f2xHogp3pa6gmGnSFIlmW9KThg";


pets.petsCall = function(userLocation, petType, petSex) {
	console.log(userLocation, petType, petSex);
	$.ajax({
		url: pets.petUrl,
		method: 'GET',
    crossDomain: true,
		dataType: 'jsonp',
		data : {
			key: pets.apiKey,
			location: userLocation,
      animal: petType,
      sex: petSex,
			format: 'json',
			count: 10,
			age: 'Senior',
			status: 'A'
		}  
	}).then(function(results){
  	var petResults = results.petfinder.pets.pet;
		console.log(petResults);
		for (var i = 0; i < petResults.length; ++i) {
    	var petName = petResults[i].name.$t;
      var petPhoto = petResults[i].media.photos.photo[0].$t;
      console.log(petName);
      console.log(petPhoto);
    	pets.availablePets.append('<p>' + petName + '</p>');
      pets.availablePets.append('<div><img src="' + petPhoto + '"></div>')
  	}
	});
};

$(document).ready(function() {
	pets.form();
});