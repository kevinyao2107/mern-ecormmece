import React from 'react';
import { products } from './../../data/data.js';
import ProductCard from '../../utilities/ProductCard';

const ContentRight = () => {
  return (
    <div className='content-right'>
      <div className='content-right__card'>
        {products.map((product, index) => (
          <ProductCard product={product} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ContentRight;
