const express = require("express");
const port = process.env.PORT || 3000;

const app = express();

const paletas = [
  {
    id: 1,
    sabor: "Açaí com Leite Condensado",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/acai-com-leite-condensado.png",
    preco: 10.0,
  },
  {
    id: 2,
    sabor: "Banana com Nutella",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/banana-com-nutella.png",
    preco: 10.0,
  },
  {
    id: 3,
    sabor: "Chocolate Belga",
    descricao:
      "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
    foto: "assets/images/chocolate-belga.png",
    preco: 7.0,
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/paletas/listar-todas", (req, res) => {
  res.send(paletas);
});

app.get("/paletas/paleta/:id", (req, res) => {
  const { id } = req.params;

  const paletaSelecionada = paletas.find((paleta) => {
    return paleta.id == id;
  });

  if(paletaSelecionada == undefined){
    return res.status(404).send("Paleta não encontrada");
  }

  return res.send(paletaSelecionada);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
