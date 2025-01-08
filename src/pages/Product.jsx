import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import * as Tabs from "@radix-ui/react-tabs"; 
import { Box, Text } from "@radix-ui/themes";
import RelatedProducts from "../components/RelatedProducts";

// Composant principal pour afficher les détails d'un produit
const Product = () => {
  const { productId } = useParams(); // Récupère l'ID du produit à partir des paramètres de l'URL
  const { products, currency,addToCart} = useContext(ShopContext); // Récupère les produits et la devise via le contexte global
  const [productData, setProductData] = useState({}); // Stocke les données du produit actuel
  const [image, setImage] = useState(""); // Stocke l'image principale à afficher
  const [size, setSize] = useState(""); // Stocke la taille sélectionnée

  // Fonction pour trouver et définir les données du produit en fonction de l'ID
  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct); // Définit les données du produit
      setImage(foundProduct.image[0]); // Définit l'image principale comme la première de la liste
    }
  };

  useEffect(() => {
    fetchProductData(); // Charge les données du produit lorsque l'ID ou les produits changent
  }, [productId, products]);

  console.log(productData); // Debug : affiche les données du produit dans la console

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Conteneur principal pour aligner les images et les informations */}
      <div className='flex flex-col sm:flex-row gap-12'>
        {/* Section des images */}
        <div className='flex-1 flex flex-col-reverse sm:flex-row gap-3'>
          {/* Miniatures des images */}
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {Array.isArray(productData.image) &&
              productData.image.length > 0 &&
              productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)} // Change l'image principale lorsqu'on clique sur une miniature
                  src={item}
                  key={index}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border border-gray-200 rounded'
                  alt={`Product Image ${index + 1}`}
                />
              ))}
          </div>

          {/* Image principale */}
          <div className='w-full sm:w-[80%]'>
            <img
              className='w-full h-auto border rounded'
              src={image}
              alt='Main Product'
            />
          </div>
        </div>

        {/* Section des informations du produit */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1> {/* Nom du produit */}
          <div className='flex items-center gap-1 mt-2'>
            {/* Affichage des étoiles pour les avis */}
            <img src={assets.star_icon} className='w-3' alt='star' />
            <img src={assets.star_icon} className='w-3' alt='star' />
            <img src={assets.star_icon} className='w-3' alt='star' />
            <img src={assets.star_icon} className='w-3' alt='star' />
            <img src={assets.star_dull_icon} className='w-3' alt='star dull' />
            <p className='pl-2'>(122)</p> {/* Nombre d'avis */}
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {currency}{productData.price} {/* Prix du produit */}
          </p>
          <p className='mt-5 text-gray-500'>{productData.description}</p> {/* Description courte */}

          {/* Sélection de la taille */}
          <div className='flex flex-col gap-4 my-5'>
            <p className='text-lg'> Select Size</p>
            <div className='flex gap-2'>
              {Array.isArray(productData.sizes) &&
                productData.sizes.length > 0 &&
                productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)} // Définit la taille sélectionnée
                    className={`border py-2 px-4 bg-gray-200 ${size === item ? "border-black" : ""}`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>

          {/* Bouton pour ajouter au panier */}
          <button onClick={()=>addToCart(productData._id,size)} className='py-3 px-8 bg-black text-sm text-white active:bg-gray-700'>
            ADD TO CARD
          </button>

          {/* Informations supplémentaires */}
          <hr className='mt-8 sm:w-4/5' />
          <div className='mt-4 text-md text-gray-600 flex flex-col gap-1'>
            <p>100% original product.</p>
            <p> Cash on delivery is available.</p>
            <p> Easy exchange and return policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Onglets pour Description et Avis */}
      <div className='mt-12'>
        <Tabs.Root defaultValue='Description'>
          <Tabs.List className='flex border-b'>
            {/* Onglet Description */}
            <Tabs.Trigger
              value='Description'
              className='px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 aria-[selected=true]:bg-gray-300'
            >
              Description
            </Tabs.Trigger>
            {/* Onglet Avis */}
            <Tabs.Trigger
              value='Reviews'
              className='px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-gray-200 aria-[selected=true]:bg-gray-300'
            >
              Reviews
            </Tabs.Trigger>
          </Tabs.List>

          <Box pt='3'>
            <Tabs.Content value='Description'>
              <Text size='3'>{productData.description}</Text> {/* Description complète */}
            </Tabs.Content>
            <Tabs.Content value='Reviews'>
              <Text size='2'>Reviews.</Text> {/* Placeholder pour les avis */}
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </div>
      <div>
      <RelatedProducts/>
      </div>
    </div>
  );
};

 

export default Product; // Exporte le composant
