//__________________________________PROTOTIPOS________________________________________
//si lo creamos nosotros, para acceder a el usamos .prototype
//si es heredado .__proto__   (a esto se le llama dunder proto)
//los prototoipos pueden ser variables, arrays, variable + funcion etc!
//estos nos muestran TODOS los metodos posibles para trabajar nuestro array!
//EJ:
// let variable = ["holA", 123,null];
// console.log(variable)
// console.log(variable.__proto__)
//heredar objetos a base de __proto__, para guardar su contenido!
// class objeto{
//     constructor(){}
//     hablar(){
//      console.log("hola")
//     }
// }
// const Objeto = new objeto();

// const arr = [];

// arr.__proto__ = Objeto;

// arr.hablar();

//________________________use strict mode_______________________
//se coloca:
// "use strict";
//nombre = "bruno"    // esto no andaria con el use strict
// let nombre ="bruno";  //esto si
// console.log(nombre);
//------otras formas que nos darian error con el use strict---
//el await es una excepcion que aun no esta incorporada, pero hay otras que si
// let await = "hola"
// console.log(await)

//esta no funcionaria
// arguments = "hola";
// console.log(arguments);

//---borrar dato e informacion de un objeto correctamente----

// const obj = {
//     nombre: "bruno"
// };
// delete obj.nombre
// console.log(obj)
//______________________Funciones flecha_________________________
// const saludar2 = ()=>{{
//     console.log("hola");
//     console.log("mundo!");
//     }};

//  let resultado = saludar2();
//  console.log(resultado)
//si no retorna nada es posible hacer esto!
//nos dice "undefined"
//la forma correcta seria mostrar en la misma linea un DATO especifico
//Por ejemplo: ------------------------------------------------
// const saludar3 = ()=> "string";
// let resultado = saludar3();
// console.log(resultado)
//------------datos curiosos de funciones flecha----------------
// const saludar = res => nombre = res;//expresiones, borramos los parentesis
//                                     // que la convierten en flecha y sigue siendo funcion flecha
// resultado = saludar
//---------------------------FUNCIONES COMUNES------------------------------------
// const saludar = function saludar(){
//     return nombre = "pedro";
// }
// console.log(saludar());
//o sin que diga const saludar heredando la funcion:(heredamos afuera de igual manera)
// function saludar(){
//     return nombre = "pedro";
// }
// const resulatdo = saludar();
// console.log(resulatdo);
//------------------------EXPLICACION SENTENCIAS Y EXPRESIONES---------------------
//sentencia es cuando ponemos entre llaves lo que debe ejecutar la funcion,
//las expresiones son en la misma linea
//-------------------- crear un objeto  con una funcion dentro(function)
// const objeto = {
//     nombre : "bruno",
//     saludar : function () {console.log(`hola ${this.nombre}`)}
// }
// objeto.saludar();
// console.log(objeto.nombre);
//_____________________________________THIS_____________________________________
//explicacion de this (esta tomado del ejercicio de arriba) 
//En JavaScript, `this` dentro de un método hace referencia al objeto en el que 
//el método está definido)... `this.nombre` dentro del método saludar se refiere a la
//propiedad `nombre` del mismo objeto `objeto`. Así, `this` permite acceder a las
//propiedades del objeto, EN CAMBIO en las funciones flecha `()=>` THIS NO EXISTE!
//debemos crearlo afuera con window.nombrepropiedad = "informacion a guardar, para que
//el this tenga un valor por fuera y sin hacer referncia al objeto, de esta forma
//nos permite que la funcion flecha nos funcione (no es recomendable)
//---------------------- crear un objeto con una FUNCION FLECHA dentro------------
//aca usamos this pasandole el valor por fuera, ya que WINDOW ES LOS MISMO QUE THIS!
// const objeto = {
//     nombre : "bruno",
//     saludar : ()=> {console.log(`hola ${this.nombre}`)}//por si solo muestra 
//     //"hola undefined", ya que this no funciona en funcion flecha
//     //agregandole un nombre en la propiedad window podemos usarlo 
// }
// window.nombre = "bruno";
// objeto.saludar();
//EXPLICACION FINAL: no se usa funcion flecha como metodo dentro de un objeto, ya 
//que no podemos acceder a las propiedades del mismo con this.
//-------------------------- CONSTRUCTORES CON FUNCIONES ---------------------------
// function constructorPersona(nombre, apellido) { 
//     this.Nombre = nombre;
//     this.Apellido = apellido
// }//el this lo convierte automaticamente la funcion en un constructor
// let persona = new constructorPersona("bruno","depetris");
// console.log(persona.Nombre,persona.Apellido
//la funcion flecha no funciona como contructor!!! por eso hicimos lo anterior
//_________________________Funcion Recusriva___________________________
// es una funcion que se llama asi misma     
// "use strict";
// const validarEdad = (msg)=>{
// 	let edad;
// 	try{
// 		if(msg) edad = prompt(msg);
// 		else edad = prompt("introduce tu edad");
// 		edad = parseInt(edad)
// 		if(isNaN(edad))throw "introduce un numero para la edad";//isNaN es validar que sea numero
// 		if(edad > 18) console.log("sos mayor de edad");
// 		else console.log("sos menor de edad")
// 	}catch(e){
// 		validarEdad(e);
// 	}
// }
// validarEdad();
//THROW:En JavaScript, throw se usa para lanzar una excepción.
//Esto significa que puedes interrumpir el flujo normal
//del programa y señalar que algo salió mal.
//FUNCION RECUSIVA: es una funcion que se ejecuta hasta que se ingrese el dato esperado por el sistema!
//como un DO WHILE
//_______________________________________ CLAUSURAS ___________________________________________________
//son funciones que devulven otras funciones, por ejemplo:
// const saludar = (nombre)=>{
//     return function(){
// 		console.log(nombre);
// 	}
// }

