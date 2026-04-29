import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import Body from './components/Body'

function App() {


  return (
    <>
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Body />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/products/detail' element = {<ProductDetailPage />} />
        </Route>

      </Routes>
    
    </BrowserRouter>
  
    </>
  )
}

export default App
