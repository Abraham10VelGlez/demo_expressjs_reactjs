import React, { useEffect, useState } from 'react'
import { FormCreate } from './hook_create'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Box, Button
} from '@chakra-ui/react'
export default function TableChakra({ username, userId, useremail }) {

    const { datatable } = FormCreate()

    //console.log("resultado fuinal");
    //console.log(datatable);
    if (datatable == null) return "no hya datos"; // Si no hay token, no autorizado






    return (
        <>
            <Table variant='striped' colorScheme='teal'>
                <TableCaption>Users</TableCaption>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>NAMEUSER</Th>
                        <Th isNumeric>EMAIL</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        datatable.map((itemavg0, index) => (
                            <Tr key={itemavg0.id}>
                                <Td>{itemavg0.id}</Td>
                                <Td>{itemavg0.name}</Td>
                                <Td isNumeric>{itemavg0.email}</Td>
                            </Tr>
                        ))
                    }

                </Tbody>

            </Table>


        </>
    )
}


