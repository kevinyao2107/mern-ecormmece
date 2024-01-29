import { Fragment, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import './productDetails.css';
import SecondaryBtn from '../utilities/SecondaryBtn';
import ThirdBtn from '../utilities/ThirdBtn';
import ProductCard from '../utilities/ProductCard';
import Comment from '../components/details/Comment';
import CommentList from '../components/details/CommentList';
import PopularCaroul from '../components/home/PopularCaroul';

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
];

const product = {
  id: 9,
  rating: 3,
  price: 35,
  name: `Robe d'été légère`,
  description: `Découvrez la magie de notre dernier produit de beauté, une fusion exquise de luxe et d'efficacité. Ce soin révolutionnaire redéfinit la routine de beauté quotidienne en offrant une hydratation intense, une régénération cellulaire et une protection contre les agressions extérieures. Sa formule innovante, riche en ingrédients naturels et puissants, nourrit la peau en profondeur, la laissant radieuse et éclatante. Laissez-vous emporter par son parfum envoûtant et sa texture soyeuse qui glisse délicatement sur la peau. Offrez-vous l'expérience ultime du bien-être et révélez la meilleure version de vous-même avec notre produit de beauté incontournable.`,
  composition: `Découvrez la magie de notre dernier produit de beauté, une fusion exquise de luxe et d'efficacité. Ce soin révolutionnaire redéfinit la routine de beauté quotidienne en offrant une hydratation intense, une régénération cellulaire et une protection contre les agressions extérieures. Sa formule innovante, riche en ingrédients naturels et puissants, nourrit la peau en profondeur, la laissant radieuse et éclatante. Laissez-vous emporter par son parfum envoûtant et sa texture soyeuse qui glisse délicatement sur la peau. `,
  spcifications: [
    {
      name: "Type d'animal",
      value: '400g',
    },
    {
      name: "Huile d'olive extra vierge",
      value: '400g',
    },
    {
      name: 'Miel de lavande biologique',
      value: '250g',
    },
    {
      name: 'Quinoa biologique',
      value: '500g',
    },
    {
      name: 'Farine de blé entier',
      value: '1kg',
    },
    {
      name: 'Amandes grillées',
      value: '300g',
    },
    {
      name: 'Jus de fruits naturels',
      value: '750ml',
    },
    {
      name: 'Fromage de chèvre frais',
      value: '200g',
    },
    {
      name: 'Tomates biologiques',
      value: '1kg',
    },
    {
      name: 'Mélange de fruits secs',
      value: '500g',
    },
  ],
  galleries: [
    // 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1541377182189-74e4a4ea12e5?q=80&w=2016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1675106697016-2b84a9f98d96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ],
  image:
    'https://plus.unsplash.com/premium_photo-1675106697016-2b84a9f98d96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const ProductDetails = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberProduct, setNumberProduct] = useState(2);
  const [query, setQuery] = useState('');
  const getWidth = window.innerWidth;

  const updateVisibleProducts = () => {
    if (getWidth >= 640) {
      setNumberProduct(2);
    } else {
      setNumberProduct(1);
    }
  };

  useEffect(() => {
    updateVisibleProducts();
    window.addEventListener('resize', updateVisibleProducts);
    return () => {
      window.removeEventListener('resize', updateVisibleProducts);
    };
  }, [getWidth, numberProduct]);

  return (
    <main className='product-details'>
      <div className='product-container'>
        <h3 className='product-container__title'>{product.name}</h3>
        <div className='product-container__header'>
          <ul className='product-container__header-imgs'>
            {product.galleries.map((image, index) => (
              <li
                className='product-container__header-imgs__card'
                onClick={() => setCurrentIndex(index)}
                key={index}
              >
                <img
                  className='product-container__header-img'
                  src={image}
                  alt='image'
                />
              </li>
            ))}
          </ul>
          <div className='product-container__header__image'>
            <img
              className='product-container__header__img'
              src={product.galleries[currentIndex]}
              alt='image'
            />
            <ul className='product-grid__imgs'>
              {product.galleries.map((image, index) => (
                <li
                  className='product-grid__imgs__card'
                  onClick={() => setCurrentIndex(index)}
                  key={index}
                >
                  <img
                    className='product-grid__imgs-img'
                    src={image}
                    alt='image'
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className='product-container__header-desc'>
            <div>
              <span>Quantité</span>
              {/* <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul> */}
            </div>
            <span className='product-container__header-price'>€345</span>
            <div className='product-container__header-btn'>
              <div style={{ marginBottom: '10px' }}>
                <ThirdBtn>Ajouter Au Panier</ThirdBtn>
              </div>
              <div>
                <ThirdBtn>Acheter maintainant</ThirdBtn>
              </div>
            </div>
            <div>
              <h5 className='product-container__second-title'>Descriprion</h5>
              <p style={{ margin: '0px', opacity: 0.7 }}>
                {product.description}
              </p>
            </div>
          </div>
        </div>
        <div className='product-container__midle'>
          <div>
            <div>
              <h5 className='product-container__second-title'>Composition</h5>
              <p style={{ margin: '0px', opacity: 0.7 }}>
                {product.composition}
              </p>
            </div>
            <div>
              <h5 className='product-container__second-title'>
                Spécifications
              </h5>
              <ul className='product-container__header-spefications'>
                {product.spcifications.map((spe, index) => (
                  <li
                    className='product-container__header-spefication'
                    key={index}
                  >
                    <span>{spe.name}</span>
                    <span>{spe.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h5 className='product-container__second-title'>
              Avec les recommandations de produits
            </h5>
            <div className='product-container__midle-recomand'>
              {products.slice(0, numberProduct).map((product, index) => (
                <ProductCard product={product} key={index} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <h5 className='product-container__second-title'>Feedback</h5>
          <Comment />
        </div>
        <div>
          <CommentList />
        </div>
      </div>
      <div>
        <PopularCaroul title={'Produits similaire'} />
      </div>
    </main>
  );
};

export default ProductDetails;
