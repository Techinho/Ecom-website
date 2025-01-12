export default function PayPalCheckout() {
    return (
      <div className="w-full max-w-md mx-auto bg-white  rounded-lg overflow-hidden">
      
        <div className="px-6 py-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="paypalEmail" className="block text-sm font-medium text-gray-700">PayPal Email</label>
            <input
              id="paypalEmail"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="your-email@example.com"
              type="email"
            />
          </div>
          <p className="text-sm text-gray-500">
            You will be redirected to PayPal to complete your payment securely.
          </p>
        </div>
        <div className="text-center" >
          <button
            className="w-[90%] px-4 py-2 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Proceed to PayPal
          </button>
        </div>
      </div>
    )
  }
  
  