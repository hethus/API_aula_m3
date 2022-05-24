import app from "./app";
import { conectarDatabase } from "./database";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  conectarDatabase();
  console.log(`app listening on port ${port}!`);
});