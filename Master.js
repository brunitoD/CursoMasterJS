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

//-------------------------------------Objeto Date----------------------------------------
// console.log(fecha.getMonth()+1);
//-getDate:fecha
//-getDay:dia de la semana, funcionamiento:  dom =>0,lun => 1 , mar =>2, mier:3, jue=>4, vie =>5, sab=>6
//-getMonth: tambien nos devuelve desde el numero 0,hay que sumar en 1 asi console.log(fecha.getMonth()+1)
//-getYear: se trabaja sumandole 1900, por idea de los diseñadores! console.log(fecha.getYear()+1900)
//-getSeconds:segundos del minuto en el que estamos
//-getHours: hora en la que estamos, redondea para abajo
//-getMinutes:minuto en el que estamos
//decirle la fecha: const fecha = new Date(2024,08,12)
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
//llamamos IDBRequest a la constante por que son las silabas de indexedDB request (IDBRequest)
// const IDBRequest1 = indexedDB.open("daltobase", 1);//esta linea lo que hace es abrir la BD, y si no existe, la crea!(es una solicitud)
// IDBRequest1.addEventListener("upgradeneeded", () => {//aca es la creacion de tablas
//     const db = IDBRequest1.result;//la BD va a ser el resultado de el result devuelto en caso de exito
//     db.createObjectStore("nombres", {//creamos el almacen de objetos, como una TABLA
//         autoIncrement: true //es la key, el id ahora porque es numero autoincremental
//     });
//     console.log("se ha creado correctamente");
// })
// IDBRequest1.addEventListener("success", (e) => {//esto nos indica si abrio la BD
//     console.log("todo salio correctamente");
//     console.log(IDBRequest1.result);//mostramos lo creado en este caso, que fue relojes con id autoincremental
// })
// IDBRequest1.addEventListener("error", (e) => {//esto nos indica si abrio la BD
//     console.log("hubo un error al abrir la BD");
// })
//nuevo evento para drag y drop
//-------------------------------AGREGAR ELEMENTO--------------------------------------------------
// document.getElementById('add').addEventListener("click", () => {
//     let nombre = document.getElementById('nombre').value;
//     if (nombre.length) {
//             addObjeto({ nombre });//esto funcionaria nombre:nombre, pero existe le shorthand de que si la variable es igual al valor, ya se agrega abreviandolo
//     }
//     leerObjetos()
// })
//-------------------------------------------------------------------------------------------------

//hasta aca solo creamos y verificamos la creacion de la base de datos + creacio  de un almacen de objetos(Como una tabla)
//--------creacion del CRUD (ABM)------
//1_CREATE
// const objeto ={bruno:"depetris"}
// addObjetos(objeto)
// const addObjeto = objeto => {
//     const db = IDBRequest1.result;
//     const IDBtransaction = db.transaction("nombres", "readwrite");//readwrite(leer-scribir) se usa para cuando creamos,eliminamos,modificamos!readonly(solo lectura)
//     const objectStore = IDBtransaction.objectStore("nombres");
//     //hasta aca lo que hicimos es abrir una transaccion
//     objectStore.add(objeto);//el objeto que queremos agregar
//     IDBtransaction.addEventListener("complete", (e) => {
//         console.log("objeto agregado correctamente")
//     })
// }
//2_cargar/leer objetos
// const leerObjetos = () => {//funcion que lee objetos
//     const db = IDBRequest1.result;
//     const IDBtransaction = db.transaction("nombres", "readonly");
//     const objectStore = IDBtransaction.objectStore("nombres");
//     document.querySelector(".nombre").innerHTML = "";

