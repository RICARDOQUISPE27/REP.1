// * let nota1=parseFloat(prompt("ingrese el primer numero:"));;
// let nota2=parseFloat(prompt("ingrese el segundo numero:"));;
// let nota3=parseFloat(prompt("ingrese el tercer numero:"));;
// let ptje=nota1+nota2+nota3;
// let prom;


// prom=ptje/3;

// document.write("el puntaje obtenido es: "+ptje+"<br/>");
// document.write("el promedio es: "+prom); */
// /* let n=10;
// let a=14;
// document.write(n==a); */
 

// Ejercicio: Una empresa desea un sistema web, que procese la compra de 5 productos diversos. Para ello se ingresa el nombre y el apellido de un cliente, por separado, asi como los precios de dichos productos. El programa debe mostrar en pantalla, el nombre completo del cliente asi como el pago total y el IGV (18%) de dicha compra.

/* const igv=0.18;
let nombre=prompt("ingrese nombre");
let apellido=prompt("ingrese apellido");
let nomproduct1=prompt("ingrese product1");
let predproduct1=parseFloat(prompt("ingrese precio del producto1"));;
let nomproduct2=prompt("ingrese product2");
let predproduct2=parseFloat(prompt("ingrese  precio del producto2 "));;
let nomproduct3=prompt("ingrese product3");
let predproduct3=parsefloat(prompt("ingrese  precio del producto3"));;
let nomproduct4=prompt("ingrese product4");
let predproduct4=parseFloat(prompt("ingrese  precio del producto4"));;
let nomproduct5=prompt("ingrese product5");
let predproduct5=parseFloat(prompt("ingrese  precio del producto5"));;

let nomcompleto=  nombre+""+apellido;
let subtotalproduct= predproduct1+predproduct2+predproduct3+predproduct4+predproduct5;
let predIGV=totalproduct*igv;
let totalproduct=subtotalproduct+predIGV;

document.write(nomcompleto+"<br>");
//document.write(predIGV+"<br>");
document.write(`el igv a pagar es ${predIGV} vuelva pronto"a mi tienda"<br>
<h2> gracias por su compra,su total a pagar es ${totalproduct}.`)
document.write(totalproduct+"<br>");
  */
//tengo un numero saber si es positivo

/* let num=-3;
if(num==0){
    alert("es neutro")

}else if(num>0){
    alert("es negativo")
}else{
    alert("es negativo")
} */


//se a ingresado la nota de 3 alumnos,mostrar elpromedio si su promedio esta entre 17 y 20 que salga excelente,si promedio esta entre 13 y 16 que salga regular, y si es menor a 13 que salga desaprobado.
/* let numero1;
let numero2;
let numero3;

numero1=parseFloat(prompt("ingrese la primera nota"))
numero2=parseFloat(prompt("ingrese la segunda nota"))
numero3=parseFloat(prompt("ingrese la tercera nota"))

let prom=(numero1+numero2+numero3)/3;

if(prom>=17 && prom<=20){
    document.write(`el promedio es ${prom} tiene promedio excelente`);
}else if(prom>=13 && prom<=16){
    document.write(`el promedio es ${prom} y usted esta regular`);
} else if( prom<13){
    document.write(`el promedio es ${prom} y usted esta desaprobado`);
}else{
    document.write(`ingreso datos incorrectos`);
} */

// //Una empresa de llamadas telefonicas, necesita un programa que le calcule el costo
// por llamada. Debe tener en cuenta:
//  A Fijo: 0.20 centimos por minuto
//  A Claro: 0.40 centimos por minuto
//  A Movistar: 0.60 centimos por minuto
//  A Entel: 1 sol el minuto

/* 
let empresa=prompt("ingrese la empresa a la cual desea llamar: ");
let costo=parseFloat(prompt("Ingrese costo x min de llamada: "));
let minutos=parseFloat(prompt("cuanto minutos desea hablar: "));
let fijo=0.20;
let claro=0.40;
let movistar=0.60;
let entel=1;
let total=costo*minutos;

if(fijo=minutos*0.20){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`);
}else if(claro=minutos*0.40){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br><h2 style="background=green;">
    El costo x min de llamda es: ${costo} <br>;
    Cuantos minutos desea hablar: ${minutos} <br>;
    El monto total a pagar es: ${total}</h2>`);
}else if(movistar=minutos*0.60){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`);
}else if(entel=minutos*1){
    document.write(`La empresa a la cual desea llamar es: ${empresa} <br>
    El costo x min de llamda es: ${costo} <br>
    Cuantos minutos desea hablar: ${minutos} <br>
    El monto total a pagar es: ${total}`); */

