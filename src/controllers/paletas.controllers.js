import { response } from "express";
import PaletasServices from "../services/paletas.service";

const paletasServices = new PaletasServices();

class PaletasControllers {
  listarTodas(req, res) {
  
    try{
      const paletas = paletasServices.listarTodas();

      res.send(paletas);
    }catch(error){
      res.status(error.status).send(error.message);
    }
  }

  listarUmaPaletaPorId(req, res) {
  
    const id = +req.params.id;


    const paleta = paletasServices.listarUmaPaletaPorId({ id });

    res.send(paleta);

  }

  criarNovaPaleta(req, res) {
    
    const { sabor, descricao, foto, preco } = req.body;

    const novaPaleta = paletasServices.criarNovaPaleta({ sabor, descricao, foto, preco });
  
    res.status(201).send(novaPaleta);
    
  }

  atualizarPaleta(req, res) {
      
    const { sabor, descricao, foto, preco } = req.body;
    
    const id = +req.params.id;

    const paletaSelecionada = paletasServices.atualizarPaleta({ sabor, descricao, foto, preco, id });

    res.send(paletaSelecionada);
  }

  excluirPaleta(req, res) {
        
    const id = +req.params.id;
  
    paletasServices.excluirPaleta({ id });
  
    res.sendStatus(204);
  }
}

export default PaletasControllers;