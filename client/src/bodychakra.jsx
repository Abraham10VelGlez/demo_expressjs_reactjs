import React, { useEffect, useState } from 'react'
import BarraNavegador from './menubarra';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Stack,
    Grid, GridItem, Avatar, Heading, IconButton,
    ChakraProvider, Skeleton,
    useColorMode,
    Flex, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea
} from '@chakra-ui/react'
import FondoChakra from './fondochakra';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, useTab, useMultiStyleConfig, Button, Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Divider, ButtonGroup, Text } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, Center
} from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import { Wrap, WrapItem, Container } from '@chakra-ui/react'
import Formualrio from './bodychakraform';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import TableChakra from './bodychakratable';

import AccordionChakra from './accordin';
import ComponentXChakra from './componentx';


export default function BodyChakra({ username, userId, useremail }) {

    function ToastStatusExample() {
        const toast = useToast()
        const statuses = ['success', 'error', 'warning', 'info']
      
        return (
          <Wrap>
            {statuses.map((status, i) => (
              <WrapItem key={i}>
                <Button
                  onClick={() =>
                    toast({
                      title: `${status} toast`,
                      status: status,
                      isClosable: true,
                    })
                  }
                >
                  Show {status} toast
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        )
      }


    function TransitionExample() {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const cancelRef = React.useRef()

        return (
            <>
                <Button onClick={onOpen}>Discard</Button>
                <AlertDialog
                    motionPreset='slideInBottom'
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                    isOpen={isOpen}
                    isCentered
                >
                    <AlertDialogOverlay />

                    <AlertDialogContent>
                        <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                            Are you sure you want to discard all of your notes? 44 words will be
                            deleted.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                No
                            </Button>
                            <Button colorScheme='red' ml={3}>
                                Yes
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </>
        )
    }




    

    const Clime_siteweb = () => {
        const { colorMode, toggleColorMode } = useColorMode()
        return (
            <header>
                <Button onClick={toggleColorMode}>
                    CLIMA {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </header>
        )
    }


    const Example2 = () => {
        const [isLoaded, setIsLoaded] = React.useState(false)
        return (
            <Stack padding={4} spacing={1}>
                <Skeleton height='40px' isLoaded={isLoaded}>
                    <Box>Hello World!</Box>
                </Skeleton>
                <Skeleton
                    height='40px'
                    isLoaded={isLoaded}
                    bg='green.500'
                    color='white'
                    fadeDuration={1}
                >
                    <Box>Hello React!</Box>
                </Skeleton>
                <Skeleton
                    height='40px'
                    isLoaded={isLoaded}
                    fadeDuration={4}
                    bg='blue.500'
                    color='white'
                >
                    <Box>Hello ChakraUI!</Box>
                </Skeleton>

                <Box textAlign='center'>
                    <Button onClick={() => setIsLoaded((v) => !v)}>Mostrar</Button>
                </Box>
            </Stack>
        )
    }


    const DrawerExample = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        const firstField = React.useRef()

        return (
            <>
                <Button leftIcon="🌟" colorScheme='teal' onClick={onOpen}>
                    Create user
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    initialFocusRef={firstField}
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth='1px'>
                            Create a new account
                        </DrawerHeader>

                        <DrawerBody>
                            <Stack spacing='24px'>
                                <Box>
                                    <FormLabel htmlFor='username'>Name</FormLabel>
                                    <Input
                                        ref={firstField}
                                        id='username'
                                        placeholder='Please enter user name'
                                    />
                                </Box>

                                <Box>
                                    <FormLabel htmlFor='url'>Url</FormLabel>
                                    <InputGroup>
                                        <InputLeftAddon>http://</InputLeftAddon>
                                        <Input
                                            type='url'
                                            id='url'
                                            placeholder='Please enter domain'
                                        />
                                        <InputRightAddon>.com</InputRightAddon>
                                    </InputGroup>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor='owner'>Select Owner</FormLabel>
                                    <Select id='owner' defaultValue='segun'>
                                        <option value='segun'>Segun Adebayo</option>
                                        <option value='kola'>Kola Tioluwani</option>
                                    </Select>
                                </Box>

                                <Box>
                                    <FormLabel htmlFor='desc'>Description</FormLabel>
                                    <Textarea id='desc' />
                                </Box>
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth='1px'>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue'>Submit</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </>
        )
    }

    return (
        <>

            <BarraNavegador username={username} userId={userId} useremail={useremail} ></BarraNavegador>


            <ChakraProvider>
                <div className='overlay'>
                    <center>
                        <Grid
                            // Definiendo el número de columnas para diferentes tamaños de pantalla
                            templateColumns={{ base: 'repeat(3, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }}
                            gap={2}
                        >

                            <GridItem colSpan={{ base: 1, sm: 1, md: 1 }} bg='darkcyan' h='auto'>

                                <Example2 />
                            </GridItem>
                            <GridItem colSpan={{ base: 1, sm: 1, md: 1 }} bg='darkmagenta' >
                                <DrawerExample />
                            </GridItem>
                            <GridItem colSpan={{ base: 1, sm: 1, md: 1 }} bg='darkred' h='auto'>
                                <Clime_siteweb></Clime_siteweb>
                            </GridItem>
                            <GridItem colSpan={{ base: 1, sm: 1, md: 1 }} bg='darkorange' >
                                <Formualrio></Formualrio>
                            </GridItem>

                            <GridItem colSpan={{ base: 1, sm: 1, md: 1 }} bg='darkgreen' h='auto' >
                                <Alert status='success'
                                    variant='subtle'
                                    flexDirection='column'
                                    alignItems='center'
                                    justifyContent='center'
                                    textAlign='center'
                                    height='200px'>
                                    <AlertIcon boxSize='40px' mr={0} />
                                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                                        CHAKRA UI
                                    </AlertTitle>
                                    <AlertDescription maxWidth='sm'>
                                        Curso intensivo de desarrollo<br></br> de API REST FULL backend and frontend con diversas UI
                                    </AlertDescription>
                                </Alert>
                            </GridItem>
                            <GridItem colSpan={{ base: 1, sm: 1, md: 1 }} bg='darkgray' >
                                <ComponentXChakra></ComponentXChakra>
                            </GridItem>
                            <GridItem colSpan={{ base: 1, sm: 1, md: 1 }} bg='darkorchid' >
                                <AccordionChakra className="ajust" ></AccordionChakra>
                                
                            </GridItem>
                            <GridItem colSpan={{ base: 1, sm: 1, md: 1 }} bg='darkkhaki' >
                                <TransitionExample/>
                                <ToastStatusExample/>
                            </GridItem>
                            <GridItem colSpan={{ base: 1, sm: 1, md: 1 }} bg='darkgoldenrod' >
                                Loading CHAKRAUI
                            </GridItem>

                            

                        </Grid>
                    </center>
                </div>


                
            </ChakraProvider>


            <FondoChakra></FondoChakra>


        </>
    )
}


