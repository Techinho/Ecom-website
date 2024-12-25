import React, { useState, useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';
import { useParams } from 'react-router-dom';

const RelatedProducts = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();

  const [RelatedProduct, setRelatedProducts] = useState([]);
  const [productCategorie, setProductCategorie] = useState('');
  const [productSubCategorie, setProductSubCategorie] = useState('');

  // Récupérer la catégorie et la sous-catégorie du produit actuel
  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductCategorie(product.category || '');
      setProductSubCategorie(product.subCategory || '');
    }
  }, [productId, products]);

  // Filtrer les produits liés en excluant le produit principal
  useEffect(() => {
    if (productCategorie && productSubCategorie) {
      setRelatedProducts(
        products.filter(
          (item) =>
            item.category === productCategorie &&
            item.subCategory === productSubCategorie &&
            item._id !== productId // Exclure le produit principal
        ).slice(0,5)
      );
    }
  }, [productCategorie, productSubCategorie, products, productId]); // Ajout de productId comme dépendance

  return (
    <div className="my-10">
      {/* Conteneur principal avec un espacement vertical */}
      <div className="text-center text-3xl py-8">
        {/* Titre centré */}
        <Title text1="Related" text2="Products" />
       
      </div>

      {/* Grille de produits liés */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {RelatedProduct.length > 0 ? (
          RelatedProduct.map((item, index) => (
            <ProductItem
             onclick={window.scrollTo({ top: 0, behavior: 'smooth' })}
              key={index}
              id={item._id}
              img={item.image[0]}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No related products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
