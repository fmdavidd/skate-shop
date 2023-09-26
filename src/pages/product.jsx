import Navbar from '../components/navbar'
import Products from '../components/products'
import '../App.css' 
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Lineas from "../assets/lineas.svg"
import Skate from "../assets/skate-color.png"
export default function Home() {
    return (
   
        <>
        <Navbar />
          <img className='lineas' src={Lineas} />
          <h1 className='titulo'>SKATE</h1>
          <div className='content'>
          <div className='product'>
          <img className='skate' src={Skate} />
          
          </div>
          <div className='info'>
          <h1>Tabla De SKATE 8.25"</h1>
          <h1>$19.99</h1>
          <h3 className='h3'>HASTA 3 CUOTAS SIN INTERES</h3>
          <h3 className='h3-2'>AGREGAR AL CARRITO</h3>
          </div>
          </div>
          </>
          
      )
    }