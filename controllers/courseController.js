const axios = require('axios');
const NodeCache = require('node-cache');
const Course = require('../models/Course');

// Crear instancia de NodeCache con un TTL de 1 hora (3600 segundos)
const exchangeRateCache = new NodeCache({ stdTTL: 3600 });

// Obtener todos los cursos y renderizar la página de cursos
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.render('courses', { courses });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Mostrar los cursos en la página principal con precios en diferentes monedas
exports.showCoursesOnIndex = async (req, res) => {
  try {
    const courses = await Course.find();
    const selectedCurrency = req.query.currency || 'CRC'; // Moneda base en colones costarricenses

    // Verificar si los tipos de cambio están en caché
    let exchangeRates = exchangeRateCache.get('exchangeRates');
    
    if (!exchangeRates) {
      // Si no están en caché, hacer una petición a la API y almacenarlos en caché
      const response = await axios.get('https://v6.exchangerate-api.com/v6/705b48d044b3eca5a0bbb81f/latest/CRC');
      exchangeRates = response.data.conversion_rates;
      exchangeRateCache.set('exchangeRates', exchangeRates); // Guardar en caché
    }

    // Lista de monedas soportadas
    const supportedCurrencies = ['USD', 'EUR', 'MXN', 'ARS', 'COP'];

    // Convertir los precios de los cursos a la moneda deseada
    const coursesWithConvertedPrices = courses.map(course => {
      return {
        ...course._doc,
        priceInSelectedCurrency: (course.price * exchangeRates[selectedCurrency]).toFixed(2)
      };
    });

    res.render('index', { courses: coursesWithConvertedPrices, currency: selectedCurrency, supportedCurrencies });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Crear un nuevo curso
exports.createCourse = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const newCourse = new Course({ title, description, price });
    await newCourse.save();
    res.redirect('/courses');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Actualizar un curso existente
exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;
    await Course.findByIdAndUpdate(id, { title, description, price });
    res.redirect('/courses');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// Eliminar un curso
exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.redirect('/courses');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
