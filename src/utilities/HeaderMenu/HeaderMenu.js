import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './headerMenu.css';
import PrimaryBtn from '../PrimaryBtn';
import MenuCatalog from './MenuCatalog';
import UserProfil from './UserProfil';
import MenuMobile from '../MenuMobile/MenuMobile';
import MobileNavMenu from '../MenuMobile/MobileNavMenu';

const HeaderMenu = () => {
  const [isCatalog, setIsCatalog] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <>
      <MobileNavMenu setMenuOpened={setMenuOpened} menuOpened={menuOpened} />

      <div className='menu'>
        <div className='menu-logo'>
          <Link className='menu-logo_link' to={'/'}>
            SMarket
          </Link>
        </div>
        <div className='menu-catalog'>
          <PrimaryBtn>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='icon-btn'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>

            <span>Catalogue</span>
          </PrimaryBtn>
          <MenuCatalog />
        </div>
        <form className='menu-form'>
          <input type='text' className='menu-form__input' />
        </form>
        <ul className='menu-els'>
          <li className='menu-els__el '>
            <Link className='menu-els__el-link icon-el' to={'/commandes'}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  style={{ height: '25px', width: '25px', color: '#7100bc' }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 6h.008v.008H6V6Z'
                  />
                </svg>
              </span>
              <span> Commandes</span>
            </Link>
          </li>
          <li className='menu-els__el menu-els__el-profil'>
            <Link className='menu-els__el-link' to={'/connexion'}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  style={{ height: '25px', width: '25px', color: '#7100bc' }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                  />
                </svg>
              </span>
              <span> Profile</span>
            </Link>
            <UserProfil />
          </li>
          <li className='menu-els__el '>
            <Link className='menu-els__el-link' to={'/favorite'}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  style={{ height: '25px', width: '25px', color: '#7100bc' }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                  />
                </svg>
              </span>
              <span>Favorites</span>
            </Link>
          </li>
          <li className='menu-els__el '>
            <Link className='menu-els__el-link' to={'/panier'}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  style={{ height: '25px', width: '25px', color: '#7100bc' }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                  />
                </svg>
              </span>
              <span> Panier</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='menu-mobile'>
        <div className='menu-mobile__logo'>
          <Link className='menu-mobile__logo_link' to={'/'}>
            SMarket
          </Link>
        </div>
        <form className='menu-mobile__form'>
          <input type='text' className='menu-mobile__form-input' />
        </form>
        <div className='menu-mobile__btn'>
          <PrimaryBtn onClick={() => setMenuOpened(!menuOpened)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='icon-btn'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </PrimaryBtn>
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
