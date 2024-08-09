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

//--------------------------PARAMETROS ACTUALES PARA VALIDACION -------------------------------


