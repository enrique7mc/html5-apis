function geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation){
        output.innerHTML = "<p>Tu navegador no soporta Geolocation</p>";
        return;
    }

    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        output.innerHTML = '<p>Latitude: ' + latitude + '° <br>Longitud: ' + longitude + '°</p>';

        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=15&size=400x400&sensor=false&key=AIzaSyAEQ75bnlcAIqtR84LqAeNQo98Gm4cBOEg";
        output.appendChild(img);
    }

    function errorCallback(error) {
        output.innerHTML = 'ERROR(' + error.code + '): ' + error.message;
    }

    output.innerHTML = "<p>Determinando ubicación...</p>";
    navigator.geolocation.getCurrentPosition(success, errorCallback);
}
