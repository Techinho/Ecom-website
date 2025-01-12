export default function CashOnDeliveryCheckout() {
    return (
      <div className="w-full max-w-md mx-auto bg-white  rounded-lg overflow-hidden">
        <div className="px-6 py-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="+212 682-146-122"
              type="tel"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Delivery Address</label>
            <textarea
              id="address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your full address"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            className="w-[90%] px-4 py-2 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Place Order
          </button>
        </div>
      </div>
    )
  }
  
  