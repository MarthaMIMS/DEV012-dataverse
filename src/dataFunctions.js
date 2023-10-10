export function filterData(data, filterBy) {
  const familiasimpson = data.filter(filtro1 => filtro1.lastname === filterBy);
  return familiasimpson;

};
function filterSort(data, sortBy, sortOrder) {
  // Checamos que sortOrder sea "asc" o "desc"
  if (sortOrder !== "asc" && sortOrder !== "desc") {

  }

  // Utilizamos un bucle for para aplicar la ordenación en función de sortBy y sortOrder
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      const itemA = data[i];
      const itemB = data[j];
      const valueA = itemA[sortBy];
      const valueB = itemB[sortBy];

      if ((sortOrder === "asc" && valueA > valueB) || (sortOrder === "desc" && valueA < valueB)) {
        // Intercambiar elementos si sortOrder es "asc" y valueA es mayor o
        // si sortOrder es "desc" y valueA es menor
        data[i] = itemB;
        data[j] = itemA;
      }
    }
  }

  return data;
}

