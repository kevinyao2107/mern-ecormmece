import React from 'react';
import { Link } from 'react-router-dom';

const UserProfil = () => {
  return (
    <div className='profil'>
      <div className='profil-menu'>
        <ul className='profil-menu__items'>
          <li className='profil-menu__item-identity'>
            <div className='profil-menu__item-img'>
              <img
                src='https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='profil'
              />
            </div>
            <div className='profil-menu__item-name'>
              <span>kevin Yao</span>
              <span>+22507450456</span>
            </div>
            <span className='profil-menu__item-notifi'>
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
                  d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0'
                />
              </svg>
            </span>
          </li>
          <li className='profil-menu__item'>
            <Link to={'/admin/carte-bancaire'}>Carte bancaire</Link>
          </li>
          <li className='profil-menu__item'>
            <Link to={'/admin/my-orders'}>Mes commandes</Link>
          </li>
          <li className='profil-menu__item'>
            <Link to={'/admin/notifications'}>Notifications</Link>
          </li>
          <li className='profil-menu__item'>
            <Link to={'/admin/parametre-compte'}>parametres du compte</Link>
          </li>
        </ul>
        <span className='profil-menu__logout'>Déconnexion</span>
      </div>
    </div>
  );
};

export default UserProfil;
