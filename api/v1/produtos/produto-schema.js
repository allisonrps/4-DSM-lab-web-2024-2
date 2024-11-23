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
            .min(5)
            .required(),
        categoria: Joi
            .string()
            .required(),
        marca: Joi
            .string()
            .required(),
        preco: Joi
            .number()
            .precision(2)
            .positive()
            .required(),
        quantidadeEstoque: Joi
            .number()
            .integer()
            .positive()
            .required(),
        codigoBarras: Joi
            .string()
            .length(13)  // código de barras com 13 caracteres
            .required(),
        dimensoes: Joi.object({
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
                .required(),
            unidadeMedida: Joi
                .string()
                .valid("cm", "mm", "m", "in", "ft")
                .required()  // Unidades de medida válidas
        }).required(),
        peso: Joi.object({
            valor: Joi
                .number()
                .positive()
                .required(),
            unidadeMedida: Joi
                .string()
                .valid("kg", "g", "lb", "oz")
                .required()  // Unidades de medida válidas para peso
        }).required(),
        status: Joi
            .string()
            .valid('ativo', 'inativo')
            .required(),
        dataCadastro: Joi
            .string()
            .isoDate()
            .required()
    })
};

module.exports = { createProduto };
