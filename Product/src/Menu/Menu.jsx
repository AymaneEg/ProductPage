import React, { useContext, useState } from 'react'
import logo from  "./logo.svg"
import cart from "./icon-cart.svg"
import avatar from "./image-avatar.png"
import './Menu.css' 
import 'boxicons'
import Menu_open from './icon-menu.svg'
import Menu_close from './icon-close.svg'
import Cart from '../Cart/Cart'
import CartItems, { CartContext } from '../Cart/CartItems'


export default function Menu(props) {

  const [openMenu , setOpenMenu] = useState(false);
  const [openCart , setOpenCart] = useState(false); 

  const {count } = useContext(CartContext);

  useState(()=>{
    
    window.addEventListener( 'scroll' , ()=>{
      setOpenMenu(false);
    })

    window.addEventListener( 'click' , event =>{
       if(openCart){
         console.log(event.target.id)
         setOpenCart(false)
       }
    })
  } , [])

  const OpenMenu = ()=> {
    setOpenMenu(true);
    setOpenCart(false);

  }

  return (
    <div className=' lg:w-10/12 md:w-10/12 mx-auto flex items-center justify-between lg:p-10 md:p-10 p-4  relative border-b'>
      <div className='flex justify-around items-center'>
         <img src={Menu_open} className="mr-4 lg:hidden mt-2" alt="" onClick={()=> OpenMenu() } />
         <img src={logo}/>
         <div className={openMenu ? 'MenuList opened' : 'MenuList'}>
          <img src={Menu_close} className="hidden" alt="" onClick={()=>setOpenMenu(false)}/>
            <ul className='flex  h-fit justify-around items-center gap-6 mx-10 relative'>
                <li className='MenuItems' ><a href="/" >Collections</a></li>
                <li className='MenuItems' ><a href="/" >Men</a></li>
                <li className='MenuItems' ><a href="/" >Women</a></li>
                <li className='MenuItems' ><a href="/" >About</a></li>
                <li className='MenuItems' ><a href="/" >Contact</a></li>
            </ul>
         </div>
      </div>
      <div className='flex justify-between gap-1 md:gap-9 lg:gap-9 items-center '> 
         <div className='flex relative items-center'>
          <div id='openCart' className='relative' onClick={()=> setOpenCart(prev => !prev)}>
            <span className='absolute bg-Corange text-sm rounded-full w-4 h-4 flex items-center justify-center text-white font-bold -top-2 right-0' style={{display : count == 0 ? "none" : "flex"}}>{count}</span>
            <img src={cart} className="cursor-pointer"  alt="" />
          </div>
           <div id='cart' className='absolute pt-20 z-50 ' style={{display : openCart ? "flex" : "none"}}>
             <Cart/>
           </div>
         </div>
         <img src={avatar} className="w-10 mx-4 hover:border-Corange hover:border-2 rounded-full" alt="" />
      </div>

      <div className={openMenu ? "MenuBack" : " "} style={{position : "absolute"}} onClick={()=>setOpenMenu(false)} ></div>
    </div>
  )
}
