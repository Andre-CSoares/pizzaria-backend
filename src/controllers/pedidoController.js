import { getPedidos, createPedidos } from "../models/pedidoModel.js";


export async function listPedido(req, res){
    const result = getPedidos();

    res.status(200).json(result);   
}

export async function newPedido(req, res) {
    const new_pedido = req.body;
    try {
        const createdPedido = await createPedidos(new_pedido); 
        res.status(200).json(createdPedido);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}