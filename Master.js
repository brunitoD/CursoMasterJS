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
//min 54