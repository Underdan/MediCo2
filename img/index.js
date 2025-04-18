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
            ctx.rect(20, 120, 1500, 400);
            ctx.stroke();            
            ctx.beginPath();
            ctx.rect(520, 20, 250, 100);
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
            //      ctx.fillStyle='white';
            // ctx.fillText("Aula 1",100,250)
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
            ctx.beginPath();
            ctx.rect(270, 170, 250, 150);
            ctx.stroke();
            ctx.fillText("Aula 2",350,250);
            //Auditorio
            ctx.beginPath();
            ctx.rect(770, 170, 500, 150);
            ctx.fillText("Auditorio",970,250);
            ctx.stroke();
            //Aula 10
            ctx.beginPath();
            ctx.rect(1270, 170, 250, 150);
            ctx.fillText("Aula 10",1300,250);
            ctx.stroke();
            //Aula 3
            ctx.beginPath();
            ctx.rect(20, 370, 250, 150);
            ctx.fillText("Aula 3",80,450);
            ctx.stroke();
            //Aula 4
            ctx.beginPath();
            ctx.rect(270, 370, 125, 150);
            ctx.fillText("Aula 4",305,450);
            ctx.stroke();            
            //Aula 5
            ctx.beginPath();
            ctx.rect(395, 370, 125, 150);
            ctx.fillText("Aula 5",435,450);
            ctx.stroke();
            //Aula 6
            ctx.beginPath();
            ctx.rect(770, 370, 125, 150);
            ctx.fillText("Aula 6",790,450);
            ctx.stroke();
            //Aula 7
            ctx.beginPath();
            ctx.rect(895, 370, 125, 150);
            ctx.fillText("Aula 7",915,450);
            ctx.stroke();            
            //Aula 8
            ctx.beginPath();
            ctx.rect(1020, 370, 250, 150);
            ctx.fillText("Aula 8",1100,450);
            ctx.stroke();
            //Aula 9
            ctx.beginPath();
            ctx.rect(1270, 370, 250, 150);
            ctx.fillText("Aula 9",1300,450);
            ctx.stroke();

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

                    if (datos[0].dato>0 && datos[0].dato<=300) {
                        ctx.fillStyle="blue";
                        ctx.fillRect(20, 170, 125, 150);

                    }else if (datos[0].dato>300 && datos[0].dato<=700) {
                        ctx.fillStyle="green";
                        ctx.fillRect(20, 170, 125, 150);
                    }else if (datos[0].dato>700 ) {
                        ctx.fillStyle="red";
                        ctx.fillRect(20, 170, 125, 150);
                    }

                    //--------------------------------------------
                    if (datos[1].dato>0 && datos[1].dato<=300) {
                        ctx.fillStyle="blue";
                        ctx.fillRect(145, 170, 125, 150);

                    }else if (datos[1].dato>300 && datos[1].dato<=700) {
                        ctx.fillStyle="green";
                        ctx.fillRect(145, 170, 125, 150);
                    }else if (datos[1].dato>700 ) {
                        ctx.fillStyle="red";
                        ctx.fillRect(145, 170, 125, 150);
                    }
                
                    ctx.fillStyle='white';
                    ctx.fillText("Aula 1",100,250)
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


