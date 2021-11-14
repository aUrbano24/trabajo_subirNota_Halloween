function mostrar(imagen){ //La función ocultar() hace visible una imagen.
    document.getElementById(imagen).style.visibility="visible";
}

function ocultar(imagen){ //La función ocultar() oculta una imagen.
    document.getElementById(imagen).style.visibility="hidden";
}

function sonar(sonido){ //La función sonar() activa el sonido.
    document.getElementById(sonido).play();
}

function parar(sonido){ //La función parar() pausa el sonido.
    document.getElementById(sonido).pause();
}