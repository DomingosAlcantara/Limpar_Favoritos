class Favoritos {
  buscarPeloTipo(array){
    return function (tipo){
      return array.filter((item) => item.type === tipo);
    };
  }

  quantItens(array){
    const objetos = this.buscarPeloTipo(array);
    return function (tipos) {
      const objItens = {
        "Pastas": objetos(tipos[0]),        //Deve retornar a quantidade de pastas encontrada
        "Links": objetos(tipos[1])          //Quantidade de links encontrados
      }
    }
    return objItens;
  }
}

module.exports = new Favoritos();
