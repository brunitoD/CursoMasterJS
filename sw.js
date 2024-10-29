// //self es como decir this
// //instalar el service worker
// self.addEventListener("install", (e) =>{
//     console.log("instalando service worker");
// });
// //activar service worker
// self.addEventListener("activate", (e) =>{
//     console.log("el service worker esta activo");
// });
// //trabajar con errores
// self.addEventListener("error", (e) =>{
//     console.log("Hay errores");
// });
// //verifica que se este enviando una solicitud a el servide worker
// self.addEventListener("fetch", (e)=>{
//     console.log("service worker interceptando peticion")
// })
// //recibimos el msj desde master.js lin 1089
// self.addEventListener("message", e=>{//recibimos primero y enviamos despues
//     console.log("msj recibido del navegador");//master.js seria el navegador
//     console.log(e.data)//recibimos
//     e.source.postMessage("hola bro")//enviamos al master.js
// })
// //de esta manera seria la comunicacion entre el worker y el javascript convencional
//---------------------Cachear sitio web y mostrarlo offLine:-----------------------------
let version = "version x"
self.addEventListener("install", (e) =>{
    console.log("instalando service worker");
    caches.open(version).then(cache=>{
        cache.add("master.js").then(res =>{
            console.log("informacion cacheada")
        }).catch(e =>{
            console.log(e)
        })
    })
});
//activar service worker
self.addEventListener("activate", () =>{
    caches.keys().then(key=>{
        return Promise.all(
            key.map(cache=>{
                if(cache !== version){
                    console.log("cache antiguo, eliminado")
                    return caches.delete(cache);
                }
            })
        )
    })

});
// trabajar con errores
self.addEventListener("error", (e) =>{
    console.log("Hay errores");
});
//verifica que se este enviando una solicitud a el servide worker
self.addEventListener("fetch", (e)=>{
    console.log("service worker interceptando peticion")
})
//recibimos el msj desde master.js lin 1089
self.addEventListener("message", e=>{//recibimos primero y enviamos despues
    console.log("msj recibido del navegador");//master.js seria el navegador
    console.log(e.data)//recibimos
    e.source.postMessage("hola bro")//enviamos al master.js
})