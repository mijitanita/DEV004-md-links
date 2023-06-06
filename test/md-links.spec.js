import { rutaExiste, esAbsoluta, obtenerRutaAbsoluta, rutaEsArchivo, archivoEsMD, leerContenidoArchivo, linksUnicos, totalDeLinks, totalDeLinksRotos  } from '../funciones-api.js';
import { mdLinks } from '../index.js';
import path from 'path';



describe('rutaExiste', () => {
  it('debe ser una funcion', () => {
    expect(typeof rutaExiste).toBe('function');
  });
  it('le entrego una ruta y deberia retornar true', () => {
    expect(rutaExiste('./ejemplo.md')).toBe(true);
  });
  it('le entrego una ruta y deberia retornar false', () => {
    expect(rutaExiste('laboratoria\proyecto-4\DEV004-md-links\index.js')).toBe(false);
  });
});

/*describe('esAbsoluta',() => {
 it('debe ser una funcion',() =>{
   expect(typeof esAbsoluta).toBe('function');
 });
 it('le entrego una ruta y deberia retornar true',() => {
   expect(esAbsoluta('D:\\laboratoria\\proyecto-4\\DEV004-md-links\\ejemplo.md')).toBe(true);
 });
 it('le entrego una ruta y deberia retornar false',() => {
   expect(esAbsoluta('ejemplo.md')).toBe(false);
 });
});*/

describe('obtenerRutaAbsoluta', () => {
  it('debe ser una funcion', () => {
    expect(typeof obtenerRutaAbsoluta).toBe('function');
  });
  it('deberia devolver una ruta absoluta', () => {
    expect(path.isAbsolute(obtenerRutaAbsoluta('./ejemplo.md'))).toBe(true);
  });

});
describe('rutaEsArchivo', () => {
  it('debe ser una funcion', () => {
    expect(typeof rutaEsArchivo).toBe('function');
  });
  it('la ruta dada debe ser un archivo', () => {
    expect(rutaEsArchivo('./ejemplo.md')).toBe(true);
  });
  it('la ruta dada no debe ser un archivo', () => {
    expect(rutaEsArchivo('./test')).toBe(false);
  });
});
describe('archivoEsMD', () => {
  it('debe ser una funcion', () => {
    expect(typeof archivoEsMD).toBe('function');
  });
  it('el archivo dado debe ser .md', () => {
    expect(archivoEsMD('./ejemplo.md')).toBe(true);
  });
  it('el archivo dado no debe ser .md', () => {
    expect(archivoEsMD('./index.js')).toBe(false);
  });
});

describe('leerContenidoArchivo', () => {
  it('debe ser una funcion', () => {
    expect(typeof leerContenidoArchivo).toBe('function');
  });
  it('debe de leer el contenido del archivo.md', () => {
    return leerContenidoArchivo('ejemplo.md').then(({ links }) => {
      expect(links).toEqual([
        { file: 'ejemplo.md', text: 'Markdown', url: 'https://es.wikipedia.org/wiki/Markdown' },
        { file: 'ejemplo.md', text: 'Node.js', url: 'https://nodejs.org/' },
        { file: 'ejemplo.md', text: 'motor de JavaScript V8 de Chrome', url: 'https://developers.google.com/v8/' },
      ]);
    })
  });

  it('no debe de leer el contenido del archivo .md', () => {
    const promise = leerContenidoArchivo('sinlinks.md');
    return promise.catch((err) => {
      expect(err instanceof Error).toBe(true);
    });
  });
});

describe('linksUnicos', () => {
  it('debe ser una funcion', () => {
    expect(typeof linksUnicos).toBe('function');
  });
  it('la funcion debe dar el resultado de la cantidad de links únicos', () => {
    expect(linksUnicos([
      {file: 'ejemplo.md', text: 'Markdown', url: 'https://es.wikipedia.org/wiki/Markdown'},
      {file: 'ejemplo.md', text: 'Markdown', url: 'https://es.wikipedia.org/wiki/Markdown'},
      { file: 'ejemplo.md', text: 'Node.js', url: 'https://nodejs.org/' },
      
    ])).toBe(2);
  });
  
});

describe('totalDeLinks', () => {
  it('debe ser una funcion', () => {
    expect(typeof totalDeLinks).toBe('function');
  });
  it('la funcion debe dar el resultado el total  de links', () => {
    expect(totalDeLinks([
      {file: 'ejemplo.md', text: 'Markdown', url: 'https://es.wikipedia.org/wiki/Markdown'},
      {file: 'ejemplo.md', text: 'Markdown', url: 'https://es.wikipedia.org/wiki/Markdown'},
      { file: 'ejemplo.md', text: 'Node.js', url: 'https://nodejs.org/' },
      
    ])).toBe(3);
  }); 
  
});


describe('totalDeLinksRotos', () => {
  it('debe ser una funcion', () => {
    expect(typeof totalDeLinksRotos).toBe('function');
  });
  it('se entrega un arreglo de objetos que tienen res.status 200 y retorna la cantidad de valores que >200 que hay en res.status', () => {
    expect(totalDeLinksRotos([
      {
        url: 'https://www.example.com/server-error',
        status: 400,
        statusText: 'Bad Request',
        file: 'unobuenootromalo.md',
        text: 'Enlace con respuesta de error en el servidor'
      },
      {
        url: 'https://es.wikipedia.org/wiki/Markdown',
        status: 200,
        statusText: 'OK',
        file: 'unobuenootromalo.md',
        text: 'Markdown'
      },

      
    ])).toBe(1);
  }); 

});


describe('mdLinks', () => {

  it('mdLinks procesa un solo archivo con 3 links sin validar', () => {
    const ruta = 'ejemplo.md';

    return mdLinks(ruta, { validate: false })
      .then(
        (array) => {
          expect(array).toEqual([
            {
              url: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown',
              file: 'ejemplo.md',
            },
            {
              url: 'https://nodejs.org/',
              text: 'Node.js',
              file: 'ejemplo.md',
            },
            {
              url: 'https://developers.google.com/v8/',
              text: 'motor de JavaScript V8 de Chrome',
              file: 'ejemplo.md',
            },

          ]);
        }
      );

  });
})

describe('mdLinks', () => {

  it('mdLinks procesa un solo archivo con 3 links  validados', () => {
    const ruta = 'ejemplo.md';

    return mdLinks(ruta, { validate: true })
      .then(
        (array) => {
          expect(array).toEqual([
            {
              url: 'https://es.wikipedia.org/wiki/Markdown',
              status: 200,
              statusText: 'OK',
              file: 'ejemplo.md',
              text: 'Markdown',
            },
            {
              url: 'https://nodejs.org/',
              status: 200,
              statusText: 'OK',
              file: 'ejemplo.md',
              text: 'Node.js',
            },
            {
              url: 'https://developers.google.com/v8/',
              status: 200,
              statusText: 'OK',
              file: 'ejemplo.md',
              text: 'motor de JavaScript V8 de Chrome',
            },

          ]);
        }
      );

  });
})

