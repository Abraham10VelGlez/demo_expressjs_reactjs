const express = require('express');
const jwt = require('jsonwebtoken')

const cookiesParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')

const bcrypt = require("bcrypt");
///lamada de libreria de postgresql
const { functionvalidatio_connection_postgres } = require('./config');

require('dotenv').config();

const app_jsonwentoken = express.Router();


// Middleware para CORS PARA recibir peticiones de reactjs de axios del tipo  solicitud OPTIONS (también llamada preflight request) para verificar si el servidor permite la solicitud de origen cruzado.
app_jsonwentoken.use(cors());
app_jsonwentoken.use(bodyParser.json());
app_jsonwentoken.use(bodyParser.urlencoded({ extended: true }));

///llamar a la libreria cookies parser
app_jsonwentoken.use(express.json());
app_jsonwentoken.use(cookiesParser());


const fn_flag_validar_all_routes_acceso_a_la_app = async (req, res, next) => {
    try {
        const x = await fn_flag_validation_json_web_token(req);
        console.log(x);/// mensaje del laod de servidor
        //console.log(x[0].key);
        if (x[0].key == 0) {
            res.status(200).json({ ok: false, data: x }) /// mensaje del lado de cliente
        } else {
            res.status(200).json({ ok: true, data: x }) /// mensaje del lado de cliente
        }

    } catch (error) {
        console.log(error);
        res.status(200).json({ ok: false, message: 'token incorrecto' })

    }
}

app_jsonwentoken.post('/log', async function (req, res, next) {
    let { userrname, passwordd } = req.body.values;

    //validacion de json web token  INICIO
    const tokenuser = {
        users: userrname,
        pass: passwordd,
        namesys: 'AVGStudioA',
    }
    //arrancamos la libreria de jwt para validar y crear nuesttro token
    // usando el json de los datos del (usuario logeado , llave secreta de nuevo archivo env
    const token_ = jwt.sign(tokenuser, process.env.JWT_SECRET_KEY/*, { expiresIn: '5m' }*/)

    //res.status(200).json({ message: 'validando JWT', token_: token_ })
    //res.cookie("jwt_avg",token_)
    //validacion de json web token  FIN


    ///validacion interna enbase de datos
    const result = await fn_flag_validacion(userrname, passwordd);
    //console.log(result);
    if (result.length > 0) {
        //result[0].passwordxxconsole.log(result[0].passwordxx);

        if (result[0].key == 0) {
            //console.log(req.body.values);
            //console.log(userrname);
            console.log("logeox_jwt");
            res.json({ ok: false, key: 0, message: "No hay acceso a sistema" });

        } else {
            //console.log(result[0].passwordxx);
            // Comparar la contraseña proporcionada con el hash almacenado
            const match = await bcrypt.compare(passwordd, result[0].passwordxx);
            console.log(match);
            if (match) {
                res.cookie("jwt_avg", token_);
                //res.cookie("jsonavg", tokecredenciales);
                res.status(200).json({ ok: true, message: 'Usuario correcto, continuar', key: 1, url_client: '/applicationonline', data: token_, data_username: result[0].name, data_di: result[0].key2, emailxx: result[0].emailxx });

            } else {
                res.status(200).json({ ok: false, key: 0, message: 'Credenciales invalidas' });
            }
        }
        //res.status(200).json(result); //mensajes del lado del cliente

    } else {
        console.log("es igual a cero");
        res.json({ ok: false, key: 0, message: "error de commands " });
    }








});

app_jsonwentoken.get('/loggin_token', async function (req, res, next) {

    try {
        const x = await fn_flag_validation_json_web_token(req);
        console.log(x);
        //console.log(x.length);
        await res.status(200).send(x)
    } catch (error) {
        console.log(error);
        res.status(200).json({ message: 'token incorrecto' })

    }

});


