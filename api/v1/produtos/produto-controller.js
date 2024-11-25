const produtoBusiness = require("./produto-business");

// POST - Cadastrar produto
const createProduto = async (request, h) => {
    const result = await produtoBusiness.save(request.payload);
    return h.response(result).code(201);
};

// PUT - Alterar produto
const updateProduto = async (request, h) => {
    const id = request.params.id;
    const updates = request.payload;

    const result = await produtoBusiness.update(id, updates);
    if (result) {
        return h.response(result).code(200);
    }
    return h.response({ message: "Produto não encontrado" }).code(404);
};

// DELETE - Remover produto
const deleteProduto = async (request, h) => {
    const id = request.params.id;

    const result = await produtoBusiness.remove(id);
    if (result) {
        return h.response({ message: "Produto removido com sucesso" }).code(200);
    }
    return h.response({ message: "Produto não encontrado" }).code(404);
};

// GET - Buscar produto por ID
const getProdutoPorId = async (request, h) => {
    const id = request.params.id;

    const produto = await produtoBusiness.findById(id);
    if (produto) {
        return h.response(produto).code(200);
    }
    return h.response({ message: "Produto não encontrado" }).code(404);
};

// GET - Listar produtos com filtros
const getProdutos = async (request, h) => {
    const filters = request.query;

    const produtos = await produtoBusiness.list(filters);
    return h.response(produtos).code(200);
};

module.exports = { createProduto, updateProduto, deleteProduto, getProdutoPorId, getProdutos };