//     const cursor = objectStore.openCursor();//se crea para la lectura en el evento succes, se lee si o si una vez hasta siendo null el resultado
//     //esto funciona para que una vez que dejaron de haber objetos creados pase a null el valor de cursor y deje de iterar, ya que de otra forma
//     //nos muestra iteracion infinita de los mismos objetos
//     // const fragment = document.createDocumentFragment();
//     cursor.addEventListener("success", () => {
//         if (cursor.result) {
//             // console.log(cursor.result.value) lo usabamos antes de agregar el drag y drop
//             let elemento = nombresHTML(cursor.result.key, cursor.result.value)
//             // fragment.appendChild(elemento)
//             cursor.result.continue()
//         } else { console.log("watifu") }
//     })
// }
//3_Modificar objeto
// const modificarObjeto = (key, NuevoNombre) => {
//     const db = IDBRequest1.result;
//     const IDBtransaction = db.transaction("nombres", "readwrite");//readwrite(leer-scribir) se usa para cuando creamos,eliminamos,modificamos!readonly(solo lectura)
//     const objectStore = IDBtransaction.objectStore("nombres");
//     //hasta aca lo que hicimos es abrir una transaccion
//     objectStore.put(NuevoNombre, key);//el objeto que queremos modificar
//     IDBtransaction.addEventListener("complete", (e) => {
//         console.log("objeto modificado correctamente")
//     })
// }
//para modificar en consola: modificarObjeto(llave, {nombre :"nuevoNombre"})

//---------------------------3_eliminar objeto
// const eliminarObjeto = key => {
//     const db = IDBRequest1.result;
//     const IDBtransaction = db.transaction("nombres", "readwrite");//readwrite(leer-scribir) se usa para cuando creamos,eliminamos,modificamos!readonly(solo lectura)
//     const objectStore = IDBtransaction.objectStore("nombres");
//     //hasta aca lo que hicimos es abrir una transaccion
//     objectStore.delete(key);//el objeto que queremos modificar
//     IDBtransaction.addEventListener("complete", (e) => {
//         console.log("objeto modificado correctamente")
//     })
// }
//para eliminar en consola: eliminarObjeto(llave)

//
// const getIDBData = ()=>{//forma de abreviar codigo, bastante compleja, no la hicimos
//     const db = IDBRequest1.result;
//     const IDBtransaction = db.transaction("nombres","readwrite");
//     const objectStore = IDBtransaction.objectStore("nombres");
//     return [objectStore,IDBtransaction]
// }
// const container = document.querySelector(".nombre");
//--------------------------------Metodo para modificar un elemento---------------------------
// const nombresHTML = (id, name) => {
//     const nuevaEntrada = document.createElement("div");
//     nuevaEntrada.innerHTML = `
//     <div style="display:flex">
//         <h1>id:</h1>
//         <h1>${id}</h1>
//     </div>
//     <div style="display:flex">
//         <h2>Nombre:</h2>
//         <h2 class="nombre-editable" contenteditable="true" spellcheck="false">${name.nombre}</h2>
//     </div>
//     <div class="options">
//         <button class="posible">Guardar</button>
//         <button class="delete">Eliminar</button>
//     </div>`;

//     container.appendChild(nuevaEntrada);

//     // Seleccionar el botón "Guardar" y el h2 en el contexto de la nueva entrada
//     const btnGuardar = nuevaEntrada.querySelector(".posible");
//     const h2 = nuevaEntrada.querySelector(".nombre-editable");
//     const btnEliminar = nuevaEntrada.querySelector(".delete")
//------guardar lo modificado
//     btnGuardar.addEventListener("click", () => {
//         modificarObjeto(id, { nombre: h2.textContent });
//     });
//------guardar la eliminacion
//     btnEliminar.addEventListener("click",()=>{
//         eliminarObjeto(id);
//         document.querySelector(".nombre").textContent=""//actualizar automaticamente la lista
//         leerObjetos();
//     })
// }
//--------------------------------FINALIZACION CRUD CON indexedDB------------------------------------
//------------------------------------API MATCH MEDIA------------------------------------------------------
//es como las medias queries pero con JS
//mq.matches es acceder a un valor del match media, en inspeccionar en consola lo vas a ver, es como el funcionamiento de objetos, proto etc
//se utiliza cuando hay que agregar o quitar clases
// const mq = matchMedia("(max-width: 500px)");
// const caja = document.querySelector(".caja");

// mq.addEventListener("change",()=>{//change se ejecuta cuando lo pasado en matchmedia sea verdadero o falso!
// if(mq.matches) caja.classList.replace("caja","responsive-caja");
// else if(caja.className =="responsive-caja") caja.classList.replace("responsive-caja","caja");
// })
//ESTO NOS LO HIZO EL CHAT GPT PARA EL SCROLL COMO LO DE SPARTAN
// const caja = document.querySelector(".caja");

