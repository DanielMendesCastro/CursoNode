const express = require('express');
const pessoa = require('../controller/pessoa');

const router = express.Router();

router.route('/').get(pessoa.getAll);

router.route('/:cpf').get(pessoa.get);

router.route('/').post(pessoa.post);

router.route('/').put(pessoa.put);

router.route('/:id').delete(pessoa.del);

module.exports = router;
