// funciones
import { constants } from 'buffer';
import fs from 'fs';
import { existsSync, statSync } from 'node:fs';
import path from 'path';

//archivo existe?
export const rutaExiste = (archivo) => {
     return existsSync(archivo)

};
console.log('existe', rutaExiste('laboratoria\proyecto-4\DEV004-md-links\index.js'));

// si existe archivo es absoluta?
export const esAbsoluta = (archivo) => {
     return path.resolve(archivo) === archivo;
};
console.log('relativa', esAbsoluta('./index.js'));
console.log('relativa', esAbsoluta('D:\\laboratoria\\proyecto-4\\DEV004-md-links\\index.js'));

//convertir archivo relativa a absoluta
export const obtenerRutaAbsoluta = (archivo) => {
     return path.resolve(archivo);
}
console.log(path.resolve('./index.js'));

//la archivo es un  archivo?
export const rutaEsArchivo = (archivo) => {
     const stats = fs.statSync(archivo);
     return stats.isFile();
}
console.log('is file?' + rutaEsArchivo('./index.js'));
console.log('is file?' + rutaEsArchivo('./test'));

//los archivos tienen extensión .md?
export const archivoEsMD = (archivo) => {
     const extension = path.extname(archivo);
     return extension === '.md';
}
console.log('is .md?' + archivoEsMD('README.md'));
console.log('is .md?' + archivoEsMD('./index.js'));

//leer el archivo , ?
// 1 hacer que la funcion retorne una promesa que resuelva la archivo que recibio por parametro
// 2 hacer que resuelva el contenido de la archivo que recibio por parametro
export const leerContenidoArchivo = (archivo) => {
     return new Promise ((resolve,  reject) => {
          fs.readFile(archivo, 'utf-8', (err, data) => {
               if(err){
                    reject(err);
               }else{
                    const regex = /\[([^\]]+)\]\(([^\s]+)\)/g;
      const links = [];
      let match;
      while ((match = regex.exec(data))) {
        links.push({ text: match[1], url: match[2] });
      }
                    resolve({links}); 
               }
          });

     });

}

const validarLosLinks = (array) =>{
     // recorrer el array
     // investigar fetch/axios/http:node
     // hacer la peticion por cada url en el array
}

 leerContenidoArchivo('ejemplo.md').then(({links}) => {
     

     console.log(links, '******');
     validarLosLinks(links)
    
})
.catch(err => console.error(err));

     
     

// listar los links , array de strings con formato md  

//  extraer los links(), es un array de objetos 


