const fetch = require("node-fetch");
const Validacoes = require("../../../../git-e-github/semana5/las-api/src/infraestrutura/validacoes");

// class Favoritos {
const buscarPeloTipo = (tipo) => (array) =>
  array.filter((item) => item.type === tipo);

const retornandoListaDeNomes = (array) => array.map((item) => item.name);

const checarLinks = (array) => {
  array.map((item) => {
    item.ativo = Validacoes.validarUrl(item.url);
  });
};

const percorrerPastas = (array) => {};

const checarTipo = (tipo) => {
  return (array) => {
    const listObjetos = buscarPeloTipo(array);
    // const objItens = {
    //   Pastas: listObjetos(tipos[0]).length, //Deve retornar a quantidade de pastas encontrada
    //   Links: retornandoListaDeNomes(listObjetos(tipo)), //Quantidade de links encontrados
    // };
    // return objItens;
    return listObjetos(tipo);
  };
};

// }

module.exports = {
  buscarPeloTipo,
  checarTipo,
  retornandoListaDeNomes,
};
