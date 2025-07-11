import React from 'react';

const ShippingMethode = ({ shippingMethode, setShippingMethode }) => {
  return (
    <div className='shipping-methode'>
      <h4 className='shipping-methode__title'>
        Choisir une methode de livraison
      </h4>
      <div className='shipping-methode__types'>
        <div
          onClick={() => setShippingMethode('Point de relais')}
          className={
            shippingMethode === 'Point de relais'
              ? ' shipping-methode__type-active'
              : 'shipping-methode__type'
          }
        >
          {shippingMethode === 'Point de relais' ? (
            <svg
              style={{ height: 20, width: 20, color: '#4b02a4' }}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              style={{ height: 20, width: 20 }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          )}

          <span>Point de relais</span>
        </div>
        <div
          onClick={() => setShippingMethode('Livraison à domicile')}
          className={
            shippingMethode === 'Livraison à domicile'
              ? ' shipping-methode__type-active'
              : 'shipping-methode__type'
          }
        >
          {shippingMethode === 'Livraison à domicile' ? (
            <svg
              style={{ height: 20, width: 20, color: '#4b02a4' }}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              style={{ height: 20, width: 20 }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
              />
            </svg>
          )}

          <span>Livraison à domicile</span>
        </div>
      </div>
      <h4 className='shipping-methode__title'>Addresse de livraison</h4>
      <div className='shipping-methode__infos'>
        <input
          className='shipping-methode__infos-addresse'
          type='text'
          placeholder='Entrer votre addresse de livraison'
        />
        <input
          className='shipping-methode__infos-number'
          type='text'
          placeholder='Entrer votre numéro de téléphone'
        />
      </div>
    </div>
  );
};

export default ShippingMethode;
