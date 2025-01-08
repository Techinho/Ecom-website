import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

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
      </div>
    </div>
  );
};

export default CartTotal;
