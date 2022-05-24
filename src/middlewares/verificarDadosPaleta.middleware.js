const verificarIdPaletaMiddleware = (req, res, next) => {
  const { sabor, descricao, foto, preco } = req.body;

  if(!sabor || !descricao || !foto || !preco) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  }

  next();
}

export default verificarIdPaletaMiddleware;