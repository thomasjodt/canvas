var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var box = document.getElementById("dibujito");
var colorSelect = document.getElementById("btnColor");
var colorLineas = document.getElementById("colorLineas");
boton.addEventListener("click", dibujoPorClic);
console.log(colorLineas);

console.log(colorSelect);

var lienzo = box.getContext("2d"); // Método de Canvas que obtiene el área donde se va a dibujar.
var ancho = box.width;

function dibujarLinea(color, x0, y0, x1, y1){   //Trazar Líneas.
    lienzo.beginPath(); // Inicia el trazo.
    lienzo.strokeStyle = color; // Variable para guardar el color del trazo.
    lienzo.moveTo(x0,y0); // Sirve para mover el lápiz a la posición indicada:
    lienzo.lineTo(x1,y1); // Hace una línea hasta esa coordenada.
    lienzo.stroke();    // Traza la línea declarada anteriormente.
    lienzo.closePath(); // Cierra en trazo.
    }

function dibujoPorClic(){
    var colorP = colorLineas.value;
    var lineas = parseInt(texto.value);
    var xi, xf, yi, yf;
    var espacio = ancho / lineas;

    for(l=0; l<lineas; l++){
        xi = espacio * l;
        yi = espacio * (l+1);
        xf = espacio * l;
        yf = espacio * (l + 1);
        nxf = ancho - xf;
        nyf = ancho - yf;
        dibujarLinea(colorP, xi, ancho, ancho, nyf);
        dibujarLinea(colorP, 0, xf, nxf, 0);
        dibujarLinea(colorP, 0, xf, yi ,ancho);
        dibujarLinea(colorP, xi, 0, ancho, yf);
    }
}