// // Función para ajustar el tamaño de la caja según el scroll
// function ajustarTamano() {
//     if (window.scrollY === 0) {
//         caja.style.transform = "scale(1.5)"; // Aumenta el tamaño
//     } else {
//         caja.style.transform = "scale(1)"; // Tamaño normal
//     }
// }

// // Agrega el evento scroll al window
// window.addEventListener("scroll", ajustarTamano);
// CSS adicional (opcional):
// Asegúrate de tener un poco de CSS para definir cómo se verá el div:

// css
// Copiar código
// .caja {
//     width: 100px;
//     height: 100px;
//     background-color: red;
//     transition: transform 0.3s; /* Para un efecto suave */
// }
//------------------------------API INTERSECTION OBSERVER------------------------------
// const cajas = document.querySelectorAll(".caja")

// const verifyVisibility = (entries) =>{//esto nos devuelve un arreglo, por ende son entradas(entries)
// for(const entry of entries){
//     if(entry.isIntersecting) console.log("se esta viendo la caja: ",entry.target.textContent)
// }
// }


// const observer = new IntersectionObserver(verifyVisibility)//(callback,options)=>nosotros le dimos nombre al callback
// //el options hay que investigarlo, no lo utilizamos

// // observer.observe(caja3)//observe lo que hace es observar el elemento que le digamos
// for(const caja of cajas){
//     observer.observe(caja)//aca le decimos que las muestre todas, por la iteracion del for con of(tipo)
//     console.log(caja)
// }
//----------------------------------  ejemplo de uso LAZY LOAD  -----------------
// let publicacionesJson = [];
// let contador = 0; // Contador de publicaciones cargadas

// fetch("publicaciones.json")
//     .then(response => response.json())
//     .then(data => {
//         publicacionesJson = data; // Cargar datos
//         cargarPublicaciones(); // Cargar las primeras publicaciones
//         observarUltimoElemento(); // Comenzar a observar el último elemento
//     })
//     .catch(error => {
//         console.log('Error en el fetch', error);
//     });

// const publicacionesContainer = document.querySelector(".publicaciones");

// // Función para cargar más publicaciones
// const cargarPublicaciones = () => {
//     const publicacionesALaCargar = publicacionesJson.slice(contador, contador + 5); // Cargar 5 publicaciones el slice nos lo permite

//     publicacionesALaCargar.forEach(publicacion => {
//         publicacionesContainer.innerHTML += `
//             <div class="publicacion">
//                 <h3>Bruno Depetris</h3>
//                 <p>${publicacion.texto}</p>
//                 <div class="comentarios">
//                     <input type="text" class="comentario" placeholder="Introduce un comentario">
//                     <input type="submit" class="enviar">
//                 </div>
//             </div>`;
//     });

//     contador += publicacionesALaCargar.length; // Aumentar el contador

//     // Si no hay más publicaciones, dejar de observar
//     if (contador >= publicacionesJson.length) {
//         publicacionesContainer.innerHTML+=`<h3 style="margin:40px; text-align:center; font-weight:700;"> no hay mas publicaciones </h3>`
//         observer.disconnect();//Esto detiene la observación del último elemento, para que no se siga llamando la funcion observarUltimoElemento a continuacion
//     } else {
//         observarUltimoElemento(); // Observar el nuevo último elemento
//     }
// };

// // Función que se ejecuta cuando se detecta la intersección
// const cargarMasPublis = (entries) => {//serie de entradas que intersection abserver prporciona cada vez que un elemento entra o sale del viewport
//     if (entries[0].isIntersecting) {//entries[0] se refiere a la primera (y generalmente única) entrada en la lista de entradas que está siendo notificada,el 0 vendria a ser la entrada que se nos notifica, y si es true, entra al metodo y llama a cargar mas pelis
//         cargarPublicaciones();
//     }
// };

// // Configuración del Intersection Observer
// const observer = new IntersectionObserver(cargarMasPublis);//cuando en el metodo siguiente se active observer.observe(ultimoLelemento) que en el viewport este visble,se llama a cargarMasPublis y carga 5 mas

