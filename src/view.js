export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const person1 = document.getElementById('root');

  person1.innerHTML = '';
  const footer = document.createElement('footer');
  footer.innerHTML = 'Autoras: Martha Melitón & Daniela Bustamante';
  document.body.appendChild(footer);
  const ul = document.createElement('ul');//creamos el ul fuera del for para que se cree una sola vez

  data.forEach(item => {
    const lista = document.createElement('li');//creamos el li
    ul.appendChild(lista); //en mi ul, se muestran los li
    person1.appendChild(ul)//en el div con id=root, se muestra el ul, dentro de el ul ya tenemos los li
    const nombres = document.createElement('dl');
    nombres.setAttribute('itemscope', '');
    nombres.setAttribute('itemtype', 'Personaje de los Simpson');
    lista.appendChild(nombres)//dentro del li, quiero el dl
    const imagen = document.createElement('img');
    imagen.setAttribute('src', item.imageUrl);
    imagen.setAttribute('alt', 'Personaje de los Simpson');
    imagen.setAttribute('width', '250');
    imagen.setAttribute('height', '180');
    nombres.appendChild(imagen);//dentro del dl, quiero img
    const dt1 = document.createElement('dt');
    dt1.innerHTML = 'Nombre:';
    nombres.appendChild(dt1);
    const dd1 = document.createElement('dd');
    dd1.setAttribute('itemprop', "name");
    dd1.innerHTML = item.name;
    nombres.appendChild(dd1);
    const dt2 = document.createElement('dt');
    dt2.innerHTML = 'Edad:';
    nombres.appendChild(dt2);
    const dd2 = document.createElement('dd');
    dd2.setAttribute('itemprop', "edad");
    dd2.innerHTML = item.edad;
    nombres.appendChild(dd2);

  });
  return 'example';
};
