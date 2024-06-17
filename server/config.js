require('dotenv').config();
const { Pool } = require('pg');

// Imprimir variables para depuración
/*console.log('DB_USER:', process.env.DB_USER);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_PORT:', process.env.DB_PORT);*/

const istest = process.env.NODE_ENV === "production";

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
//console.log(connectionString);

const functionvalidatio_connection_postgres = new Pool({
  connectionString: istest ? process.env.DATABASE_URL : connectionString,
  ssl: istest
});
//exportamos la funcion de validacion
module.exports = { functionvalidatio_connection_postgres };