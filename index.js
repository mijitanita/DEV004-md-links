// comandos
import {rutaExiste , obtenerRutaAbsoluta, archivoEsMD, rutaEsArchivo, leerContenidoArchivo} from './funciones-api.js';
import  path from 'path';
import {validarLosLinks} from './validate.js'

export const mdLinks = (ruta, options) =>new Promise((resolve, reject)=>{
  if(!ruta) reject('No hay ruta')

  if(!rutaExiste(ruta)) reject ('ruta inválida verificar si la ruta es  correcta y si es absoluta podria poner \\\\')

      //verificar si la ruta es absoluta
      /*const esAbsoluta = esAbsoluta(ruta);*/
      let nuevaRuta = ruta;
      if (rutaExiste) {
          //si no es absoluta convertirla a absoluta
         
          const nuevaRuta = obtenerRutaAbsoluta(ruta);
      }

      //leer archivo
      leerContenidoArchivo(nuevaRuta)// sera async??, saber si es dentrro de then o callback
     .then (({links}) => {
      const soloUrl = links.map(link => link.url);
      const soloTexto = links.map(link => link.text);

      const promises = soloUrl.map((url, index) =>{
        //validamos los links
        return validarLosLinks(url, nuevaRuta, soloTexto[index]);
      });
      Promise.all(promises)
      .then(results => {
        resolve(results);
      })
      .catch(error => {
        reject(error);
      });
     })
     .catch(error => {
      reject(error);
     });


  } 
  );
  mdLinks('ejemplo.md')
  .then(links => {
    console.log(links);
  })
  .catch(error => {
    console.error(error);
  });


