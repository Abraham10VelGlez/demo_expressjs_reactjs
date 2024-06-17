
import React, { useState } from 'react'
import * as yup from 'yup';
import axios from "axios";
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
export const FormCreate = () => {
    const [loaddata, setdata] = useState(false);
    // nuestro hookk debe llevarse siempre variables usestate 
    const validationSchema = yup.object({
        namex: yup.string()
            .matches(/^[A-Z0-9._%+-\s]*$/i, 'Solo se permiten letras, números, guiones y guiones bajos')
            .required('Campo requerido'),
        emailx: yup.string()
            .email('Invalid email address')
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i, 'Solo se permiten Correos eléctronico')
            .required('Campo requerido'),
        passx: yup.string()
            .matches(/^[a-zA-Z0-9-_]*$/, 'Solo se permiten letras, números, guiones y guiones bajos')
            .min(5, 'La contraseña debe contener al menos 5 caracteres')
            .required('El campo de contraseña es obligatorio'),
    });

    const formik_validate = useFormik({
        initialValues: {
            namex: '',
            emailx: '',
            passx: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            //console.log(values);
            setdata(true)
            // /api/ DEBS USAR SIEMPRE LA RUTA DE INICIO DE LA CONFIGURACION DE PROXI DEL LADO DEL CLIENTE PARA PODER HACER USO DE LOS METODOS
            ////api/log
            ///api/logeoauthentic

            await axios.post('/api/createavg', { values },
                /// para valores unicos{}/
            ).then(async (data) => {
                try {
                    //creacion de promesa para hacer lenta la peticion en 3seg
                    await new Promise(resolve => {
                        setTimeout(() => {
                            resolve(true)
                            setdata(false)
                            console.log(data);
                            confetti({
                                particleCount: 100,
                                spread: 70,
                                origin: { y: 0.6 }
                            });
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

    const [datatable, setdatatable] = useState(null)


    useEffect(() => {

        const fn_flag_table = async () => {
            try {
                const tok = Cookies.get('jwt_avg')
                const t = await axios.get('/api/tablex', {
                    headers: {
                        'Authorization': `Bearer ${tok}`
                    }
                })
                //console.log(t.data.datax);
                await setdatatable(t.data.datax)
            } catch (error) {
                console.log(error);
            }
        }

       

        fn_flag_table();
        

    }, []);






    return {
        formik_validate,
        loaddata,
        datatable
    }

}