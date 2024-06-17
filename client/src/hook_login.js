import React,{ useState } from 'react'
export const Login_hook = () => {
    // nuestro hookk debe llevarse siempre variables usestate 
    // y funciones de flecha
    const [value, setValue] = React.useState("adminnextui.org");

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) ? false : true;
    }, [value]);


    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const isValidationpassword_chartwords = (value) => value.match(/^[a-zA-Z0-9-_$%&]*$/);

    const isValidationpassword = React.useMemo(() =>{
        //if(value === "") return false;
        //return isValidationpassword_chartwords(value) ? false : true;
        //if(value == " " || value === undefined) return false;     
    },[value]);



    return {
        value,
        setValue,
        isInvalid,
        isVisible,
        setIsVisible,
        toggleVisibility,
        isValidationpassword  
    }

}