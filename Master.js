"use strict";
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
//queda completar esto, ya que no pudimos hacerlo como queriamos(que se haga como la
// alerta por defecto de google) esto se realizaria con una api o una galeria de un
// framework que contenga traducciones de las palabras, o un JSON con una traduccion
// de las palabras
//___________________________________DRAG & DROP_______________________________________________
//COMO TRABAJAR Y EXPLICACIONES COMPLETAS:
// const circulo = document.querySelector(".circulo")
// const rectangulo = document.querySelector(".rectangulo")

// circulo.addEventListener("dragstart",(e)=>{
//     e.dataTransfer.setData("nombreX", e.target.className);//podriamos poner en lugar de e.target.className
//     console.log(e.dataTransfer.getData("nombreX"))        //.circulo, pero si trabajamo con varios objetos
//                                                           //esto seria un problema, asi que debemos hacerlo
//                                                           //asi o con id, que es mas seguro.
//                                                           //esto esta haciendo que cuando mostremos 
//                                                           //aparezca "circulo" en la consola, que es
//                                                           //la clase
// })//cuando agarramos

// // circulo.addEventListener("drag",()=>console.log(2))//cuando lo movemos
// // circulo.addEventListener("dragend",()=>console.log(3))//cuando soltamos


// rectangulo.addEventListener("dragenter",() => console.log(1));//verifica que este entrando(el circulo)
// rectangulo.addEventListener("dragover",(e) =>{
//     e.preventDefault();
//     //este agregado hace que no aparezca como bloqueado al querer soltar dentro del rectangulo
//     console.log(2)});
// //DRAGOVER: tiene la propiedad que drop necesita para saber si el circulo puede o 
// //no soltarse en el rectangulo, en este caso no, entonces debemos crear codigo extra en el drop
// rectangulo.addEventListener("drop",(e)=>console.log(e.dataTransfer.getData("nombreX")));
// //verifica cuando se suelta, y la parte de de get, esta tomando y guardando en el rectangulo
// rectangulo.addEventListener("dragleave",() => console.log(4));//cuando entra, se mueve y se va!
// //objeto dataTransfer.setData()  ---> creamos un objeto
// //-el set siempre crea y el get trae-

//---------------------------------EJEMPLO DE TEXTURIZADOR:-------------------------------------------
// const zona = document.querySelector(".zona");
// zona.addEventListener("dragover",(e)=>{
//     e.preventDefault();                //para que me deje largar cosas encima de rectangulo(la zona)
// })
// zona.addEventListener("drop",(e)=>{
//     let n = e.dataTransfer.getData("textura");//aca recibimos la data
//     zona.style.background = `url("imagenes/textura${n}.png")`;//el estilo que le damos a la zona es el que recibimos 
// })
// for (let i = 1; i <document.querySelector(".texturas").children.length + 1 ; i++){
//     document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=> transferirTextura(i,e))
// }
// const transferirTextura = (n,e)=>{
//     e.dataTransfer.setData("textura",n)
// }
//------------------------------ finalizacion del texturizador-----------------------
//______________________________Geolocalization (APIs)________________________________
//detecta movimientos de un dispositivo, que vayamos de un lado para otro y demas
// const geolocation = navigator.geolocation;

// const posicion = (pos)=>{
//     console.log(pos.coords.longitude)
//     console.log(pos.coords.latitude)

// }

// geolocation.getCurrentPosition(posicion);
//consulta si nos deja conocer nuestra ubicacion
//esto realizado nos devuelve nuestra ubicacion exacta en consola, luego pegamos en orden 
//buscando con google maps y nos muestra exactamente el lugar, una locura!
// const geolocation = navigator.geolocation;

// const posicion = (pos)=>{
//     console.log(pos)
// }
// const err = ()=>{
//     console.log(e);
// }
// const options = {
//     maximumAge:0,//la posicion exacta, si le ponemos mas tiempo nos devuelve la del cache
//     timeout:3000,//tiempo de recarga
//     enableHightAcurracy:true//nos devuelve la ALTA PRECISION
// }
// geolocation.getCurrentPosition(posicion,err,options);
//para Saber la posicion exacta en tiempo real, usamos watchPosition()(debemos averiguarla nosotros)
//_____________________________HISTORY(HISTORIAL)_____________________________
// console.log(history)//muestra el historial
// console.log(history.length)//la cantidad de idas y vueltas ene la pagina
// console.log(history.back())//funciona solo en consola(cantidad de veces que se vuelve)
// console.log(history.forward())//funciona solo en consola
// console.log(history.go(1))//funciona en consola(hacia la siguiente op hacia atras)
//si ponemos go(0) nos recarga la pagina

