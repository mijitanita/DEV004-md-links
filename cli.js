import {mdLinks} from ('./index.js');
mdLinks('/noexistepath/').then((resp) => {
    console.log(resp);
})
.catch((error) =>{
    console.log(error)
});