// let saludarFuncional = saludar("bruno");//usamos saludoFuncional para guardar el RETURN
// saludarFuncional();//mostramos lo guardado!
//--------------------------------EVENTO CUANDO CARGA LA PAGINA-----------------------------------------
//aca estamos haciendo que cuando se cargue la pagina se muestre el nombre cargado en la clausura
// AddEventListener("load",saludarFuncional); 
//---------------------------------SIN clausuras-----------------------------------------
// const cambiarTamaño = (tamaño)=>{
//     document.querySelector(".texto").style.fontSize = `${tamaño}px`
// }
// document.querySelector(".T12").addEventListener("click", ()=>cambiarTamaño(12))
// document.querySelector(".T14").addEventListener("click", ()=>cambiarTamaño(14))
// document.querySelector(".T16").addEventListener("click", ()=>cambiarTamaño(16))



//esto solamente llena los botones desde javascript, una perdidad de tiempo(es solo practica)
// const boton12 = document.querySelector(".T12")
// const boton14 = document.querySelector(".T14")
// const boton16 = document.querySelector(".T16")
// boton12.innerHTML ="Size 12px";
// boton14.innerHTML ="Size 14px";
// boton16.innerHTML ="Size 16px";
//----------------------------------- CON clausuras -------------------------------
// const cambiarTamaño = (tamaño)=>{
//     return ()=>{document.querySelector(".texto").style.fontSize = `${tamaño}px`}
// }

// px12 = cambiarTamaño(12);
// px14 = cambiarTamaño(14);
// px16 = cambiarTamaño(16);

// document.querySelector(".T12").addEventListener("click",px12)
// document.querySelector(".T14").addEventListener("click", px14)
// document.querySelector(".T16").addEventListener("click", px16)

// //esto solamente llena los botones desde javascript, una perdidad de tiempo(es solo practica)
// const boton12 = document.querySelector(".T12")
// const boton14 = document.querySelector(".T14")
// const boton16 = document.querySelector(".T16")
// boton12.innerHTML ="Size 12px";
// boton14.innerHTML ="Size 14px";
// boton16.innerHTML ="Size 16px";

