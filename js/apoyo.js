
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
                var ggrad=gradienteAula1(ctx,0);
                //console.log(ggrad.toString());
                ctx.fillStyle=ggrad; 
                ctx.fillRect(20, 170, 125, 150);
                ctx.stroke();
                ctx.beginPath();
                var ggrad=gradienteAula1(ctx,1);
                //console.log(ggrad.toString());
                ctx.fillStyle=ggrad; 
                ctx.fillRect(145, 170, 125, 150);
                ctx.stroke();
                 ctx.fillStyle='white';
            ctx.fillText("Aula 1",100,250)
            }, 1000);
            
            
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

// function gradienteAula1(ctx, lado){
//     //console.log('Mensaje de prueba');
//     var gradiente;
//     var rr = 1.2;
//     var gg=1.2;
//     var rg = 1.2;
   
//   console.log('rr: '+ rr);
// console.log('gg: '+ gg);
// console.log('rg: '+ rg);
    
//     /*console.log(rr);
//     console.log(gg);
//     console.log(rg);*/
//     cargarUsuarios();
//     switch(lado){
//         case 0:
            
//              gradiente = ctx.createLinearGradient(40, 170, 145, 170);
//              gradiente.addColorStop(rr, "red");
//              gradiente.addColorStop(gg, "green");
//              gradiente.addColorStop(rg, "blue");
         
//             break;
//         case 1:
//             gradiente = ctx.createLinearGradient(0, 170, 270, 170);
//             gradiente.addColorStop(rg, "green");
//             gradiente.addColorStop(gg, "red");
//             gradiente.addColorStop(rr, "blue");
//             break;
//     }
    
    

//     return gradiente;
// }
function gradienteAula2(ctx, lado){
    //console.log('Mensaje de prueba');
    var gradiente;
    var rr = 1.2;
    var gg=0;
    var rg = 0;
   
  console.log('rr: '+ rr);
console.log('gg: '+ gg);
console.log('rg: '+ rg);
    
    /*console.log(rr);
    console.log(gg);
    console.log(rg);*/
    //cargarUsuarios();
    switch(lado){
        case 0:
            
             gradiente = ctx.createLinearGradient(20, 170, 145, 170);
             gradiente.addColorStop(0, "red");
             gradiente.addColorStop(1.2, "green");
             gradiente.addColorStop(0, "blue");
         
            break;
        case 1:
            gradiente = ctx.createLinearGradient(145, 170, 270, 170);
            gradiente.addColorStop(0, "red");
            gradiente.addColorStop(0, "green");
            gradiente.addColorStop(1.2, "blue");
            break;
    }
    
    

    return gradiente;
}

/*(function  gradienteAula1(ctx,lado){
  
    
     var gradiente;

     switch(lado){
         case 0:
         
             gradiente = ctx.createLinearGradient(20, 170, 145, 170);
             gradiente.addColorStop(Math.random(), "red");
             gradiente.addColorStop(Math.random(), "green");
             gradiente.addColorStop(Math.random(), "blue");
         
            
             break;
         case 1:
             gradiente = ctx.createLinearGradient(145, 170, 270, 170);
             gradiente.addColorStop(Math.random(), "blue");
             gradiente.addColorStop(Math.random(), "green");
             gradiente.addColorStop(Math.random(), "red");
             break;
     }
        return gradiente;

     gradienteAula1();
     var intervalo = setInterval(gradienteAula1(), 1000);
    
 })(ctx,0)*/
 function cargarUsuarios(){
    var peticion = new XMLHttpRequest();
    peticion.open('GET', 'datos.php');
     //tabla.innerHTML="";
    

    peticion.onload = function(){
        var datos = JSON.parse(peticion.responseText);
        
        if(datos.error){
            error_box.classList.add('active');
        } else {
           
                
                
                //var elemento = document.createElement('tr');
                //elemento.innerHTML += ("<td id='"+i+"'>" + datos[i].dato + "</td>");
                //tabla.appendChild(elemento);
                num0.value = datos[0].dato;
                num1.value = datos[1].dato;
                num2.value = datos[2].dato;

                    

        
        }
        
    }

    peticion.onreadystatechange = function(){
        if(peticion.readyState == 4 && peticion.status == 200){
            
        }
    }

    peticion.send();
}
cargarMapa('UAD1');


