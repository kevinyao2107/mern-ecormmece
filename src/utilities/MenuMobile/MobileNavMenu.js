import React, { useState } from 'react';
import './mobilenavmenu.css';
import { Link } from 'react-router-dom';

const MobileNavMenu = ({ setMenuOpened, menuOpened }) => {
  const [openCategries, setOpenCategries] = useState(true);

  return (
    <>
      <div
        onClick={() => setMenuOpened(!menuOpened)}
        className={`navbar-menu-mobile-bg ${menuOpened && 'navbar-opened'}`}
      ></div>
      <div className={`navbar-menu-mobile ${menuOpened && 'navbar-opened'}`}>
        <ul className='navbar-menu-mobile-header__items'>
          <li className='navbar-menu-mobile-header__item'>
            <Link
              onClick={() => setMenuOpened(!menuOpened)}
              className='navbar-menu-mobile-header__item-logo'
              to={'/'}
            >
              Smakert
            </Link>
          </li>
          <li className='navbar-menu-mobile-header__item'>
            <Link
              onClick={() => setMenuOpened(!menuOpened)}
              className='navbar-menu-mobile-header__item-link'
              to={'/connexion'}
            >
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  style={{ height: '20px', width: '20px', color: '#80069b' }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                  />
                </svg>
              </span>
              <span> Connexion</span>
            </Link>
          </li>
        </ul>
        <div className='navbar-menu-mobile__categories-container'>
          <div
            onClick={() => setOpenCategries(!openCategries)}
            className='navbar-menu-mobile__categories-header'
          >
            <span>Catégories</span>
            {openCategries ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                style={{ height: '20px', width: '20px', color: '#80069b' }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m4.5 15.75 7.5-7.5 7.5 7.5'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                style={{ height: '20px', width: '20px', color: '#80069b' }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m19.5 8.25-7.5 7.5-7.5-7.5'
                />
              </svg>
            )}
          </div>
          <ul
            className={`navbar-menu-mobile__categories ${
              openCategries && 'opened-categories'
            }`}
          >
            <li className='navbar-menu-mobile__categorie'>
              <Link
                onClick={() => setMenuOpened(!menuOpened)}
                to={'/categorie/?category=electronique'}
              >
                Électronique
              </Link>
            </li>
            <li className='navbar-menu-mobile__categorie'>
              <Link
                onClick={() => setMenuOpened(!menuOpened)}
                to={'/categorie/?category=mode'}
              >
                Mode
              </Link>
            </li>
            <li className='navbar-menu-mobile__categorie'>
              <Link
                onClick={() => setMenuOpened(!menuOpened)}
                to={'/categorie/?category=maison-et-cuisine'}
              >
                Maison et cuisine
              </Link>
            </li>
            <li className='navbar-menu-mobile__categorie'>
              <Link
                onClick={() => setMenuOpened(!menuOpened)}
                to={'/categorie/?category=sports-et-plein-air'}
              >
                Sports et plein air
              </Link>
            </li>
            <li className='navbar-menu-mobile__categorie'>
              <Link
                onClick={() => setMenuOpened(!menuOpened)}
                to={'/categorie/?category=jouets-et-jeux'}
              >
                Jouets et jeux
              </Link>
            </li>
            <li className='navbar-menu-mobile__categorie'>
              <Link
                onClick={() => setMenuOpened(!menuOpened)}
                to={'/categorie/?category=jardinage-et-exterieur'}
              >
                Jardinage et extérieur
              </Link>
            </li>
            <li className='navbar-menu-mobile__categorie'>
              <Link
                onClick={() => setMenuOpened(!menuOpened)}
                to={'/categorie/?category=sante-et-bien-etre'}
              >
                Santé et bien-être
              </Link>
            </li>
          </ul>
        </div>
        <div className='navbar-menu-mobile__bottom'>
          <ul className='navbar-menu-mobile__bottom__els'>
            <li className='navbar-menu-mobile__bottom__el '>
              <Link
                onClick={() => setMenuOpened(!menuOpened)}
                className='navbar-menu-mobile__bottom__el-link'
                to={'/favorite'}
              >
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
            <li className='navbar-menu-mobile__bottom__el '>
              <Link
                onClick={() => setMenuOpened(!menuOpened)}
                className='navbar-menu-mobile__bottom__el-link'
                to={'/panier'}
              >
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
      </div>
    </>
  );
};

export default MobileNavMenu;
