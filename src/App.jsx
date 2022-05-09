import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import {Home} from "./components/Home"
import {Navbar} from "./components/Navbar"
import {Routes,Route} from "react-router-dom"
import {Login} from "./components/Login"
import Signup from './components/Signup'
import {Product} from './components/Product'
//import { ProductDetails } from './components/ProductDetails'
import { Payment } from './components/payment'
//import { Cart } from './components/Cart'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Navbar/>
     
      
      {/*<Home />*/}
      {/*<Login/>*/}
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/payment' element={<Payment />}></Route>
      </Routes>
    </div>
  )
}

export default App
