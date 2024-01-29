import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Produit 1',
    image:
      'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Produit 2',
    image:
      'https://images.unsplash.com/photo-1548761013-616652707ab8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Produit 3',
    image:
      'https://images.unsplash.com/photo-1550792173-5220eacae50e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Produit 4',
    image:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Produit 5',
    image:
      'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Produit 6',
    image:
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    name: 'Produit 7',
    image:
      'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    name: 'Produit 8',
    image:
      'https://images.unsplash.com/photo-1566958769312-82cef41d19ef?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [maxNumber, setMaxNumber] = useState(4);
  const windowWidth = window.innerWidth;
  let numberOfVisibleProducts;

  useEffect(() => {
    const updateVisibleProducts = () => {
      if (windowWidth >= 1200) {
        numberOfVisibleProducts = 4;
        setMaxNumber(4);
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

  const nextSlide = () => {
    if (products.length > currentIndex + maxNumber) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(products.length - maxNumber);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // const visibleProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <div className='carousel'>
      <div className='carousel-items'>
        {visibleProducts.map((product, index) => (
          <Link
            to={'/'}
            key={product.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className='carousel-item_img'
            />
          </Link>
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
  );
};

export default Carousel;
