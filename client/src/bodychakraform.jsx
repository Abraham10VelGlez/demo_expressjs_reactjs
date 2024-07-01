import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Divider, Input, Stack, Button } from '@chakra-ui/react'
import { FormCreateChakra } from './hook_createchakra'
import { Spinner } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default function Formualrio({ username, userId, useremail }) {
    const { formik_validate,
        loaddata,
        datatable } = FormCreateChakra()

    return (
        <>
            <form method="POST" onSubmit={formik_validate.handleSubmit}>
                <Stack spacing={3}>
                    <Input placeholder='Email' size='lg' type='email' id='email' name='email'
                        value={formik_validate.values.email}
                        onChange={formik_validate.handleChange}
                        isInvalid={formik_validate.touched.email && formik_validate.errors.email}
                        color={formik_validate.touched.email && formik_validate.errors.email ? "danger" : "success"}
                        
                    />
                    <Divider></Divider>
                    <Input type='text' placeholder='Nombre' size='lg' id='namex' name='namex'
                        value={formik_validate.values.namex}
                        onChange={formik_validate.handleChange}
                        isInvalid={formik_validate.touched.namex && formik_validate.errors.namex}
                        color={formik_validate.touched.namex && formik_validate.errors.namex ? "danger" : "success"}
                       
                    />
                    <Divider></Divider>
                    <Input type='password' placeholder='Contraseña' size='lg' id='pw' name='pw'
                        value={formik_validate.values.pw}
                        onChange={formik_validate.handleChange}
                        isInvalid={formik_validate.touched.pw && formik_validate.errors.pw}
                        color={formik_validate.touched.pw && formik_validate.errors.pw ? "danger" : "success"}
                        />
                    <Divider></Divider>
                    <Button variant='outline' colorScheme='teal' aria-label='Send email' type='submit' isLoading={loaddata} spinner={<Spinner />} >
                        
                        {loaddata ? (<b> 📤 Up Server 📤 </b>) : (<b>💿📂 GUARDAR 💾💻</b>)}
                    </Button>
                    <Divider></Divider>
                </Stack>

            </form>

        </>
    )
}


