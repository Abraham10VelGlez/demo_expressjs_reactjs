const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
//llamado de la libreia bcrypt para encriptar cadenas
const bcrypt = require("bcrypt");
///lamada de libreria de postgresql
const { functionvalidatio_connection_postgres } = require('./config');


//lamada de libreria de La librería express-flash es un middleware para Express  uso de mensajes flash en las aplicaciones web. 
//Los mensajes flash son mensajes que se muestran una vez y luego se eliminan, usados para notificaciones de éxito, error o información después de redirecciones.
//Para usar express-flash, necesitas también connect-flash y un sistema de gestión de sesiones como express-session.
//const flash = require("express-flash");
//llamada de libreria de sessiones de express
/*const session = require("express-session");
//llamada de -env para avilitar la variable de SESSION_SECRET
require("dotenv").config();

router.use(session({
    // Key we want to keep secret which will encrypt all of our information
    secret: process.env.SESSION_SECRET,
    // Should we resave our session variables if nothing has changes which we dont
    resave: false,
    // Save empty value if there is no vaue which we do not want to do
    saveUninitialized: false
}));*/


//log users con auth express js
//router.use(bodyParser.json());
//router.use(bodyParser.urlencoded({ extended: true }));



// Ruta de ejemplo para manejar una solicitud POST
router.post('/logtest', (req, res) => {
    const data = req.body;
    console.log('Datos recibidos:', data);
    res.status(201).json({ message: 'logeando', data: data });
});


router.post('/login', function (req, res, next) {
    console.log("logeox");
    res.json({ message: "logeox" });
});


router.post('/createavg', async function (req, res, next) {


    //recibimos valores y validamos si cuenta con lo nesario    
    //console.log('Body:', req.body.values); // Log adicional para verificar el cuerpo de la solicitud
    let { namex, emailx, passx } = req.body.values;
    let errores_server = [];
    //console.log({ namex, emailx, passx });    
    //const data = req.body;    
    //registro de errores validacion de campos vacios
    //next();
    if (!namex || !emailx || !passx) {
        //res.json({ message: "Please enter all fields" });
        //res.status(200).json({ message: "Por favor ingresa todos los campos" }); //mensajes del lado del cliente
        errores_server.push({ message: "Por favor ingresa todos los campos" })/// juntando mensajes de lado de servidor    
    }
    //next();
    if (passx.length < 8) {
        //res.json({ message: "Password es mayor a 10 characters long" });
        //res.status(200).json({ message: "Contraseña es menor a 8 caracteres" }); //mensajes del lado del cliente
        errores_server.push({ message: "Contraseña es menor a 8 caracteres" }) /// juntando mensajes de lado de servidor
    }


    if (errores_server.length > 0) {
        res.status(200).json({ message: errores_server }); //mensajes del lado del cliente
    } else {
        //uso de 
        let errores_lado_server2 = [];
        //vamos a encrytar la contraseña para posteriormente guardar en postgresql
        hashedPassword = await bcrypt.hash(passx, 12);
        //console.log(hashedPassword);
        //ahora encryptado datos es momento de validar datos con la base de datos

        try {
            const result = await functionvalidatio_connection_postgres.query(`select * from  public.validauser( $1, $2, $3)`, [namex, hashedPassword, emailx]);
            if (result.rows.length > 0) {
                ///res.json(result.rows[0]);
                ///console.log(result.rows[0]);
                //si existe ajunta un mensaje del servidor para al final devolver a cliente                
                console.log("Este correo ya existe");///mensaje de lado de servidor
                errores_lado_server2.push({ message: "Este correo ya existe" });
                return res.json({ err: "Este correo ya existe" });///mensaje para lado del cliente
            } else {
                //si no existe un email repetiodo o usuario agregarlo como nuevo                
                console.log("si no existe un email repetiodo o usuario agregarlo como nuevo");///mensaje de lado de servidor
                //res.status(200).json({ message: "datos registrados, favor de ir a log" });///mensaje para lado del cliente 
                try {
                    const newuser = await functionvalidatio_connection_postgres.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, password', [namex, emailx, hashedPassword]);
                    if (newuser.rows.length > 0) {
                        //res.json(newuser.rows[0]);
                        console.log(newuser.rows[0]);
                        return res.status(200).json({ message: "datos registrados, favor de ir a log" });///mensaje para lado del cliente
                        //next();
                    }
                } catch (error) {
                    console.error(error);
                    return res.status(200).json({ error: 'Error al obtener los datos' });
                }
            }
        } catch (error) {
            console.error(error);
            return res.status(200).json({ error: 'Error al obtener los datos' });
        }




        /*
        ///////////////////////////////////////////////////ESTE EJEMPLO FUNCIONA CORRECTAMENTE SIN EMBARGO NO ME SIRVE DEBIDO A QUE NO PUEDO GENERAR RESPUESTAS PARA EL CLIENTE DE MANERA SIMPLE

        //vamos a encrytar la contraseña para posteriormente guardar en postgresql
        hashedPassword = await bcrypt.hash(passx, 12);
        //console.log(hashedPassword);
        //ahora encryptado datos es momento de validar datos con la base de datos 
        functionvalidatio_connection_postgres.query(`SELECT * FROM users WHERE email = $1`,
            [emailx],
            (err, results) => {
                if (err) {
                    console.log(err);///mensaje de lado de servidor
                }
                console.log(results.rows);
                //validacion del correo dentro de la base datos
                if (results.rows.length > 0) {
                    //si existe ajunta un mensaje del servidor para al final devolver a cliente
                    //return errores_server.push({ message: "Este correo ya existe" });
                    console.log("Este correo ya existe");
                    //res.status(200).json({ message: "Este correo ya existe" });///mensaje para lado del cliente
                } else {
                    //si no existe un email repetiodo o usuario agregarlo como nuevo
                    console.log("si no existe un email repetiodo o usuario agregarlo como nuevo");///mensaje de lado de servidor
                    //res.status(200).json({ message: "datos registrados, favor de ir a log" });///mensaje para lado del cliente 
                    functionvalidatio_connection_postgres.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, password`,
                        [namex, emailx, hashedPassword],
                        (err, results) => {
                            if (err) {
                                console.log(err);
                                //throw err;
                                //return errores_server.push({message: "error al insertar datos "});
                            }
                            console.log(results.rows);//mensajes para lado del servidor
                            console.log('Datos recibidos:', emailx);//mensajes para lado del servidor
                            //res.status(200).json({ message: req.body.values });
                            //res.status(200).json({ message: "datos registrados, favor de ir a log" });///mensaje para lado del cliente                            
                        }
                    );
                }
            }
        );


        next();
         */

    }





});

module.exports = router;