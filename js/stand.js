var num0, num1, num2;
function cargarMapa(pisoID){
    const tabla = document.getElementById('tabla');
    const datRec = document.getElementById('datos');
    const div= document.getElementById('demo');
    const ocultar= document.getElementById('ocultar');
    const sefue= document.getElementById('sefue');
     var num0 = document.getElementById("num0");
     var num1 = document.getElementById("num1");
     var num2 = document.getElementById("num2");
    sefue.innerHTML="";
    sefue.innerHTML="<h1></h1>";
    //div.innerHTML="";
    /*ocultar.innerHTML="";*/
    const canva = document.getElementById('canvas1');
    const ctx = canva.getContext('2d');
    ctx.canvas.width  = window.innerWidth;
    ctx.font = "20px Verdana";
   
    switch(pisoID){
        case "UAD1":
            //Edificio Completo
            ctx.beginPath();
            ctx.rect(300, 120, 750, 400);
            ctx.stroke();  
            ctx.beginPath();
            ctx.rect(340, 120, 125, 150);
            ctx.stroke();   
            ctx.beginPath();
            ctx.rect(480, 120, 125, 150);
            ctx.stroke(); 
            ctx.beginPath();
            ctx.rect(620, 120, 125, 150);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(760, 120, 125, 150);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(900, 120, 125, 150);
            ctx.stroke();
            
            //-------------------------------------
            ctx.rect(340, 370, 125, 150);
            ctx.fillText("Diabetic S.",910,444);
            ctx.stroke();   
            ctx.beginPath();
            ctx.rect(480, 370, 125, 150);
            ctx.fillText("SAMEYVI",775,444);
            ctx.stroke(); 
            ctx.beginPath();
            ctx.rect(620, 370, 125, 150);
            ctx.fillText("FingerSpeak",620,444);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(760, 370, 125, 150);
            ctx.fillText("MediCO2",500,444);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(900, 370, 125, 150);
            ctx.fillText("Assist Vision",340,444);
            ctx.stroke();
            


            //Aula 1
           
            //ctx.rect(20, 170, 250, 150);

            setInterval(function () { 
                ctx.beginPath();
                //ggrad=gradienteAula1(ctx);
                //ctx.fillStyle=ggrad; 
                gradienteAula1(ctx);
                //ctx.fillRect(20, 160, 250, 160);
                //ctx.stroke();
                // ctx.fillStyle='white';
                //  ctx.fillText("MediCO2",500,444);
            }, 5000);
            
            
            // setInterval(function () { 
            //     ctx.beginPath();
            //     var ggrad=gradienteAula1(ctx,1);
            //     //console.log(ggrad.toString());
            //     ctx.fillStyle=ggrad; 
            //     ctx.fillRect(145, 170, 125, 150);
            //     ctx.stroke();
            //      ctx.fillStyle='white';
            // ctx.fillText("Aula 1",100,250);
            // }, 1000)

            //Aula 2

            break;
    }
}


function gradienteAula1(ctx){
    //console.log('Mensaje de prueba');
    cargarUsuarios(ctx);
    
    /*console.log(rr);
    console.log(gg);
    console.log(rg);*/
    //cargarUsuarios();
    
            
             // gradiente = ctx.createLinearGradient(20, 170, 270, 170);
             // gradiente.addColorStop(datos[0].dato, "blue");
             // gradiente.addColorStop(datos[1].dato, "green");
             // gradiente.addColorStop(datos[2].dato, "blue");  
    

}


 function cargarUsuarios(ctx){
    var datos;
    var peticion = new XMLHttpRequest();
    peticion.open('GET', '../datos.php');
     //tabla.innerHTML="";
    
    peticion.onload = function(){
        datos = JSON.parse(peticion.responseText);
        console.log(datos);
        var nomb = "";
        if(datos.error){
            error_box.classList.add('active');
        } else {
                //var elemento = document.createElement('tr');
                //elemento.innerHTML += ("<td id='"+i+"'>" + datos[i].dato + "</td>");
                //tabla.appendChild(elemento);

                nomb = datos[0].nombre;
                num0 = datos[0].dato;

                console.log('Nueva consulta, Sensor: ' + nomb);

                    // if (datos[0].dato>0 && datos[0].dato<=300) {
                    //     ctx.fillStyle="blue";
                    //     ctx.fillRect(20, 170, 125, 150);

                    // }else if (datos[0].dato>300 && datos[0].dato<=700) {
                    //     ctx.fillStyle="green";
                    //     ctx.fillRect(20, 170, 125, 150);
                    // }else if (datos[0].dato>700 ) {
                    //     ctx.fillStyle="red";
                    //     ctx.fillRect(20, 170, 125, 150);
                    // }

                    // //--------------------------------------------
                    // if (datos[1].dato>0 && datos[1].dato<=300) {
                    //     ctx.fillStyle="blue";
                    //     ctx.fillRect(145, 170, 125, 150);

                    // }else if (datos[1].dato>300 && datos[1].dato<=700) {
                    //     ctx.fillStyle="green";
                    //     ctx.fillRect(145, 170, 125, 150);
                    // }else if (datos[1].dato>700 ) {
                    //     ctx.fillStyle="red";
                    //     ctx.fillRect(145, 170, 125, 150);
                    // }
                    //-------------------------------
                    if (datos[1].dato>0 && datos[1].dato<=300) {
                        ctx.fillStyle="blue";
                        ctx.fillRect(480, 370, 125, 150);

                    }else if (datos[1].dato>300 && datos[1].dato<=700) {
                        ctx.fillStyle="green";
                        ctx.fillRect(480, 370, 125, 150);
                    }else if (datos[1].dato>700 ) {
                        ctx.fillStyle="red";
                        ctx.fillRect(480, 370, 125, 150);
                    }
                
                    
                // gradiente = ctx.createLinearGradient(20, 170, 270, 170);
                // gradiente.addColorStop(datos[0].dato, "blue");
        }
        
    }

    peticion.onreadystatechange = function(){
        if(peticion.readyState == 4 && peticion.status == 200){
            
        }
    }
    peticion.send();

    return datos;
}
cargarMapa('UAD1');


