# Markdown Links
## Por:ANA MÁRQUEZ CASTRO

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales) 
* [4. Criterios de aceptación mínimos del proyecto](#4-criterios-de-aceptación-mínimos-del-proyecto)
* [5. Entregables](#5-entregables)
* [6. Otros Recursos](#6-Otros-Recursos)
* [7. Checklist](#7-checklist)


***

## 1. Preámbulo

Buscamos desarrollar una herramienta en Node.js que mejore la calidad de la información compartida en archivos Markdown, al verificar y reportar los enlaces rotos, brindando así beneficios tanto a la comunidad de código abierto como a otras áreas que utilicen archivos Markdown en sus procesos.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumen del proyecto

En este proyecto, creé una herramienta de línea de comando (CLI) y una biblioteca en JavaScript utilizando Node.js. Aprendiendo a interactuar con la terminal, el sistema de archivos y realizar consultas HTTP. También adquirí experiencia en el diseño de una interfaz de programación (API) para mi biblioteca, considerando las convenciones y buenas prácticas del lenguaje. Este proyecto me permitió adquirir habilidades fundamentales como desarrollador , creando librerías reutilizables.

## 3. Consideraciones Generales

* Este proyecto es individual.

* Tiempo de ejecución 5 Sprints.

* La **librería** y el **script ejecutable** (herramienta de línea de comando -
  CLI)  estan implementados en JavaScript para ser ejecutados con
  Node.js.

* Módulo **Instalable** via `npm install mijitanita/DEV004-md-links`. 
  
 * Usé librería [chalk](https://www.npmjs.com/package/chalk) para personalizar
 el estilo de mi aplicación en la terminal.

* Los **tests unitarios** cubren un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Y pasan al 100%.

* Usé ES Modules `(import/export)`, en lugar de commonJS `(require/module.exports)`.

## 4. Criterios de aceptación mínimos del proyecto

Para comenzar este proyecto realicé **_fork_** y **_clonar_** del
repositorio de **_Laboratoria_**

Antes de comenzar a codear, creé un **Diagrama de Flujo**. Planificación de cada sprint en **_Trello_** para priorizar y organizar el trabajo, y para poder hacer
seguimiento de tu progreso.
![diagrama de flujo](https://github.com/mijitanita/DEV004-md-links/blob/main/diagrama%20de%20flujo%20mdLiks-Ana.png)


### Archivos del proyecto

* `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
* `index.js`: Desde este archivo se exporta **la** función (`mdLinks`).
* `funciones-api.js`: Desde este archivo se exportan **las** funciones pequeñas para  (`mdLinks`).
* `cli.js`: En este archivo se implementan los  ejecutable de nuestra aplicación importando  función (`mdLinks`).
* `validate.js`: Desde este archivo se exporta **la** función (`validarLosLinks`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...), main, bin
* `.editorconfig` con configuración para editores de texto. 
* `.eslintrc` con configuración para linter. Este archivo contiene una
  configuración básica para ESLint.
* `.gitignore` para ignorar `node_modules` y  otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js`contiene los tests unitarios para la función
  `mdLinks()`, `validarLosLinks()` y todas las funciones del archivo `funciones-api.js`. 

## Este proyecto consta de DOS partes

### 1) JavaScript API

`
En donde desarrollo uno a uno todos los procesos indicados en el diagrama  
### 2) CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de nuestra aplicación 
#### Options

##### `--help`
Si pasamos la opción `--help`, el output (salida) será un texto con con una breve explicación de los comandos(options)

Captura en  terminal de option --help :
![help](https://github.com/mijitanita/DEV004-md-links/blob/main/capturas/--help.png).

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Captura en  terminal de option --validate :
![validate](https://github.com/mijitanita/DEV004-md-links/blob/f3b547644ba7a26dc715db1851fa37acb23ec04e/capturas/--validate.png).

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

Captura en  terminal de option --stats :
![stats](https://github.com/mijitanita/DEV004-md-links/blob/main/capturas/--stats.png).

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

Captura en  terminal de option --stats --validate :
![stats&validate](https://github.com/mijitanita/DEV004-md-links/blob/main/capturas/--stats%20--validate.png).

## 5. Entregables

Módulo instalable via `npm install <github-user>/md-links`. 


### 6. Otros recursos

* [Crear diagramas de flujo](https://app.diagrams.net/)
* [ESModules en package.json](https://blog.logrocket.com/es-modules-in-node-today/)
* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
* [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
* [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
* [Node.js y npm](https://www.genbeta.com/desarrollo/node-js-y-npm)
* [Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?](http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175)
* [Asíncronía en js](https://carlosazaustre.es/manejando-la-asincronia-en-javascript)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
* [Leer un directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
* [Path](https://nodejs.org/api/path.html)
* [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)


## 7. Checklist

### General

* [x] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

* [x] Un board con el backlog para la implementación de la librería.
* [x] Documentación técnica de la librería.
* [x] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

* [x] El módulo exporta una función con la interfaz (API) esperada.
* [x] Implementa soporte para archivo individual
* [x] Implementa `options.validate`

### CLI

* [x] Expone ejecutable `md-links` en el path (configurado en `package.json`)
* [x] Se ejecuta sin errores / output esperado
* [x] Implementa `--help`
* [x] Implementa `--validate`
* [x] Implementa `--stats`
* [x] Implementa `--stats --validate`

### Pruebas / tests

* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [x] Pasa tests (y linters) (`npm test`).



