import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import { sortData } from './dataFunctions.js';
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
<<<<<<< HEAD
const filtroClave = document.querySelector('select[data-testid="select-filter"]');//nos da el valor seleccionado
const filtroOrden = document.querySelector('select[data-testid="select-sort"]');//nos da el valor seleccionado
function soloUnFiltro() {//checa si hemos seleccionado un algo o algo vacio
  const claveSeleccionada = filtroClave.value;
  const ordenSeleccionado = filtroOrden.value;
  if (claveSeleccionada) {
    // si se  selecciona un campo del filtro
    const datosFiltrados = filterData(data, claveSeleccionada);// lo guarda en esta variable
    if (ordenSeleccionado) {
      // Se ha seleccionado un campo de ordenamiento
      const datosOrdenados = sortData(datosFiltrados, 'name', ordenSeleccionado);// lo guarda en esta variable
      renderItems(datosOrdenados);//renderizamos
=======

const filtroClave = document.querySelector('select[data-testid="select-filter"]');//nos da el valor seleccionado
const filtroOrden = document.querySelector('select[data-testid="select-sort"]');//nos da el valor seleccionado

function soloUnFiltro() {//checa si hemos seleccionado un algo o algo vacio
  const claveSeleccionada = filtroClave.value;
  const ordenSeleccionado = filtroOrden.value;

  if (claveSeleccionada) {
    // si se  selecciona un campo del filtro
    const datosFiltrados = filterData(data, claveSeleccionada);// lo guarda en esta variable 

    if (ordenSeleccionado) {
      // Se ha seleccionado un campo de ordenamiento
      const datosOrdenados = sortData(datosFiltrados, 'name', ordenSeleccionado);// lo guarda en esta variable 
      renderItems(datosOrdenados);//renderizamos 
>>>>>>> 23b23b898b8f4a61d26a66d4e064012c3adeaeb8
    } else {
      // No se ha seleccionado un campo de ordenamiento
      renderItems(datosFiltrados);
    }
  } else if (ordenSeleccionado) {
    // No se ha seleccionado un campo de filtrado, pero se ha seleccionado un campo de ordenamiento
<<<<<<< HEAD
    const datosOrdenados = sortData(data, 'name', ordenSeleccionado);// lo guarda en esta variable
    renderItems(datosOrdenados);//renderizamos
=======
    const datosOrdenados = sortData(data, 'name', ordenSeleccionado);// lo guarda en esta variable 
    renderItems(datosOrdenados);//renderizamos 
>>>>>>> 23b23b898b8f4a61d26a66d4e064012c3adeaeb8
  } else {
    // No se ha seleccionado ni un campo de filtrado ni un campo de ordenamiento
    renderItems(data);
  }
}
<<<<<<< HEAD
filtroClave.addEventListener("change", soloUnFiltro);//nuestra solo un filtro
filtroOrden.addEventListener("change", soloUnFiltro);//nuestra solo un filtro
=======

filtroClave.addEventListener("change", soloUnFiltro);//nuestra solo un filtro
filtroOrden.addEventListener("change", soloUnFiltro);//nuestra solo un filtro


>>>>>>> 23b23b898b8f4a61d26a66d4e064012c3adeaeb8
