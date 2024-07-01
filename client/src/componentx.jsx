import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, useTab, useMultiStyleConfig, Button, Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Divider, ButtonGroup, Text  } from '@chakra-ui/react'
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
export default function ComponentXChakra({ username, userId, useremail }) {
    const CustomTab = React.forwardRef((props, ref) => {
        // 1. Reuse the `useTab` hook
        const tabProps = useTab({ ...props, ref })
        const isSelected = !!tabProps['aria-selected']

        // 2. Hook into the Tabs `size`, `variant`, props
        const styles = useMultiStyleConfig('Tabs', tabProps)

        return (
            <Button __css={styles.tab} {...tabProps}>
                <Box as='span' mr='3'>
                    {isSelected ? '👨‍💻' : '🔮'}
                </Box>
                {tabProps.children}
            </Button>
        )
    })

    return (
        <Tabs>
            <TabList>
                <CustomTab>Componente 1</CustomTab>
                <CustomTab>Componente 2</CustomTab>
                <CustomTab>Componente 3</CustomTab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Box padding='6' boxShadow='lg' bg='lightblue'>
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                    </Box>
                </TabPanel>
                <TabPanel>

                    <center>
                        <Card textAlign="center" maxW={{ base: '150%', sm: '180px' }}>
                            <CardBody>
                                <Image
                                    src='./1155311718.avif'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>CARD IMAGEN</Heading>
                                    <Text>
                                        Comandante Narumi
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        $750
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter >
                                <center>
                                    <Button variant='solid' colorScheme='green'>
                                        Buy now
                                    </Button>
                                </center>
                            </CardFooter>

                        </Card>
                    </center>
                </TabPanel>
                <TabPanel>
                    <center>
                        <Card textAlign="center" maxW={{ base: '150%', sm: '180px' }}>
                            <CardBody>
                                <Image
                                    src='./kaiju-2.jpg'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>CARD IMAGEN</Heading>
                                    <Text>
                                        Kaiju No. 8
                                    </Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        $1000
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter >
                                <center>
                                    <Button variant='solid' colorScheme='green'>
                                        Buy now
                                    </Button>
                                </center>
                            </CardFooter>

                        </Card>
                    </center>
                </TabPanel>

            </TabPanels>
        </Tabs>
    )
}


