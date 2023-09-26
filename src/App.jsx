import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'

import Home from './pages/home'
import Product from './pages/product'
function App() {
  

  return (
   
    <>
      
      <BrowserRouter>
       
        <Routes>
          <Route index element={<Home />} />
          <Route path='/product' element={<Product />} />
        </Routes>
        
      </BrowserRouter>
    
      
      </>
      
  )
}

export default App

