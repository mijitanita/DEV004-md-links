// comandos
import { rutaExiste, obtenerRutaAbsoluta, archivoEsMD, rutaEsArchivo, leerContenidoArchivo, linksUnicos, totalDeLinks,totalDeLinksRotos } from './funciones-api.js';
import path from 'path';
import { validarLosLinks } from './validate.js'


export const mdLinks = (ruta, options) => new Promise((resolve, reject) => {
  console.log({options})
  if (!ruta) reject('No hay ruta')

  if (!rutaExiste(ruta)) reject('ruta inválida verificar si la ruta es  correcta y si es absoluta podria poner \\\\')

  //verificar si la ruta es absoluta
  /*const esAbsoluta = esAbsoluta(ruta);*/
  let nuevaRuta = ruta;
  if (rutaExiste(ruta)) {
    //si no es absoluta convertirla a absoluta

    const nuevaRuta = obtenerRutaAbsoluta(ruta);
  }

  //leer archivo
  leerContenidoArchivo(ruta)// sera async??, saber si es dentrro de then o callback
    .then(({ links }) => {
      if(options.stats && options.validate){
        const results= {
        Total: totalDeLinks(links),
        Unique: linksUnicos(links),
        Broken: 0
       
      }
      // resolve(results);
      const arrayBroken = links.map((link) => {
        //validamos los links
        return validarLosLinks(link.url, nuevaRuta, link.text)
        .then((res)=>{
          // console.log(res, '*********');
          if(res.status > 200){
            results.Broken++
          }
          // console.log(results, '*******');
          resolve(results)
        })
       
      });

    }
     else if (options.stats) {
        const results = {
          Total: totalDeLinks(links),
          Unique: linksUnicos(links),
        }
        resolve(results);
      } 
      else if (options.validate) {
        const arrPromises = links.map((link) => {
          //validamos los links
          return validarLosLinks(link.url, nuevaRuta, link.text);
         
        });const arrResults = Promise.allSettled(arrPromises)
        resolve(arrResults)
       // console.log(arrResults)
      }// si el usuario no quiere validar , resolver con links
      else if (!options.validate) {
        resolve(links);
      }
    
    })
    .catch((error) => {
      reject(error);
    });
});


