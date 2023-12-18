const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index', { title: 'Página Principal' });
});

router.get('/about', (req, res) => {
  res.render('pages/about', { title: 'Acerca de Nosotros' });
});

router.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Página de Contacto' });
});

router.get('/login', (req, res) => {
  res.render('pages/login', { title: 'Página de Registro' });
});

module.exports = router;
