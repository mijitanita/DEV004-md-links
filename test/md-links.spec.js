import { rutaExiste , esAbsoluta} from '../mdlinks.js';
import  path  from 'path';



describe('rutaExiste',() => {
  it('debe ser una funcion',() =>{
    expect(typeof rutaExiste).toBe('function');
  });
  it('le entrego una ruta y deberia retornar true',() => {
    expect(rutaExiste('./ejemplo.md')).toBe(true);
  });
  it('le entrego una ruta y deberia retornar false',() => {
    expect(rutaExiste('/ejemploNoExiste.md')).toBe(false);
  });
 });

 describe('esAbsoluta',() => {
  it('debe ser una funcion',() =>{
    expect(typeof esAbsoluta).toBe('function');
  });
  it('le entrego una ruta y deberia retornar true',() => {
    expect(esAbsoluta('D:\\laboratoria\\proyecto-4\\DEV004-md-links\\ejemplo.md')).toBe(true);
  });
  it('le entrego una ruta y deberia retornar false',() => {
    expect(esAbsoluta('ejemplo.md')).toBe(false);
  });
 });



/*test('esAbsoluta',() =>{
  expect(typeof rutaExiste).toBe('function');
});



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
 
 
    /*it('deberia retornar que no existe', () =>{
      expect(rutaExiste('./ejemplo.md')).toBe(true)
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

    });*/

 
