cd "C:\Users\Alexander\Desktop\Posgrado\Proyectos de Programación\FullStak 2\gestion-cursos"

Gestión de Cursos
Este proyecto es una aplicación web de gestión de cursos que permite a los usuarios agregar, actualizar, eliminar y ver cursos. La aplicación está construida con Node.js, Express, y MongoDB, y utiliza EJS para las vistas. Además, incluye la funcionalidad de mostrar los precios de los cursos en diferentes monedas. Este proyecto fue generado utilizando `express-generator`.
Características
• Agregar Cursos: Los usuarios pueden agregar nuevos cursos especificando el título, la descripción y el precio.
• Actualizar Cursos: Los usuarios pueden actualizar la información de los cursos existentes.
• Eliminar Cursos: Los usuarios pueden eliminar cursos de la lista.
• Ver Cursos: Los cursos se muestran en la página principal, permitiendo a los usuarios ver el título, la descripción y el precio de cada curso.
• Conversión de Precios: Permite a los usuarios ver los precios de los cursos en diferentes monedas (USD, EUR, MXN, ARS, COP).
• Moneda Base: Los precios se almacenan en colones costarricenses (CRC).
• Selector de Moneda Accesible: Los usuarios pueden seleccionar la moneda en la que desean ver los precios.
Requisitos Previos
• Node.js (versión 12 o superior)
• MongoDB (local o en la nube)
Instalación
1. 
Clona el repositorio:
git clone https://github.com/Bribri91/gestion-cursos.git
2. 
Navega al directorio del proyecto:
cd gestion-cursos
3. 
Instala las dependencias:
npm install
4. 
Configura las variables de entorno:
Crea un archivo `.env` en la raíz del proyecto y define las siguientes variables:
MONGO_URI=mongodb://tu-usuario:tu-contraseña@localhost:27017/gestion-cursos
PORT=3000
ADMIN_PASSWORD=
SESSION_SECRET=
Ajusta `MONGO_URI` según tu configuración de MongoDB.
Define la contraseña para ADMIN_PASSWORD y la cadena para SESSION_SECRET. 
Uso
1. 
Inicia la aplicación:
npm run dev
La aplicación estará disponible en `http://localhost:3000`.
2. 
Navega a la aplicación:
Abre tu navegador y visita `http://localhost:3000` para ver la lista de cursos y gestionar el contenido.
Uso del Selector de Moneda
El selector de moneda en la página principal permite a los usuarios cambiar la moneda en la que se muestran los precios de los cursos. La conversión se realiza utilizando la API de ExchangeRate-API, y los tipos de cambio se almacenan en caché durante 1 hora para optimizar el rendimiento.
Accesibilidad
• El selector de moneda es completamente accesible, permitiendo la navegación con el teclado y el uso de lectores de pantalla.
• El formulario se envía al presionar `Enter` después de seleccionar la moneda deseada.
Estructura del Proyecto
Este proyecto fue generado utilizando `express-generator`, por lo que sigue la estructura típica de un proyecto Express.
/gestion-cursos
├── /bin
│   └── www                    # Punto de entrada de la aplicación
├── /config
│   └── database.js            # Conexión a la base de datos MongoDB
├── /controllers
│   └── courseController.js    # Lógica para manejar las operaciones CRUD
├── /models
│   └── Course.js              # Definición del modelo de datos para un curso
├── /node_modules              # Módulos de Node.js instalados
├── /public                    # Archivos estáticos (CSS, imágenes, JS)
│   ├── /css
│   │   └── styles.css         # Hoja de estilos para la aplicación
│   ├── /images
│   ├── /javascripts
│   │   └── scripts.js         # Scripts JS para la funcionalidad en el cliente
├── /routes                    # Rutas de la aplicación
│   ├── admin.js
│   ├── courses.js
│   ├── index.js
│   └── users.js
├── /views                     # Vistas de la aplicación (EJS)
│   ├── /partials
│   │   ├── header.ejs         # Encabezado común para todas las vistas
│   │   └── footer.ejs         # Pie de página común para todas las vistas
│   ├── admin.ejs            # Vista para gestionar la autentificación
│   ├── courses.ejs            # Vista para gestionar cursos
│   ├── index.ejs              # Vista principal
│   └── error.ejs              # Vista para manejar errores
├── .env                       # Variables de entorno (no incluir en control de versiones)
├── .gitignore                 # Archivos y carpetas ignorados por git
├── README.md                  # Documentación del proyecto
├── app.js                     # Configuración principal de la aplicación
├── package.json               # Dependencias y scripts del proyecto
└── package-lock.json          # Detalles de las dependencias instaladas
Tecnologías Utilizadas
• Node.js: Entorno de ejecución de JavaScript.
• Express: Framework de Node.js para construir aplicaciones web.
• Express-Generator: Herramienta para generar la estructura del proyecto Express.
• MongoDB: Base de datos NoSQL.
• Mongoose: ODM para MongoDB.
• EJS: Motor de plantillas para generar HTML.
• Axios: Para hacer solicitudes a la API de tipos de cambio.
• Node-Cache: Para cachear los tipos de cambio y mejorar el rendimiento.
• Nodemon: Herramienta que reinicia automáticamente la aplicación en desarrollo.
• Method-Override: Middleware para soportar métodos HTTP PUT y DELETE en formularios HTML.
• dotenv: Carga de variables de entorno desde un archivo `.env`.
Créditos
• Autor: Mgtr. Alexander Sánchez Granados
