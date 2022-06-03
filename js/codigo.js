/* let nota1=parseFloat(prompt("ingrese el primer numero:"));;
let nota2=parseFloat(prompt("ingrese el segundo numero:"));;
let nota3=parseFloat(prompt("ingrese el tercer numero:"));;
let ptje=nota1+nota2+nota3;
let prom;


prom=ptje/3;

document.write("el puntaje obtenido es: "+ptje+"<br/>");
document.write("el promedio es: "+prom); */
/* let n=10;
let a=14;
document.write(n==a); */
 

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
    El monto total a pagar es: ${total}`);
}



