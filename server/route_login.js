
const express = require('express');
const router = express.Router();

// Definir una ruta de ejemplo para obtener todos los usuarios
router.get('/api/routes', (req, res) => {
  res.json({ message: 'Lista de usuarios POSTGRESQL' });
});

router.get('/json', (req, res) => {
  res.json({ message: 'ruta de prueba de sub rutas de expressjs' });
  
});


// Ruta de ejemplo para manejar una solicitud POST
router.post('/logeoauthentic', (req, res) => {  
  
  //res.json({ user: "Administrador" , password: "!$#TGFH%&U&/&/" });
   // Recuperar los datos del cuerpo de la solicitud
   const data = req.body;
   //console.log('Datos recibidos:', data.values.userrname); //usuario
   //console.log('Datos recibidos:', data.values.passwordd); //contraseña
   console.log('Datos recibidos:', data);

   //res.status(201).json({ message: 'Usuario agregado',  data: data});
 
   // Responder con los datos recibidos
   res.json({
     message: 'Datos recibidos correctamente',
     data: data,
   });
});



module.exports = router;