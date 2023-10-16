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

  
export  function computeStats(data) {
    // Obtener un array con solo las edades
    
    const edades = data.map(character => parseInt(character.edad));
  
    // Inicializar contadores
    const initialStats = {
      mayoresDe30: 0,
      menoresDe30: 0,
    };
  
    // Calcular 
    let ageStats=edades.slice();
   ageStats = edades.reduce((stats, edad) => {
      if (edad > 30) {
        stats.mayoresDe30++;
      } else {
        stats.menoresDe30++;
      }
  
      return stats;
    }, initialStats);
  
    
  
    return ageStats;
  }
  
 
 
/*const resultado=data.map(edades =>({
  edadd: edades.edad
  
     }))
     
     resultado.reduce((total,edadd )=>total+edadd.edad,0 )
  
};
  
return resultado.slice();*/