function detection () {
    var out = document.getElementById('out');

    var elementos = ['audio', 'video', 'geolocation', 'canvas', 'localstorage', 'sessionstorage'];
    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        if (Modernizr[elemento]) {
            addParagraph(out, 'Tu navegador soporta el elemento ' + elemento);
        } else {
            addParagraph(out, 'Tu navegador NO soporta el elemento ' + elemento);
        }
    }
}

function addParagraph (div, contenido) {
    div.innerHTML += '<p>' + contenido + '</p>'
}