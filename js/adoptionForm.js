document.addEventListener('DOMContentLoaded', function(){

    var form = document.getElementById("form_adocao");
    form.addEventListener('submit', function(event){
        event.preventDefault();
        validateForm();
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
    var elementAdults = document.getElementById("exampleInputAdults");
    var elementPolitics = document.getElementById("exampleCheck1");
    
    if(elementName.value.length < 3){
        showMessage('exampleInputName','Tem que ter mais do que 3 caracteres!');
    }

    if(elementPhone.value.length < 9){
        showMessage('exampleInputPhone','Tem que ter 9 digitos!');
    }

    if(elementAge.value.length == 0){
        showMessage('exampleInputAge','Vazio!');
    }

    if(elementAdress.value.length == 0){
        showMessage('exampleFormControlAddress','Vazio!');
    }

    if(elementSchedule.value.length == 0){
        showMessage('exampleInputSchedule','Vazio!');
    }

    if(elementCity.value.length == 0){
        showMessage('exampleInputCity','Vazio!');
    }

    if(elementJob.value.length == 0){
        showMessage('exampleInputJob','Vazio!');
    }

    if(elementAnimalGenre.checked != true && elementAnimalGenre2.checked != true && elementAnimalGenre3.checked != true){
        showMessage('animalGenreRadio','Selecione pelo menos uma das opções!');
    }

    if(elementAdoptionObj.checked != true && elementAdoptionObj2.checked != true && elementAdoptionObj3.checked != true){
        showMessage('AdoptionObjCheckBox','Selecione pelo menos uma das opções!');
    }

    if(elementHabitationType.checked != true && elementHabitationType2.checked != true){
        showMessage('HabitationTypeRadio','Selecione pelo menos uma das opções!');
    }

    if(elementHabitationType.checked != true && elementHabitationType2.checked != true){
        showMessage('HabitationTypeRadio','Selecione pelo menos uma das opções!');
    }

    if(elementHabitationGarden.checked != true && elementHabitationGarden2.checked != true){
        showMessage('HabitationGardenRadio','Selecione pelo menos uma das opções!');
    }

    if(elementAdults.value.length == 0){
        showMessage('exampleInputAdults','Vazio!');
    }

    if(elementPolitics.checked != true){
        showMessage('exampleCheck1','É necessário aceitar as políticas de privacidade!');
    }
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