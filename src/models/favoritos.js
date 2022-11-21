class Favoritos {
  buscarPeloTipo(array){
    return function (tipo){
      return array.filter((item) => item.type === tipo);
    };
  }
  
  
  quantItens(array){
    const listObjetos = this.buscarPeloTipo(array);
    return function (tipos) {
      const objItens = {
        "Pastas": listObjetos(tipos[0]).length,        //Deve retornar a quantidade de pastas encontrada
        "Lista de Pastas": listObjetos(tipos[0]),
        "Links": listObjetos(tipos[1]).length,          //Quantidade de links encontrados
        "Lista de Links": listObjetos(tipos[1])
      }
      return objItens;
    }
  }
}

module.exports = new Favoritos();
