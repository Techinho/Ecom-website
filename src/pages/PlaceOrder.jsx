import React from 'react'
import CartTotal from '../components/cartTotal'
import Title from '../components/Title'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Choices from '../components/Payement/payementChoices'

const PlaceOrder = () => {
  
  return (
    <div className='flex flex-col sm:flex-row justify-between my-10 items-center'>
      <div className='text-2xl mb-3 uppercase'>
        <Title  text1={"Delivery"} text2={"Information"}/>

      </div>
      <div className='w-[100%] sm:w-[40%] '>
        <CartTotal/>
        <Choices className=""/>
      </div>
    </div>
  )
}

export default PlaceOrder