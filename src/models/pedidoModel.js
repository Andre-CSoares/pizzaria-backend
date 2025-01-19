import dbConnection from "../config/dbConfig.js";

const conexao = await dbConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"  
});

export async function getPedidos(){
    const query = "CALL get_pedidos()";
    const [rows] = await conexao.execute(query);
    return rows[0];
}

export async function createPedidos(newPedido){
    const {} = newPedido;
    const query = "CALL create_pedido(?, ?)";
    const [result] = await conexao.execute(query, [title, content]);
    return result;
}