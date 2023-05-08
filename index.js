/*import fs from ('fs');

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {

    //comprobar que la ruta existe.
    if (fs.existsSync(path)) {
      //verificar que la ruta es absoluta
      //si no es absoluta , convertirla en absoluta
      //verificar que sea archivo
      //si los archivos tienen extension .md
resolve(path)

    } else {
      //si no existe la ruta, rechaza la promesa.
      reject('la ruta no existe');
    }

  });
}
export {
  mdLinks
};*/


// comandos
import {mdLinks} from './mdlinks.js';
mdLinks();