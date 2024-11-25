const Joi = require("joi");



const createProduto = {
    payload: Joi.object({
        id: Joi
            .string()
            .required(),
        nome: Joi
            .string()
            .min(2)
            .required(),
        descricao: Joi
            .string()
            .required(),
        categoria: Joi
            .string()
            .required(),
        marca: Joi
            .string()
            .required(),
        preco: Joi
            .number()
            .positive()
            .required(),
        quantidadeEstoque: Joi
            .number()
            .integer()
            .positive()
            .required(),
        codigoBarras: Joi
            .string()
            .length(13)
            .required(),
        dimensoes: Joi
            .object({
                altura: Joi
                    .number()
                    .positive()
                    .required(),
                largura: Joi
                    .number()
                    .positive()
                    .required(),
                profundidade: Joi
                    .number()
                    .positive()
                    .required()
            })
            .required(),
        peso: Joi
            .object({
                valor: Joi
                    .number()
                    .positive()
                    .required(),
                unidade: Joi
                    .string()
                    .valid("kg", "g", "lb")
                    .required()
            })
            .required(),
        status: Joi
            .string()
            .valid("ativo", "inativo")
            .required(),
        dataCadastro: Joi
            .date()
            .required()
    })
};





const updateProduto = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    }),
    payload: Joi.object({
        id: Joi
            .string(),
        nome: Joi
            .string()
            .min(2),
        descricao: Joi
            .string(),
        categoria: Joi
            .string(),
        marca: Joi
            .string(),
        preco: Joi
            .number()
            .positive(),
        quantidadeEstoque: Joi
            .number()
            .integer()
            .positive(),
        codigoBarras: Joi
            .string()
            .length(13),
        dimensoes: Joi
            .object({
                altura: Joi
                    .number()
                    .positive(),
                largura: Joi
                    .number()
                    .positive(),
                profundidade: Joi
                    .number()
                    .positive()
            }),
        peso: Joi
            .object({
                valor: Joi
                    .number()
                    .positive(),
                unidade: Joi
                    .string()
                    .valid("kg", "g", "lb")
            }),
        status: Joi
            .string()
            .valid("ativo", "inativo"),
        dataCadastro: Joi
            .date()
    })
    .min(1) // Permite atualizar pelo menos um campo
};





const deleteProduto = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
};





const getProdutoPorId = {
    params: Joi.object({
        id: Joi
            .string()
            .required()
    })
};





const getProdutos = {
    query: Joi.object({
        categoria: Joi
            .string()
            .optional(),
        nome: Joi
            .string()
            .optional()
    })
};





module.exports = {
    createProduto,
    updateProduto,
    deleteProduto,
    getProdutoPorId,
    getProdutos
};