//-muchos de los probados funcionan solamente en cosnola, siq ueremos hacer
//uso de ellos vamos a necesitar funciones y llamarlas cuando deseemos-

// history.pushState({nombre:"bruno"},"","?agregadoAlFonfoDeLaURL")
// //al ejecutar esto se nos cambia/agrega una nueva URL con agregadoAlFonfoDeLaURL
// console.log(location.href)//ver la URL actual o establecer nueva URL
// history.state//nos dice el cambio realizado en el pushState()
//a continuacion vamos a crear un evento, el cual no esta agregado a ninguna
//variable, solo a window(cuando no se pone nada es a window!!!)
//este evento funciona como lectura para saber a que pagina estamos volviendo
//o yendo (con las flechitas de volver hacia atras o hacia adelante)
// addEventListener("popstate",(e)=>{
//     console.log(e.state);
// })
// history.replaceState({nombre:"bruno"},"","?agregadoAlFonfoDeLaURL")
//funciona igual que push, solamente que no lo muestra msj consola
//y el popstate del event listener no funcionara!!!!!
//------------------------------final de history--------------------------
//_______________________________FileReader________________________________
//-------LEER UN SOLO ARCHIVO-----ACA USAMOS ReadAsText(), que es para archivos de texto
// const archivo = document.getElementById('archivo')
// archivo.addEventListener("change",(e)=>{//change es la escucha/evento al cambiar un input
//     // e.target.files//obtener el valor cuando son muchos archivos
//     leerArchivo(archivo.files[0])//archivo.files[0] obtener el valor del archivo, para pocos archivos
//                                  //la funcion es creada para leer dicho archivo                               
// })

// const leerArchivo = (ar) => {//ar es lo que recibimos arriba
//     const reader = new FileReader
//     reader.readAsText(ar);//leemos el archivo que recibimos y se guarda en reader
//     const texto = document.querySelector(".cargar-texto")
//     reader.addEventListener("load",(e)=> 
//         texto.innerHTML = `${e.currentTarget.result}`
//     );

//     //verificamos que se termino de leer,en caso de que si, lo muestra en un div
//     // con el evento e.currentTarget.result, el cual nos muestra exactamente lo que
//     //hay dentro
// }
// //tambien se puede leer un archivo JSON que nos mando el usuario
// //ASI: console.log(JSON.parse(e.currentTarget.result))
//-------LEER MAS DE UN SOLO ARCHIVO-----

// const archivo = document.getElementById('archivo')
// archivo.addEventListener("change",(e)=>{
//     leerArchivo(archivo.files)                                                          
// })

// const leerArchivo = (ar) =>
// {
//     // const count = 0;

//     for(var i = 0; i < ar.length ;i++)
//     {
//         const reader = new FileReader();
//         reader.readAsText(ar[i]);
//         reader.addEventListener("load",(e)=> 
//         {

//             // const obj = JSON.parse(e.currentTarget.result)
//             // console.log(obj.aprobados)
//             //esto solo funciona con objetos el jsonparse, para leer otras cosas que no
//             //esten encapsuladas, usamos simplemente:
//             const texto = document.querySelector(".cargar-texto")
//             const informacion = e.currentTarget.result;
//             texto.innerHTML += `<b style="color:red;">Texto insertado:</b><br> ${informacion}<br><br>`;            
//         });
//     }
// }
//asi se leen varios OBJETOS, no html ni javascript como antes, para eso debemos programar
//una validacion de que nos diga que TIPO de archivo se esta ingresando (teoria mia)

//-----------------------------FILE READER ReadAsDataURL-------------------------------------------

//con esta leemos archivos como videos, imagenes, etc!
// const archivo = document.getElementById('archivo');
// archivo.addEventListener("change", (e)=>{
//     leerArchivo(archivo.files)
// })

// const leerArchivo = (ar) =>{