//_______________________________PARAMETROS ACTUALES PARA VALIDACION______________________________
// 1)
// const suma = (a, b) => {
// 	b = b || 0;//la validacion la creamos por si nos ingresan solo un numero
// 	console.log(a + b)
// }
// suma(10)
// 2)Usando parametro rest (...rest), lo usamos como "num" es parab crear un objeto con
// la cantidad cual sea de numeros que ingrese el usuario
//- El funcionamiento de arguments seria que todos los numeros que le pasemos a suma, se guardan en un array
// luego ese array lo recorremos para sumar cada uno de los numeros en su posicion y mostrar el resultado fuera
// EJ:
// const suma = (...num)=>{
// 	let resultado = 0;
// 	for (let i = 0; i < num.length; i++) {
// 		resultado += num[i];
// 	}
// 	console.log(resultado);
// }

// suma(12,25);
// y si queremos agragar un parametro de frase en rest, va al principio asi (frase,...num)

//_________________________________TERNARIAS y spread_________________________________________
//-Operador condicional TERNARIO
//definicion y sintaxis
// let edad = 12;
// (edad > 18) ? console.log("sos mayor de edad")//el ? va en el condicional de verdadero, o cumplimiento
//             : console.log("sos menor de edad");//el : va en el condicional de falso, o incumplimiento
//en caso de que querramos agregar mas cosas, debemos cerrar entre parentesis lo que agreguemos
//EJ:
// (edad > 18) ? (console.log("sos mayor de edad!"),
//               console.log("Entrada habilitada") )
// 		    : console.log("sos menor de edad, AFUERA");
//EL OPERADOR CONDICIONAL TERNARIO, CONSUME MENOS RECURSOS (muy poco, no significativo)
//el if-else sigue siendo mejor, ya que nos permite hacer condiciones mas gigantes sin 
//darnos problemas de legibilida
//------------------------------SPREAD(...res)-----------------------------------
//agregar un array a otro
// let arr = ["pera","banana","manzana"];
// let arr2 = ["kiwi","naranja","banana","manzana","banana","manzana","banana","manzana"];
// arr.push(arr2[0],arr2[1])//es muy tedioso, imaginate sumar 40 paraemtrois asi [3],[4],[5] y mas
//para eso esta ...NOmbre que tenga nuestro array
//ASI:
// arr.push(...arr2)
// console.log(arr)
//y si no queremos modificar los arrays, creamos uno nuevo:
// let arr3 = [...arr,...arr2]
// console.log(arr3)
//AMBAS POSIBILIDADES SON VALIDAS!

// const suma = (num1,num2)=>{
// 	console.log(num1+num2)
// }
// let arr = [3,6]
// suma(...arr);
//_________________________________CAPITULO 15, 1:40hs______________________________________
//APIs: no confundir APIs con API rest, son cosas diferentes!
//API REST es a la api que se le hacen peticiones y nos devulven dato e informacion
//APIs comunes, un prompt, un alert, y cosas asi son APIS pequeñas

//-------------------------------------Objeto date----------------------------------------
// console.log(fecha.getMonth()+1);
//-getDate:fecha
//-getDay:dia de la semana, funcionamiento:  dom =>0,lun => 1 , mar =>2, mier:3, jue=>4, vie =>5, sab=>6
//-getMonth: tambien nos devuelve desde el numero 0,hay que sumar en 1 asi console.log(fecha.getMonth()+1)
//-getYear: se trabaja sumandole 1900, por idea de los diseñadores! console.log(fecha.getYear()+1900)
//-getSeconds:segundos del minuto en el que estamos
//-getHours: hora en la que estamos, redondea para abajo
//-getMinutes:minuto en el que estamos
//decirle la fecha: const fecha = new date(2024,08,12)
//Hora completa: 
//--------------------------------------CREAMOS RELOJ---------------------------------------------------
//Ejemplo de uso en un reloj
//hecho por mi, nos falta agregar 0 si le falta
// const fecha = new Date();
// const reloj = document.querySelector(".reloj");
// const hora = (rellenoreloj)=>{
//     return function(){
//         reloj.innerHTML = rellenoreloj;
// 	}
// }
// rellenoreloj = `<div>${fecha.getHours()}</div><div>${fecha.getMinutes()}</div><div>${fecha.getSeconds()}</div>`;
// let mostrarReloj = hora(rellenoreloj);//usamos saludoFuncional para guardar el RETURN
// mostrarReloj();//mostramos lo guardado!
// // reloj.innerHTML = `<div>${fecha.getHours()}</div><div>${fecha.getMinutes()}</div><div>${fecha.getSeconds()}</div>`;

