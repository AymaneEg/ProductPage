import React, { useState , useContext } from 'react'
import product from '../Product/Images/image-product-1-thumbnail.jpg'
import deleteIcon from './icon-delete.svg'
import CartItems, { CartContext } from '../Cart/CartItems'

export default function Cart() {
   
   const {count , setCount, item } = useContext(CartContext);
  //const [item , setItem] = useState("")


  if(count != 0  ){
   return (
      <div className=' w-80 border drop-shadow-2xl bg-white   rounded-lg absolute -bottom-56 mt-20 -left-60 lg:-left-40    '>
      <div className=' w-full border-b h-10 flex items-center py-4'>
         <h1 className='font-bold px-4 '>Cart</h1>
      </div> 
      <div className='w-full p-4'>
      <div className='flex items-center justify-around pt-4'>
        <div className='flex items-center justify-around gap-2'>
           <img src={product} className="w-12 rounded-lg" alt="" />
           <div>
              <h1>Fall Limited Edition Sneakers</h1>
              <h1>{`$${item.price} x ${count}`}<span className='font-bold'>{` $${item.price * count}`}</span></h1> 
           </div>
        </div> 
        <img src={deleteIcon} className="cursor-pointer" onClick={()=>setCount(0) } alt="" />
      </div>
      <button className='bg-Corange text-white  my-4  h-12 rounded-lg w-full'>
                Checkout
      </button>
      </div>
      
     </div>
     )
     
}
else{
   return (
      <div className=' w-80 border drop-shadow-2xl bg-white h-56   rounded-lg absolute -bottom-56 mt-20 -left-60 lg:-left-40   '>

       <div className=' w-full border-b h-10 flex items-center py-4'>
         <h1 className='font-bold px-4 '>Cart</h1>
      </div> 
      <div className='flex justify-center items-center h-44 '>
        <h1 className='font-bold text-Dark_grayish_blue'>Your cart is empty.</h1>
      </div>
     </div>
   )
  }  

  
  
}