//         for(var i = 0; i < ar.length ;i++)
//         {
//             const reader = new FileReader();
//             reader.readAsDataURL(ar[i]);
//             reader.addEventListener("load",(e)=> 
//             {
//                 let newImg = `<img src='${e.currentTarget.result}'>`;
//                 document.querySelector(".resultado").innerHTML += newImg;//a medida que las lee las suma al contenedor       
//             });
//         }
//     }

//----------------------------------------FileReader & Drag And Drop-------------------------------------------

// const cargarArchivo = ar => {
//     const reader = new FileReader();
//     //PARA TEXTO
//     // reader.readAsText(ar);
//     // reader.addEventListener("load", e=>{
//     //     document.querySelector(".resultado").textContent = e.currentTarget.result//currentTarget es el objeto que genera el evento(txt,pdf,etc), y el result es lo que FileReader leyo de el, el textcontent= seria que el contenido va a ser cambiado por lo que lea FileReader 
//     // })
//     //PARA IMAGENES
//     // reader.readAsDataURL(ar);
//     // reader.addEventListener("load", e =>{
//     //     let URLimagen = URL.createObjectURL(ar);//crear la Url del archivo que recibimos, URL temporal
//     //     let img = document.createElement("IMG");//creamos una imagen en el HTML, y la guardamos en js tambien
//     //     img.setAttribute("src",URLimagen);//le damos el source a la imagen, en este caso es URLimagen
//     //     document.querySelector(".resultado").appendChild(img);//a el div resultado, le insertamos la imagen la imagen
//     // })
//     // PARA VIDEOS + mostrar barra de progreso
//     const zona = document.querySelector(".zona-arrastre");
//     zona.addEventListener("dragover", e => {
//         e.preventDefault();
//         changeStyle(e.srcElement, "#444");//el e.srcelement se refiere al elemento html que esta recibiendo el evento dragover, y el #444 es el color (ambos se pasan a la funcion)
//     })
//     zona.addEventListener("dragleave", e => {
//         e.preventDefault();
//         changeStyle(e.srcElement, "#888");
//     })
//     zona.addEventListener("drop", e => {
//         e.preventDefault();
//         changeStyle(e.srcElement, "#888");
//         cargarArchivo(e.dataTransfer.files[0])//aca accede al primer archivo en una transferencia de datos(en drag and drop),se lo pasamos a la funcion
//         zona.style.border = "4px solid #888;"
//     })
//     const changeStyle = (obj, colorElegido) => {
//         obj.style.color = colorElegido;
//         obj.style.border = `4px dashed ${colorElegido}`;
//     }
//     reader.readAsArrayBuffer(ar);
//     reader.addEventListener("progress", e => {
//         let carga = Math.round(e.loaded / ar.size * 100);
//         zona.textContent = `${carga}%`;
//         document.querySelector(".barra-de-carga").style.padding = "75px 20px";
//         document.querySelector(".barra-de-carga").style.width = `${carga / 2.4}%`;//el 2.4 es la division para que se nos muestre justo cuando termine de cargar
//     })
//     reader.addEventListener("loadend", e => {
//         changeStyle(zona, "#2e7");
//         zona.style.borderStyle = "solid"
//         document.querySelector(".barra-de-carga").style.background = "#2e7";
//         setTimeout(() => {
//             zona.style.color = "#fff";
//             zona.style.animation = "aparecer 1s forwards"
//             zona.textContent = "¡Carga Completa!"
//         }, 0.5)
//     })
//     reader.addEventListener("load", e => {
//         let video = new Blob([new Uint8Array(e.currentTarget.result)], { type: "video/mp4" })
//         let URLimagen = URL.createObjectURL(video);
//         let img = document.createElement("VIDEO");
//         img.setAttribute("src", URLimagen);
//         document.querySelector(".resultado").appendChild(img);
//         img.play();
//     })
// }
//------------------------------indexedDB -CRUD----------------------------------------------
//EXPLICAICIONES: 
//upgradeneeded=> se crea la BD en inspeccionar/application/indexedDB/nombreTabla
//si la BD ya esta creado no hace el evento upgradeneeded, hace el succes tirando su msj y viceversa
//en la bd, los object stores son almacenes de objetos, son como tablas)
//esta arquitectura nos permite guardar datos en forma de OBJETO
//keypath en ligar de autoincrement, nos permite trabajar con DNI de personas
const IDBRequest1 = indexedDB.open("daltobase", 1);//esta linea lo que hace es abrir la BD, y si no existe, la crea!(es una solicitud)
IDBRequest1.addEventListener("upgradeneeded", () => {//aca es la creacion de tablas
    const db = IDBRequest1.result;//la BD va a ser el resultado de el result devuelto en caso de exito
    db.createObjectStore("nombres",{//creamos el almacen de objetos, como una TABLA
        autoIncrement: true //es la key, el id ahora porque es numero autoincremental
    }); 
    console.log("se ha creado correctamente");
})
IDBRequest1.addEventListener("success", (e) => {//esto nos indica si abrio la BD
    console.log("todo salio correctamente");
    console.log(IDBRequest1.result);//mostramos lo creado en este caso, que fue relojes con id autoincremental
})
IDBRequest1.addEventListener("error", (e) => {//esto nos indica si abrio la BD
    console.log("hubo un error al abrir la BD");
})

