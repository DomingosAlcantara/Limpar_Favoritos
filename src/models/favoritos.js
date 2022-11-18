class Favoritos {
  buscarPeloTipo(array){
    return function (tipo){
      return array.filter((item) => item.type === tipo);
    };
  }

  quantItens(array, tipos){
    const pastas = this.buscarPeloTipo;
    const objItens = {
      "Pastas": 0,        //Deve retornar a quantidade de pastas encontrada
      "Links": 0          //Quantidade de links encontrados
    }
    return objItens;
  }
}

module.exports = new Favoritos();
