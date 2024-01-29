import React, { useState } from 'react';
import { products } from '../../data/data';

const CartItem = ({ product }) => {
  const [qty, setQty] = useState(1);

  const handleDecrement = () => {
    if (qty > 1) {
      setQty((qty) => qty - 1);
    }
  };

  const handleIncrement = () => {
    setQty((qty) => qty + 1);
  };
  return (
    <div className='cart-product__items'>
      <div className='cart-product__items-image'>
        <img
          className='cart-product__items-img'
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className='cart-product__details'>
        <div className='cart-product__detail'>
          <h5 className='cart-product__detail-title'>{product.name}</h5>
          <div className='cart-product__detail-count'>
            <span
              className='cart-product__detail-count__descriment'
              onClick={handleDecrement}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M5 12h14'
                />
              </svg>
            </span>
            <span className='cart-product__detail-count__number'>{qty}</span>
            <span
              className='cart-product__detail-count__increment'
              onClick={handleIncrement}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg>
            </span>
          </div>
        </div>
        <span className='cart-product__details-price'>{product.price}€</span>
      </div>
      <span className='cart-product__details-like'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          style={{ width: '20px', height: '20px' }}
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
          />
        </svg>
      </span>
      <span className='cart-product__details-remove'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          style={{ width: '20px', height: '20px' }}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
          />
        </svg>
      </span>
    </div>
  );
};

const ListProduct = () => {
  return (
    <div className='cart-product'>
      <h4 className='cart-product__title'>Products encours de commande</h4>
      {products.slice(0, 2).map((product, index) => (
        <CartItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ListProduct;
