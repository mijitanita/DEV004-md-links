// funciones
import { existsSync } from 'node:fs';
import  path  from 'path';

export const rutaExiste = (ruta) => {
     return existsSync(ruta)

};
export const esAbsoluta = (ruta) => {
     return path.resolve(ruta) === ruta;
}