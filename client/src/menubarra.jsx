import React, { useEffect } from "react";
import { Session_avg } from "./hook_session";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button, Spinner } from "@nextui-org/react";
import { Image } from "@nextui-org/image";
import Control_clime from "./control_clime";
export default function BarraNavegador({ username, userId, useremail }) {
    
    const { jsonwebtoken, fn_flag, cerrar } = Session_avg();


    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Usuario " +  username ,
        "Correo Electronico " + useremail,
        "Numero de Mapeo " + userId,
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];


    return (

            <Navbar
                isBordered
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent className="sm:hidden" justify="start">
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
                </NavbarContent>

                <NavbarContent className="sm:hidden pr-4" justify="center">
                    <NavbarBrand>

                        <p className="font-bold text-inherit">USUARIO: { username } / NEXTUI</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">

                    <NavbarItem>
                        <Link color="foreground" href="#">
                        USUARIO: { username } / NEXTUI
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            REGISTRAR / CHAKRA
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            BORRAR / EVERGREEN
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            ACTUALIZAR / REBASS
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Control_clime></Control_clime>

                    </NavbarItem>
                    <NavbarItem>
                        <Button onClick={fn_flag} isLoading={cerrar} spinner={<Spinner />} color="danger" href="#" variant="flat">
                            CERRAR SESION
                        </Button>
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                className="w-full"
                                color={
                                    index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>                    
    )
}

