import React from 'react';
import { Link } from 'react-router-dom';
const electronicSubcategories = [
  'Smartphones',
  'Ordinateurs portables',
  'Caméras',
  'Écouteurs',
  'Accessoires audio',
  'Montres intelligentes',
  'Imprimantes 3D',
  'Drônes',
];

function HeaderCategories() {
  return (
    <div className='header-categorie'>
      <div className='header-categorie_bars'>
        <ul className='header-categorie_bars-items'>
          <li className='header-categorie_bars-item'>
            <Link to={'/'}>Accueil</Link>
          </li>
          <li className='header-categorie_bars-item'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              style={{ height: '16px', width: '16px', fontWeight: '600' }}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m8.25 4.5 7.5 7.5-7.5 7.5'
              />
            </svg>
          </li>
          <li className='header-categorie_bars-item'>
            <Link to={'/'}>categorie</Link>
          </li>
        </ul>
      </div>
      <div className='header-categorie__titles'>
        <h4 className='header-categorie__title'>Electronique</h4>
        <span className='header-categorie__number'>145 produits</span>
      </div>

      <ul className='header-categorie__catalogs'>
        {electronicSubcategories.map((category) => (
          <li className='header-categorie__catalog'>
            <button className='header-categorie__catalog-button'>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderCategories;
