import { filterData} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
console.log(filterData, renderItems(data), data);
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
    let familiasimpson = filterData(data,Valorseleccionado,''); //renderizar
    renderItems(familiasimpson);
});

const ascdesc = document.querySelector('select[data-testid="select-sort"]');
ascdesc.addEventListener("change", function (event2) {
    const abecetario = event2.target.value;
    console.log(abecetario);
    if (abecetario === 'asc') {
        console.log('Hiciste clic en asc')
    }
    if (abecetario === 'desc') {
        console.log('Hiciste clic en desc')
    }
});
