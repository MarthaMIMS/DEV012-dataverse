export function filterData(data, filterBy) {
  const familiasimpson = data.filter(filtro1 => filtro1.lastname === filterBy);
  return familiasimpson;
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
  
