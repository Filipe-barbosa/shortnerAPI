import express from "express";
import { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});
app.listen(3333, () => {
  console.log("Meu primeiro projeto BackEnd");
});