// let k=1;
// while(k<=15){document.write("guarana")
// k++}

/* let k=1
let acum=0

do{
    acum=acum+k
    k++
    document.write(acum+"<br>")
}while(k<=20)

function saludar(){
    alert("bienvenido aL las funciones");
}
saludar();


function saludar2(nombre){
    alert("bienvenidos a las funciones"+nombre)
}
 let nom=prompt("ingresa tu nombre");
 saludar2(nom)
 */

// function multiplica(numero1,numero2){
//     let n1=numero1;
//     let n2=numero2;
//     let multi=n1*n2;
//     return multi;

// }
// document.write(multiplica(8,5));

// let multiplica=function(numero1,numero2){
//          let n1=numero1;
//          let n2=numero2;
//          let multi=n1*n2;
//          return multi;
    
//      }

//  function sumar(){
//      let num1=parseFloat(document.getElementById("num1").value);
//      let num2=parseFloat(document.getElementById("num2").value);

//      let sum=num1+num2;

//      document.getElementById("resp").innerHTML=sum;
//      }

//      function limpiar(){
//         document.getElementById("num1").value="";
//         document.getElementById("num2").value="";
//         document.getElementById("resp").innerHTML="";
//      }
//      function muestraFecha(){
//         let fecha
//         fecha=new Date();
//         let cadena= fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
//         return cadena
//      }
//      document.getElementById("fecha").innerHTML=muestraFecha();



// function muestraFecha(){
//     let fecha;
//     fecha=new Date();
//     let cadena= fecha.getDate()+"/"+(fecha.getUTCMonth()+1)+"/"+fecha.getFullYear();
//     return cadena
// }
// document.getElementById("fecha").innerHTML= muestraFecha();

// function muestraHora(){
// let hora;
// hora=new Date();
// let cadena= hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
// return cadena
// }
// document.getElementById("hora").innerHTML= muestraHora();

// function borrar() {
// document.getElementById("formulario").reset();
// }

// function calcular() {
// // entrada
// let a=parseInt(document.getElementById("primero").value);
// let b=parseInt(document.getElementById("segundo").value);
// let c=parseInt(document.getElementById("tercero").value);}

// // validar a, b y c
// if (a == 0) {
//     salida = "<em>a</em> no puede ser igual a cero!";
// } else if (isNaN(a)) {
//     salida = "<em>a</em> tiene que ser un numero!";
// } else if (isNaN(b)) {
//     salida = "<em>b</em> tiene que ser un numero!";
// } else if (isNaN(c)) {
//     salida = "<em>c</em> tiene que ser un numero!!";
// } else {
//     // calcular el resultado usando x = (-b +- sqrt(b^2 - 4ac)) / 2a
// var x1 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
// var x2 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
// salida = "Para la ecuación <strong>" + (a == 1 ? "" : a) + "x\u00B2 + " + (b == 1 ? "" : b) + "x + " + c + " = 0";
// }
// // mostrar resultado (ó errores)
// document.getElementById("resultado").innerHTML = salida;
// document.getElementById("xuno").innerHTML = (x1).toFixed(2);
// document.getElementById("xdos").innerHTML = (x2).toFixed(2);


// let ciudad=["lima","arequipa","trujillo"];
// log.console(ciudad);
// document.write(ciudad);
// document.write(ciudad+"br")
// document.write(ciudad.length+"br")
// document.write(ciudad[1]+"br")

// ciudad.push("cusco","puno");
// document.write(ciudad.push())
// ciudad.pop();



// let colores=[];

// function agregaColor(evt){
//     evt.preventDefault();

//     let nom=document.getElementById("colores").value;

//     if(nom==""){
//         alert("El campo no puede estar vacio");
//     }else if(!existeNombre(nom)){
//         let opcion ="<li>"+nom+"</li>";
//         let lista=document.getElementById("listaC");

