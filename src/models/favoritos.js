"use strict";
const fetch = require("node-fetch");
// const Validacoes = require("../../../../git-e-github/semana5/las-api/src/infraestrutura/validacoes");

// class Favoritos {
const buscarPeloTipo = (tipo) => (array) =>
  array.filter((item) => item.type === tipo);

const retornarListaDeLinks = (array) => buscarPeloTipo("url")(array);
const retornarListaDePastas = (array) => buscarPeloTipo("folder")(array);
const urlValido = (url) => url.status === 200;

const validarLink = (item) =>
  fetch(item.url).then(console.log).catch(console.log);

const checarLinks = (array) => array.map(validarLink);
const pastaFilho = pasta => pasta.children || null;

const percorrerPastas = (array) => {
  return array.map((pasta) => {
    // let pastaFilho = pasta.children;
    let quantPastas = retornarListaDePastas(pastaFilho(pasta)).length;
    let quanUrls = retornarListaDeLinks(pastaFilho).length;
    console.log(`Estamos na pasta ${pasta.name}`);
    console.log(`Há um total de ${quantPastas} pastas, e ${quanUrls} links`);
    
    console.log(retornarListaDeLinks(pastaFilho));
    // console.log(retornarListaDePastas(array));
    // console.log(quantPastas);

    // if (quantPastas > 0) percorrerPastas(retornarListaDePastas(pastaFilho));
    if (Array.isArray(pastaFilho))
      percorrerPastas(retornarListaDePastas(pastaFilho));
  });
};

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
  retornarListaDeLinks,
  percorrerPastas,
};
