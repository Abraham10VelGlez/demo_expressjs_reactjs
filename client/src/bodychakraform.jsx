import React, { useEffect, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Divider, Input, Stack, Button } from '@chakra-ui/react'
export default function Formualrio({ username, userId, useremail }) {
    
    return (
        <>
            <form>
                <Stack spacing={3}>
                    <Input placeholder='Email' size='lg' type='email' />
                    <Divider></Divider>
                    <Input type='text' placeholder='Nombre' size='lg' />
                    <Divider></Divider>
                    <Input type='password' placeholder='Contraseña' size='lg' />
                    <Divider></Divider>
                    <Button variant='outline' colorScheme='teal' aria-label='Send email'>💿📂📲GUARDAR📤💾💻</Button>
                    <Divider></Divider>
                </Stack>

            </form>

        </>
    )
}


