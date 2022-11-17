const fs = require("fs");
const path = require("path");

const arqFavoritos = "../data/Bookmarks";
const isType = ["folder", "url"];

const lerArquivo = (caminho) => new Promise((resolve) => {
  fs.readFile(caminho, (_, conteudo) => {
    resolve(JSON.parse(conteudo));
  });
});

const noPrincipal = (no) => no.roots.bookmark_bar.children;

// const buscarPeloTipo = (tipo) => (itens) = itens.filter((item) => item.type === tipo);
function buscarQuant(tipo) {
  return function (itens) {
    let count = itens.filter((item) => item.type === tipo);
    return count.length;
  };
};

// TODO: Gerar objeto com a quantidade e os itens




const isFolder = (itens) => (itens.filter((item) => item.type === "folder"));

const isUrl = (itens) => (itens.filter((item) => item.type === "url"));

const caminho = path.join(__dirname, arqFavoritos);

console.log(`O arquivo esta no diretório: ${caminho}`);
const definindoTipoPasta = buscarPeloTipo(isType[0]);
const definindoTipoUrl = buscarPeloTipo(isType[1]);

lerArquivo(caminho)
  .then(noPrincipal)
  // .then(isFolder)
  .then(definindoTipoUrl)
  // .then(buscarPeloTipo(isType[1]))
  .then(console.log);
