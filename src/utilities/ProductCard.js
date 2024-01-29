import React from 'react';
import RatingStars from './RatingStars';
import SecondaryBtn from './SecondaryBtn';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();
  return (
    <div className={`popular-item `}>
      <img
        src={product.image}
        alt={product.name}
        className='popular-item_img'
      />
      <div className='popular-item__description'>
        <span>{product.price}€</span>
        <h4>{product.name}</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <RatingStars rating={product.rating} />
          <button
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              style={{ height: '22px', width: '22px' }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
              />
            </svg>
          </button>
        </div>
        <SecondaryBtn onClick={() => navigate(`/produit/${product.id}`)}>
          Acheter
        </SecondaryBtn>
      </div>
    </div>
  );
};

export default ProductCard;
