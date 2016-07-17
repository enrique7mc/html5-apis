function dibujar() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

        // ctx.fillStyle = "orange";
        // ctx.fillStyle = "#FFA500";
        // ctx.fillStyle = "rgb(255,165,0)";
        // ctx.fillStyle = "rgba(255,165,0,1)";

        // Color fill
        /*for (var i = 0; i < 6; i++){
            for (var j = 0; j < 6; j++){
                ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)';
                ctx.fillRect(j *25 , i * 25, 25, 25);
            }
        }*/

        // Color stroke
        /*for (var i = 0; i < 6; i++){
            for (var j = 0; j < 6; j++){
                ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ')';
                ctx.beginPath();
                ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
                ctx.stroke();
            }
        }*/

        // Caps
        for (var i = 0; i < 10; i++){
            ctx.lineWidth = 1 + i;
            ctx.beginPath();
            ctx.lineCap = 'square';
            ctx.moveTo(5 + i * 14, 5);
            ctx.lineTo(5 + i * 14, 140);
            ctx.stroke();
        }
    }
}