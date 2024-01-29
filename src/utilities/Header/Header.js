import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import PrimaryBtn from '../PrimaryBtn';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='header-left'>
          <PrimaryBtn>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='icon-btn'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
              />
            </svg>
            <span>Abidjan, côte d'ivoire</span>
          </PrimaryBtn>
        </div>
        <ul className='header-right'>
          <li className='header-right__list'>
            <Link className='header-right__list-link' to={'/aide'}>
              Aide
            </Link>
          </li>
          <li className='header-right__list'>
            <Link className='header-right__list-link' to={'/certitificat'}>
              Certitificat
            </Link>
          </li>
          <li className='header-right__list'>
            <Link className='header-right__list-link' to={'/pick-up'}>
              Point de relais
            </Link>
          </li>
        </ul>
      </div>
      <div className='mobile-header'>
        <ul className='mobile-header-right'>
          <li className='mobile-header-right__list'>
            <Link className='mobile-header-right__list-link' to={'/aide'}>
              Aide
            </Link>
          </li>
          <li className='mobile-header-right__list'>
            <Link
              className='mobile-header-right__list-link'
              to={'/certitificat'}
            >
              Certitificat
            </Link>
          </li>
          <li className='mobile-header-right__list'>
            <Link className='mobile-header-right__list-link' to={'/pick-up'}>
              Point de relais
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