// // Observa el último elemento de publicaciones
// const observarUltimoElemento = () => {
//     const publicacionElements = document.querySelectorAll(".publicacion");//nos devuelve un nodelist con todos los hijos de .publicacion
//     if (publicacionElements.length > 0) {//validar que se ha cargado al menos una publicacion para proceder
//         const ultimoElemento = publicacionElements[publicacionElements.length - 1];//Aquí seleccionamos el último elemento de la NodeList. Dado que la indexación comienza en 0, el último elemento está en la posición publicacionElements.length - 1. Este elemento se almacena en la variable ultimoElemento.
//         observer.observe(ultimoElemento);//cuando esto se activa, llama a cargarMasPublis, observer esta creado arriab con esa intencion!
//     }
// };
//------------------------     EXPLICACION LAZY LOAD Paso a Paso del Flujo de Ejecución    --------------------------
// Carga Inicial de Publicaciones:

// El código comienza con la llamada al fetch para cargar los datos desde publicaciones.json.
// Una vez que se obtiene la respuesta, se convierte a formato JSON y se almacena en publicacionesJson.
// Se llama a cargarPublicaciones(), que carga las primeras publicaciones y las muestra en la interfaz.
// Cargar Publicaciones Iniciales:

// Dentro de cargarPublicaciones(), se extraen 5 publicaciones del array publicacionesJson usando slice y se añaden al contenedor de publicaciones (publicacionesContainer).
// Se incrementa el contador para rastrear cuántas publicaciones se han cargado.
// Después de cargar las publicaciones iniciales, se llama a observarUltimoElemento().
// Observar el Último Elemento:

// En observarUltimoElemento(), se selecciona el último elemento de las publicaciones cargadas.
// Se llama a observer.observe(ultimoElemento), lo que activa el IntersectionObserver para comenzar a monitorear el último elemento.
// Detección de Intersección:

// Cuando el usuario hace scroll y el último elemento entra en la vista (viewport), se activa el callback cargarMasPublis.
// Dentro de cargarMasPublis(), se verifica si entries[0].isIntersecting es true. Si es así, se llama a cargarPublicaciones() para cargar más publicaciones.
// Cargar Más Publicaciones:

// En cargarPublicaciones(), se extraen 5 publicaciones adicionales del array publicacionesJson, comenzando desde el índice del contador.
// Estas nuevas publicaciones se añaden al contenedor.
// Se incrementa el contador nuevamente para rastrear cuántas publicaciones se han cargado.
// Se comprueba si el contador ha alcanzado la longitud total de publicacionesJson. Si es así, se llama a observer.disconnect() para dejar de observar, ya que no hay más publicaciones que cargar.
// Si aún hay más publicaciones, se llama a observarUltimoElemento() para observar el nuevo último elemento.
// Repetición del Proceso:

// Este proceso se repite cada vez que el último elemento entra en el viewport, permitiendo que el usuario cargue más publicaciones de manera incremental (lazy loading) mientras navega por la página.
//-------------------------------FIN lazy load---------------------------------
//-------------------------------Visibility change API-------------------------
//esto es para ver si la pestaña actual esta visible
//si en nuestra web se reproduce un video, le damos pausa al video cuando la propiedad state esta en hidden, y cuando no, lo reaunudamos
// addEventListener("visibilitychange",(e)=>{
//     if(e.target.visibilityState == "visible"){
//         document.write("che rancio, porque abandonas la web?")//msj cuando nos vamos
//     }else alert("ah volviste")//msj alerta volvemos
//     console.log(e.target.visibilityState)//nos devuelve hidden o visible
// })
//-------------------------------Notifications API--------------------------------
//es simplemente una forma de enviar notificaciones
//no funcionaba, porque google no nos lo permitia
// if(!('notification' in window)){
//     console.log("las notificaciones no estan disponibles en tu navegador")
// }

// Notification.requestPermission(()=>{
//     if(Notification.permission =="granted"){//si nos permite
//         new Notification("suscribite papu")//le mandamos este msj
//     }
// });//pedimos permiso mediante una alerta al usuario

