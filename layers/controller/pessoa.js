const pessoa = require('../service/pessoa');
const config = require('../../config/env');

async function getAll (req, res) {
  return await pessoa
    .getAll()
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}
async function get (req, res) {
  return await pessoa
    .get(req.params.cpf)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send(q);
    });
}

async function post (req, res) {
  return await pessoa
    .post(req.body.pessoa)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send('Ok');
    });
}

async function put (req, res) {
  return await pessoa
    .put(req.body.pessoa)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send('Ok');
    });
}

async function del (req, res) {
  return await pessoa
    .del(req.params.id)
    .catch(err => {
      res.status(err.statusCode || 500).send(err);
    })
    .then(q => {
      return res.status(200).send('Ok');
    });
}

module.exports = { getAll, get, post, put, del };
