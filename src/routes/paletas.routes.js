import { Router } from "express";
import PaletasControllers from "../controllers/paletas.controllers";
import verificarIdPaletaMiddleware from "../middlewares/verificarIdPaleta.middleware";
import verificarDadosPaletaMiddleware from "../middlewares/verificarDadosPaleta.middleware";

const paletasRouter = Router();
const paletasControllers = new PaletasControllers();

paletasRouter.get("/listar-todas", paletasControllers.listarTodas);
paletasRouter.get("/paleta/:id", verificarIdPaletaMiddleware, paletasControllers.listarUmaPaletaPorId);
paletasRouter.post("/criar-paleta", verificarDadosPaletaMiddleware, paletasControllers.criarNovaPaleta);
paletasRouter.put("/atualizar-paleta/:id", verificarIdPaletaMiddleware, verificarDadosPaletaMiddleware, paletasControllers.atualizarPaleta);
paletasRouter.delete("/excluir-paleta/:id", verificarIdPaletaMiddleware, paletasControllers.excluirPaleta);

export default paletasRouter;