//-------------------------------web workers-------------------------------------
// tipos de web worker:dedicated worker, shared worker, service worker, abstract worker
//nos sirven para poder tener como un "segundo plano" en nuestra web, normalmete podemos ejecutar un evento a la vez,
// con esto podriamos dejar haciendo varias cosas al mismo tiempo en la web!
//ESTO NOS SIRVE PARA WEBS QUE DEBEN SUBIR COSAS MUY PESADAS Y DEBEMOS DEJAR QUE EL USUARIO SIGA
//USANDOLA TRANQUILO, CON ESTO LOGRAMOS ESO

//para lo que podemos utilizar el worker es= cuando se haga drop de un video en un div, cuando se presione para subir algo
//llamar a un addEventListener que ejecute este web worker y nos permita seguir utilizando la web, de lo contrario,
//el worker no se utilizaria!

// const worker = new Worker ("worker.js")//aca le decimos cual va a ser el archivo que se va a ejecutar
//                                        //en segundo plano, en nuestro caso creamos worker.js
// console.log(worker)

// document.querySelector(".boton").addEventListener("click",()=>cargarData(".loadResults"){

// })

// const cargarData = async (div) =>{
//     const req = await fetch("publicaciones.json");
//     const res = await req.json();
//     const arr = res;
//     document.querySelector(div).innerHTML = arr;
// }
// cargarData(".loadResults")
//SEGUNDO EJEMPLO, este nos sirve para el segundo ejemplo y el primero de lo que hay en el worker.js
//en este caso mostramos el worker message por consola
// document.querySelector(".button").addEventListener("click",()=> ejecutarBucle());

// const ejecutarBucle=() =>{
//     worker.postMessage("hola putita")//aca le podemos pasar cualquier cosa, desde el worker accedemos al mensaje mediante
//                         //el eventListener
//     worker.terminate();//para cerrar el worker cuando finaliza de leer el message
// }

//-------------------------------- politica same origin-------------------------------------
//para modificar el puerto usar xamp en el buscador de nuestra pc, y luego hay que entrar a php init
// y ahi buscamos donde esta definido el nuemro del puerto

// PARA QUE FUNCIONEN LOS WORKERS DEBEN COINCIDIR EL PROTOCOLO-HOST-PUERTO
//-----------------------------------------OBJETO NAVIGATOR----------------------------------------------
//son interfaces , navigator.connection(mb que tenemos de wifi) y el tipo, que en nuestro caso es 4g,
//el rtt(Este valor puede ayudar a estimar la latencia de la conexión de red.)
//navigator.geolocation (ubicacion nuestra)
//navigator  =>
//.hardwareConcurrency: cantidad de nucleos del procesador logico que hay disponibles
//.languages: idioma actual
//.languages: cant de idiomas que el usuario comprende
//.mimeTypes, se labura con node.js, tiene que ver con los headers que enviamos o recibimos(algo asi)
//.Oneline: nos devuelve si esta online o no
//.cookieEnabled: si tenemos activadas las cookies (booleano)
//.permission: permisos del navegador
//.ServiceWorker: tiene que ver con los workers, trabaja diferente que los dedicated workers echos anteriormente
//.navigator.vibrate(): produce una vibracion en el celular jajajajajajaj
//------------------------------------------------Memoization-------------------------------------------
//es un proceso que acorta tiempos de ejecucion para mejor experiencia del usuario
//nadie lo usa pero es muy util
// let cache = [];
// const memoizer = func=>{
//     return e=> {
//     const index = e.toString()
//     if(cache[index] == undefined){
//         cache[index] = func(e)
//     }
//     return cache[index]
//     }
// }
// const hacerAlgo = num =>{
//     const a = 20;
//     const b = 12;
//     var c = 0;
//     for(let i = num -1; i >= 0; i--){
//         for(let j = i - 1; j >= 0; j--){
//             c+= a*b;
//         }
//     }
//     return c;
// }

// console.log("funcion sin memoizer");
// const date = new Date();
// hacerAlgo(90000);
// console.log(new Date() - date)

// const date2 = new Date();
// hacerAlgo(90000);
// console.log(new Date() - date2)

// const date3 = new Date();
// hacerAlgo(60000);
// console.log(new Date() - date3)

// const date4 = new Date();
// hacerAlgo(60000);
// console.log(new Date() - date4)

// console.log("funcion con memoizer");

