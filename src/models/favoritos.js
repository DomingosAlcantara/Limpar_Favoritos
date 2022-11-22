class Favoritos {
  buscarPeloTipo(array) {
    return function (tipo) {
      return array.filter((item) => item.type === tipo);
    };
  }

  quantItens(array) {
    const listObjetos = this.buscarPeloTipo(array);
    //this.listObjetos(array);
    return function (tipos) {
      const objItens = {
        Pastas: listObjetos(tipos[0]).length, //Deve retornar a quantidade de pastas encontrada
        Listagem: listObjetos(tipos[0]).map((item) => item.name),
        // "Links": listObjetos(tipos[1]).length,          //Quantidade de links encontrados
        // "Lista de Links": listObjetos(tipos[1])
      };
      return objItens;
    };
  }

  retornandoApenasNome(array) {
    return array.map((item) => item.name);
  }

  checarLinks(array) {}
}

module.exports = new Favoritos();
