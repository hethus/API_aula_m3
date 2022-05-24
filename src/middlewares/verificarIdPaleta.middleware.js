import Paleta from "../models/paleta.model";
import mongoose from "mongoose";

const verificarIdPaletaMiddleware = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).send("ID inválido!");
  }

  const paleta = await Paleta.findById(id);

  if (!paleta) {
    return res.status(404).send('Paleta não encontrada');
  }

  next();
}

export default verificarIdPaletaMiddleware;