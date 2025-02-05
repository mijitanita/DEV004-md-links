import fetch from 'node-fetch';

// recorrer el array
// investigar fetch/axios/http:node
// hacer la peticion por cada url en el array

export const validarLosLinks = (url, archivo, text) => {
   // console.log(fetch);
           return fetch(url)          
    .then(response => {
        const urlFinal = response.url;
               if(response.ok){
              //  console.log(response.ok)
                return {
                    url: url,
                    status: response.status,
                    statusText: response.statusText,
                    file: archivo,
                    text: text,
                };
            } else {
                throw new Error (`La solicitud a ${finalUrl} no fue exitosa. Código de estado: ${response.status}`)
            }
        })
            .catch(error => {
              // console.log({error})
                return {
                    url: url,
                    status: 400,
                    statusText: "Bad Request", 
                    file: archivo,
                    text: text,
                };
            }); 
};

  
