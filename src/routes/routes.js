import express from "express";
import { listPedido, newPedido } from "../controllers/pedidoController.js";

const routes = (app) => {
    app.use(express.json());

    app.get("/pedidos", listPedido);

    app.post("/pedidos", newPedido);
}

export default routes;