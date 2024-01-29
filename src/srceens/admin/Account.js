import React from 'react';
import Layout from '../../components/admin/Layout';
import './account.css';

const Account = () => {
  return (
    <Layout>
      <div className='main-account'>
        <div className='main-account__img'>
          <img
            src='https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='image'
          />
        </div>
        <div className='main-account__description'>
          <h4>Anna ivanova</h4>
          <ul className='main-account__description-items'>
            <li className='main-account__description-item'>
              <span>Date de naissance</span>
              <span>05.05.1998</span>
            </li>
            <li className='main-account__description-item'>
              <span>Téléphone</span>
              <span>225 07450456</span>
            </li>
            <li className='main-account__description-item'>
              <span>Email</span>
              <span>exemple@gmail.com</span>
            </li>
          </ul>
        </div>
        <button className='main-account__btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            style={{ height: '25px', width: '25px' }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Account;
