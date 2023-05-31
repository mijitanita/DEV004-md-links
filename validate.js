//import {archivoEsMD} from './funciones-api.js'
import fetch from 'node-fetch';

// recorrer el array
// investigar fetch/axios/http:node
// hacer la peticion por cada url en el array

export const validarLosLinks = (url, archivo, text) => {
           return fetch(url)          
    .then(response => {
        const urlFinal = response.url;
        if(response.ok){
                return {
                    url: url,
                    status: response.status,
                    statusText: response.statusText,
                    file: archivo,
                    text: text,
                };
            } else {
                throw newError (`La solicitud a ${finalUrl} no fue exitosa. Código de estado: ${response.status}`)
            }
        })
            .catch(error => {
                console.log({error})
                return {
                    url: url,
                    status: 400,
                    statusText: "Bad Request", 
                    file: archivo,
                    text: text,
                };
            }); 
};

  
