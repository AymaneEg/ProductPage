import React from 'react'
import reactDom from 'react-dom'

import Product1 from './Images/image-product-1.jpg'
import Product1Th from './Images/image-product-1-thumbnail.jpg'

import Product2 from './Images/image-product-2.jpg'
import Product2Th from './Images/image-product-2-thumbnail.jpg'

import Product3 from './Images/image-product-3.jpg'
import Product3Th from './Images/image-product-3-thumbnail.jpg'

import Product4 from './Images/image-product-4.jpg'
import Product4Th from './Images/image-product-4-thumbnail.jpg' 

import next from "./Images/icon-next.svg" 
import previous from "./Images/icon-previous.svg" 
import 'boxicons'

export default function ProductDetails(props) {
  return reactDom.createPortal (
    <>
    <div className='flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-CBlack' style={{display : props.opened.openDetails ? "flex" : "none"}}>
    <div className='w-2/6 md:w-3/6 flex justify-end px-9 '>
        <span className='cursor-pointer' onClick={()=> props.opened.setOpendetails(false)}>
          <box-icon name='x' color='#ff9118'  ></box-icon>
        </span>
    </div>
    <div className='lg:w-2/6 md:w-3/6 w-full flex flex-col ' style={{minWidth : "30%"}}>
            <dir className="ProductImage2" style={{backgroundImage : `URL(${props.value.images[props.value.ImageIndex].image})`}}>
                <div className='Toggle active left' onClick={()=>props.dipachIndex({type : props.value.ACTIONS.DECREMENT})}>
                    <img src={previous} alt="" />
                </div>
                <div className='Toggle active right' onClick={()=>props.dipachIndex({type :props.value.ACTIONS.INCREMENT})}>
                    <img src={next} alt="" />
                </div>
                {/* <img src={ProductImage} alt="" className='rounded-lg w-full   ' /> */}
            </dir>

            <div className='hidden md:flex lg:flex w-10/12 justify-around gap-6  mx-auto '>
                <div className={props.value.images[0].focused ? "Images focusedDeatails" : "Images "} >
                    <span ></span>
                   <img src={Product1Th} className="w-24 cursor-pointer " onClick={()=>props.value.ToggleImage(0)} alt="" />
                </div>
                <div className={props.value.images[1].focused ? "Images focusedDeatails" : "Images"} >
                    <span></span>
                   <img src={Product2Th} className="w-24 cursor-pointer " onClick={()=>props.value.ToggleImage(1)} alt="" />
                </div>
                <div className={props.value.images[2].focused ? "Images focusedDeatails" : "Images"}>
                    <span></span>
                   <img src={Product3Th} className="w-24 cursor-pointer " onClick={()=>props.value.ToggleImage(2)} alt="" />
                </div>
                <div className={props.value.images[3].focused ? "Images focusedDeatails" : "Images"}>
                    <span></span>
                   <img src={Product4Th} className="w-24 cursor-pointer " onClick={()=>props.value.ToggleImage(3)} alt="" />
                </div>
            </div>
        </div>
    </div>
    </> , document.getElementById("ProductDetail")
  )
}
