const pessoa = require('../repository/pessoa');

async function getAll () {
  var pessoas = await pessoa.getAll();

  if (!pessoas) {
    return {
      statusCode: 400,
      msg: 'Erro ao buscar pessoas'
    };
  }

  return pessoas;
}

async function get (cpf) {
  var prn = await pessoa.get(cpf);

  if (!prn) {
    return {
      statusCode: 400,
      msg: 'Erro: pessoa não encontrada'
    };
  }

  return prn;
}

async function post (p) {
  var prn = await pessoa.post(p);

  if (!prn) {
    return {
      statusCode: 400,
      msg: 'Erro: ao inserir a pessoa ' + p.nome
    };
  }

  return prn;
}

async function put (p) {
  var prn = await pessoa.put(p);

  if (!prn) {
    return {
      statusCode: 400,
      msg: 'Erro: pessoa não encontrada'
    };
  }

  return prn;
}

async function del (codPessoa) {
  var prn = await pessoa.del(codPessoa);

  if (!prn) {
    return {
      statusCode: 400,
      msg: 'Erro: pessoa não encontrada'
    };
  }

  return prn;
}
module.exports = { getAll, get, post, put, del };
