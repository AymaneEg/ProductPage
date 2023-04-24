import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product/Product'
import CartItems from './Cart/CartItems'


function App() {

  return (
    <div className="App">
      <CartItems>
        <Product/>
      </CartItems>
    </div>
  )
}

export default App
