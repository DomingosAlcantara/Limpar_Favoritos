// class Favoritos {
const buscarPeloTipo = (array) => (tipo) =>
  array.filter((item) => item.type === tipo);

const retornandoListaDeNomes = (array) => array.map((item) => item.name);

const quantItens = (tipos) => {
  return function (array) {
    const listObjetos = buscarPeloTipo(array);
    const objItens = {
      Pastas: listObjetos(tipos[0]).length, //Deve retornar a quantidade de pastas encontrada
      Links: listObjetos(tipos[1]).length, //Quantidade de links encontrados
    };
    return objItens;
  };
};

const checarLinks = (array) => {};
// }

module.exports = {
  buscarPeloTipo,
  quantItens,
  retornandoListaDeNomes,
};
