document.addEventListener('DOMContentLoaded', function(){

    var form = document.getElementById("form_adocao");
    form.addEventListener('submit', function(event){
        event.preventDefault();
        validateForm();

        if(validateForm() == 1){
            var fullName = document.getElementById('exampleInputName').value;
            var phone = document.getElementById('exampleInputPhone').value;
            var email = document.getElementById('exampleInputEmail').value;
            var age = document.getElementById('exampleInputAge').value;
            var address = document.getElementById('exampleFormControlAddress').value;
            var schedule = document.getElementById('exampleInputSchedule').value;
            var job = document.getElementById('exampleInputJob').value;
            var especifyAnimal = document.getElementById('exampleInputEspecifyAnimal').value;
            
            var animalGenre = $("input[type='radio'][name='flexRadioDefault']:checked").val();

            var Children = [];

            $("input[type='checkbox'][name=flexCheckDefault1]:checked").each(function(){
                Children.push($(this).val());
            });
            
            var city = document.getElementById('exampleInputCity').value;
            var city = document.getElementById('exampleInputCity').value;
            var city = document.getElementById('exampleInputCity').value;
            var city = document.getElementById('exampleInputCity').value;
            var city = document.getElementById('exampleInputCity').value;

            console.log(Children);
            
            var formData = {
                "Nome": fullName,
                "Telemovel": phone,
                "Email": email,
                "Idade": age,
                "Morada": address,
                "Horario": schedule,
                "Cidade": city,
                "Profissao": job,
                "Especificacao_Animal": especifyAnimal,
                "Genero_Animal": animalGenre
            };

            saveFormData(formData);
        }
    });
});