//hasta aca solo creamos y verificamos la creacion de la base de datos + creacio  de un almacen de objetos(Como una tabla)
//--------creacion del CRUD (ABM)------
//1_CREATE 
// const objeto ={bruno:"depetris"}
// addObjetos(objeto)
const addObjeto = objeto =>{
    const db = IDBRequest1.result;
    const IDBtransaction = db.transaction("nombres","readwrite");//readwrite(leer-scribir) se usa para cuando creamos,eliminamos,modificamos!readonly(solo lectura)
    const objectStore = IDBtransaction.objectStore("nombres");
    //hasta aca lo que hicimos es abrir una transaccion
    objectStore.add(objeto);//el objeto que queremos agregar
    IDBtransaction.addEventListener("complete", (e)=>{
        console.log("objeto agregado correctamente")
    })
}
//2_cargar/leer objetos
const leerObjetos = ()=>{//funcion que lee objetos
    const db = IDBRequest1.result;
    const IDBtransaction = db.transaction("nombre","readonly");
    const objectStore = IDBtransaction.objectStore("nombres");
    const cursor = objectStore.openCursor();//se crea para la lectura en el evento succes, se lee si o si una vez hasta siendo null el resultado
    //esto funciona para que una vez que dejaron de haber objetos creados pase a null el valor de cursor y deje de iterar, ya que de otra forma 
    //nos muestra iteracion infinita de los mismos objetos
        cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value)
            cursor.result.continue()
        }else console.log("todos los datos fueron leidos");
    })
}
//3_Modificar objeto
const modificarObjeto = (key,objeto) =>{
    const db = IDBRequest1.result;
    const IDBtransaction = db.transaction("nombres","readwrite");//readwrite(leer-scribir) se usa para cuando creamos,eliminamos,modificamos!readonly(solo lectura)
    const objectStore = IDBtransaction.objectStore("nombres");
    //hasta aca lo que hicimos es abrir una transaccion
    objectStore.put(objeto,key);//el objeto que queremos modificar
    IDBtransaction.addEventListener("complete", (e)=>{
        console.log("objeto modificado correctamente")
    })
}
//para modificar en consola: modificarObjeto(llave, {nombre :"nuevoNombre"})

//3_Modificar objeto
const eliminarObjeto = key =>{
    const db = IDBRequest1.result;
    const IDBtransaction = db.transaction("nombres","readwrite");//readwrite(leer-scribir) se usa para cuando creamos,eliminamos,modificamos!readonly(solo lectura)
    const objectStore = IDBtransaction.objectStore("nombres");
    //hasta aca lo que hicimos es abrir una transaccion
    objectStore.delete(key);//el objeto que queremos modificar
    IDBtransaction.addEventListener("complete", (e)=>{
        console.log("objeto modificado correctamente")
    })
}
//para eliminar en consola: eliminarObjeto(llave)

//
// const getIDBData = ()=>{//forma de abreviar codigo, bastante compleja, no la hicimos
//     const db = IDBRequest1.result;
//     const IDBtransaction = db.transaction("nombres","readwrite");
//     const objectStore = IDBtransaction.objectStore("nombres");
//     return [objectStore,IDBtransaction]
// }