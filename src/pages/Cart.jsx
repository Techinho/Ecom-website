import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/cartTotal';

const Cart = () => {
  // Hna kanjibo data mn ShopContext
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  
  // State bach ndiro update dyal data dyal cart
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    // Loop bach nakhdo items mn cartItems
    // First loop: Kay dir iteration 3la IDs dyal products li kaynin f cartItems
    for (const items in cartItems) {
      // Second loop: Kay dir iteration 3la sizes li kaynin f product ID
      for (const item in cartItems[items]) {
        // Wach size kayn f cart w l quantity dyalo > 0
        if (cartItems[items][item] > 0) {
          // Kat ajouti lID, size, w quantité dyal product f tempData
          tempData.push({
            _id: items, // ID dyal product
            size: item, // Size dyal product (e.g., S, M, L)
            quantite: cartItems[items][item], // Quantité dyal size hadak
          });
        }
      }
    }

    // Update cartData f state w localStorage
    setCartData(tempData);
    localStorage.setItem('cartItem', JSON.stringify(tempData));
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      {/* Title dyal cart */}
      <div className='text-2xl mb-3'>
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      
      {/* Affichage dyal products */}
      <div>
        {cartData.map((item, index) => {
          // Kan9albo 3la product details
          const productData = products.find((product) => product._id === item._id);
          return (
            <div 
              key={index} 
              className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              <div className='flex items-start gap-6'>
                {/* Image dyal product */}
                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                
                <div>
                  {/* Smit product */}
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  
                  <div className='flex items-center gap-5 mt-2'>
                    {/* Prix w taille */}
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 font-medium'>{item.size}</p>
                  </div>
                </div>
              </div>
              
              {/* Input dyal quantity */}
              <input 
                onChange={(e) => {
                  e.target.value === "" || e.target.value === 0 
                    ? null 
                    : updateQuantity(item._id, item.size, Number(e.target.value));
                }} 
                className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' 
                type="number" 
                min={1} 
                defaultValue={item.quantite} 
              />
              
              {/* Icon dial delete */}
              <img 
                onClick={() => {
                  updateQuantity(item._id, item.size, 0);
                }} 
                className='w-4 mr-4 sm:w-5 cursor-pointer' 
                src={assets.bin_icon} 
                alt="" 
              />
            </div>
          );
        })}
      </div>
      
      {/* Section dyal total */}
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
