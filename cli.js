#!/usr/bin/env node

import { mdLinks } from './index.js';
import { argv } from 'node:process';
import chalk from 'chalk';

/*console.log(chalk.bgBlue(argv));
const validate = argv.includes('--validate');
console.log({validate})*/
//console.log("Hi!");
//const argumentos = process.argv;
//+++++++++++++++++++

const cli = () => {
    //funcion que verifica las opciones indicadas por el usuario, llamando a la funcion mdLinks que esta en index.js
    //inicializo  ruta y optiion
    const rutaDada = argv[2];
    const options = {
        validate: argv.includes('--validate'),
        stats: argv.includes('--stats'),
    };

    console.log(chalk.magentaBright.bgYellowBright.bold('\n\n\t\t\t\t\t\t***** MD Links***** \n'));
    console.log(chalk.bold.italic.magenta('\t\t\t\t\t\tpor: Ana Márquez Castro \n\n'));

    mdLinks(rutaDada, options).then((links) => {
        console.log(links)
        //mostrar los links linea x linea
        //mostrar estadisticas si asi lo requiere el usuario
    }).catch((error) =>{
        console.log(error)
    })
    // imprimir los links que vaya encontrando
    //imprimir la ruta en donde aparecen
    //el texto que hay dento delos links(max 50 caracteres)
    //--validate
    //..stats
    //--stats --validate
}
cli()



/*console.log(process.argv);
var args = process.argv;
console.log(chalk.bgGreen('number of arguments is '+args.length));
args.forEach((val, index) => {
console.log(chalk.bgCyanBright(`${index}: ${val}`));
});*/


