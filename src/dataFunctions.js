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

export function computeStats(data) {//Funcion para calcular la estadística en el arreglo data
  const estadistica = data.reduce(//Con el metodo .reduce iteramos cada elemento del arreglo 
    (acumulador, personaje) => {//acumulador actualiza el valor y personaje es un objeto 
      const edad = parseInt(personaje.edad);//convierte el valor en un numero entero 
      acumulador.menoresDe30 += edad < 30 ? 1 : 0;// Usa una expresion condicional y evalua si edad del personaje es menor que 30, si es correcto da 1 si no da 0  
      acumulador.mayoresDe30 += edad >= 30 ? 1 : 0;//Usa una expresion condicional y evalua si edad del personaje es mayor que 30, si es correcto da 1 si no da 0

      return acumulador; //retorna el arreglo
    },
    { menoresDe30: 0, mayoresDe30: 0 }//se inicia con un valor de 0 en cada parametro o propiedad
  );
  //creamos otra estadistica con .map 
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
}