// const memo = memoizer(hacerAlgo);

// const date5 = new Date();
// memo(90000);
// console.log(new Date() - date5)

// const date6 = new Date();
// memo(90000);
// console.log(new Date() - date6)

// const date7 = new Date();
// memo(60000);
// console.log(new Date() - date7)

// const date8 = new Date();
// memo(60000);
// console.log(new Date() - date8)
//Si tuvieramos que repetir este proceso muchas veces, lo ideal es crear un memorizador para que cuando se ejecute nuevamente lo mismo,
//el memorizador nos permite guardar el primer uso de algo para luego mostrarlo enseguida(como un cache)
// const Date = new Date();
// hacerAlgo(60000)
// console.log(new Date() - Date)}
//--------------------------------------------------Caché--------------------------------------------
//Utilizamos el cacheStorage que se encuentra en aplicattion al igaulq ue indexedDB y localStorage sessionStorage
//el cache nos devulve una promesa TRABAJA CON PROMESAS,HAY QUE USAR THEN,entonces utilizamos then() para descomprimirla
// caches.open("archivos-guardados2").then(cache =>{
//     //si cache existe, le decimos que guarder "index.html"
//     // cache.add("index.html")
//     cache.addAll(["index.html","style.css","master.js"])//con el addAll guardamos muchos
//     console.log(cache)
// })

//------------esto nos devuleve la consulta al cache, el match devuelve especifiacemnte un archivo en cache, y
//el matchAll devulve un arreglo(de un archivo o mas)
// caches.open("archivos-guardados2").then(cache => {//cache es el resultado de la promesa resuelta
//     cache.matchAll("index.html").then(responses => {//responses son los datos de la promesa resuelta, para descomprimirlos podemos usar response.data o algo, sino usamos .text()
//         console.log("lo que recibimos del then, descomprimiendo no:", responses)
//         responses.forEach(response => {
//             response.text().then(data => {//aca descomprimimos la respuesta
//                 console.log("contenido descomprimido", data)//aca ya nos devuelve el html descomprimido
//             })
//         })
//     })
// })
//el match es como hacer un fetch al cache por lo que veo
//match: response {type: blablabla}
//matchAll: [response]
//si hay mas de un archivo con el mismo nombre, simplemente nos devuelve un array con ambos
//----------------put(actualizar o agregar, se usa add para ambas)
//no es necesario, con add estamos listos, pero el put tiene sus funcionalidades que lo hacen mejor para ciertas cosas
// caches.open("archivos-guardados2").then(cache => {
//     fetch("index.html").then(response =>{
//         cache.put("index.html",res)
//     })
// })
//----------------delete(borrar un elemento del cache)
// caches.open("archivos-guardados").then(cache => {
//     cache.delete("index.html")
// })
//------------------keys(traer toda la data del cache, como match all pero mas completo)
// caches.open("archivos-guardados").then(cache => {
//     cache.addAll(["index.html","master.js"])
//     cache.keys().then(res =>{//res son las respuestas que nos devuolve de la promesa(cache) resulta
//         console.log(res)//nos va a mostrar los objetos y su llave(ID)
//     })
// })
//----------------------------------------Service Worker---------------------------------------
// es un archivo javascript comun y corriente, que lo que hace es estar a la escucha de un monton de sucesos y hace cosas con el
//Lo que hace es interceptar todas las peticiones de un servidor (navegador => worker => servidor web) y al reves para la respuesta que nos de
//podemos hacer un chat en tiempo real con service worker, como un whatsapp hs 7:58
// console.log(navigator.serviceWorker);//validar que el navegador lo soporte
// navigator.serviceWorker.register("sw.js");//creamos un service worker
// //ademas, debemos crear el archivo por nuestra cuenta "sw.js"(cualquiernombre.js) en nuestro caso
// //creamos con ese nombre
// //lo podemos ver en application/Service workers (a la izquierda arriba de storage)
// //el service worker solo se instala una vez, y se activa cada vez que iniciamos la web,
// //para eliminarlo vamos a application/Service workers y presionamos "unregister"