//         lista.innerHTML+=opcion;
//         colores.push(nom);
//     }else{
//         alert("El color existe");
//     }

// }
// function existeNombre(nombre){
//     //busca nombre
    
//     for(let i=0;i<colores.length;i++){
//         const elemento=colores[i];
//         if(elemento.trim().toLowerCase()===nombre.trim().toLowerCase()){
//             return true;
//         }
//     }
//     return false;
const boton1 = document.getElementById("boton1");
const boton0 = document.getElementById("boton0");
boton1.addEventListener("click", accion1);
boton0.addEventListener("click", reiniciar);

const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");

let minutos = 0;
let segundos = 0;
let centesimas = 0;

let corriendo = null;

function dibujarTiempo(){

	spanMinutos.innerHTML = minutos;
	spanSegundos.innerHTML = segundos;
	spanCentesimas.innerHTML = centesimas;
	
}

function reiniciar(){

	minutos = 0;
	segundos = 0;
	centesimas = 0;
	dibujarTiempo();
}

function accion1(){

	if(corriendo){
		detener();
		boton0.disabled = false; //No deshabilitado.
	}
	else{
		boton0.disabled = true; //Si, deshabilitado!
		iniciar();
	}
}

function iniciar(){

	const sumarMinuto = () => {

		if(minutos < 99) minutos++;
	}

	const sumarSegundo = () => {

		if(segundos === 59){
			segundos = 0;
			sumarMinuto();
		}
		else{
			segundos++;
		}
	}

	const incrementar = () => {

		if(centesimas === 99){
			centesimas = 0;
			sumarSegundo();
		}
		else{
			centesimas++;
		}

		dibujarTiempo();
	}

	corriendo = setInterval(incrementar, 10);
	boton1.innerHTML = "Detener";

	/*
	*
	*setInterval arroja un valor que es un número
	*con el que luego se puede referenciar a ese intervalo
	*(si lo guardo en alguna variable, claro!)
	*
	*/
}

function detener(){

	clearInterval(corriendo);
	corriendo = null;
	boton1.innerHTML = "Iniciar";
}

dibujarTiempo();
//=======================================================================


let d = new Date();
document.getElementById("date").innerHTML =
  "<h1>Current time: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()  + "</h1>"

// Using Template Strings
  document.getElementById("date").innerHTML =
  `<h1>Current time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} </h1>`


//  Método 2: 

function getHour(){
    const h = new Date();
    const hours = ((h.getHours() < 10) ? "0" : "") + h.getHours();
    const minutes = ((h.getMinutes() < 10) ? "0" : "") + h.getMinutes();
    const secs = ((h.getSeconds() < 10) ? "0" : "") + h.getSeconds();

    console.log("Hora actual: " + hours + ":" + minutes + ":" + secs);

}

getHour();

//  Método 2.1 - Using IIFE:

(function(){
    const h = new Date();
    const hours = ((h.getHours() < 10) ? "0" : "") + h.getHours();
    const minutes = ((h.getMinutes() < 10) ? "0" : "") + h.getMinutes();
    const secs = ((h.getSeconds() < 10) ? "0" : "") + h.getSeconds();

    console.log("Hora actual: " + hours + ":" + minutes + ":" + secs);

})();

//  Método 3:

let timeNow = new Date();

// Queremos que la hora se muestre siempre con 2 dígitos. Para eso, hacemos lo siguiente:
// Usamos un ternario para saber si el número de digitos es menor que 2
let hours = timeNow.getHours().toString().length < 2 ? "0" + timeNow.getHours() : timeNow.getHours();
let minutes = timeNow.getMinutes().toString().length < 2 ? "0" + timeNow.getMinutes() : timeNow.getMinutes();
let seconds = timeNow.getSeconds().toString().length < 2 ? "0" + timeNow.getSeconds() : timeNow.getSeconds();

//  Concatenando variables | Usando ES5 
// let mainTime = hours + ":" + minutes + ":" + seconds;
 //  Concatenando variables | Usando ES6: Template Strings (Template literals) 
let mainTime = `${hours}:${minutes}:${seconds}`;

console.log(mainTime);





