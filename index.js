// comandos
import { rutaExiste, obtenerRutaAbsoluta, archivoEsMD, rutaEsArchivo, leerContenidoArchivo, linksUnicos, totalDeLinks } from './funciones-api.js';
import path from 'path';
import { validarLosLinks } from './validate.js'


export const mdLinks = (ruta, options) => new Promise((resolve, reject) => {
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
      
      if(options.stats){
        const results = {
      Unique: linksUnicos(links),
      Total: totalDeLinks(links),
    }
      resolve(results);
    } else if(options.validate) {
      const promises = links.map((link) => {
        //validamos los links
        return validarLosLinks(link.url, nuevaRuta, link.text);
      });
      }// si el usuario no quiere validar , resolver con links
      else if(!options.validate){
        resolve(links);
      }
   /*   Promise.all(promises)
        .then((results) => {
        if(options.stats){
          const results = {
        Unique: linksUnicos(links),
        Total: totalDeLinks(links),
      }
        resolve(stats);
      } else {
        resolve(results);
      }
    })
    .catch((error) => {
      reject(error);
    });
  }*/
 
  })
  .catch((error) => {
    reject(error);
  });
});


