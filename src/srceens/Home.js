import React from 'react';
import HeaderSlider from '../components/home/HeaderSlider';
import ProductCarousel from '../components/home/ProductCarousel';
import './home.css';
import PopularCaroul from '../components/home/PopularCaroul';

const Home = () => {
  return (
    <main>
      <HeaderSlider />
      <ProductCarousel />
      <PopularCaroul title={'Produits populaire'} />
    </main>
  );
};

export default Home;
