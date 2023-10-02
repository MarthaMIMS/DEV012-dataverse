import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);

const button = document.getElementById("limpiar"); 
button.addEventListener("click", () => {
    opcion.value = "";
});