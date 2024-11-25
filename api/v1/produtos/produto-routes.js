const produtoController = require("./produto-controller");
const produtoSchema = require("./produto-schema");

const baseVersion = '/v1';

const routes = [
    {
        method: "GET",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.getProdutos,
            validate: produtoSchema.consultarProdutos
        }
    },
    {
        method: "GET",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.produtoPorId,
            validate: produtoSchema.consultaPorId
        }
    },
    {
        method: "POST",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.createProduto,
            validate: produtoSchema.createProduto
        }
    }
];

module.exports = routes;
