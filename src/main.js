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
    renderItems(data);
});
    const filtronombre = document.querySelector('select[data-testid="select-filter" ]');
filtronombre.addEventListener("change", function (event) {
    const Valorseleccionado = event.target.value;
  const familiasimpson = filterData(data,Valorseleccionado,''); //renderizar
  renderItems(familiasimpson);
});

const ascdesc = document.querySelector('select[data-testid="select-sort"]');
ascdesc.addEventListener("change", function (event2) {
 const abecetario = event2.target.value;

 const datosOrdenadosAsc = filterSort(datos, "name", "asc");
renderItems(datosOrdenadosAsc);

const datosOrdenadosDesc = filterSort(datos, "name", "desc");
renderItems(datosOrdenadosDesc);


            
});