// //mandar un mensaje al service worker, del otro lado hay codigo que lo recibe
// //validamos activo en el worker(ready), devuelve promesa, usamos then, y luego le pasamos el msj una vez confirmado "activo"
// navigator.serviceWorker.ready.then(res => res.active.postMessage("hola bro todo bien?"))//enviamos al worker
// //verificar que el worker nos responda:
// navigator.serviceWorker.addEventListener("message", e =>{//recibimos del worker
//     console.log("msj recibido del service worker")
//     console.log(e.data)
// })
//Master.js seria el navegador, y sw.js seria el worker
//------------------------------objeto sreen------------------------------------
//esto nos muestra todas las medidas de la pantalla actual, (actualizar cada vez que se usa)
// let AnchoTotal = screen.width;
// let Alturatotal = screen.height;

// let AnchoDisponible = screen.availWidth;
// let AltoDisponible = screen.availHeight;

// let Resolucion = screen.pixelDepth 
// let Profundidad = screen.colorDepth 

// console.log(`width: ${AnchoTotal}`);
// console.log(`height: ${Alturatotal}`);

// console.log(`availWidth: ${AnchoDisponible}`);
// console.log(`heightWidth: ${AltoDisponible}`);

// console.log(`pixelDepth: ${Resolucion}`);
// console.log(`colorDepth: ${Profundidad}`);

//-------------------------------------------OBJETO CANVAS----------------------------------------------
//sirve para crear todo tipo de cosas (por ejemplo juegos)
//si miramos en consola el elemento canvas, no nos agrega ningun elemento, solamente es de visualizacion
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext("2d");// ahora todo se le aplica al contexto, porque los graficos se ele aplican al contexto =>ctx
// //el estilo siempre va arriba!!! el stokeStyle,fillStyle!
// ctx.lineWidth = "3"//grosor del borde 
// ctx.strokeStyle = "#48e";
// ctx.fillStyle = "#48e"
// ctx.strokeRect(30,50,400,200);//el 30 es en el eje X,la diferencia desde el rectangulo canvas al contexto|| el 50 en el eje Y, son 50 pixeles por debajo del borde del rectangulo canvas||los otros dos son el width y el height que querramos tener
// ctx.fillRect(10,20,400,200);//son las mismas medidas, nomas que queda superpuesto mas arriba a la izquierda del contenedor que creamos arriba(el strokeRect)
// ctx.lineTo(100,300);//aca creamos dos puntos en el eje
// ctx.lineTo(100,250);//otra linea(punto en el eje cartesiano)
// ctx.stroke();
// ctx.lineTo(350,300);//aca creamos dos puntos en el eje
// ctx.lineTo(350,250);//otra linea(punto en el eje cartesiano)
// ctx.lineTo(100,300);
// ctx.stroke();
// ctx.closePath();//esto es para cerrar la linea, osea que podemas arrancar una nueva enlienas de codigo mas abajo y que no sea la misma
// ctx.beginPath();//para iniciar otra linea
// ctx.stroke();
// ctx.arc(120,120,100,10,40);
// ctx.strokeStyle = "#88e";
// ctx.stroke();
// -------------------------------- CREAR PAINT -----------------------------------------
// const canvas = document.getElementById("canvas");
// const dif = canvas.getBoundingClientRect();
// const ctx = canvas.getContext("2d");

// let painting, color, difX, difY;

// canvas.addEventListener("mousedown", (e) => {
//     difX = e.clientX - dif.left;
//     difY = e.clientY - dif.top;
//     painting = true;
//     color = document.getElementById("color").value;
// });

// canvas.addEventListener("mousemove", e => {
//     if (painting) {
//         const linewidth = document.getElementById("lw").value; // Obtener el grosor en cada movimiento
//         dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top, linewidth);
//         difX = e.clientX - dif.left;
//         difY = e.clientY - dif.top;
//     }
// });

// canvas.addEventListener("mouseup", () => {
//     painting = false; // Detener el dibujo al soltar el mouse
// });

// const dibujar = (x1, y1, x2, y2, linewidth) => {
//     ctx.strokeStyle = color;
//     ctx.lineWidth = linewidth; // Utiliza el grosor pasado como argumento
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.stroke();
//     ctx.beginPath(); // Inicia un nuevo camino para la siguiente línea
//     ctx.moveTo(x2, y2); // Mueve a la nueva posición
// };
