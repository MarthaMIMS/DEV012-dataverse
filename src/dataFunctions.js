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
    (acumulador, personaje) => {
      const edad = parseInt(personaje.edad);//convierte el valor en un numero entero 
      acumulador.menoresDe30 += edad < 30 ? 1 : 0;// Usa una expresion condicional y evalua si edad del personaje es menor que 30, si es correcto da 1 si no da 0  
      acumulador.mayoresDe30 += edad >= 30 ? 1 : 0;// Usa una expresion condicional y evalua si edad del personaje es mayor que 30, si es correcto da 1 si no da 0

      return acumulador;//retorna el arreglo 
    },
    { menoresDe30: 0, mayoresDe30: 0 }//devuelve el objeto que contiene dos propiedades 

  );

  const datosTransformados = data.map(personaje => ({
    ...personaje,//copia todas las propiedades del objeto usando el operador ...personaje 
    edadDoble: parseInt(personaje.edad) * 2,//Es para transformar los datos originales en un nuevo arreglo de datos con una propiedad adicional.
  }));

  return { ...estadistica, datosTransformados };//retorna las estadisticas de los datos transformados 
}


