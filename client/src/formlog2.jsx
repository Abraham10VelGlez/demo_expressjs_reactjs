import React from "react";
import { Button, Input, Spinner } from '@nextui-org/react';
import { Login_hook } from "./hook_login";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilled } from "./EyeSlashFilled";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Login_data } from "./hook_data";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Log2() {
    const { value, setValue, isInvalid, isVisible, setIsVisible, toggleVisibility, isValidationpassword } = Login_hook();
    const { formik_validate, loaddata } = Login_data();

    //hook es para hacer tareas reservada con js  ejemplo
    //const {valorin,onChange,gifs,onSubmit, carga} = use_search_gif()
    return (

        <div className='container_form'  >
            <center><b><h1> Vite + React + Express </h1></b></center>
            <br></br>
            <form method="POST" action="/api/log" onSubmit={formik_validate.handleSubmit}>


                <br />
                <br />
                <Input
                    id="userrname"
                    name="userrname"
                    type="email"
                    label="Email-Usuario"
                    variant="faded"
                    className="max-w-xs"
                    /*value={value}
                    isInvalid={isInvalid}
                    color={isInvalid ? "danger" : "success"}
                    errorMessage={isInvalid && "Por favor, ingrese un correo valido"}
                    onValueChange={setValue}*/
                    value={formik_validate.values.userrname}
                    onChange={formik_validate.handleChange}
                    isInvalid={formik_validate.touched.userrname && formik_validate.errors.userrname}
                    color={formik_validate.touched.userrname && formik_validate.errors.userrname ? "danger" : "success"}
                    errorMessage={formik_validate.touched.userrname && formik_validate.errors.userrname}

                />
                <br />
                <br />
                <Input
                    id="passwordd"
                    name="passwordd"
                    label="Contraseña"
                    variant="faded"
                    className="max-w-xs"

                    value={formik_validate.values.passwordd}
                    onChange={formik_validate.handleChange}
                    isInvalid={formik_validate.touched.passwordd && formik_validate.errors.passwordd}
                    color={formik_validate.touched.passwordd && formik_validate.errors.passwordd ? "danger" : "success"}
                    errorMessage={formik_validate.touched.passwordd && formik_validate.errors.passwordd}


                    endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                            {isVisible ? (
                                <EyeSlashFilled className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}

                />
                <br />
                <br />
                <center>
                    <Button color='success' type="submit" variant='solid' isLoading={loaddata} spinner={<Spinner />}  >
                        {loaddata ? (<b>Autenticando información</b>) : (<b>Acceder</b>)}
                    </Button>
                    <ToastContainer />
                </center>
            </form>
        </div>



    )
}

