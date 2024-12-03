import React from 'react'

const NewsLetterBox = () => {
     const OnsubmitHandler=(event)=>{
        event.preventDefault()

     }


  return (
    <div className='text-center'>
     <p className='text-2xl font-medium text-gray-800'>  Subscibe Now and get 20% off</p> 
     <p className='text-gray-400 mt-3'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis nesciunt totam soluta deserunt numquam, quas, eum excepturi, deleniti doloribus consectetur provident dolorum sint repellendus veritatis perferendis in repellat quaerat atque?
     </p>
     <form onSubmit={OnsubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
    <input className='w-full sm:flex-2 outline-none ' type="email" placeholder='enter your email' required />
    <button className='bg-black text-white text-xs py-4 px-10 ' type='submit'> SUBSCRIBE</button>
     </form>
     

    </div>
  )
}

export default NewsLetterBox