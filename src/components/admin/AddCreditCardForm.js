import React, { useState } from 'react';
import InputFied from '../../utilities/InputFied';
import ThirdBtn from '../../utilities/ThirdBtn';
import FourthButton from '../../utilities/FourthButton';

const AddCreditCardForm = ({ setAddCreditClass, addCreditClass }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cardType, setCardType] = useState('visa');

  const handleAddCard = (e) => {
    e.preventDefault();

    setCardNumber('');
    setCardHolder('');
    setExpirationDate('');
  };

  return (
    <div>
      <div
        onClick={() => setAddCreditClass('')}
        className={`new-credit-card-bg ${addCreditClass}`}
      ></div>
      <div className={`new-credit-card ${addCreditClass}`}>
        <form className='new-credit-card__form' onSubmit={handleAddCard}>
          <label>
            Numéro de carte:
            <InputFied
              type='text'
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </label>
          <label>
            Titulaire de la carte:
            <InputFied
              type='text'
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
            />
          </label>
          <label>
            Date d'expiration:
            <InputFied
              type='text'
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </label>
          <label>
            Type de carte:
            <select
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
              className='text-input'
            >
              <option value='visa'>Visa</option>
              <option value='mastercard'>Mastercard</option>
            </select>
          </label>
          <FourthButton type='submit'>Ajouter la carte</FourthButton>
        </form>
      </div>
    </div>
  );
};

export default AddCreditCardForm;
