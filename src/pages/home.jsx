import Navbar from '../components/navbar'
import Products from '../components/products'
import '../App.css' 
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Lineas from "../assets/lineas.svg"
export default function Home() {
    return (
   
        <>
          <Navbar />
          <img className='lineas' src={Lineas} />
          <h1 className='titulo'>PRODUCTOS</h1>
          <div className='centrar'>
            
          <Products />
          <Products />
          <Products />
          <Products />
          </div>
          </>
          
      )
    }