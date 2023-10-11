export function filterData(data, filterBy) {
  const familiasimpson = data.filter(filtro1 => filtro1.lastname === filterBy);
  return familiasimpson;
<<<<<<< HEAD
};
export function sortData(data, sortBy, sortOrder) {
  const sortedData = data.slice(); // Crear una copia de los datos originales
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
  return sortedData;
};
  
=======

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


>>>>>>> 23b23b898b8f4a61d26a66d4e064012c3adeaeb8
