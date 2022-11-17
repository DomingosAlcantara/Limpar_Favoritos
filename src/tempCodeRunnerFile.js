 buscarPeloTipo(tipo) {
  return function (itens) {
    return itens.filter((item) => item.type === tipo);
  };
}