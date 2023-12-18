const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/login', { title: 'Página de Registro' });
});

module.exports = router;
