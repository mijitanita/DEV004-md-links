// comandos
import {rutaExiste , esAbsoluta} from './mdlinks.js';

export const mdLinks = (path, options) =>new Promise((resolve, reject)=>{
  if(!path) reject('No hay path')
  if(!rutaExiste(path)) reject ('ruta inválida verificar si la ruta es  correcta y si es absoluta podria poner \\\\')

 
  
      //algo
      //si existe , la ruta es absoluta

      const esAbsoluta = esAbsoluta(ruta);
      if (!esAbsoluta) {
          //si no es absoluta convertirla a absoluta
          const nuevaRuta = convertirAbsoluta(ruta);
      }
      //leer archivo
      const contenido = leerArchivo(nuevaRuta)// sera async??, saber si es dentrro de then o callback
      const extraerContenido = extraerContenido(nuevaRuta)


  } else {

  }



});
mdLinks();