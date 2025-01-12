export default function CreditCardCheckout() {
    return (
      <div className="w-full max-w-md mx-auto bg-white rounded-lg overflow-hidden">
        <div className="px-6 py-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on Card</label>
            <input
              id="cardName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              id="cardNumber"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <select
                id="expiry"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <option value="">MM/YY</option>
                <option value="01/24">01/24</option>
                <option value="02/24">02/24</option>
                <option value="03/24">03/24</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                id="cvv"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                placeholder="123"
                type="password"
                maxLength={3}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="w-[90%] px-4 py-2 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Pay Now
          </button>
        </div>
      </div>
    )
  }
  
  