<<<<<<< HEAD
// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export function filterData(data, filterBy, value) {
    let familiasimpson = data.filter(filtro1 => filtro1.lastname === "simpson");
  console.log(familiasimpson);
    return familiasimpson;
   
  };
  export const anotherExample = () => {
    return [];
  };
  
=======
export function filterData(data, filterBy, value) {
  let familiasimpson = data.filter(filtro1 => filtro1.lastname === filterBy);
  return familiasimpson;
 
};
>>>>>>> d311f3b997a4a7a17ccc450527561aba3246dead
