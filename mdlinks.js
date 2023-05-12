// funciones
import fs from 'fs';
import { existsSync, statSync } from 'node:fs';
import path from 'path';

//ruta existe?
export const rutaExiste = (ruta) => {
     return existsSync(ruta)

};
console.log('existe', rutaExiste('laboratoria\proyecto-4\DEV004-md-links\index.js'));

// si existe ruta es absoluta?
export const esAbsoluta = (ruta) => {
     return path.resolve(ruta) === ruta;
};
console.log('relativa', esAbsoluta('./index.js'));
console.log('relativa', esAbsoluta('D:\\laboratoria\\proyecto-4\\DEV004-md-links\\index.js'));

//convertir ruta relativa a absoluta
export const obtenerRutaAbsoluta = (ruta) => {
     return path.resolve(ruta);
}
console.log(path.resolve('./index.js'));

//la ruta es un  archivo?
export const rutaEsArchivo = (ruta) => {
     const stats = fs.statSync(ruta);
     return stats.isFile();
}
console.log('is file?' + rutaEsArchivo('./index.js'));
console.log('is file?' + rutaEsArchivo('./test'));
//los archivos tienen extensión .md?
//los archivos .md tienen links?
//si tiene links leerlos
//extraer los links
