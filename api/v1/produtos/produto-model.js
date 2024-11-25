const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nome'
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
        field: 'descricao'
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'categoria'
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'marca'
    },
    preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: 'preco'
    },
    quantidadeEstoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'quantidade_estoque'
    },
    codigoBarras: {
        type: Sequelize.STRING(13),
        allowNull: false,
        field: 'codigo_barras'
    },
    dimensoes: {
        type: Sequelize.JSONB,
        allowNull: false,
        field: 'dimensoes'
    },
    peso: {
        type: Sequelize.JSONB,
        allowNull: false,
        field: 'peso'
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: [['ativo', 'inativo']]
        },
        field: 'status'
    },
    dataCadastro: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'data_cadastro'
    }
}, {
    tableName: 'produtos',
    timestamps: false
});

module.exports = { Produto };
