import {archivoEsMD} from './funciones-api.js'
import fetch from 'node-fetch';

// recorrer el array
// investigar fetch/axios/http:node
// hacer la peticion por cada url en el array

export const validarLosLinks = (url, archivo, text) => {
   
        return fetch(url) 

         
    .then(response => {
                return {
                    url: url,
                    status: response.status,
                    statusText: response.statusText,
                    file: archivo,
                    text: text,

                };
            })
            .catch(error => {
                return {
                    url: url,
                    status: -1,
                    Text: error.message
                };
            });

    
};

  
