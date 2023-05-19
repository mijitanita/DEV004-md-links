import {mdLinks} from './index.js';
import {validarLosLinks} from './validate.js';
import chalk from 'chalk';



mdLinks('/noexistepath/').then((resp) => {
    console.log(resp);
})
.catch((error) =>{
    console.log(error)
});