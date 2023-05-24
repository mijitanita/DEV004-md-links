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

    console.log(chalk.magentaBright.bgYellowBright.bold('\n\n\t\t\t\t\t\t***** Hola, estás en MD Links***** \n'));
    console.log(chalk.bold.italic.magenta('\t\t\t\t\t\tElaborado por: Ana Márquez Castro \n\n'));

    mdLinks(rutaDada, options)
        .then((results) => {
            if (argv.length < 3 || argv[2] === undefined) {
                console.log(chalk.bgYellowBright.red('No hay ruta o Ruta inválida verificar si la ruta es  correcta ej. prueba.txt'));
                return;
            }

            if (typeof results === 'object') {
                if (options.stats) {
                    console.log(chalk.bold.blue('\nTotal:'), chalk.blue(results.totalLinks));
                    console.log(chalk.bold.yellow('\nUnique:'), chalk.yellow(results.uniqueLinks));
                }

                if (options.validate) {
                    console.log(chalk.bold.bgBlue.italic.white('\nLinks Validados:'));
                    results.forEach((link) => {
                        console.log(chalk.underline(link.url));
                        console.log(chalk.bold('Status:'), link.status);
                        console.log(chalk.bold('Texto:'), link.text);
                        console.log(chalk.bold('Mensaje:'), link.statusText);
                        console.log(chalk.bold('File:'), link.file);
                        console.log(chalk.white('---'));
                    });

                }
            } else {
                console.log(chalk.bold('\nLinks Encontrados:'));
                results.forEach((link) => {
                    console.log(chalk.underline(link.url));
                    console.log(chalk.bold('Texto:'), link.text);
                    console.log(chalk.bold('File:'), link.file);
                    console.log(chalk.white('---'));
                })
            }
        })
        .catch((error) => {
            console.log(chalk.red('Ocurrió un error al ejecutar mdLinks:', error));
        });

};
cli()





