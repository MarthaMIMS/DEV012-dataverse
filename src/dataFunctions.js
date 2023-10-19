export function filterData(data, filterBy) {
  const familiasimpson = data.filter(filtro1 => filtro1.lastname === filterBy);
  return familiasimpson;
}

export function sortData(data, sortBy, sortOrder) {
  // Crear una copia de los datos originales
  const sortedData = data.slice();

  if (sortBy) { // Verifica si se ha seleccionado un campo de ordenamiento
    sortedData.sort((a, b) => {
      const nameA = a[sortBy].toLowerCase();
      const nameB = b[sortBy].toLowerCase();

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else if (sortOrder === "desc") {
        return nameB.localeCompare(nameA);
      }
    });

    return sortedData;
  }
}

export function computeStats(data) {
  const estadistica = data.reduce((acumulador, personaje) => {
    const edad = parseInt(personaje.edad);
    acumulador.menoresDe30 += edad < 30 ? 1 : 0;
    acumulador.mayoresDe30 += edad >= 30 ? 1 : 0;
    return acumulador;
  }, { menoresDe30: 0, mayoresDe30: 0 });

  const arrayGenero = data.map(personaje => personaje.genero);
  let mujeres = 0;
  let hombres = 0;
  for (let i = 0; i < arrayGenero.length; i++) {
    const valoractual = arrayGenero[i];
    if (valoractual === 'm') {
      hombres++;
    }
    if (valoractual === 'f') {
      mujeres++;
    }
  }
  const generos = { hombres, mujeres };
  console.log(generos);
  return { ...estadistica, generos, arrayGenero };
}

/* //creamos otra estadistica con .map
 const estadistica2 = data.map((personaje) => {//crea un nuevo arreglo desde estadistica2
   if (personaje.genero === 'f') {//Si genero es igual a f
     return { mujeres: 1, hombres: 0 };//crea un objeto con el nombre mujeres
   } else if (personaje.genero === 'm') {//si no se cumple lo anterior
     return { mujeres: 0, hombres: 1 };//crea un objeto con el nombre hombres
   } else {//si no ocurre nada de los dos el genero no esta definido
     return { mujeres: 0, hombres: 0 };//se inicia con un valor de 0 en cada parametro o propiedad
   }
 });
 return { estadistica, estadistica2 };//devolvemos el valor de las dos estadisticas
}*/


