
import React, { useState } from 'react'
import * as yup from 'yup';
import axios from "axios";
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';

export const Login_data = () => {
    const [loaddata, setdata] = useState(false);
    const navigate = useNavigate();

    // nuestro hookk debe llevarse siempre variables usestate 
    const validationSchema = yup.object({
        userrname: yup.string()
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i, 'Solo se permiten letras, números, guiones y guiones bajos')
            .required('Campo requerido'),
        passwordd: yup.string()
            .matches(/^[a-zA-Z0-9-_]*$/, 'Solo se permiten letras, números, guiones y guiones bajos')
            .min(5, 'La contraseña debe contener al menos 5 caracteres')
            .required('El campo de contraseña es obligatorio'),
    });

    const formik_validate = useFormik({
        initialValues: {
            userrname: '',
            passwordd: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            //console.log(values);
            setdata(true)
            // /api/ DEBS USAR SIEMPRE LA RUTA DE INICIO DE LA CONFIGURACION DE PROXI DEL LADO DEL CLIENTE PARA PODER HACER USO DE LOS METODOS
            ////api/log
            ///api/logeoauthentic
            ///api/login

            await axios.post('/api/log', { values },
                /// para valores unicos{}/
            ).then(async (data) => {
                try {
                    //creacion de promesa para hacer lenta la peticion en 3seg
                    await new Promise(resolve => {
                        setTimeout(() => {
                            resolve(true)
                            setdata(false)
                            //mostrar peticion
                            //console.log(data);
                            //console.log(data.data.data);
                            //console.log(data.data.data[0].key);
                            //console.log(data.data.data[0].url_client);
                            //window.location.href = data.data.url_client;
                            if (data.data.key == 0) {
                                //alert("ESTE USUARIO NO EXISTE EN SISTEMA")
                                notify_error()

                            } else {
                                ///alert("INICIAR SISTEMA")
                                notify_success(data.data.url_client, data.data.data, data.data.data_di, data.data.data_username, data.data.emailxx)

                                //window.location.href = data.data.url_client;
                            }


                        }, 3000);
                    });

                } catch (error) {
                    console.log(error);
                    setdata(false)
                }


            }).catch((data) => {
                console.log(data);
                setdata(false)
            });

        },
    });


    const notify_success = (a, x, i, y, e) => toast.success('🦄 INICIANDO SISTEMA ', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        onClose: () => {
            handleAfterToast(a, x, i, y, e);
        }
    });

    const notify_error = () => toast.error('🦄 ACCESO DENEGADO ', {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
    });


    const handleAfterToast = (url_session, tik, idx, namez, emailx) => {
        Cookies.set('jwt_avg', tik, { expires: 1 }); // expira en 1 día
        Cookies.set('NazyXuserId', idx, { expires: 1 }); // expira en 1 día
        Cookies.set('NazyXuserName', namez, { expires: 1 });
        Cookies.set('NazyXuseremail', emailx, { expires: 1 });
        sessionStorage.setItem('NazyXuserId', idx); // almacenar en sesion 
        sessionStorage.setItem('NazyXuserName', namez);        // almacenar en sesion 
        sessionStorage.setItem('NazyXuseremail', emailx);        // almacenar en sesion 
        navigate(url_session);
    };












    return {
        formik_validate,
        loaddata
    }

}
