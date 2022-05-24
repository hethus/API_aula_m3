import { connect } from "mongoose";

export const conectarDatabase = async () => {
  connect("mongodb://localhost:27017/Elgeladon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MongoDB conectado")
  }).catch(err => {
    console.log(`Erro na conexão com o MongoDB: ${err}`)
  });
};