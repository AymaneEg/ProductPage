import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react'
import Menu from '../Menu/Menu'

import Product1 from './Images/image-product-1.jpg'
import Product1Th from './Images/image-product-1-thumbnail.jpg'

import Product2 from './Images/image-product-2.jpg'
import Product2Th from './Images/image-product-2-thumbnail.jpg'

import Product3 from './Images/image-product-3.jpg'
import Product3Th from './Images/image-product-3-thumbnail.jpg'

import Product4 from './Images/image-product-4.jpg'
import Product4Th from './Images/image-product-4-thumbnail.jpg'

import plus from "./Images/icon-plus.svg"
import minus from "./Images/icon-minus.svg" 

import next from "./Images/icon-next.svg" 
import previous from "./Images/icon-previous.svg" 
import { CartContext } from '../Cart/CartItems'
import ProductDetails from './ProductDetails'
import { useSelector , useDispatch } from 'react-redux'
import { focused } from './Store/Slice'


    let ACTIONS = {
        INCREMENT : 'increment' ,
        DECREMENT : 'decrement'
    } 

    function reducer( OrderCount , action){
    
        switch(action.type) {
           case ACTIONS.INCREMENT: 
              return { count : OrderCount.count +1}
            case ACTIONS.DECREMENT : 
            let count = {count : OrderCount.count-1}
            if(OrderCount.count <= 0){
              count = {count : 0}
            }
            return  count
        }
       
    }

    let images = {
       'Product1' : {image: Product1 , focused : true} ,
       'Product2' : {image: Product2 , focused : false} , 
       'Product3': {image: Product3 , focused : false} ,
       'Product4' : {image: Product4 , focused : false}}

export default function Product() {

    const focusedIndex = useSelector((state)=> state.Slice.focused); 
    const dispatchState = useDispatch();

    
  

    const [OrderCount , dispatch] = useReducer(reducer , {count:0});
    
    const [ImageIndex , SetImageIndex] = useState(0) ;
    
    const [index , dipachIndex] = useReducer(Toggle , {count: 0 , focused : true});

    const {setCount , setItem} = useContext(CartContext); 

    const [openDetails , setOpendetails ] =  useState(false)

    
    function Toggle(index , action){
        switch(action.type) {
            case ACTIONS.INCREMENT: 
              SetImageIndex(ImageIndex >= 3 ? 3 : ImageIndex + 1)
              break;
            case ACTIONS.DECREMENT : 
              SetImageIndex(ImageIndex <= 0 ? 0 : ImageIndex - 1)
              break;
        }
    }


    const ToggleImage =  (index) => {
        
        dispatchState(focused(index))
        SetImageIndex(index);

    }

    useEffect(()=> {
        //    images[focusedIndex] = {
        //      ...images[focusedIndex],
        //      focused : true
        //    };
        images = {
            ...images ,
            focusedIndex : {
                ...images[focusedIndex],
                focused : true
            }
        }
        console.log(images)
    } , [ImageIndex])

    

    const AddTocart = ()=>{
        setCount(OrderCount.count) 
        setItem({ 
            price : 125,
            count : OrderCount , 
        });

    }
    
    useEffect(()=>{



        const image = document.getElementById("ProductImage")

        const imageEvent = ()=> {
            setOpendetails(true)
        }
        
        window.addEventListener("load" , ()=> {
            

          
            if(window.innerWidth < 942){
                image.removeEventListener("click" , imageEvent );  
            }      
            else{
                image.addEventListener("click" , imageEvent )
            }

        })
        
        window.addEventListener("resize" , ()=>{
            if(window.innerWidth < 942){
                image.removeEventListener("click" , imageEvent );  
            }
            else{
                image.addEventListener("click" , imageEvent )
            }
        })
    } , [])

  return (
    <>
    <Menu/>
    <div className='Container'>
        <div className='lg:w-3/6 md:w-3/6 w-full flex flex-col    '>
            <dir id='ProductImage' className="ProductImage" style={{backgroundImage : `URL(${images.Product1.image})`}}   >
                <div className='Toggle left' onClick={()=>dipachIndex({type : ACTIONS.DECREMENT})}>
                    <img src={previous} alt="" />
                </div>
                <div className='Toggle right' onClick={()=>dipachIndex({type : ACTIONS.INCREMENT})}>
                    <img src={next} alt="" />
                </div>
            </dir>

            <div id='Images' className='hidden md:flex lg:flex w-10/12 justify-around gap-6  mx-auto '>
                <div  className={images.Product1.focused ? "Images focused" : "Images"}  >
                   <img src={Product1Th} className="w-24 cursor-pointer " onClick={()=>ToggleImage(0)} alt="" />
                </div>
                <div className={images.Product2.focused ? "Images focused" : "Images"} >
                   <img src={Product2Th} className="w-24 cursor-pointer " onClick={()=>ToggleImage(1)} alt="" />
                </div>
                <div className={images.Product3.focused ? "Images focused" : "Images"}>
                   <img src={Product3Th} className="w-24 cursor-pointer " onClick={()=>ToggleImage(2)} alt="" />
                </div>
                <div className={images.Product4.focused ? "Images focused" : "Images"}>
                   <img src={Product4Th} className="w-24 cursor-pointer " onClick={()=>ToggleImage(3)} alt="" />
                </div>
            </div>
        </div>
     

        <div className='w-full lg:w-3/6 md:w-3/6 lg:pt-16 md:pt-16 p-4 px-8 '>
            
            <h1 className='text-Corange text-lg font-bold'>Sneakers Company</h1>
            <h1 className=' text-3xl md:text-5xl lg:text-5xl text-Very_dark_blue font-bold mt-4  mb-4 lg:mb-8 md:mb-8'>Fall Limited Edition Sneakers</h1>
            
            <p className='w-10/12 text-Dark_grayish_blue'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            
            <div className='flex flex-row lg:flex-col lg:flex-col justify-between items-center lg:items-start md:items-start'>
               <div className='flex justify-between items-center w-20 my-4'>
                   <h1 className='mr-4 text-Very_dark_blue font-bold text-2xl'>$125.00</h1>
                   <div className='bg-Pale_orange text-Corange font-bold px-2 rounded-lg'>
                       50%
                   </div>
               </div>
            <p className='text-Dark_grayish_blue'><del>$250.00</del></p> 
            </div>
           

            <div className='flex flex-col md:flex-row lg:flex-row '>
                <div className='bg-Light_grayish_blue flex w-full md:w-36 lg:w-36 h-12 items-center justify-between rounded-lg px-4 my-4'>
                    <div className='cursor-pointer' onClick={()=>dispatch({type : ACTIONS.DECREMENT })}><img src={minus} alt="" /></div>
                    <div>{OrderCount.count}</div>
                    <div className='cursor-pointer' onClick={()=>dispatch({type : ACTIONS.INCREMENT})} ><img src={plus} alt="" /></div>
                </div>
                <div className='flex justify-center'> 
                    <button onClick={()=> AddTocart()} className='bg-Corange text-white  my-4 lg:mx-4 md:mx-4 h-12 rounded-lg w-full md:w-56 lg:w-56'>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div> 
    {/* <ProductDetails value={{images , ImageIndex ,  ACTIONS , ToggleImage }} dipachIndex={dipachIndex} opened={{openDetails , setOpendetails}} /> */}
    </>
  )
}
