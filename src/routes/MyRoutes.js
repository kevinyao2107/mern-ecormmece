import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../srceens/Home';
import Cart from '../srceens/Cart';
import Header from '../utilities/Header/Header';
import HeaderMenu from '../utilities/HeaderMenu/HeaderMenu';
import Footer from '../utilities/Footer/Footer';
import ProductDetails from '../srceens/ProductDetails';
import Categories from '../srceens/Categories';
import Auth from '../srceens/Auth';
import Favorite from '../srceens/Favorite';
import Orders from '../srceens/Orders';
import MyOrders from '../srceens/admin/MyOrders';
import Account from '../srceens/admin/Account';
import AccountSetting from '../srceens/admin/AccountSetting';
import Notification from '../srceens/admin/Notification';
import BankCard from '../srceens/admin/BankCard';
import AddProduct from '../srceens/admin/AddProduct';
import ProductList from '../srceens/admin/ProductList';

const MyRoutes = () => {
  const pages = [
    { path: '/', exact: true, component: Home },
    { path: '/panier', exact: true, component: Cart },
    { path: '/produit/:id', exact: true, component: ProductDetails },
    { path: '/categorie/', exact: true, component: Categories },
    { path: '/connexion', exact: true, component: Auth },
    { path: '/favorite', exact: true, component: Favorite },
    { path: '/admin/commandes', exact: true, component: Orders },
    { path: '/admin/my-orders', exact: true, component: MyOrders },
    { path: '/admin/account', exact: true, component: Account },
    { path: '/admin/parametre-compte', exact: true, component: AccountSetting },
    { path: '/admin/notifications', exact: true, component: Notification },
    { path: '/admin/carte-bancaire', exact: true, component: BankCard },
    { path: '/admin/produits', exact: true, component: ProductList },
    { path: '/admin/new/product', exact: true, component: AddProduct },
  ];

  return (
    <BrowserRouter basename='/'>
      <header>
        <Header />
        <HeaderMenu />
      </header>
      <Routes>
        {pages.map(({ component, path }) => {
          const Component = component;
          return <Route key={path} element={<Component />} path={path} />;
        })}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
