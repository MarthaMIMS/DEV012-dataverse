import { filterData, suma,sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

//const filterData = require('./dataFunctions');

describe('Filtros', () => {

  it('la aplicacion filtra solo el apellido', () => {
    const datos = [
      { firstname: "Homero", lastname: "simpson" },
      { firstname: "Ned", lastname: "flanders" },
      { firstname: "Waylon Smithers", lastname: "amistades" },
    ];
    const filtroApellidos = filterData(datos, "simpson")
    expect(filtroApellidos).toEqual([{ firstname: 'Homero', lastname: 'simpson' }]);
  });
  it('la aplicacion filtra ascendente y descendente', () => {
    const ordenamiento = [
      {num:3, nombre: "Seymour Skinner"},
      {num:2, nombre: "Marge Simpson"},
      {num:1, nombre: "Homero Simpson"},
    ];
    const resultadoEsperado =[
      {num:1, nombre: "Homero Simpson"},
      {num:2, nombre: "Marge Simpson"},
      {num:3, nombre: "Seymour Skinner"},
    ];
    const filtroOrden = sortData(ordenamiento, "nombre", "asc")
    expect(filtroOrden).toEqual(resultadoEsperado);
  });
});

//suma = require('./dataFunctions');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
