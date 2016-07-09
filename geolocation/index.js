var output;

function geoFindMe() {
    output = document.getElementById("out");
    if (!existeGeolocation()){
        output.innerHTML = "<p>Tu navegador no soporta Geolocation</p>";
        return;
    }

    output.innerHTML = "<p>Determinando ubicación...</p>";
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function existeGeolocation() {
    return "geolocation" in navigator;
}

function onSuccess(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    output.innerHTML = '<p>Latitud: ' + latitude + '° <br />Longitud: ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=15&size=400x400&sensor=false&key=AIzaSyAEQ75bnlcAIqtR84LqAeNQo98Gm4cBOEg";
    output.appendChild(img);
}

function onError(error) {
    var mensaje;
    switch (error.code) {
        case 0: // UNKNOWN_ERROR
            mensaje = 'Error desconocido';
            break;
        case 1: // PERMISSION_DENIED
            mensaje = 'Has elegido no compartir tu ubicación con la aplicación';
            break;
        case 2: // POSITION_UNAVAILABLE
            mensaje = 'No se ha podido determinar tu ubicación';
            break;
        case 3: // TIMEOUT
            mensaje = 'Se ha excedido el tiempo de espera';
            break;
    }

    output.innerHTML = mensaje;
}