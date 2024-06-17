import ReactDOM from 'react-dom/client'
// @ts-ignore  para ignorar el jsx y evitar el error
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store_redux } from './store.js';


ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode> quitamos el modo de desarrollo que hace que useeffect se repita las peticiones 2 veces aunque este marque que esta bien
  <Provider store={store_redux}>
    <NextUIProvider>
      {/* AQUI IMPORTAMOS EL BrowserRouter PARA PODER TENER ENVUELTA TODA LA APLICCACION SOBRE ESTA LIBRERIA PARA USARLA CON LAS RUTAS QUE YA TENEMOS */}
      <BrowserRouter>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <App />
        </NextThemesProvider>
      </BrowserRouter>
    </NextUIProvider>
  </Provider>

  //</React.StrictMode>, quitamos el modo de desarrollo que hace que useeffect se repita las peticiones 2 veces aunque este marque que esta bien
)
