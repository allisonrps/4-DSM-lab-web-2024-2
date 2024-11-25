const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Aluno = database.sequelize.define('Aluno', {
   id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
    field: 'cod_aluno'
   },
   nome: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'nome'
   },
   idade: {
    type: Sequelize.INTEGER, 
    allowNull: true
   },
   status: {
    type: Sequelize.STRING,
    allowNull: true, 
    defaultValue: 'ATIVO' // Valor padrão
}
}, {
    tableName: 'alunos',
    timestamps: false //desabilita o createdAt e updatedAt do sequelize
});

module.exports = {Aluno};