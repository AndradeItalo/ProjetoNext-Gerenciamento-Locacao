const Sequelize = require('sequelize');

const conexao = new Sequelize("modelos", "root" , "1234", {
    host: "localhost",
    dialect: 'mysql'
});

// Pra testar se a conexao deu certo
conexao.authenticate()
.then(function(){
    console.log('Deu certo');
}).catch(function(){
    console.log('Deu errado');
})

module.exports = conexao;
