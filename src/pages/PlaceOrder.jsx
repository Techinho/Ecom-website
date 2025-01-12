import React, { useContext } from 'react';
import CartTotal from '../components/cartTotal';
import Title from '../components/Title';
import Choices from '../components/Payment/paymentChoices';
import CreditCardCheckout from '../components/Payment/credit-cart-checkout';
import PayPalCheckout from '../components/Payment/paypal-checkout';
import CashOnDeliveryCheckout from '../components/Payment/cash-on-delivery';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const { choice } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between my-10 items-start gap-8">
      {/* Left Section */}
      <div className="flex flex-col w-full sm:w-[50%]">
        <div className="text-2xl mb-3 uppercase">
          <Title text1={"Delivery"} text2={"Information"} />
        </div>
        <div
          style={{ minHeight: "370px" }} // Fixe une hauteur minimale pour éviter les décalages
        >
          {choice === "paypal" && <PayPalCheckout />}
          {choice === "card" && <CreditCardCheckout />}
          {choice === "apple-pay" && <CashOnDeliveryCheckout />}
          {choice === "" && <PayPalCheckout />}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-[40%]">
        <CartTotal />
        <div className='mt-4'>
        <div className="text-md mb-3 uppercase">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
        </div>
        <Choices />
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
