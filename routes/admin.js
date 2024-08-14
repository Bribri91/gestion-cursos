const express = require('express');
const router = express.Router();

// Renderizar el formulario de login
router.get('/login', (req, res) => {
    res.render('admin-login'); 
});

// ruta para cerrar sesión
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
      if (err) {
        return res.redirect('/courses'); // Si hay un error, redirige a la página de cursos
      }
      res.clearCookie('connect.sid'); // Elimina la cookie de sesión
      res.redirect('/admin/login'); // Redirige al formulario de login
    });
  });
  
module.exports = router;
