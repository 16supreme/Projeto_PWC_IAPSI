var buyButtons = document.querySelectorAll(".buyButton");

buyButtons.forEach(function(button){
    button.addEventListener('click',function(event){
        event.preventDefault();
        validateQuantity();

        var feedbackMessage = document.getElementById("feedbackMessage");
        var feedbackMessage2 = document.getElementById("feedbackMessage2");
        var quantity1 = document.getElementById("quantitySelector1").value;
        var quantity2 = document.getElementById("quantitySelector2").value;
        var quantity3 = document.getElementById("quantitySelector3").value;
        var quantity4 = document.getElementById("quantitySelector4").value;
        var quantity5 = document.getElementById("quantitySelector5").value;
        var quantity6 = document.getElementById("quantitySelector6").value;
        var quantity7 = document.getElementById("quantitySelector7").value;
        var quantity8 = document.getElementById("quantitySelector8").value;
        var quantity9 = document.getElementById("quantitySelector9").value;
        
        if(validateQuantity() == 1){
            var formData = {
                "item1Text" : quantity1,
                "item1Text" : quantity2,
                "item1Text" : quantity3,
                "item1Text" : quantity4,
                "item1Text" : quantity5,
                "item1Text" : quantity6,
                "item1Text" : quantity7,
                "item1Text" : quantity8,
                "item1Text" : quantity9
            };
        
            saveFormData(formData);
        
            feedbackMessage.style.display = 'block';
        
            fadeIn(feedbackMessage);
            setTimeout(function () {
                fadeOut(feedbackMessage);
            }, 4000);
        }else{
            feedbackMessage2.style.display = 'block';
        
            fadeIn(feedbackMessage2);
            setTimeout(function () {
                fadeOut(feedbackMessage2);
            }, 4000);
        }

    });
});
    
function validateQuantity(){
    var validated = 1;
    var quantity1 = document.getElementById("quantitySelector1").value;
    var quantity2 = document.getElementById("quantitySelector2").value;
    var quantity3 = document.getElementById("quantitySelector3").value;
    var quantity4 = document.getElementById("quantitySelector4").value;
    var quantity5 = document.getElementById("quantitySelector5").value;
    var quantity6 = document.getElementById("quantitySelector6").value;
    var quantity7 = document.getElementById("quantitySelector7").value;
    var quantity8 = document.getElementById("quantitySelector8").value;
    var quantity9 = document.getElementById("quantitySelector9").value;
    
    if(quantity1 == 0 && quantity2 == 0 && quantity3 == 0 && quantity4 == 0 && quantity5 == 0 && quantity6== 0 && quantity7== 0 && quantity8 == 0 && quantity9 == 0){  
        validated = 0;
    }

    return validated;
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