//para lo que podemos utilizar el worker es = cuando se haga drop de un video en un div, cuando se presione para subir algo
//llamar a un addEventListener que ejecute este web worker y nos permita seguir utilizando la web
//PRIMER EJEMPLO:

// const ejecutarBucle = ()=>{
//     while (true){
//         console.log(1);
//     }
// }
// addEventListener("message",ejecutarBucle);
//SEGUNDO EJEMPLO:
//nosostros con e ingresamos al worker en consola, funciona igual que un objeto, e.data nos va a devolver true o false,
//y hay muchisimas cosas mas para acceder
// addEventListener("message",e=>{
//     console.log(e.data)//aca leemos el dato que nos pasamos desde el index.js el e.data accedemos al dato que se nos envia
// })