const express = require('express')
///Importa las dependencias necesarias (express y body-parser).
const bodyParser = require('body-parser')
const cors = require('cors'); // Importar cors
const app = express()
///lamada para la base de datos
const { Client } = require('pg');

const port = 3000

//debes usar este cors PARA PODER HACER PETICIONES CUANDO MEZLCAR REACTJS + EXPRESSJS

// Middleware para CORS PARA recibir peticiones de reactjs de axios del tipo  solicitud OPTIONS (también llamada preflight request) para verificar si el servidor permite la solicitud de origen cruzado.
app.use(cors());
// Middleware para parsear JSON
app.use(bodyParser.json());
//debes usar este cors PARA PODER HACER PETICIONES CUANDO MEZLCAR REACTJS + EXPRESSJS

// Middleware para parsear datos de formulario (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('static'));

//UN middleware de logging en Express para registrar todas las solicitudes entrantes.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


// Importar y usar rutas de la siguiente manera // /api/ DEBS USAR SIEMPRE LA RUTA DE INICIO DE LA CONFIGURACION DE PROXI DEL LADO DEL CLIENTE PARA PODER HACER USO DE LOS METODOS
const userRoutes = require('./route_login');
app.use('/api', userRoutes);

///api/ DEBS USAR SIEMPRE LA RUTA DE INICIO DE LA CONFIGURACION DE PROXI DEL LADO DEL CLIENTE  "proxy": "http://localhost:3000", 
const userRoutes_authe = require('./autentific');
app.use('/api', userRoutes_authe);




///api/ DEBS USAR SIEMPRE LA RUTA DE INICIO DE LA CONFIGURACION DE PROXI DEL LADO DEL CLIENTE  "proxy": "http://localhost:3000", 
const useroutejwt_express = require('./jwt');
app.use('/api', useroutejwt_express);



//INICIO DEL SERVIDOR EXPRESSJS SERVER
app.get('/', (req, res) => {
  res.send(':) =3 :3 =() EXPRESSJS SERVER IN DOCKER')
})

//entrada de enrutamiento con el servidor de express y aplicacion de react en frontend
app.get('/apii', (req, res) => {
  res.json({ message: ":) DOCKER EXPRESSJS SERVER ENABLE" });
})

//ruta prueba de docker 
app.get('/docker', (req, res) => {
  res.json({ message: " :) DOCKER SERVER AVG " });
})



// Ruta de ejemplo para manejar una solicitud POST
app.post('/api/log', (req, res) => {
  //res.json({ user: "Administrador" , password: "!$#TGFH%&U&/&/" });
  // Recuperar los datos del cuerpo de la solicitud
  const data = req.body;
  //console.log('Datos recibidos:', data.values.userrname); //usuario
  //console.log('Datos recibidos:', data.values.passwordd); //contraseña
  console.log('Datos recibidos:', data);

  // Responder con los datos recibidos
  res.json({
    message: 'Datos recibidos correctamente',
    data: data,
  });
})


app.post('/api/login', function (req, res, next) { })


/// para testear la conexion con la base datos
// Ruta para realizar una consulta a PostgreSQL
app.get('/testpostgresql', async (req, res) => {
  //res.send('POSTGRESQL 16V EDITABLE xx')
  //console.log("conexion");
  //res.json({e:"conexion"});
  const client = new Client({
    user: 'postgres',
    //host: 'localhost',  
    /* en lugar de usar host debes usar
    Cuando utilizas Docker Compose,
     los servicios pueden comunicarse entre sí utilizando 
     los nombres de los servicios definidos en el 
     archivo docker-compose.yml. 
     En tu caso, necesitas asegurarte de que tu aplicación
      Express.js esté intentando conectarse a 
      la base de datos PostgreSQL usando 
      el nombre del servicio ejemplo:  databaseavg.
    */
    host: 'dataavg', // nombre del servicio definido en docker-compose.yml
    database: 'expressjsavg',
    //password: '12345',
    password: 'secret',
    port: 5432,
  });

  try {
    await client.connect();
    //const result = await client.query('SELECT *  FROM public.users');
    const result = await client.query("SELECT (' MESSAGE SERVER POSTGRES 16 ABRAHAM') as message");

    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Error en la consulta a la base de datos');
  } finally {
    await client.end();
  }

});






////// delimitar todas las rutas van antes de listen para ser escuchadas
app.listen(port, () => {
  console.log(`APP CON PUERTO DE  ${port}`)
})



