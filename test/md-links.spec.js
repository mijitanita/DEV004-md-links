import {mdLinks} from ('../index.js');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });
/*it('deberia devolver una promesa', () => {
  expect(mdLinks()).toBe(typeof Promise); 
});*/
it('debe rechazar la promesa cuando el path no existe', () => {
return mdLinks('/este path/no existe.md').catch((error) =>{
  expect(error).toBe('la ruta no existe');
})
});
});
