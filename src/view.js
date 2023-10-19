export const renderItems = (data) => {

  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const ul = document.createElement('ul');//creamos el ul fuera del for para que se cree una sola vez
  data.forEach(data => {
    const lista = document.createElement('li');
    lista.classList.add("listas");
    lista.setAttribute('itemscope', '');
    lista.setAttribute('itemtype','');
    lista.setAttribute('itemprop', data.id);
    ul.appendChild(lista);

    const nombres = document.createElement('dl');
    nombres.setAttribute('itemscope', '');
    nombres.setAttribute('itemtype', 'Personaje de los Simpson');
    lista.appendChild(nombres);

    const imagen = document.createElement('img');
    imagen.setAttribute('src', data.imageUrl);
    imagen.setAttribute('alt', 'Personaje de los Simpson');
    imagen.setAttribute('width', '250');
    imagen.setAttribute('height', '180');
    nombres.appendChild(imagen);

    const dt1 = document.createElement('dt');
    dt1.innerHTML = 'Nombre:';
    nombres.appendChild(dt1);

    const dd1 = document.createElement('dd');
    dd1.setAttribute('itemprop', 'name');
    dd1.innerHTML = data.name;
    nombres.appendChild(dd1);

    const dt2 = document.createElement('dt');
    dt2.innerHTML = 'Edad:';
    nombres.appendChild(dt2);

    const dd2 = document.createElement('dd');
    dd2.setAttribute('itemprop', 'edad');
    dd2.innerHTML = data.edad;
    nombres.appendChild(dd2);
  });

  return ul;
};
