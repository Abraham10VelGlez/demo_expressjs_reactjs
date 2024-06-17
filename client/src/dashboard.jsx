import React, { useEffect } from "react";
import Body from "./body";
import BarraNavegador from "./menubarra";



export default function InicioSys({ username, userId, useremail }) {


    return (

        <>
            <BarraNavegador username={username} userId={userId} useremail={useremail} ></BarraNavegador>
            {/*
            <p className="hidden sm:block font-bold text-inherit">CRUD DE EXPRESS + REACTJS + NEXTUI</p>
            */}
            <Body username={username} userId={userId} useremail={useremail} ></Body>
        </>



    )
}

