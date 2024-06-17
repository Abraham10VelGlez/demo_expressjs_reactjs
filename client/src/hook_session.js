import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react'
import axios from "axios";
import Cookies from 'js-cookie';
export const Session_avg = () => {

    const [jsonwebtoken, setjwt] = useState(null);
    const [cerrar, setclose] = useState(false);
    const navigate = useNavigate();



    useEffect(() => {
        // Código del efecto de funcion asincrona   
        const validation_jsontoken = async () => {
            try {
                const response = await axios.get('/api/loggin_token');
                //console.log(response.data[0].ok);
                if (response.data[0].ok) {
                    console.log("Autentificado");
                } else {
                    console.log("No autentificado");
                    fn_flag()


                }
                //setjwt(response)            
            } catch (error) {
                console.error('Error fetching data:', error);
                console.log([{ message: "error de validacion" }]);

            }
        }
        validation_jsontoken();

    }, []);






    const fn_flag = async () => {
        //await console.log("cerrando sesion");
        setclose(true)
        try {
            //const logout_system = await axios.get('/api/create_data')
            const logout_system = await axios.get('/api/logout')
            await new Promise(resolve => {
                setTimeout(() => {
                    resolve(true)
                    setclose(false)


                    //console.log(logout_system.data);
                    if (logout_system.data.ok) {
                        sessionStorage.removeItem('NazyXuseremail');
                        sessionStorage.removeItem('NazyXuserId');
                        sessionStorage.removeItem('NazyXuserName');
                        Cookies.remove('jwt_avg'); // Asegúrate de eliminar la cookie si no es válida
                        navigate('/', { replace: true }); // Reemplazar la ruta actual                        
                        //window.location.href = '/';
                    }

                }, 3000);
            });

        } catch (error) {
            setclose(false)
        } finally {
            setclose('finalizo')
            setclose(false)
        }

    }




    return {
        jsonwebtoken, fn_flag, cerrar
    }

}