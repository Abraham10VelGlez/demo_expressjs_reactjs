import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import LayoutCube from './layout';
import Registeruser from './register';
import InicioSys from './dashboard';
import BodyChakra from './bodychakra';
import Cookies from 'js-cookie';
import Protector_ from './protector';
import { Hook_Auth_JsonwebToken } from './hook_authentic';
//import { jwtDecode } from "jwt-decode";





export default function Navmen() {

  const { username, userId, useremail } = Hook_Auth_JsonwebToken();
  //console.log(Cookies.get('NazyXuserId'));


  return (
    /*<Router>*/
    <Routes>
      <Route path="/regixpress" element={<Registeruser />} />
      {/* comodin para dar por defecto la pagina que no sirve */}
      <Route path="/" index element={<LayoutCube />} />
      <Route path="/me" element={<Home />} />
      {/*  path="/applicationonline"  */}
      <Route element={<Protector_ isAllowed={Cookies.get('jwt_avg')} />}>
        <Route path='/applicationonline' element={<InicioSys username={username} userId={userId} useremail={useremail} />} />
        <Route path='/about' element={<About />} />
        <Route path="/regchakra_ui" element={<BodyChakra username={username} userId={userId} useremail={useremail}  />} />
      </Route>
      <Route element={<Protector_ isAllowed={Cookies.get('jwt_avg')} />}>
        <Route path='/admin_avg' element={<Navbar />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
    /*</Router>*/
  );
}


function Navbar() {
  // visible on every page
  return <> NAVEGACION DE RUTAS ADMNISTRADOR</>
}

function Home() {
  return (
    <>
      <p>NAVEGACION DE RUTAS ABRAHAM</p>
      <ul>
        <li><Link to='/regixpress'>Registro de Usuarios</Link></li>
        <li><Link to='/json'>ejemplo de json</Link></li>
        <li><Link to='/world8'>MUNDO 8 Buscador de gifs</Link></li>
        <li><Link to='/world9'>MUNDO 9 Fronted con backend ExpressJS</Link></li>
        <li><Link to='/world10'>MUNDO 10 Fronted con backend Laravel 10</Link></li>
      </ul>
    </>);
}

function About() {
  return (
    <>
      <p>ACERCA DE</p>
      <ul>
        PAGINAS PROTEGIDAS VERSION NATIVA
      </ul>
    </>);
}


function NotFound() {
  return (<><p>Ha llegado a una página que no existe :| </p></>);
}

