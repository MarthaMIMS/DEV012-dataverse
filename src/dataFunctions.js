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

      // Si sortOrder no es "asc" ni "desc", no se aplica ordenamiento
      return 0;
    });
  }

  return sortedData;
}