function validateForm(){
    var elementName = document.getElementById("exampleInputName");
    var elementPhone = document.getElementById("exampleInputPhone");
    var elementAge = document.getElementById("exampleInputAge");
    var elementAdress = document.getElementById("exampleFormControlAddress");
    var elementSchedule = document.getElementById("exampleInputSchedule");
    var elementCity = document.getElementById("exampleInputCity");
    var elementJob = document.getElementById("exampleInputJob");
    var elementAnimalGenre = document.getElementById("animalGenre1");
    var elementAnimalGenre2 = document.getElementById("animalGenre2");
    var elementAnimalGenre3 = document.getElementById("animalGenre3");
    var elementAdoptionObj = document.getElementById("AdoptionObj1");
    var elementAdoptionObj2 = document.getElementById("AdoptionObj2");
    var elementAdoptionObj3 = document.getElementById("AdoptionObj3");
    var elementHabitationType = document.getElementById("HabitationType1");
    var elementHabitationType2 = document.getElementById("HabitationType2");
    var elementHabitationGarden = document.getElementById("HabitationGarden1");
    var elementHabitationGarden2 = document.getElementById("HabitationGarden2");
    var elementHabitation = document.getElementById("Habitation1");
    var elementHabitation2 = document.getElementById("Habitation2");
    var elementAdults = document.getElementById("exampleInputAdults");
    var elementChildrenOption = document.getElementById("ChildrenOpt");
    var elementChildrenOption2 = document.getElementById("ChildrenOpt2");
    var elementChildrenOption3 = document.getElementById("ChildrenOpt3");
    var elementChildrenOption4 = document.getElementById("ChildrenOpt4");
    var elementHomeVisits = document.getElementById("HomeVisits");
    var elementHomeVisits2 = document.getElementById("HomeVisits2");
    var elementAnimalTime = document.getElementById("exampleInputAnimalTime");
    var elementOtherAnimals = document.getElementById("exampleInputOtherAnimals");
    var elementDogPersonality = document.getElementById("DogPersonality");
    var elementDogPersonality2 = document.getElementById("DogPersonality2");
    var elementDogPersonality3 = document.getElementById("DogPersonality3");
    var elementLikesOtherAnimals = document.getElementById("LikesOtherAnimals");
    var elementLikesOtherAnimals2 = document.getElementById("LikesOtherAnimals2");
    var elementLikesOtherAnimals3 = document.getElementById("LikesOtherAnimals3");
    var elementLikesStrangers = document.getElementById("LikesStrangers");
    var elementLikesStrangers2 = document.getElementById("LikesStrangers2");
    var elementLikesStrangers3 = document.getElementById("LikesStrangers3");
    var elementSterelized = document.getElementById("Sterelized");
    var elementSterelized2 = document.getElementById("Sterelized2");
    var elementSterelized3 = document.getElementById("Sterelized3");
    var elementLap = document.getElementById("Lap");
    var elementLap2 = document.getElementById("Lap2");
    var elementLap3 = document.getElementById("Lap3");
    var elementCalm = document.getElementById("Calm");
    var elementCalm2 = document.getElementById("Calm2");
    var elementCalm3 = document.getElementById("Calm3");
    var elementAloneBehavior = document.getElementById("AloneBehavior");
    var elementAloneBehavior2 = document.getElementById("AloneBehavior2");
    var elementAloneBehavior3 = document.getElementById("AloneBehavior3");
    var elementAnimalActivity = document.getElementById("AnimalActivity");
    var elementAnimalActivity2 = document.getElementById("AnimalActivity2");
    var elementAnimalActivity3 = document.getElementById("AnimalActivity3");
    var elementAnimalActivity4 = document.getElementById("AnimalActivity4");
    var elementFirstAnimal = document.getElementById("FirstAnimal");
    var elementFirstAnimal2 = document.getElementById("FirstAnimal2");
    var elementPolitics = document.getElementById("exampleCheck1");
    
    var validated = 1;
    
    if(elementName.value.length < 3){
        showMessage('exampleInputName','Tem que ter mais do que 3 caracteres!');
        validated = 0;
    }

    if(elementPhone.value.length < 9){
        showMessage('exampleInputPhone','Tem que ter 9 digitos!');
        validated = 0;
    }

    if(elementAge.value.length == 0){
        showMessage('exampleInputAge','Vazio!');
        validated = 0;
    }

    if(elementAdress.value.length == 0){
        showMessage('exampleFormControlAddress','Vazio!');
        validated = 0;
    }

    if(elementSchedule.value.length == 0){
        showMessage('exampleInputSchedule','Vazio!');
        validated = 0;
    }

    if(elementCity.value.length == 0){
        showMessage('exampleInputCity','Vazio!');
        validated = 0;
    }

    if(elementJob.value.length == 0){
        showMessage('exampleInputJob','Vazio!');
        validated = 0;
    }

    if(elementAnimalGenre.checked != true && elementAnimalGenre2.checked != true && elementAnimalGenre3.checked != true){
        showMessage('animalGenreRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementAdoptionObj.checked != true && elementAdoptionObj2.checked != true && elementAdoptionObj3.checked != true){
        showMessage('AdoptionObjCheckBox','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementHabitationType.checked != true && elementHabitationType2.checked != true){
        showMessage('HabitationTypeRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementHabitationType.checked != true && elementHabitationType2.checked != true){
        showMessage('HabitationTypeRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementHabitationGarden.checked != true && elementHabitationGarden2.checked != true){
        showMessage('HabitationGardenRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementHabitation.checked != true && elementHabitation2.checked != true){
        showMessage('HabitationRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementAdults.value.length == 0){
        showMessage('exampleInputAdults','Vazio!');
        validated = 0;
    }

    if(elementChildrenOption.checked != true && elementChildrenOption2.checked != true && elementChildrenOption3.checked != true && elementChildrenOption4.checked != true){
        showMessage('ChildrenCheckBox','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementHomeVisits.checked != true && elementHomeVisits2.checked != true){
        showMessage('HomeVisitsRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementAnimalTime.value.length == 0){
        showMessage('exampleInputAnimalTime','Vazio!');
        validated = 0;
    }

    if(elementOtherAnimals.value.length == 0){
        showMessage('exampleInputOtherAnimals','Vazio!');
        validated = 0;
    }

    if(elementDogPersonality.checked != true && elementDogPersonality2.checked != true && elementDogPersonality3.checked != true){
        showMessage('DogPersonalityRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementLikesOtherAnimals.checked != true && elementLikesOtherAnimals2.checked != true && elementLikesOtherAnimals3.checked != true){
        showMessage('LikesOtherAnimalsRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementLikesStrangers.checked != true && elementLikesStrangers2.checked != true && elementLikesStrangers3.checked != true){
        showMessage('LikesStrangersRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementSterelized.checked != true && elementSterelized2.checked != true && elementSterelized3.checked != true){
        showMessage('SterelizedRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementLap.checked != true && elementLap2.checked != true && elementLap3.checked != true){
        showMessage('LapRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementCalm.checked != true && elementCalm2.checked != true && elementCalm3.checked != true){
        showMessage('CalmRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementAloneBehavior.checked != true && elementAloneBehavior2.checked != true && elementAloneBehavior3.checked != true){
        showMessage('AloneBehaviorRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementAnimalActivity.checked != true && elementAnimalActivity2.checked != true && elementAnimalActivity3.checked != true && elementAnimalActivity4.checked != true){
        showMessage('AnimalActivityCheckBox','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementFirstAnimal.checked != true && elementFirstAnimal2.checked != true){
        showMessage('FirstAnimalRadio','Selecione pelo menos uma das opções!');
        validated = 0;
    }

    if(elementPolitics.checked != true){
        showMessage('exampleCheck1','É necessário aceitar as políticas de privacidade!');
        validated = 0;
    }

    return validated;
}

function showMessage(campoId,mensagem){
    var elementoCampo = document.getElementById(campoId);
    if(elementoCampo != null){
        var feedbackDiv = document.querySelector('#' + campoId + ' ~ .invalid-feedback');

        if(feedbackDiv != null){
            feedbackDiv.textContent = mensagem;
            feedbackDiv.style.display = 'block';
        }
    }
}

function saveFormData(formData) {
    var storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}