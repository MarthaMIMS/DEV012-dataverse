export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const person1= document.getElementById('root');


 data.forEach(item => {
  const nombres=document.createElement('dl');
  nombres.setAttribute('itemscope','');
  nombres.setAttribute('itemtype','HomeroSimpsons');
  nombres.textContent=item.name;
  person1.appendChild(nombres);

  /*const anio=document.createElement('dt')
  anio.textContent="Año de Nacimiento";
  const descripcion=document.createElement('dd')
  descripcion.textContent=item.description;
  person1.append(nombres,anio,descripcion);*/

});

  return 'example';
};


