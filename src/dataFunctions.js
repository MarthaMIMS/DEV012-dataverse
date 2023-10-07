export function filterData(data, filterBy, value) {
  let familiasimpson = data.filter(filtro1 => filtro1.lastname === filterBy);
  return familiasimpson;
 
};