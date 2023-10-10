export function filterData(data, filterBy, value) {
  const familiasimpson = data.filter(filtro1 => filtro1.lastname === filterBy);
  return familiasimpson;

};
export function sortData(data, sortBy, sortOrder) {
  sortBy = data.map(function (datos){
  return datos.name;
  
});
const sortnombres = sortBy.sort();//(function (primero,segundo){
//if (primero.name> segundo.name){
//return 1
//}
//else{
///return -1
//}
console.log(sortnombres);
};//);

//const orden=data.sort(filtro2 => filtro2.name===sortBy);

//return orden;
//};