const LocalStrategy = require("passport-local").Strategy;
const { functionvalidatio_connection_postgres } = require("./config");
const bcrypt = require("bcrypt");

function initialize(passport) {
    console.log("inicia");

    const authenticateUser = (email, password, done) => {
        console.log(email, password);
        try {
            const validaruser = functionvalidatio_connection_postgres.query('SELECT * FROM users WHERE email = $1', [email]);
            if (validaruser.rows.length > 0) {
                const user = validaruser.rows[0];

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.log(err);
                    }
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        //password is incorrect
                        return done(null, false, { message: "contraseña incorrecta" });
                    }
                });
            } else {
                // No user
                return done(null, false, {
                    message: "usuario no encontrado con este email"
                });
            }

        } catch (error) {
            console.error(error);
            res.status(200).json({ error: 'Error al obtener los datos' });
        }
    };

    passport.use(
        new LocalStrategy(
            { usernameField: "emailx", passwordField: "passx" },
            authenticateUser
        )
    );
    // Stores user details inside session. serializeUser determines which data of the user
    // object should be stored in the session. The result of the serializeUser method is attached
    // to the session as req.session.passport.user = {}. Here for instance, it would be (as we provide
    //   the user id as the key) req.session.passport.user = {id: 'xyz'}
    passport.serializeUser((user, done) => done(null, user.id));

    // In deserializeUser that key is matched with the in memory array / database or any data resource.
    // The fetched object is attached to the request object as req.user

    passport.deserializeUser(async (id, done) => {
        try {
            const aa = await functionvalidatio_connection_postgres.query(`SELECT * FROM users WHERE id = $1`, [id]);
            if (validaruser.rows.length > 0) {
                console.log(`ID is ${aa.rows[0].id}`);
                return done(null, aa.rows[0]);
            }
        } catch (error) {
            console.error(error);
            res.status(200).json({ error: 'Error al obtener los datos' });
        }

    });
}

module.exports = initialize;