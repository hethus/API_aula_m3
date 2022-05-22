import express from "express";
import cors from "cors";
import paletasRouter from "./routes/paletas.routes";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/paletas", paletasRouter);

export default app;
