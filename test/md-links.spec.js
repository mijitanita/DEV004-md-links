import { mdLinks } from '../mdlinks.js';
import { ddeterminarExistencia} from '../mdlinks.js';


//describe('mdLinks', () => {

  /*it('should...', () => {
    console.log('FIX ME!');
  });*/
  /*it('deberia devolver una promesa', () => {
    expect(mdLinks()).toBe(typeof Promise); 
  });*/
  /*it('debe rechazar la promesa cuando el path no existe', () => {
  return mdLinks('/este path/no existe.md').catch((error) =>{
    expect(error).toBe('la ruta no existe');
  })
  });
  });*/
  describe('determinarExistencia', () =>{
    
    it('deberia retornar que no existe', () =>{
      determinarExistencia(  )
    })
    it('deberia retornar que si existe', () =>{
      determinarExistencia(  )
    })
  })
  describe('mdLinks', () => {

    it('mdLinks procesa un solo archivo con 3 links sin validar', () => {
      const ruta = 'ejemplo.md';

     return mdLinks(ruta, { validate: false })
        .then(
          (array) => {
            expect(array).toEqual([
              {
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown',
              file: 'ejemplo.md',
              },
              {
                href: 'https://nodejs.org/',
                text: 'Node.js',
                file: 'ejemplo.md',
                },
                {
                  href: 'https://developers.google.com/v8/',
                  text: 'motor de JavaScript V8 de Chrome',
                  file: 'ejemplo.md',
                  },

            ]);
          }
        );

    });

  });
