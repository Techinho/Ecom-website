import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct,setFilterProduct]=useState([])

  useEffect(()=>{
    setFilterProduct(products)
  },[])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={assets.dropdown_icon} alt="Dropdown icon" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={"Men"} /> Men
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={"Women"} />
              Women
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={"Kids"} />
              Kids
            </p>
          </div>
        </div>

        {/* Type Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={"TopWear"} />
              TopWear
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={"BottomWear"} />
              BottomWear
            </p>
            <p className='gap-2 flex'>
              <input className='w-3' type='checkbox' value={"WinterWear"} />
              WinterWear
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="  ALL" text2="COLLECTIONS"/>
          {/* Product Sort */}
          <select className="border borde-gray-300 text-sm px-2">
            <option value="relebant">Sort by : relevent</option>
            <option value="low-hight">Sort by : low to hight</option>
            <option value="hight-low">Sort by : hight to low </option>

          </select>

        </div>
        {/* Map product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
              {filterProduct.map((item,index)=>(
                <ProductItem key={index} name={item.name} price={item.price} id={item.id} img={item.image[0]}/>
              ))}
        </div>

      </div>
    </div>
  );
};

export default Collection;
