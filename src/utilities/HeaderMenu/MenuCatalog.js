import React from 'react';
import { Link } from 'react-router-dom';

const MenuCatalog = () => {
  return (
    <div className={'menulistcatalog'}>
      <ul className='menuCatalog__items'>
        <li className='menuCatalog__item'>
          <Link to={'/categorie/?category=electronique'}>Électronique</Link>
        </li>
        <li className='menuCatalog__item'>
          <Link to={'/categorie/?category=mode'}>Mode</Link>
        </li>
        <li className='menuCatalog__item'>
          <Link to={'/categorie/?category=maison-et-cuisine'}>
            Maison et cuisine
          </Link>
        </li>
        <li className='menuCatalog__item'>
          <Link to={'/categorie/?category=sports-et-plein-air'}>
            Sports et plein air
          </Link>
        </li>
        <li className='menuCatalog__item'>
          <Link to={'/categorie/?category=jouets-et-jeux'}>Jouets et jeux</Link>
        </li>
        <li className='menuCatalog__item'>
          <Link to={'/categorie/?category=jardinage-et-exterieur'}>
            Jardinage et extérieur
          </Link>
        </li>
        <li className='menuCatalog__item'>
          <Link to={'/categorie/?category=sante-et-bien-etre'}>
            Santé et bien-être
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuCatalog;