app_jsonwentoken.get('/logout', async function (req, res, next) {
    //res.status(200).json({ message: "cerrando el systema" })
    const _toke_client = req.cookies.jwt_avg;
    //console.log(_toke_client);
    res.clearCookie('jwt_avg');
    res.status(200).json({ ok: true, key: 1, message: 'Sesión cerrada y token revocado' });

})


const fn_flag_validacion = async (x, y) => {
    let error_captor = [];
    //console.log("validarxxxx");
    //return 23;
    ///llamar base datos y validar
    try {
        //ejemplo simple
        const resultSQL = await functionvalidatio_connection_postgres.query('select * from  public.valida_log($1,$2);', [y, x]);
        //return resultSQL.fields;
        if (resultSQL.rows.length > 0) {
            //console.log(resultSQL.rows);
            //console.log("hay un usuario en db");
            //event_avg.push({message})
            //return resultSQL.rows;            
            error_captor.push({ key: 1, emailxx: resultSQL.rows[0].emailxx, passwordxx: resultSQL.rows[0].passwordxx, key2: resultSQL.rows[0].idx, name: resultSQL.rows[0].namex })
            //error_captor.push({ key: 1 }, resultSQL.rows[0])
            return error_captor;
        } else {
            //console.log("no hay un usuario en sistemA");
            error_captor.push({ key: 0, message: "no hay un usuario en sistema" });
            return error_captor;
        }
    } catch (error) {
        console.log(error);
        error_captor.push({ key: 0, message: "error de datos: " + error });
        return error_captor;
    }
}



const fn_flag_validation_json_web_token = async (token_) => {
    let json_response = [];
    try {
        const token_jsonweb = token_.cookies.jwt_avg;
        const valida = await jwt.verify(token_jsonweb, process.env.JWT_SECRET_KEY);
        json_response.push({ ok: true, key: 1, valida })
        //return valida;
        return json_response;
    } catch (error) {
        json_response.push({ ok: false, key: 0, messageerror: 'NO HAY JWT DESHABILITADO' });
        return json_response;

    }
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(' ')[1];
    //console.log(token);

    if (token == null) return res.sendStatus(401); // Si no hay token, no autorizado

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // Si el token no es válido, prohibido
        req.user = user;
        //console.log(req.user);
        next(); // Pasar al siguiente middleware o ruta
    });
}




app_jsonwentoken.get('/tablex', authenticateToken, async function (req, res, next) {
    //res.status(200).json({ message: "devolviendo tabla" })
    try {
        //ejemplo CONSULTA
        const resultSQL = await functionvalidatio_connection_postgres.query('SELECT id, name, email FROM users limit 10');
        res.status(200).json({ key: 1, datax: resultSQL.rows })
    } catch (error) {
        //console.log(error);
        res.status(200).json({ key: 0, message: "error de datos: " + error });

    }

})

// DE ARRIBA PARA ESTA LINEA TODAS LAS RUTAS SON LIBRES

/// UNA VEZ QUE USEMOS ESTA FUNCION DE FLECHA SOBRE USE DE LA APP TOODAS LAS RUTAS DE ESTE COTROLLADOR QUEDAN SALVADAS Y AUTENTIFICADAS CON EL JSONWEB TOKEN
app_jsonwentoken.use(fn_flag_validar_all_routes_acceso_a_la_app)

/// APARTIR DE AQUI TODAS LAS RUTAS ESTA PROTEGIDAS Y SOLO SE PUEDEN VER LAS RUTAS LOGEADAS CON EL JSON WEB TOKEN

// esta ruta esta protegida con json web token
app_jsonwentoken.get('/create_data', fn_flag_validar_all_routes_acceso_a_la_app, async function (req, res, next) {
    res.status(200).json({ message: "Creando informacion" })

})








/*
// Ejemplo de ruta protegida
app.get('/protected', verifyToken, (req, res) => {
  res.send('Ruta protegida');
});
 */






module.exports = app_jsonwentoken;
