import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from '../../utilities/ProductCard';

const products = [
  {
    id: 1,
    rating: 4,
    name: 'Chaussures de course Air Zoom',
    price: 40,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    rating: 3,
    name: 'Ensemble de maquillage professionnel',
    price: 18,
    image:
      'https://images.unsplash.com/photo-1591375462077-800a22f5fba4?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    rating: 4,
    name: 'Sac à dos étanche Adventure',
    price: 15,
    image:
      'https://images.unsplash.com/photo-1591348278999-ee1d0c06ed7b?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    rating: 5,
    name: 'Montre intelligente Connect',
    price: 25,
    image:
      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    rating: 5,
    name: 'Chemise en coton à manches longues',
    price: 20,
    image:
      'https://images.unsplash.com/flagged/photo-1564468781192-f023d514222d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    rating: 5,
    name: 'Chaussures de sport Air Max',
    price: 16,
    image:
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    rating: 3,
    name: 'Ensemble de bagages élégant',
    price: 20,
    image:
      'https://images.unsplash.com/photo-1541377182189-74e4a4ea12e5?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    rating: 4.5,
    name: 'Ensemble de t-shirt et short décontracté',
    price: 10,
    image:
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  {
    id: 9,
    rating: 3,
    price: 35,
    name: `Robe d'été légère`,
    image:
      'https://plus.unsplash.com/premium_photo-1675106697016-2b84a9f98d96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const PopularCaroul = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxNumber, setMaxNumber] = useState(6);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const navigate = useNavigate();

  const windowWidth = window.innerWidth;
  let numberOfVisibleProducts;

  useEffect(() => {
    const updateVisibleProducts = () => {
      if (windowWidth >= 1500) {
        numberOfVisibleProducts = 6;
        setMaxNumber(6);
      } else if (windowWidth >= 1200) {
        numberOfVisibleProducts = 5;
        setMaxNumber(5);
      } else if (windowWidth >= 768) {
        numberOfVisibleProducts = 3;
        setMaxNumber(3);
      } else if (windowWidth >= 640) {
        numberOfVisibleProducts = 2;
        setMaxNumber(2);
      } else {
        numberOfVisibleProducts = 1;
        setMaxNumber(1);
      }

      // Mettez à jour le nombre de produits visibles
      const newVisibleProducts = products.slice(
        currentIndex,
        currentIndex + numberOfVisibleProducts
      );
      setVisibleProducts(newVisibleProducts);
    };

    // Appelez la fonction lors du chargement initial et lors du redimensionnement de la fenêtre
    updateVisibleProducts();
    window.addEventListener('resize', updateVisibleProducts);

    // Nettoyez l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', updateVisibleProducts);
    };
  }, [windowWidth, currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (products.length > currentIndex + maxNumber) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex == 0) {
      setCurrentIndex(products.length - maxNumber);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // const visibleProducts = products.slice(currentIndex, currentIndex + 6);

  return (
    <div>
      <h4 className='popular-header'>{title}</h4>
      <div className='popular'>
        <div className='popular-items'>
          {visibleProducts.map((product, index) => (
            <ProductCard product={product} key={index} index={index} />
          ))}
        </div>
        <button
          onClick={prevSlide}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            style={{ width: '30px', height: '30px', color: '#510187' }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5 8.25 12l7.5-7.5'
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            cursor: 'pointer',
            border: 'none',
            background: 'transparent',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            style={{ width: '30px', height: '30px', color: '#510187' }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m8.25 4.5 7.5 7.5-7.5 7.5'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PopularCaroul;
