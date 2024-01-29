import React from 'react';
import FourthButton from '../../utilities/FourthButton';

const DetailsOrder = ({ payementMethode }) => {
  return (
    <div className='detail-order'>
      <div className='detail-order__container'>
        <h5 className='detail-order__container-title'>Votre panier d'achat</h5>
        <ul className='detail-order__els'>
          <li className='detail-order__el'>
            <span>Produit (2)</span>
            <span className='detail-order__el-price'>850€</span>
          </li>
          <li className='detail-order__el'>
            <span>Réduction </span>
            <span className='detail-order__el-reduction'>-20€</span>
          </li>
        </ul>
      </div>

      <div className='detail-order__container'>
        <h5 className='detail-order__container-title'>Livraison</h5>
        <ul className='detail-order__els'>
          <li className='detail-order__el daily'>Samedi 8:00-18:00</li>
          <li className='detail-order__el-addresse'>
            Côte d'ivoire, Abidjan, cocody 210
          </li>
          <li className='detail-order__el'>Date:26,Avril 2023</li>
        </ul>
      </div>
      <div className='detail-order__container'>
        <h5 className='detail-order__container-title'>Methode de payement</h5>
        <div className='detail-order__payement'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            style={{ height: '22px', width: '22px', marginRight: '10px' }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
            />
          </svg>
          <span>{payementMethode}</span>
        </div>
        <FourthButton>Commander</FourthButton>
      </div>
    </div>
  );
};

export default DetailsOrder;
