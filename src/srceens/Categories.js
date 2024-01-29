import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './categories.css';
import HeaderCategories from '../components/categorie/HeaderCategories';
import HeaderFilter from '../components/categorie/HeaderFilter';
import ContentRight from '../components/categorie/ContentRight';
import ContentLeft from '../components/categorie/ContentLeft';
import MobileHeader from '../components/categorie/MobileHeader';
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

function Categories() {
  const [category, setCategory] = useState();
  const categorieHandler = () => {};
  return (
    <main className=' categorie-main'>
      <div className='categorie-main__header'>
        <HeaderCategories />
        <HeaderFilter />
      </div>
      <div className='categorie-main__header-mobile'>
        <MobileHeader
          value={category}
          onChange={categorieHandler}
          options={electronicSubcategories}
        />
      </div>
      <div className='categorie-main__content'>
        <ContentLeft />
        <ContentRight />
      </div>
    </main>
  );
}

export default Categories;
