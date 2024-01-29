import React from 'react';
import './layout.css';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const title =
    location.pathname === '/admin/my-orders'
      ? 'Mes commandes'
      : location.pathname === '/admin/account'
      ? 'Données personnelles'
      : location.pathname === '/admin/admin/produits'
      ? 'Commandes'
      : location.pathname === '/admin/notifications'
      ? 'Notifications'
      : location.pathname === '/admin/carte-bancaire'
      ? 'Carte bancaire'
      : location.pathname === '/admin/parametre-compte'
      ? 'Parametre compte'
      : location.pathname === '/admin/new/product'
      ? 'Nouveau produit'
      : '';

  return (
    <main className='layout'>
      <h4 className='layout-title'>{title}</h4>
      <div className='layout-container'>
        <div className='layout-container-body'>
          <div className='layout-container-els'>
            <ul className='layout-container-els__items'>
              <li className='layout-container-els__item'>
                <Link
                  className={`layout-container-els__item-link ${
                    location.pathname === '/admin/account' && 'active'
                  }`}
                  to={'/admin/account'}
                >
                  Données personnelles
                </Link>
              </li>
              <li className='layout-container-els__item'>
                <Link
                  className={`layout-container-els__item-link ${
                    location.pathname === '/admin/carte-bancaire' && 'active'
                  }`}
                  to={'/admin/carte-bancaire'}
                >
                  Carte bancaire
                </Link>
              </li>
              <li className='layout-container-els__item'>
                <Link
                  className={`layout-container-els__item-link ${
                    location.pathname === '/admin/my-orders' && 'active'
                  }`}
                  to={'/admin/my-orders'}
                >
                  Mes commandes
                </Link>
              </li>
              <li className='layout-container-els__item'>
                <Link
                  className={`layout-container-els__item-link ${
                    (location.pathname === '/admin/produits' ||
                      location.pathname === '/admin/new/product') &&
                    'active'
                  }`}
                  to={'/admin/produits'}
                >
                  Produits
                </Link>
              </li>
              <li className='layout-container-els__item'>
                <Link
                  className={`layout-container-els__item-link ${
                    location.pathname === '/admin/notifications' && 'active'
                  }`}
                  to={'/admin/notifications'}
                >
                  Notifications
                </Link>
              </li>

              <li className='layout-container-els__item'>
                <Link
                  className={`layout-container-els__item-link ${
                    location.pathname === '/admin/parametre-compte' && 'active'
                  }`}
                  to={'/admin/parametre-compte'}
                >
                  Parametres du compte
                </Link>
              </li>
            </ul>
            <div className='layout-container-els__bottom'>
              <button className='layout-container-els__bottom__btn'>
                Déconnexion
              </button>
            </div>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
};

export default Layout;
