#!/usr/bin/env node

import { mdLinks } from './index.js';
import { argv } from 'node:process';
import chalk from 'chalk';

const cli = () => {

    //funcion que verifica las opciones indicadas por el usuario, llamando a la funcion mdLinks que esta en index.js
    //inicializo  ruta y optiion
    const rutaDada = argv[2];
    const options = {
        help: argv.includes('--help'),
        statsAndValidate: argv.includes('--stats') && argv.includes('--validate'),
        stats: argv.includes('--stats'),
        validate: argv.includes('--validate')

    };

    console.log(chalk.magentaBright.bgYellowBright.bold('\n\n\t\t\t\t\t\t***** Hola, estás en MD Links***** \n'));
    console.log(chalk.bold.italic.magenta('\t\t\t\t\t\tElaborado por: Ana Márquez Castro \n\n'));

    mdLinks(rutaDada, options)
        .then((results) => {
            if (argv.length < 3 || argv[2] === undefined) {

                console.log(chalk.bgYellowBright.red('No hay ruta o Ruta inválida verificar si la ruta es  correcta ej. prueba.txt'));
                return;
            } else if (options.help) {
                console.log(chalk.bold.bgYellowBright.italic.white('\n\n\t\t\t\t\t\tHelp:'));
                console.log(chalk.bold.greenBright('\n--stats --validate: Para obtener estadísticas que necesiten de los resultados de la validación.'));
                console.log(chalk.bold.greenBright('\n--stats: Para estadísticas básicas sobre los enlaces'));
                console.log(chalk.bold.greenBright('\n--validate: Para para comprobar si el enlace funciona o no'));
                console.log(chalk.yellow('\n\n\t\t\t\t\t----------***---------'));
            }

            else if (options.statsAndValidate) {
                console.log(chalk.bold.bgBlue.italic.white('\n\n\t\t\t\t\tStats & Validate:\n\n\t\t\t\t\t'));
                console.log(chalk.bold.blue('\nTotal:'), chalk.blue(results.Total));
                console.log(chalk.bold.yellow('\nUnique:'), chalk.yellow(results.Unique));
                console.log(chalk.bold.red('\nBroken:'), chalk.red(results.Broken));
                console.log(chalk.yellow('\n\n\t\t\t\t\t----------***---------'));
            }

            else if (options.stats) {
                console.log(chalk.bold.bgBlue.italic.white('\n\n\t\t\t\t\tStats:\n\n\t\t\t\t\t'));
                console.log(chalk.bold.blue('\nTotal:'), chalk.blue(results.Total));
                console.log(chalk.bold.yellow('\nUnique:'), chalk.yellow(results.Unique));
                console.log(chalk.yellow('\n\n\t\t\t\t\t----------***---------'));
            }

            else if (options.validate) {
                console.log(chalk.bold.bgBlue.italic.white('\n\n\t\t\t\t\tLinks Validados:\n\n\t\t\t\t\t'));
               // console.log(results)
                results.forEach((link) => {

                    console.log(chalk.underline(link.url));
                    console.log(chalk.bold('Status:'), link.status);
                    console.log(chalk.bold('Mensaje:'), link.statusText);
                    console.log(chalk.bold('File:'), link.file);
                    console.log(chalk.bold('Texto:'), link.text);
                    console.log(chalk.yellow('\n\n\t\t\t\t\t----------***---------\n\n\t\t\t\t\t'));
                });

            }
            else {
                console.log(chalk.bold.bgBlue.italic.white('\n\n\t\t\t\t\tLinks Encontrados:\n\n\t\t\t\t\t'));
                results.forEach((link) => {   
                console.log(chalk.bold('Texto:'), link.text);
                console.log(chalk.underline(link.url));
                console.log(chalk.bold('File:'), link.file);
                console.log(chalk.yellow('\n\n\t\t\t\t\t----------***---------\n\n\t\t\t\t\t'));
                });
            }

        })

        .catch((error) => {
            console.log(chalk.red('Ocurrió un error al ejecutar mdLinks:', error));
        });

}
cli()





