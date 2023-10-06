import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
console.log(example, renderItems(data), data);
const boton = document.getElementById('limpiar');
const limpiofiltro1 = document.getElementById('select-filter');
const limpiofiltro2 = document.getElementById('select-sort');
boton.addEventListener('click', function () {
limpiofiltro1.selectedIndex = 0;
limpiofiltro2.selectedIndex = 0;
});
const filtronombre = document.querySelector('select[data-testid="select-filter" ]');
filtronombre.addEventListener("change", function (event) {
    const Valorseleccionado = event.target.value;
    if (Valorseleccionado === 'simpsons') {
        /*console.log('Hiciste clic en Simpsons');*/
        //const apellidosimpson=filterby();
       // const apellidosimpson = filterby.filtro(Valorseleccionado);
 // filtronombre.innerHTML = filterby();//"Familia:" + apellidosimpson;
    }
    if (Valorseleccionado === 'flanders') {
        console.log('Hiciste clic en flanders');
    }if (Valorseleccionado === 'bouvier') {
        console.log('Hiciste clic en bouvier');
    }
    if (Valorseleccionado === 'wiggum') {
        console.log('Hiciste clic en wiggum');
    }
    if (Valorseleccionado === 'amistades') {
        console.log('Hiciste clic en amistades');
    }
});
