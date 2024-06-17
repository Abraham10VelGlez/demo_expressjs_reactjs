import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
export default function Log() {

  return (
    <>

      <div className='container_div_img' >
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"  />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://expressjs.com/" target="_blank">
          <img src="./express.png" className="logo express" alt="React logo" />
        </a>

      </div>


    </>
  )
}


