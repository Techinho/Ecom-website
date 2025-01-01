import React from 'react'

const Cart = () => {
  return (
    <div>
      {/* container */}
      <div class="bg-gray-100 h-screen py-8">
        <div class="container mx-auto px-4">
          {/* Titre dyal l'cart */}
          <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div class="flex flex-col md:flex-row gap-4">
            <div class="md:w-3/4">
              <div class="bg-white rounded-lg shadow-md p-6 mb-4">
                {/* Table dyal l'products fi cart */}
                <table class="w-full">
                  <thead>
                    <tr>
                      <th class="text-left font-semibold">Product</th>
                      <th class="text-left font-semibold">Price</th>
                      <th class="text-left font-semibold">Quantity</th>
                      <th class="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  
                  <tbody>
                    {/* product */}
                    <tr>
                      <td class="py-4">
                        <div class="flex items-center">
                          {/* Image dyal product */}
                          <img class="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product image"></img>
                          {/* product name */}
                          <span class="font-semibold">Product name</span>
                        </div>
                      </td>
                      {/* Taman dyal product */}
                      <td class="py-4">$19.99</td>
                      <td class="py-4">
                        {/* Boutons dyal la quantite */}
                        <div class="flex items-center">
                          <button class="border rounded-md py-2 px-4 mr-2">-</button>
                          <span class="text-center w-8">1</span>
                          <button class="border rounded-md py-2 px-4 ml-2">+</button>
                        </div>
                      </td>
                      {/* Total dyal had l'product */}
                      <td class="py-4">$19.99</td>
                    </tr>
                    {/* More product rows can be added */}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Hadi summary dyal lcart */}
            <div class="md:w-1/4">
              <div class="bg-white rounded-lg shadow-md p-6">
                {/* Summary section */}
                <h2 class="text-lg font-semibold mb-4">Summary</h2>
                <div class="flex justify-between mb-2">
                  {/* Subtotal */}
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div class="flex justify-between mb-2">
                  {/* Taxes */}
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div class="flex justify-between mb-2">
                  {/* Shipping */}
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr class="my-2"></hr>
                <div class="flex justify-between mb-2">
                  {/* Total */}
                  <span class="font-semibold">Total</span>
                  <span class="font-semibold">$21.98</span>
                </div>
                {/* Button Checkout */}
                <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
