//Teoria: las cookies se conforman de: Clave/valor;atr;atr;atr ∞
//se hacen en un js aparte y se pone la etiqueta al principio de nuestro html (en el head)
// en la pestaña aplicattion/Cookies tenemos un tipo panel, en el podremos ver el name(nombre) value(valor), todos los demas son parametros que podemos pasarle/darle a la cookie
//las cookies nunca pueden llevar el mismo nombre, osea, user-1, luego debe tener otro nombre, user no lo podemos volver a repetir
//desde el frontend solamente vamos a poder ingresar al value y al name de la cookie
// Crear varias cookies con nombres únicos y valores
// document.cookie = "user-dalto=value1; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
// document.cookie = "user2-bruno=value2; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
// document.cookie = "user3-guille=value3; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
// document.cookie = "user4-pan=value4; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";

// // Leer las cookies
// console.log(document.cookie);//se muestran: cookie; cookie; cookie;

// // Leer las cookies

// document.cookie = "user4-pan=value4; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
// //explicacion: nombre=valor; ruta ; cuando expira la cookie, fecha y horario de expiracion
//------crear cookies completa en funcion:
// const crearCookie = (name, exp, path, age) => {
//     document.cookie = `;${name};expires=${exp};path=${path};age=${age}`
// }
// crearCookie("usuario=bruno","Mon 26 Apr 2021 12:00:00 UTC","index.html")
// el path es donde queremos que se almacene
// -----------crear cookie mas basica pero que dalto recimienda=
// tambien creamos una funcion que nos haga la fecha para mejor arquitectura del programa
//-------------------------------LO QUE SIGUE DE CODIGO ES LO QUE USAMOS PARA MANEJAR LAS COOKIES, lo que usamos para el ejemplo!!!-------------------------------
// const newFechaUTC = dias => {
//     let fecha = new Date();//obtener la fecha actual
//     fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24)//aca sumamos los segundos del dia, para luego agregarselos a fecha actual!
//     //ademas de que, dias lo vamos a recibir como parametro, osea pueden ser muchos dias que debemos agregarle los segundos
//     return fecha.toUTCString();
// }

// const crearCookieRecomendada = (name, dias) => {
//     let expires = newFechaUTC(dias)
//     document.cookie = `${name};expires=${expires}`
// }
// // crearCookieRecomendada("usuario=oscar", "4");// crear la cookie desde codigo
// //el split separa la cadena en los puntos que le indiquemos, como en este caso le indicamos primero el ;. nos lo va a separar en un array por partes(crear un array con cada cookie individual)
// //tambien necesitamos obtener el valor del dato, entonces usamos el segundo split para separar dato=valor y obtener la pos[1] que seria el valor del dato
// const obtenerCookie = cookieName => {
//     let cookies = document.cookie;
//     cookies = cookies.split(";");
//     for (let i = 0; cookies.length > i; i++) {
//         let cookie = cookies[i].trim()//cuando creamos muchas cookies se le ponen como predeterminado espacio en blanco al principio, por eo lo removemos
//         if (cookie.startsWith(cookieName)) {
//             return cookie.split("=")[1]//
//         }
//     }
//             return "no hay cookies disponibles, gloton"
// }

// if(obtenerCookie("acceptedCookies") !== "si"){
//     setTimeout(()=>{
//     document.querySelector(".contenedor-aviso-cookie").Style.zIndex="10";
//     document.querySelector(".contenedor-aviso-cookie").Style.opacity="1";
//     document.getElementById("accept").addEventListener("click", ()=>{
//         crearCookieRecomendada("acceptedCookies=si",30 )//La línea crearCookie("acceptedCookies=si", 30) está creando una cookie llamada acceptedCookies y asignándole el valor si. Aquí está el desglose:
//         document.querySelector(".contenedor-aviso-cookie").Style.opacity = "0";
//         setTimeout(()=>{
//             document.querySelector("contenedor-aviso-cookie").Style.zIndex = "-1";
//         },1000)
//     })
//     document.getElementById("deny").addEventListener("click",()=>{
//         crearCookieRecomendada("acceptedCookies=no",30);
//         document.querySelector(".contenedor-aviso-cookie").Style.opacity = "0";
//         setTimeout(()=>{
//             document.querySelector("contenedor-aviso-cookie").Style.zIndex = "-1";
//         },1000)
//     })
//     },200)
// }


//MAS TEORIA:
// //poniendo esto: newFechaUTC(4) en consola, vamos a ir sacando el calculo del dia actual mas los puestos dentro de la funcion, en este caso 4
//--------------------------modificar cookie
//para modificar una cookie simplemente hay que reescribirla ponemos el document.cookie = "nombre=NuevoValor";
//-------------------------eliminar cookie
//simplemente lo que hacemos es modificar el tirmpo que Dura, a 0!
//ejemplo: document.cookie = "nombre=valor;max-age=0"
//------------------------------Crear EJEMPLO de cookies-----------------------------
