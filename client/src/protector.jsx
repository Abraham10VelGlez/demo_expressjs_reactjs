import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from './store'
/*const Protector_ = ({ isAllowed, children, redirectPath = '/' }) => {
    const { isAuth } = useAppSelector((state) => state.authReducer)
    console.log(isAuth);

    if (isAuth) {
        console.log("TRUE valor final " + isAuth);
        return (<Navigate to={redirectPath} replace />);
    } else {
        console.log("FALSE valor final " + isAuth);
        return (<Navigate to={redirectPath} replace />);
    }
}*/
const Protector_ = ({
    isAllowed, children, redirectPath = '/'
}) => {
    //console.log(isAllowed);
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />
    }
    return children ? children : <Outlet />; //el Outlet renderiza el componente correspondiente a la ruta hija dentro del componente padre. 
}

export default Protector_;