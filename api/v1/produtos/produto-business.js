const produtoModel = require('./produto-model');

const save = async (produto) => {
    return await produtoModel.Produto.create(produto);
};

const update = async (id, updates) => {
    const produto = await produtoModel.Produto.findByPk(id);
    if (produto) {
        return await produto.update(updates);
    }
    return null;
};

const remove = async (id) => {
    const produto = await produtoModel.Produto.findByPk(id);
    if (produto) {
        await produto.destroy();
        return true;
    }
    return false;
};

const findById = async (id) => {
    return await produtoModel.Produto.findByPk(id);
};

const list = async (filters) => {
    const where = {};
    if (filters.categoria) where.categoria = filters.categoria;
    if (filters.nome) where.nome = { [Op.iLike]: `%${filters.nome}%` };

    return await produtoModel.Produto.findAll({ where });
};

module.exports = { save, update, remove, findById, list };
