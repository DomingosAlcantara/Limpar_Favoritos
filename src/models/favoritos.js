"use strict";
const fetch = require("node-fetch");
// const Validacoes = require("../../../../git-e-github/semana5/las-api/src/infraestrutura/validacoes");

/**
 * Funções Impuras
 * @param {*} pasta
 * @returns
 */
const mensagem = (pasta) => (quant) =>
  console.log(`Estamos na pasta ${pasta.name}, com ${quant} links.`);
const validarLink = (item) =>
  fetch(item.url).then(console.log).catch(console.log);

//** Fim das funções impuras */

const buscarPeloTipo = (tipo) => (array) =>
  array?.filter((item) => item.type === tipo);

const urlValido = (url) => url.status === 200;
const checarLinks = (array) => array.map(validarLink);
const pastaFilho = (pasta) => pasta.children;

const retornarListaDeLinks = (array) => buscarPeloTipo("url")(array);
const retornarListaDePastas = (array) => buscarPeloTipo("folder")(array);
const retornarQuantDeLinks = (array) =>
  retornarListaDeLinks(pastaFilho(array))?.length || 0;
const retornarQuantDePastas = (array) =>
  retornarListaDePastas(pastaFilho(array))?.length || 0;

const percorrerPastas = (array) => {
  array.map((pasta) => {
    const quantUrls = retornarQuantDeLinks(pasta);
    mensagem(pasta)(quantUrls);
    if (Array.isArray(pastaFilho(pasta)))
      percorrerPastas(retornarListaDePastas(pastaFilho(pasta)));
    // return retornarListaDeLinks(pastaFilho(pasta));
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
  retornarQuantDeLinks,
  retornarQuantDePastas,
  percorrerPastas,
  pastaFilho,
};
