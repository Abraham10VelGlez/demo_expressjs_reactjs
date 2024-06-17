import React, { useEffect, useState } from 'react'
import Navmen from './navmen';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function App() {

  //TEST DE FUNCIONAMIENTO ENTRE EXPRESSJS Y REACTJS
  /*useEffect(() => {
    funcioon()
    //fn_flag_sessionAVG()
  }, []);


  const funcioon = async () => {
    const url = `/api`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    //console.log(data.ok);    
  }*/


  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Hook para navegar sin recargar la página
  /*
  useEffect(() => {
    // Función que se ejecutará solo una vez
    const _tokens_ = async () => {
      try {
        const response = await axios.get('/api/loggin_token');
        //console.log(response.data[0].ok);
        if (response.data[0].ok) {
          console.log("esta autentificado: " + response.data[0].ok);
          //window.location.href = '/applicationonline'
          navigate('/applicationonline'); // Redirección sin recargar la página
          return false;
        }
        setData(response.data);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
        console.error('Error fetching data:', err);
      }
    };

    _tokens_();
  }, [navigate]);
  */
  return (
    <>

      <Navmen ></Navmen>
      
      


    </>
  )
}

export default App
