document.addEventListener('contextmenu', event => event.preventDefault());

var btn = document.getElementById('button');

// Pre-carga las imágenes de fondo
var img1 = new Image();
img1.src = 'https://shorturl.at/alBOP';
var img2 = new Image();
img2.src = 'https://shorturl.at/joBW3';

document.addEventListener('contextmenu', event => event.preventDefault());

var btn = document.getElementById('button');

btn.onclick = function() {
    var flagInput = document.getElementById('flag').value;
    var flagValidationContainer = document.getElementById('flag-validation');
    var coinContainer = document.getElementById('coin');
    var coinImg = document.getElementById('coin-img');

    if (flagInput === 'ĦΔÐ€§') {
        document.body.style.backgroundImage = 'url(' + img1.src + ')';

        setTimeout(function() {
            alert('Aquí tienes tu moneda');
        }, 100);

        flagValidationContainer.style.display = 'none';

        setTimeout(function() {
            coinContainer.style.display = 'flex';
            coinImg.style.display = 'flex';
        }, 2000);
    } else {
        document.body.style.backgroundImage = 'url(' + img2.src + ')';

        setTimeout(function() {
            alert('¿Donde están tus monedas?');
        }, 100);
    }
}

var modal = document.getElementById('myModal');
var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
}

setTimeout(function() {
    modal.style.display = "block";
}, 600000);


fetch('./oculto.txt')
    .catch(error => console.error('Error:', error));