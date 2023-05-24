// comandos
import { rutaExiste, obtenerRutaAbsoluta, archivoEsMD, rutaEsArchivo, leerContenidoArchivo, linksUnicos } from './funciones-api.js';
import path from 'path';
import { validarLosLinks } from './validate.js'


export const mdLinks = (ruta, options) => new Promise((resolve, reject) => {
  if (!ruta) reject('No hay ruta')

  if (!rutaExiste(ruta)) reject('ruta inválida verificar si la ruta es  correcta y si es absoluta podria poner \\\\')

  //verificar si la ruta es absoluta
  /*const esAbsoluta = esAbsoluta(ruta);*/
  let nuevaRuta = ruta;
  if (rutaExiste) {
    //si no es absoluta convertirla a absoluta

    const nuevaRuta = obtenerRutaAbsoluta(ruta);
  }

  //leer archivo
  leerContenidoArchivo(nuevaRuta)// sera async??, saber si es dentrro de then o callback
    .then(({ links }) => {
      //const soloUrl = links.map(link => link.url);
      //const soloTexto = links.map(link => link.text);
      //const unicos = linksUnicos(links);
      /*const cuentoLinks = totalDeLinks(links);
      const cuentoLinksRotos = totalDeLinksRotos(links);*/

      // si el usuario no quiere validar , resolver con links
      if(!options.validate){
        resolve(links);
      } else {
      const promises = links.map((link) => {
        //validamos los links
        return validarLosLinks(link.url, nuevaRuta, link.text);
      });
      Promise.all(promises)
        .then((results) => {
        if(options.stats){
        const uniqueLinks = linksUnicos(links).length;
        const totalLinks = links.length;
        const stats = {
          uniqueLinks:uniqueLinks,
          totalLinks:totalLinks,
        };
        resolve(stats);

      } else {
        resolve(results);
      }
    })
    .catch((error) => {
      reject(error);
    });
  }
 
  })
  .catch((error) => {
    reject(error);
  });
});


 /* mdLinks('ejemplo.md')
 .then(links => {
   console.log(links);
 })
 .catch(error => {
   console.error(error);
 });*/


