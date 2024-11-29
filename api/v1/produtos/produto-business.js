const { Op } = require('sequelize'); // Importando operadores do Sequelize
const produtoModel = require('./produto-model');

// Criar um produto
const save = async (produto) => {
    return await produtoModel.Produto.create(produto);
};

// Atualizar um produto por ID
const update = async (id, updates) => {
    const produto = await produtoModel.Produto.findByPk(id);
    if (produto) {
        return await produto.update(updates);
    }
    return null;
};

// Remover um produto por ID
const remove = async (id) => {
    const produto = await produtoModel.Produto.findByPk(id);
    if (produto) {
        await produto.destroy();
        return true;
    }
    return false;
};

// Buscar um produto por ID
const findById = async (id) => {
    return await produtoModel.Produto.findByPk(id);
};

// Listar produtos com filtros
const list = async (filters) => {
    const where = {};

    // Filtro por categoria
    if (filters.categoria) {
        where.categoria = {
            [Op.like]: `%${filters.categoria}%` // Busca parcial por categoria
        };
    }

    // Filtro por nome
    if (filters.nome) {
        where.nome = {
            [Op.like]: `%${filters.nome}%` // Busca parcial por nome
        };
    }

    // Consultar produtos com os filtros aplicados
    return await produtoModel.Produto.findAll({ where });
};

module.exports = { save, update, remove, findById, list };
