document.addEventListener('DOMContentLoaded', function(){

    var form = document.getElementById("form_inscricao");
    form.addEventListener('submit', function(event){
        event.preventDefault();
        validateForm();

        var feedbackMessage = document.getElementById('feedbackMessage');

        if(validateForm() == 1){
            var fullName = document.getElementById('formcontrol_nome').value;
            var phone = document.getElementById('formcontrol_contacto').value;
            var email = document.getElementById('formcontrol_email').value;
            var subject = document.getElementById('formcontrol_assunto').value;
            var message = document.getElementById('formcontrol_mensagem').value;
            
            var formData = {
                "Nome": fullName,
                "Telemovel": phone,
                "Email": email,
                "Assunto": subject,
                "Mensagem": message
            };

            saveFormData(formData);

            feedbackMessage.style.display = 'block';
            
            fadeIn(feedbackMessage);
            setTimeout(function () {
                fadeOut(feedbackMessage);
            }, 4000);
        }
    },false);
});

function validateForm(){
    var elementName = document.getElementById("formcontrol_nome");
    var elementPhone = document.getElementById("formcontrol_contacto");
    var elementEmail = document.getElementById("formcontrol_email");
    var elementSubject = document.getElementById("formcontrol_assunto");
    var elementMessage = document.getElementById("formcontrol_mensagem");
    
    var validated = 1;
    
    if(elementName.value.length < 3){
        showMessage('formcontrol_nome','Tem que ter mais do que 3 caracteres!');
        validated = 0;
    }

    if(elementPhone.value.length < 9){
        showMessage('formcontrol_contacto','Tem que ter 9 digitos!');
        validated = 0;
    }

    if(elementEmail.value.length == 0){
        showMessage('formcontrol_email','Vazio!');
        validated = 0;
    }


    if(elementSubject.value.length == 0){
        showMessage('formcontrol_assunto','Vazio!');
        validated = 0;
    }

    if(elementMessage.value.length == 0){
        showMessage('formcontrol_mensagem','Vazio!');
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

function fadeIn(msg) {
    msg.style.opacity = '1';
}

function fadeOut(msg) {
    msg.style.opacity = '0';
    setTimeout(function () {
        msg.style.display = 'none';
    }, 400);
}