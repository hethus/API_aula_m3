import paletas from "../database";

class PaletasServices {
  listarTodas() {

    if(paletas.length === 0) {
      throw { status: 404, message: "Não há paletas cadastradas" };
    }

    return paletas;
  }

  listarUmaPaletaPorId({ id }) {
    const paletaSelecionada = paletas.find((paleta) => paleta.id === id);

    return paletaSelecionada;
  }

  criarNovaPaleta({ sabor, descricao, foto, preco }) {
    const novoId = paletas.length === 0 ? 1 : paletas[paletas.length - 1].id + 1;

    const novaPaleta = {
      id: novoId,
      sabor,
      descricao,
      foto,
      preco,
    };

    paletas.push(novaPaleta);

    return novaPaleta;
  }

  atualizarPaleta({ sabor, descricao, foto, preco, id }) {
    const paletaSelecionada = {
      id,
      sabor,
      descricao,
      foto,
      preco,
    }

    const paletaIndex = paletas.findIndex((paleta) => paleta.id === id);

    paletas[paletaIndex] = paletaSelecionada;

    return paletaSelecionada;
  }

  excluirPaleta({ id }) {
    const paletaIndex = paletas.findIndex((paleta) => paleta.id === id);

    paletas.splice(paletaIndex, 1);
  }

}

export default PaletasServices;