export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const person1 = document.getElementById('root');
const ul =document.createElement('ul');
data.forEach(item =>{
const lista=document.createElement('li');
//lista  
}

)

  data.forEach(item => {
    const nombres = document.createElement('dl');
    nombres.setAttribute('itemscope', '');
    nombres.setAttribute('itemtype', 'Personaje de los Simpson');
    nombres.textContent = item.name;
    person1.appendChild(nombres);
    const imagen = document.createElement('img');
    imagen.setAttribute('src', '');
    imagen.setAttribute('alt', 'Personaje de los Simpson');
    imagen.textContent = item.imageUrl;
    person1.appendChild(imagen);
  });

  return 'example';
};


