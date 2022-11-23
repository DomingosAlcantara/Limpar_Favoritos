// class Favoritos {
  const buscarPeloTipo = (array) => {
    return function (tipo) {
      return array.filter((item) => item.type === tipo);
    };
  };

  const retornandoListaDeNomes = (array) => array.map((item) => item.name);


  const quantItens = (array) => {
    const listObjetos = buscarPeloTipo(array);
    return function (tipos) {
      const objItens = {
        Pastas: listObjetos(tipos[0]).length, //Deve retornar a quantidade de pastas encontrada
        // Listagem: listObjetos(tipos[0]).map((item) => item.name),
        Listagem: retornandoApenasNome(listObjetos(tipos[0])),
        // "Links": listObjetos(tipos[1]).length,          //Quantidade de links encontrados
        // "Lista de Links": listObjetos(tipos[1])
      };
      return objItens;
    };
  };


  // checarLinks(array) {}
// }

module.exports = {
  buscarPeloTipo,
  quantItens,
  retornandoApenasNome,

};