//hecho por dalto: RELOJ

// const addCeros = num =>{
//     if(num.toString().length < 2) return"0".concat(num);
//     return num;
// }

// const Reloj = ()=>{   
//     const Hora = new Date();
//     let hr = addCeros(Hora.getHours());
//     let min = addCeros(Hora.getMinutes());
//     let seg = addCeros(Hora.getSeconds());
//     const Reloj = document.querySelector(".reloj");
//     Reloj.innerHTML =`<div>${hr}</div><div>${min}</div><div>${seg}</div>`;
// }
// Reloj();
// setInterval(Reloj,1000);
//__________________________________LOCAL STORAGE Y SESSION STORAGE______________________________________
//SessionsStorage: informacion que se almacena en la sesion, es decir, cuando actualizamos la pag se desaparece
//LocalStorage: lo contrario a SessionStorage 

//creamos productos en el carrito (llave/valor)
//los productos se guardan aunque cargemos, para eliminarlos debemos programarlo
// localStorage.setItem("nombre1","Bruno");
// localStorage.setItem("nombre2","Brun");
// localStorage.setItem("nombre3","Bru");
// localStorage.setItem("nombre4","Br");

// console.log(localStorage.getItem("nombre1"));//mostramos producto
// let nombre = localStorage.getItem("nombre");//obtenemos producto y guardamos
// console.log(localStorage.length - 1);//mostramos la cantidad de productos
//Ahora con sessionStorage

// sessionStorage.setItem("nombre1","Bruno");
// sessionStorage.setItem("nombre2","Brun");
// sessionStorage.setItem("nombre3","Bru");
// sessionStorage.setItem("nombre4","Br");

// console.log(localStorage.getItem("nombre1"));//mostramos producto
// let nombre = localStorage.getItem("nombre");//obtenemos producto y guardamos (luego si queremos, mostramos la variable y chau)
//los productos no se guardan si cargamos o cerramos y abrimos, se eliminan del sessionStorage
//el sessionStorage es la sesion actual, si se sale y vuelve a entrar, se vacia nuestro carrito!

//---------------------------REMOVER UN ITEM--------------------------------
// sessionStorage.setItem("nombre","Bruno");//creamos
// localStorage.removeItem("nombre")//eliminamos

//---------------------------VACIAR LOCAL O SESSION STORAGE------------------------------
// localStorage.clear();
//---------------------------REMOVER ITEM AL RATITO DE CARGAR------------------------------
// setTimeout(()=>{
//     let nombre = localStorage.removeItem("nombre")//elimina nombre
// },2000)//a los dos segundos de carga

//---------------------------EJEMPLO DE USO LOCAL O SESSION STORAGE--------------------------
// localStorage.clear();
// const modal = document.querySelector(".modal-overlay");

// const definirIdioma = ()=>{
//     document.querySelector(".en").addEventListener("click", ()=>{
//         localStorage.setItem("idioma","en")
//         cerrarModal();
//     })
//     document.querySelector(".es").addEventListener("click", ()=>{
//         localStorage.setItem("idioma","es")
//         cerrarModal();
//     })
// }
// const cerrarModal = ()=>{
//     modal.style.animation = "desaparecer 1s forwards";
//     setTimeout(()=> modal.style.display = "none",1000)
// }
// const idioma = localStorage.getItem("idioma");
// if(idioma === null) definirIdioma();
// else {
//     console.log(`idioma: ${idioma}`);
//     modal.style.display = "none";
// }
// if(idioma == "es") {mostrarEnEspañol()}
// else {mostrarEnIngles();}
// mostrarEnEspañol=()=>{
//queda completar esto, ya que no pudimos hacerlo como queriamos(que se haga como la alerta por defecto de google)
//esto se realizaria con una api o una galeria de un framework que contenga traducciones de las palabras, o un JSON con una traduccion d elas palabras
