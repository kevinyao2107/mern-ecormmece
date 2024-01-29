import React from 'react';
import ProductCard from '../utilities/ProductCard';
import { products } from '../data/data';
import './favorite.css';

const Favorite = () => {
  return (
    <div className='favorite'>
      <div className='favorite__cards'>
        {products.map((product, index) => (
          <ProductCard product={product} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Favorite;
