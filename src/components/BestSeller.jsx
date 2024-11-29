import React, { useEffect, useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'

const BestSeller = () => {
    const { products } = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const bestProducts = products.filter(product => product.bestseller)
        setBestSeller(bestProducts.slice(0, 5))
    }, [])  // Depend on products, so it will re-run if products change


    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={"Best"} text2={"Sellers"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente quia illo sunt aperiam possimus eos obcaecati distinctio quis dolorem? Impedit laborum quos quas mollitia beatae, rerum porro inventore commodi?
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item._id} img={item.image[0]} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    )
}

export default BestSeller
