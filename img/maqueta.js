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
            ctx.fillText("Piso 2",333,333);
            ctx.stroke();   
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(40, 120, 125, 150);
            ctx.stroke();   
            ctx.beginPath();
            ctx.rect(180, 120, 125, 150);
            ctx.stroke(); 
            ctx.beginPath();
            ctx.rect(320, 120, 125, 150);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(460, 120, 125, 150);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(600, 120, 125, 150);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(120, 300, 500, 200);
            ctx.stroke();
            //--------------------------------------------------
            ctx.beginPath();
            ctx.rect(20, 120, 750, 400);
            ctx.fillText("Piso 1",1100,333);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(900, 150, 500, 100 );
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(900, 270, 400, 100 );
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(1370, 270, 100, 100);
            ctx.stroke();
            ctx.beginPath();
            ctx.rect(900, 390, 500, 100 );
            ctx.stroke();


            // ctx.beginPath();
            // ctx.rect(520, 20, 250, 100);
            // ctx.stroke();

            //Aula 1
           
            //ctx.rect(20, 170, 250, 150);

            setInterval(function () { 
                ctx.beginPath();
                var ggrad=gradienteAula1(ctx);
                ctx.fillStyle=ggrad; 
                ctx.fillRect(20, 170, 125, 170);
                ctx.stroke();
                 ctx.fillStyle='white';
            ctx.fillText("MediCO2",100,250)
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

           
            break;
    }
}


function gradienteAula1(ctx){
    //console.log('Mensaje de prueba');
    cargarUsuarios();
    
    /*console.log(rr);
    console.log(gg);
    console.log(rg);*/
    //cargarUsuarios();
    
            
             gradiente = ctx.createLinearGradient(20, 170, 270, 170);
             gradiente.addColorStop(0, "blue");
             gradiente.addColorStop(.5, "green");
             gradiente.addColorStop(1, "blue");  
    

    return gradiente;
}


 function cargarUsuarios(){
    var peticion = new XMLHttpRequest();
    peticion.open('GET', '../datos.php');
     //tabla.innerHTML="";
    

    peticion.onload = function(){
        var datos = JSON.parse(peticion.responseText);
        
        if(datos.error){
            error_box.classList.add('active');
        } else {
           
                
                
                //var elemento = document.createElement('tr');
                //elemento.innerHTML += ("<td id='"+i+"'>" + datos[i].dato + "</td>");
                //tabla.appendChild(elemento);
                num0 = datos[0].dato;
                num1 = datos[1].dato;
                num2 = datos[2].dato;

                console.log(num0);
                console.log(num1);
                console.log(num2);

                    

        
        }
        
    }

    peticion.onreadystatechange = function(){
        if(peticion.readyState == 4 && peticion.status == 200){
            
        }
    }

    peticion.send();
}
cargarMapa('UAD1');


