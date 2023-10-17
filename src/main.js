import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import { sortData } from './dataFunctions.js';
import { computeStats } from './dataFunctions.js';
import data from './data/dataset.js';

const footer = document.createElement('footer');
footer.innerHTML = 'Autoras: Martha Melitón & Daniela Bustamante';
document.body.appendChild(footer);
const dataview = document.getElementById('root');
const datalist = renderItems(data);
dataview.appendChild(datalist);

function renderizarLista(items) {
  const lista = document.querySelector('ul[data-testid="item-list"]');
  lista.innerHTML = '';

  items.forEach(item => {
    const li = document.createElement('li');
    const text = document.createTextNode(item.name); // Cambiar 'name' según lo que quieras mostrar
    li.appendChild(text);
    lista.appendChild(li);
  });
}

// Llama a esta función para renderizar los elementos iniciales
renderizarLista(data);

// Luego, cuando cambia el filtro o se pulsa el botón 'limpiar', llama a esta función
// pasándole los datos filtrados o los datos originales para que los renderice

const filtroClave = document.querySelector('select[data-testid="select-filter"]');
const filtroOrden = document.querySelector('select[data-testid="select-sort"]');

function soloUnFiltro() {
  const claveSeleccionada = filtroClave.value;
  const ordenSeleccionado = filtroOrden.value;
  dataview.innerHTML = '';

  if (claveSeleccionada) {
    const datosFiltrados = filterData(data, claveSeleccionada);

    if (ordenSeleccionado) {
      const datosOrdenados = sortData(datosFiltrados, 'name', ordenSeleccionado);
      renderizarLista(datosOrdenados);
    } else {
      renderizarLista(datosFiltrados);
    }
  } else if (ordenSeleccionado) {
    const datosOrdenados = sortData(data, 'name', ordenSeleccionado);
    renderizarLista(datosOrdenados);
  } else {
    renderizarLista(data);
  }
}

filtroClave.addEventListener("change", soloUnFiltro);
filtroOrden.addEventListener("change", soloUnFiltro);

const boton = document.querySelector('button[id="limpiar"]');
const limpiofiltro1 = document.querySelector('select[data-testid="select-filter"]');
const limpiofiltro2 = document.querySelector('select[data-testid="select-sort"]');
boton.addEventListener('click', function (event) {
  limpiofiltro1.selectedIndex = event.target.value;
  limpiofiltro2.selectedIndex = event.target.value;
  soloUnFiltro();
});
