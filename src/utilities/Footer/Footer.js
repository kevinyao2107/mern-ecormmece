import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import icon from './../../public/images/download.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <nav className='footer-nav'>
        <div className='footer-nav__container'>
          <h4 className='footer-nav__container-title'>Acheteurs</h4>
          <ul className='footer-nav__container-items'>
            <li className='footer-nav__container-item'>
              <Link className='footer-nav__container-item__link' to={'/'}>
                Comment choisir un produit
              </Link>
            </li>
            <li className='footer-nav__container-item'>
              <Link className='footer-nav__container-item__link' to={'/'}>
                Payement & livraison
              </Link>
            </li>
            <li className='footer-nav__container-item'>
              <Link className='footer-nav__container-item__link' to={'/'}>
                Feedback
              </Link>
            </li>
            <li className='footer-nav__container-item'>
              <Link className='footer-nav__container-item__link' to={'/'}>
                Retour
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-nav__container'>
          <h4 className='footer-nav__container-title'>Vendeurs</h4>
          <ul className='footer-nav__container-items'>
            <li className='footer-nav__container-item'>
              <Link className='footer-nav__container-item__link' to={'/'}>
                Compte Vendeurs
              </Link>
            </li>
            <li className='footer-nav__container-item'>
              <Link className='footer-nav__container-item__link' to={'/'}>
                Documentation vendeurs
              </Link>
            </li>
            <li className='footer-nav__container-item'>
              <Link className='footer-nav__container-item__link' to={'/'}>
                Site partenaires
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-nav__container'>
          <h4 className='footer-nav__container-title'>Entreprise</h4>
          <ul className='footer-nav__container-items'>
            <li className='footer-nav__container-item'>
              <Link className='footer-nav__container-item__link' to={'/'}>
                Actualité entreprise
              </Link>
            </li>
            <li className='footer-nav__container-item'>
              <Link className='footer-nav__container-item__link' to={'/'}>
                Programe d'affiliation
              </Link>
            </li>
            <li className='footer-nav__container-item'>
              <Link className='footer-nav__container-item__link' to={'/'}>
                Emploi
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer-nav__container'>
          <h4 className='footer-nav__container-title'>
            Télécharger l'application
          </h4>
          <Link className='footer-nav__container-link' to={'/'}>
            <img
              className='footer-nav__container-link__img'
              src={icon}
              alt='image'
            />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
