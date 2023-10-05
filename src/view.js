export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const person1 = document.getElementById('root');
  const ul = document.createElement('ul');//creamos el ul fuera del for para que se cree una sola vez
  data.forEach(item => {
    const lista = document.createElement('li');//creamos el li
   // lista.innerHTML = lista.innerHTML;//el li lo queremos como un elemento padre
    ul.appendChild(lista); //en mi ul, se muestran los li
    person1.appendChild(ul)//en el div con id=root, se muestra el ul, dentro de el ul ya tenemos los li
    const nombres = document.createElement('dl');
    nombres.setAttribute('itemscope', '');
    nombres.setAttribute('itemtype', 'Personaje de los Simpson');
    lista.appendChild(nombres)//dentro del li, quiero el dl
    const imagen = document.createElement('img');
    imagen.setAttribute('src', item.imageUrl);
    imagen.setAttribute('alt', 'Personaje de los Simpson');
    //  imagen.innerHTML = item.imageUrl;
    nombres.appendChild(imagen);//dentro del dl, quiero img
    const dt1 = document.createElement('dt');
    dt1.setAttribute('Nombre:', '');
    nombres.appendChild(dt1);
    const dd1 = document.createElement('dd');
    dd1.setAttribute('itemprop', "name");
    dd1.innerHTML = item.name;
    nombres.appendChild(dd1);

    //dt="Nombre:";
    // lista.appendChild(nombres);
    //  const imagen = document.createElement('img');
    // 
    // 
    // imagen.textContent = item.imageUrl;
    // person1.appendChild(imagen);


  });

  return 'example';
};


