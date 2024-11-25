const produtoController = require("./produto-controller");
const produtoSchema = require("./produto-schema");

const baseVersion = '/v1';

const routes = [
    // a. POST para cadastrar 1 produto por vez
    {
        method: "POST",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.createProduto,
            validate: produtoSchema.createProduto
        }
    },

    // b. PUT para alterar os dados de um produto
    {
        method: "PUT",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.updateProduto,
            validate: produtoSchema.updateProduto
        }
    },

    // c. DELETE para remover o produto
    {
        method: "DELETE",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.deleteProduto,
            validate: produtoSchema.deleteProduto
        }
    },

    // d. GET por id
    {
        method: "GET",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.getProdutoPorId,
            validate: produtoSchema.getProdutoPorId
        }
    },

    // e. GET com filtros (categoria e nome)
    {
        method: "GET",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.getProdutos,
            validate: produtoSchema.getProdutos
        }
    }
];

module.exports = routes;
