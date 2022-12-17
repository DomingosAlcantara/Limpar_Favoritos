"use strict";
const fetch = require("node-fetch");
// const Validacoes = require("../../../../git-e-github/semana5/las-api/src/infraestrutura/validacoes");

const buscarPeloTipo = (tipo) => (array) =>
  array?.filter((item) => item.type === tipo);

const retornarListaDeLinks = (array) => buscarPeloTipo("url")(array);
const retornarListaDePastas = (array) => buscarPeloTipo("folder")(array);
const urlValido = (url) => url.status === 200;

const validarLink = (item) =>
  fetch(item.url).then(console.log).catch(console.log);

const checarLinks = (array) => array.map(validarLink);
const pastaFilho = (pasta) => pasta.children;

const percorrerPastas = (array) => {
  array.map((pasta) => {
    const quantUrls = retornarListaDeLinks(pastaFilho(pasta))?.length || 0;
    console.log(`Estamos na pasta ${pasta.name}, com ${quantUrls} links`);

    if (Array.isArray(pastaFilho(pasta)))
      percorrerPastas(retornarListaDePastas(pastaFilho(pasta)));
    return retornarListaDeLinks(pastaFilho(pasta));
  });
};

const checarTipo = (tipo) => {
  return (array) => {
    const listObjetos = buscarPeloTipo(array);
    return listObjetos(tipo);
  };
};

module.exports = {
  buscarPeloTipo,
  checarTipo,
  retornarListaDeLinks,
  percorrerPastas,
  pastaFilho,
};
