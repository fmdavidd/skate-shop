import '../App.css'
import Skate from "../assets/skate-color.png"
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function products() {
   return(
    <>
    <Link to="/product" >
    <div className='caja'>
        <h1>SKATE $19.99</h1>
    <img className='skate' src={Skate} />
    </div>
    </Link>
    </>
   )
}
  