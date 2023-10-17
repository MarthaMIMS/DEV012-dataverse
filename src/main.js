import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import { sortData } from './dataFunctions.js';
import { computeStats } from './dataFunctions.js';
import data from './data/dataset.js';


const footer = document.createElement('footer');
footer.innerHTML = 'Autoras: Martha Melitón & Daniela Bustamante';
document.body.appendChild(footer);

const dataview = document.getElementById('root');
let datalist = renderItems(data);
dataview.appendChild(datalist);

const boton = document.querySelector('button[id="limpiar"]');
const limpiofiltro1 = document.querySelector('select[data-testid="select-filter"]');
const limpiofiltro2 = document.querySelector('select[data-testid="select-sort"]');
const estadistica = document.getElementById('facts');



boton.addEventListener('click', function (event) {
  limpiofiltro1.selectedIndex = event.target.value;
  limpiofiltro2.selectedIndex = event.target.value;
  const datalist = renderItems(data);
  dataview.innerHTML = '';
  dataview.appendChild(datalist);
  const parrafoResultado = document.getElementById('resultado-parrafo');
  if (parrafoResultado) {
    parrafoResultado.textContent = '';
  }
});


const filtroClave = document.querySelector('select[data-testid="select-filter"]');//nos da el valor seleccionado
const filtroOrden = document.querySelector('select[data-testid="select-sort"]');//nos da el valor seleccionado


function soloUnFiltro() {//checa si hemos seleccionado un algo o algo vacio
  const claveSeleccionada = filtroClave.value;
  const ordenSeleccionado = filtroOrden.value;
  dataview.innerHTML = '';

  if (claveSeleccionada) {
    // si se  selecciona un campo del filtro
    const datosFiltrados = filterData(data, claveSeleccionada);// lo guarda en esta variable 

    if (ordenSeleccionado) {
      // Se ha seleccionado un campo de ordenamiento
      const datosOrdenados = sortData(datosFiltrados, 'name', ordenSeleccionado);// lo guarda en esta variable 
      datalist = renderItems(datosOrdenados);//renderizamos 
      dataview.appendChild(datalist)
    } else {
      // No se ha seleccionado un campo de ordenamiento
      datalist = renderItems(datosFiltrados);
      dataview.appendChild(datalist)
      //  console.log(datosFiltrados);
    }
  } else if (ordenSeleccionado) {
    // No se ha seleccionado un campo de filtrado, pero se ha seleccionado un campo de ordenamiento
    const datosOrdenados = sortData(data, 'name', ordenSeleccionado);// lo guarda en esta variable 
    datalist = renderItems(datosOrdenados);//renderizamos 
    dataview.appendChild(datalist)
  } else {
    // No se ha seleccionado ni un campo de filtrado ni un campo de ordenamiento
    renderItems(data);
  }
}
filtroClave.addEventListener("change", soloUnFiltro);//nuestra solo un filtro
filtroOrden.addEventListener("change", soloUnFiltro);//nuestra solo un filtro


estadistica.addEventListener('click', function () {//creamos el evento 
  const factsEdad = computeStats(data); //llamamos a la función computeStats
  const parrafoResultado = document.createElement('p');//creamos un parrafo
  parrafoResultado.setAttribute('id', 'resultado-parrafo'); //creamos un id jiji
  parrafoResultado.textContent = `Existen ${factsEdad.menoresDe30} personajes con edades por debajo de los 30 años. 
  Existen ${factsEdad.mayoresDe30} personajes con edades por arriba de los 30 años.`;//informacion que contiene el parrafo
  let resultadoDiv = document.getElementById('resultado-div');//creamos una variable para guardar informacion del DOM
  if (!resultadoDiv) {//verificamos si el valor corresponde con la variable 
    resultadoDiv = document.createElement('div');//creamos un elemento para que p no este solito
    resultadoDiv.setAttribute('id', 'resultado-div');//con un id para identificarlo 
    document.body.appendChild(resultadoDiv);//pegamos el elemento para que muestre el resultado
  }

 
  resultadoDiv.appendChild(parrafoResultado);//va a mostrar el resultado en pantalla de la funcion 
});



