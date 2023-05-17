import {archivoEsMD} from './mdlinks.js'

// recorrer el array
// investigar fetch/axios/http:node
// hacer la peticion por cada url en el array

export const validarLosLinks = (url, text) => {
    //return new Promise((resolve, reject) => {
        return fetch(url) 

          /*  if (err) {
                reject(err);
            } else {*/
    .then(response => {
                return {
                    url: url,
                    status: response.status,
                    statusText: response.statusText,
                    //file: archivo,
                    text: text
// debe tambien devolver file y ok
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

  
 // validarLosLinks(links)