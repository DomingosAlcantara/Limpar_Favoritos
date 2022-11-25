const fetch = require("node-fetch");
const validacoes = require("../../../../git-e-github/semana5/las-api/src/infraestrutura/validacoes");

// class Favoritos {
const buscarPeloTipo = (array) => (tipo) =>
  array.filter((item) => item.type === tipo);

const retornandoListaDeNomes = (array) => array.map((item) => item.name);

const checarLinks = (array) => {};

const quantItens = (tipo) => {
  return (array) => {
    const listObjetos = buscarPeloTipo(array);
    const objItens = {
      // Pastas: listObjetos(tipos[0]).length, //Deve retornar a quantidade de pastas encontrada
      Links: retornandoListaDeNomes(listObjetos(tipo)), //Quantidade de links encontrados
    };
    return objItens;
  };
};

// }

module.exports = {
  buscarPeloTipo,
  quantItens,
  retornandoListaDeNomes,
};
