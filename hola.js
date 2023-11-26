window.addEventListener('load',function(){
    
    var imagenes = [];
    imagenes[0] = 'img/imagen1.jpg';
    imagenes[1] = 'img/imagen2.jpg';
    imagenes[2] = 'img/imagen3.jpg';
    imagenes[3] = 'img/imagen4.jpg';
    imagenes[4] = 'img/imagen5.jpg';
    imagenes[5] = 'img/imagen6.jpg';
    imagenes[6] = 'img/imagen7.jpg';
    imagenes[7] = 'img/imagen8.jpg';

   

    var indiceImagenes = 0;
    var tiempo = 2000;
    function cambiarImagenes(){
        
        document.slider.src = imagenes[indiceImagenes];
        if(indiceImagenes < 7){
            indiceImagenes ++;
        }else{
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes,tiempo);
});


