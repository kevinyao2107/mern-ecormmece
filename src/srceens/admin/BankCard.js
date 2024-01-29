import React, { useState } from 'react';
import Layout from '../../components/admin/Layout';
import './bankcard.css';
import AddCreditCardForm from '../../components/admin/AddCreditCardForm';

const BankCard = () => {
  const [addCreditClass, setAddCreditClass] = useState('');
  const cardNumber = '1234 5678 9012 3456';
  const cardHolder = 'John Doe';
  const expirationDate = '12/24';
  const cardType = 'visa';
  const addCreditCardHandler = () => {};
  return (
    <Layout>
      <div className='credit-card-contaner'>
        <div className={`credit-card ${cardType}`}>
          <div className='card-type'>{cardType}</div>
          <div className='card-chip'></div>
          <div className='card-number'>{cardNumber}</div>
          <div className='card-info'>
            <div>
              <p className='card-label'>Card Holder</p>
              <p className='card-holder-name'>{cardHolder}</p>
            </div>
            <div>
              <p className='card-label'>Expires</p>
              <p className='card-expiration'>{expirationDate}</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => setAddCreditClass('isvisible')}
          className='credit-card-add-new'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            style={{ height: '30px', width: '30px', color: '#4b02a4' }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 4.5v15m7.5-7.5h-15'
            />
          </svg>
        </div>

        <AddCreditCardForm
          setAddCreditClass={setAddCreditClass}
          addCreditClass={addCreditClass}
        />
      </div>
    </Layout>
  );
};

export default BankCard;
