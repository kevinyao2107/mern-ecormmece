import React, { useState } from 'react';

const ContentOrder = () => {
  const [orderTypes, setOrderTypes] = useState('orders');
  return (
    <div className='content-order'>
      <div className={`content-order__btn `}>
        <button
          className={`content-order__btn-1 ${
            orderTypes === 'orders' && 'active'
          }`}
          onClick={() => setOrderTypes('orders')}
        >
          Liste des commandes
        </button>
        <button
          onClick={() => setOrderTypes('myorders')}
          className={`content-order__btn-2 ${
            orderTypes === 'myorders' && 'active'
          }`}
        >
          Produits achété
        </button>
      </div>
      <ul className='content-order__items'>
        <li className='content-order__item'>
          <div className='content-order__item-left'>
            <div className='content-order__item-left__header'>
              <div className='content-order__item-left__header-delevery'>
                <h5>Commande du 05 juillet</h5>
                <span>Livré</span>
              </div>
              <div className='content-order__item-left__header-sect'>
                <h5>Livraison</h5>
                <span>N° 7541456686</span>
              </div>
              <div className='content-order__item-left__header-sect'>
                <h5>Livraison & point de relais</h5>
                <span>10 Avril</span>
              </div>
            </div>
            <span className='content-order__item-left__bottom'>
              Signaler un probleme
            </span>
          </div>
          <div className='content-order__right'>
            <img
              src='https://plus.unsplash.com/premium_photo-1684407617236-c60dc693293a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='image'
            />
            <span className='content-order__right__price'>450 €</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContentOrder;
