
import React, { useState, useEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
export const Hook_Auth_JsonwebToken = () => {
    const [username, setUsername] = useState(null);
    const [userId, setUserId] = useState(null);
    const [useremail, setUseremail] = useState(null);

    const navigate = useNavigate();



    useEffect(() => {


        credenciales_user()
        const user_token = fn_flag_validasession_jwt()
        const experies_token = getTokenExpirationDate()
        //console.log("AUTENTIFCIADO REAL " + c);
        //console.log(experies_token);

        const Token_Session = () => {
            if (Cookies.get('jwt_avg')) {
                try {
                    const decodedToken = jwtDecode(Cookies.get('jwt_avg'));
                    const currentTime = Date.now() / 1000;
                    //console.log(decodedToken.exp); //1718123663.512 
                    ////////////////////////////1718123676.502
                    ////////////////////////////1718123804.089

                    if (decodedToken.exp < currentTime) {
                        // Token ha expirado y remover todas las cokkies y variables guardadas
                        sessionStorage.removeItem('NazyXuseremail');
                        sessionStorage.removeItem('NazyXuserId');
                        sessionStorage.removeItem('NazyXuserName');
                        Cookies.remove('jwt_avg'); // Asegúrate de eliminar la cookie si no es válida
                        navigate('/');
                    } else {
                        // Token es válido
                        //
                        navigate('/applicationonline');
                    }
                } catch (e) {
                    // Token no es válido y eliminar todas la variables de sesion 
                    sessionStorage.removeItem('NazyXuseremail');
                    sessionStorage.removeItem('NazyXuserId');
                    sessionStorage.removeItem('NazyXuserName');
                    Cookies.remove('jwt_avg'); // Asegúrate de eliminar la cookie si no es válida
                    navigate('/');
                }
            } else {
                // No hay token
                sessionStorage.removeItem('NazyXuseremail');
                sessionStorage.removeItem('NazyXuserId');
                sessionStorage.removeItem('NazyXuserName');
                Cookies.remove('jwt_avg'); // Asegúrate de eliminar la cookie si no es válida
            }

        }
        //Token_Session();




    }, []);


    const credenciales_user = () => {
        //console.log(Cookies.get('jwt_avg'));  
        if (sessionStorage.getItem('NazyXuserName') && sessionStorage.getItem('NazyXuserId') && sessionStorage.getItem('NazyXuseremail')) {
            //setUsername(sessionStorage.getItem('NazyXuserName'));
            //setUserId(sessionStorage.getItem('NazyXuserId'));
            //setUseremail(sessionStorage.getItem('NazyXuseremail'));
            setUsername(Cookies.get('NazyXuserName'));
            setUserId(Cookies.get('NazyXuserId'));
            setUseremail(Cookies.get('NazyXuseremail'));


        }
    }

    //SESSION VALIDADA
    const fn_flag_validasession_jwt = () => {


        if (!Cookies.get('jwt_avg')) {
            return false;
        }

        try {
            const decodedToken = jwtDecode(Cookies.get('jwt_avg'));
            const currentTime = Date.now() / 1000; // en segundos

            if (decodedToken.exp < currentTime) {
                return false;
            }

            return true;
        } catch (error) {
            console.error('ERROR DE TOKEN NULO ', error);
            return false;
        }

        /*if (Cookies.get('jwt_avg')) {
            const decoded = jwtDecode(Cookies.get('jwt_avg'));
            //console.log(decoded);
            console.log("Autentificado");
            // decode header by passing in options (useful for when you need `kid` to verify a JWT):
            //const decodedHeader = jwtDecode(token, { header: true });
            //console.log(decodedHeader);
        } else {
            console.log("NO Autentificado");

        }*/
    }


    const getTokenExpirationDate = () => {
        if (!Cookies.get('jwt_avg')) {
            return null;
        }

        try {
            const decodedToken = jwtDecode(Cookies.get('jwt_avg'));
            if (!decodedToken.exp) {
                return null;
            }

            return new Date(decodedToken.exp * 1000); // en milisegundos
        } catch (error) {
            console.error('TOKEN ROTO ', error);
            return null;
        }
    };
















    return {
        username,
        userId,
        useremail


    }

}