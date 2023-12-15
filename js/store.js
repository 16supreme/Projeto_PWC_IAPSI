var buyButton1 = document.getElementById("buyButton1");
var buyButton2 = document.getElementById("buyButton2");
var buyButton3 = document.getElementById("buyButton3");
var buyButton4 = document.getElementById("buyButton4");
var buyButton5 = document.getElementById("buyButton5");
var buyButton6 = document.getElementById("buyButton6");
var buyButton7 = document.getElementById("buyButton7");
var buyButton8 = document.getElementById("buyButton8");
var buyButton9 = document.getElementById("buyButton9");

var feedbackMessage = document.getElementById("feedbackMessage");
var feedbackMessage2 = document.getElementById("feedbackMessage2");

buyButton1.addEventListener('click',function(event){
    event.preventDefault();

    var quantity1 = document.getElementById("quantitySelector1").value;

    if(quantity1 != 0){
        var storeData = {
            "Item1" : quantity1
        }

        saveStoreData(storeData);
        
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

buyButton2.addEventListener('click',function(event){
    event.preventDefault();

    var quantity2 = document.getElementById("quantitySelector2").value;

    if(quantity2 != 0){
        var storeData = {
            "Item2" : quantity2
        }

        saveStoreData(storeData);
        
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

buyButton3.addEventListener('click',function(event){
    event.preventDefault();

    var quantity3 = document.getElementById("quantitySelector3").value;

    if(quantity3 != 0){
        var storeData = {
            "Item3" : quantity3
        }

        saveStoreData(storeData);
        
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

buyButton4.addEventListener('click',function(event){
    event.preventDefault();

    var quantity4 = document.getElementById("quantitySelector4").value;

    if(quantity4 != 0){
        var storeData = {
            "Item4" : quantity4
        }

        saveStoreData(storeData);
        
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

buyButton5.addEventListener('click',function(event){
    event.preventDefault();

    var quantity5 = document.getElementById("quantitySelector5").value;

    if(quantity5 != 0){
        var storeData = {
            "Item5" : quantity5
        }

        saveStoreData(storeData);
        
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

buyButton6.addEventListener('click',function(event){
    event.preventDefault();

    var quantity6 = document.getElementById("quantitySelector6").value;

    if(quantity6 != 0){
        var storeData = {
            "Item6" : quantity6
        }

        saveStoreData(storeData);
        
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

buyButton7.addEventListener('click',function(event){
    event.preventDefault();

    var quantity7 = document.getElementById("quantitySelector7").value;

    if(quantity7 != 0){
        var storeData = {
            "Item7" : quantity7
        }

        saveStoreData(storeData);
        
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

buyButton8.addEventListener('click',function(event){
    event.preventDefault();

    var quantity8 = document.getElementById("quantitySelector8").value;

    if(quantity8 != 0){
        var storeData = {
            "Item8" : quantity8
        }

        saveStoreData(storeData);
        
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

buyButton9.addEventListener('click',function(event){
    event.preventDefault();

    var quantity9 = document.getElementById("quantitySelector9").value;

    if(quantity9 != 0){
        var storeData = {
            "Item9" : quantity9
        }

        saveStoreData(storeData);
        
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

function saveStoreData(storeData) {
    var storedStoreData = JSON.parse(localStorage.getItem('storeData')) || [];

    storedStoreData.push(storeData);

    localStorage.setItem('storeData', JSON.stringify(storedStoreData));
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