window.addEventListener('load',function(){
    
    var imagenes = [];
    imagenes[0] = 'img/imagen1.jpg';
    imagenes[1] = 'img/imagen2.jpg';
    imagenes[2] = 'img/imagen3.jpg';
   

    var indiceImagenes = 0;
    var tiempo = 2000;
    function cambiarImagenes(){
        
        document.slider.src = imagenes[indiceImagenes];
        if(indiceImagenes < 2){
            indiceImagenes ++;
        }else{
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes,tiempo);
});


function getHour(){
    const h = new Date();
    const hours = ((h.getHours() < 10 )? "0" : "") + h.getHours();
    const minutes = ((h.getMinutes() < 10 )? "0" : "") + h.getMinutes();
    const secs = ((h.getSeconds() < 10 )? "0" : "") + h.getSeconds();

    document.write("LocalTme:" + hours+ ":" + minutes + ":" + secs);
}
getHour();