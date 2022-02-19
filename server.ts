import { Application } from "express";
import app from "./app";

class Server {
  public app: Application;
  constructor() {
    this.app = app;
  }
}

const server = new Server().app;
const host = "http://localhost";
const port = process.env.port || 3000;
const statusListener = `Server Running at ${host}:${port}`;

server.listen(port, () => {
  console.log(`${statusListener}`);
});
