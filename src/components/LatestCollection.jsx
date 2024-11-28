import React, { useState,useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";


const LatestCollection = () => {
  
    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{

      setLatestProducts(products.slice(0,10))


    },[])

   

    return (
        <div className="my-10">
         <div className="text-center py-8 text-3xl">
          <Title text1={"Latest"} text2={"Collections"} />
          <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, harum id! Nihil reiciendis mollitia veritatis enim non dignissimos possimus obcaecati ex eveniet excepturi rem molestias, exercitationem repudiandae necessitatibus qui modi.
          </p>

         </div>
       {/* Rendering Products */}
     <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-4 gap-y-6 ">
         {
         latestProducts.map((item,index)=>(
          <ProductItem key={index} id={item._id} img={item.image[0]} name={item.name} price={item.price} />
         ))
         }
     </div>
        
           
        </div>
    );
};

export default LatestCollection;
