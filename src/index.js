const fs = require("fs");
const path = require("path");
const Favoritos = require("./models/favoritos");

const arqFavoritos = "../data/Bookmarks";
const isType = ["folder", "url"];

const lerArquivo = (caminho) => new Promise((resolve) => {
  fs.readFile(caminho, (_, conteudo) => {
    resolve(JSON.parse(conteudo));
  });
});

const noPrincipal = (no) => no.roots.bookmark_bar.children;

// TODO: Gerar objeto com a quantidade e os itens

const caminho = path.join(__dirname, arqFavoritos);

console.log(`O arquivo esta no diretório: ${caminho}`);

lerArquivo(caminho)
  .then(noPrincipal)
  .then(array => Favoritos.quantItens(array)(isType))
  .then(console.log);
