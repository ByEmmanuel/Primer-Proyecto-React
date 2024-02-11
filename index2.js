const canvas = document.querySelector("canvas");

const pincel = canvas.getContext("2d");
pincel.fillStyle = "black";
pincel.fillRect(0, 0, 50, 50);

function aparecerPelota(){
    pincel.beginPath();
    
    var xPos = calcularPosicion();
    var yPos = calcularPosicion();
    
    pincel.arc(xPos, yPos, 20, 0, 5 * Math.PI);
    pincel.fill();

    
}

function calcularPosicion(){
    const x = Math.random() * 1000;
    var redondeo =  Math.floor(x); 
    
    if (redondeo < 550){
        console.log("El numero es menor a 550 ; "+redondeo);
        
        return redondeo;
    }else{
        console.log("El numero es mayor a 550 y se restan 250" + redondeo);
        
        return redondeo - 250;
    }
}

function desaparecerPelota() {
    if (pincel.clearRect){
        pincel.clearRect(0, 0, 1000, 1000);
    }
}
