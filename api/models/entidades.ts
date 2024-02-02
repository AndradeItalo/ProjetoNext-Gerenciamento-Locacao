const Seq = require('sequelize');
const db = require('./db');


const Inquilino = db.define('Inquilino', {
    ID: {
      type: Seq.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Seq.STRING
    },
    telefone: {
      type: Seq.STRING
    },
    email: {
      type: Seq.STRING
    },
    idade: {
      type: Seq.INTEGER
    },
    CPF: {
      type: Seq.STRING
    }
  });


  const Imovel = db.define('Imovel', {
    ID: {
      type: Seq.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    contrato: {
      type: Seq.STRING
    },
    nome: {
      type: Seq.STRING
    },
    numero: {
      type: Seq.STRING
    },
    CEP: {
      type: Seq.STRING
    },
    TamanhoCasaM2: {
      type: Seq.FLOAT
    },
    NumQuartos: {
      type: Seq.INTEGER
    },
    numBanheiros: {
      type: Seq.INTEGER
    },
    areaServico: {
      type: Seq.BOOLEAN
    },
    Varanda: {
      type: Seq.BOOLEAN
    },
    ValorAluguel: {
      type: Seq.FLOAT
    },
    PendenciaFinanceira: {
      type: Seq.BOOLEAN
    },
    DataPagamento: {
      type: Seq.DATE
    }
  });

  const Pendencia = db.define('Pendencia', {
    ID: {
      type: Seq.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipoNotificacao: {
      type: Seq.STRING
    },
    descricao: {
      type: Seq.STRING
    }
  });

Inquilino.hasOne(Imovel, { foreignKey: 'InquilinoID' });
Imovel.belongsTo(Inquilino, { foreignKey: 'InquilinoID' });
  
Imovel.belongsToMany(Pendencia, { through: 'ImovelPendencias' });
Pendencia.belongsToMany(Imovel, { through: 'ImovelPendencias' });


// Sincroniza o modelo com o banco de dados (cria a tabela)
(async () => {
    try {
        await Inquilino.sync();
        await Imovel.sync();
        await Pendencia.sync();
        console.log('Tables synchronized successfully');
    } catch (error) {
        console.error('Error synchronizing tables:', error);
    }
})();

// Exportando as entidades
exports.imovelCreate = Imovel;
exports.inquilinoCreate = Inquilino;
exports.pendenciaCCreate = Pendencia;