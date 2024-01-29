import React, { useState } from 'react';
import Layout from '../../components/admin/Layout';
import InputFied from '../../utilities/InputFied';
import './accountsetting.css';
import FourthButton from '../../utilities/FourthButton';

const AccountSetting = () => {
  const [name, setName] = useState();
  const [dateDeNaissance, setDateDeNaissance] = useState();

  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const handleFileChange = () => {};
  return (
    <Layout>
      <div className='account-setting'>
        <div className='account-setting__img'>
          <img
            src='https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
          <label>
            <input
              type='file'
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept='image/*'
            />
            <button
              onClick={() => document.querySelector('input[type=file]').click()}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                style={{ height: '20px', width: '20px' }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                />
              </svg>
            </button>
          </label>
        </div>
        <form action='' className='account-setting__form'>
          <InputFied
            onChange={(e) => setName(e.target.value)}
            value={name}
            text='Entrer votre nom'
            type='text'
          />
          <InputFied
            onChange={(e) => setDateDeNaissance(e.target.value)}
            value={dateDeNaissance}
            text='Entrer date de naissance'
            type='date'
          />
          <InputFied
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            text='Entrer votre numero de téléphone'
            type='text'
          />
          <InputFied
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            text='Entrer votre email'
            type='email'
          />
          <FourthButton>Mettre à jour</FourthButton>
        </form>
      </div>
    </Layout>
  );
};

export default AccountSetting;
