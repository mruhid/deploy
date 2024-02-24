import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Basket from './pages/Basket'
import Header from './components/Header'
import Product from './pages/Product'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/basket' element={<Basket/>} />
        <Route path='/product/:id' element={<Product/>} />
      </Routes>

    </>
  )
}

export default App
