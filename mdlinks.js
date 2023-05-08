// funciones
export const determinarExistencia = (ruta) => {

}
export const mdLinks = (path, options) => {//modules.exports

    const existeRuta = determinarExistencia(ruta);
    if (existeRuta) {
        //algo
        //si existe es absoluta
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



}