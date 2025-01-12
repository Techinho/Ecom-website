import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"; 

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const navigate=useNavigate()

  return (
    <div className='w-full'>
      {/* Title dyal CART TOTALS */}
      <div className='text-2xl'>
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>

      {/* Hna section dyal subtotal, delivery fee, w total */}
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        {/* Subtotal */}
        <div className='flex justify-between'>
          <p>SubTotal</p>
          <p>{getCartAmount()}.00 {currency}</p>
        </div>
        <hr />
        
        {/* Delivery fee */}
        <div className='flex justify-between'>
          <p>Delivery Fee</p>
          <p>{delivery_fee} {currency}</p>
        </div>
        <hr />
        
        {/* Total */}
        <div className='flex justify-between'>
          <b>Total</b>
          <b>
            {getCartAmount() === 0 
              ? 0 
              : getCartAmount() + delivery_fee} {currency}
          </b>
        </div>
        <div className='w-full text-end '>
          <button onClick={()=>{getCartAmount()>0?navigate('/place-order'):toast.error("Your Cart is empty")}} className='bg-black px-4 py-2 text-white text-sm rounded my-8 uppercase'>Procced to checkout</button>

        </div>
      </div>
    </div>
  );
};

export default CartTotal;
