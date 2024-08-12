// /middleware/auth.js
module.exports = function(req, res, next) {
  // Verifica si la sesión está autenticada
  if (req.session.isAuthenticated) {
      return next(); // Si está autenticado, continúa
  }

  // Si la sesión ha expirado o no está autenticada, verifica la contraseña
  const password = req.body.password || req.query.password;

  if (password === process.env.ADMIN_PASSWORD) {
      // Si la contraseña es correcta, marca la sesión como autenticada
      req.session.isAuthenticated = true;
      return next();
  } else {
      // Si la sesión ha expirado o la contraseña es incorrecta, redirige al login
      res.redirect('/admin/login?error=Acceso denegado: contraseña incorrecta');
  }
};


/*
module.exports = function(req, res, next) {
  // Verifica si la sesión ya está autenticada
  if (req.session.isAuthenticated) {
    return next(); // Si está autenticado, continúa a la siguiente función middleware o ruta
  }

  // Si no está autenticado, verifica la contraseña
  const password = req.body.password || req.query.password;
  const fixedPassword = process.env.ADMIN_PASSWORD;

  if (password === fixedPassword) {
    // Si la contraseña es correcta, marca la sesión como autenticada
    req.session.isAuthenticated = true;
    return next(); // Continúa a la siguiente función middleware o ruta
  } else {
    // Si la contraseña es incorrecta, redirige al formulario de login con un mensaje de error
    res.redirect('/admin/login?error=Acceso denegado: contraseña incorrecta');
  }
};
*/
