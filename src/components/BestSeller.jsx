import React, { useEffect, useContext, useState } from 'react'  
// Import des hooks React : useEffect pour gérer les effets secondaires, 
// useContext pour consommer un contexte global, et useState pour gérer l'état local.  

import { ShopContext } from '../context/ShopContext'  
// Import du contexte ShopContext pour accéder aux données globales du magasin.  

import ProductItem from './ProductItem'  
// Import du composant ProductItem qui représente un produit individuel.  

import Title from './Title'  
// Import du composant Title pour afficher un titre stylisé.  

const BestSeller = () => {  
    const { products } = useContext(ShopContext)  
    // Récupération des produits depuis le contexte global ShopContext.  

    const [bestSeller, setBestSeller] = useState([])  
    // État local pour stocker les produits les plus vendus.  

    useEffect(() => {  
        // useEffect est utilisé pour filtrer les produits les plus vendus
        // et mettre à jour l'état lorsque le composant est monté ou lorsque les produits changent.  
        const bestProducts = products.filter(product => product.bestseller)  
        // Filtre les produits ayant la propriété "bestseller" définie à true.  

        setBestSeller(bestProducts.slice(0, 5))  
        // Ne conserve que les 5 premiers produits de la liste filtrée.  
    }, [])  
    // [] : Cela signifie que l'effet s'exécute uniquement au montage initial du composant.  

    return (  
        <div className='my-10'>  
            {/* Conteneur principal avec un espacement vertical. */}  

            <div className='text-center text-3xl py-8'>  
                {/* Titre centré avec une taille de texte et un padding vertical. */}  

                <Title text1={"Best"} text2={"Sellers"} />  
                {/* Composant Title utilisé pour afficher "Best Sellers". */}  

                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>  
                    {/* Paragraphe descriptif avec différentes tailles de texte selon les écrans. */}  
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente quia illo sunt aperiam possimus eos obcaecati distinctio quis dolorem? Impedit laborum quos quas mollitia beatae, rerum porro inventore commodi?  
                </p>  
            </div>  

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">  
                {/* Grille responsive pour afficher les produits, avec des colonnes et des écarts ajustés selon la taille de l'écran. */}  

                {bestSeller.map((item, index) => (  
                    // Parcourt les produits les plus vendus et crée un composant ProductItem pour chaque produit.  
                    <ProductItem  
                        key={index}  
                        id={item._id}  
                        img={item.image[0]}  
                        name={item.name}  
                        price={item.price}  
                    />  
                ))}  
            </div>  
        </div>  
    )  
}  

export default BestSeller  
// Exportation du composant pour l'utiliser dans d'autres parties de l'application.  
