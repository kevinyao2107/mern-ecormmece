import React, { useEffect, useState } from 'react';
import Layout from '../../components/admin/Layout';
import InputFied from '../../utilities/InputFied';
import './addproduct.css';
import TeaxtArea from '../../utilities/TeaxtArea';
import FourthButton from '../../utilities/FourthButton';
import SelectInput from '../../utilities/SelectInput';
import {
  categories,
  sousCategories,
  marques,
  delevery,
} from './../../data/data';

const AddProduct = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const [composition, setComposition] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [marque, setMarque] = useState();
  const [deliveryDate, setDeliveryDate] = useState();
  const [cateIndex, setCateIndex] = useState(0);
  const [description, setDescription] = useState();
  const [spcifications, setSpcifications] = useState([]);
  const [speVal, setSpeVal] = useState('');
  const [speName, setSpeName] = useState('');
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    switch (category) {
      case 'Electronique':
        setCateIndex(0);
        break;
      case 'Mode':
        setCateIndex(1);
        break;
      case 'Maison et cuisine':
        setCateIndex(2);
        break;
      case 'Sports et plein air':
        setCateIndex(3);
        break;
      case 'Jouets et jeux':
        setCateIndex(4);
        break;
      case 'Jardinage et extérieur':
        setCateIndex(5);
        break;
      case 'Santé et bien-être':
        setCateIndex(6);
        break;
      default:
        break;
    }
  }, [category]);

  const handleUpload = (event) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles || selectedFiles.length === 0) {
      console.error('Aucun fichier sélectionné.');
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append(`images`, selectedFiles[i]);
    }

    try {
      // const { data } = axios.post('https://example.com/upload', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
    } catch (error) {
      console.log(error);
    }
  };

  const addSpecification = () => {
    setSpcifications((newSpec) => [
      ...newSpec,
      { value: speVal, name: speName },
    ]);
    setSpeName('');
    setSpeVal('');
  };

  const removeSpeHandler = (id) => {
    const newSpecification = spcifications.filter(
      (spec, index) => index !== id
    );
    setSpcifications(newSpecification);
  };

  return (
    <Layout>
      <div className='new-product'>
        <form className='new-product__form'>
          <InputFied
            onChange={(e) => setName(e.target.value)}
            value={name}
            text='Entrer votre nom'
            type='text'
          />
          <InputFied
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            text='Entrer le prix'
            type='text'
          />
          <SelectInput
            value={category}
            options={categories}
            text='Selectionner une categories'
            onChange={(e) => setCategory(e.target.value)}
          />

          <SelectInput
            value={subCategory}
            options={sousCategories[cateIndex]}
            text='Selectionner une sous-categories'
            onChange={(e) => setSubCategory(e.target.value)}
          />
          <SelectInput
            value={marque}
            options={marques[cateIndex]}
            text='Selectionner une marque'
            onChange={(e) => setMarque(e.target.value)}
          />

          <SelectInput
            value={category}
            options={delevery}
            text='Temps de livraison'
            onChange={(e) => setDeliveryDate(e.target.value)}
          />
          <TeaxtArea
            onChange={(e) => setComposition(e.target.value)}
            value={composition}
            text='Donner des composition'
            type='text'
            rows={4}
          />
          <TeaxtArea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            text='Entrer la description'
            type='text'
            rows={5}
          />
          <div className='new-product__form-specifi'>
            <InputFied
              onChange={(e) => setSpeVal(e.target.value)}
              value={speVal}
              text='Entrer une spécification'
              type='text'
            />
            <InputFied
              onChange={(e) => setSpeName(e.target.value)}
              value={speName}
              text='Entrer la valeur'
              type='text'
            />
            <span onClick={addSpecification}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                style={{
                  height: '30px',
                  width: '30px',
                  cursor: 'pointer',
                  color: '#a86ad1',
                }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 4.5v15m7.5-7.5h-15'
                />
              </svg>
            </span>
          </div>
          {spcifications.length > 0 && (
            <ul className='new-product__form__items'>
              {spcifications.map((sp, index) => (
                <li className='new-product__form__item'>
                  <span>{sp.value}</span>
                  <span>{sp.name}</span>
                  <span
                    onClick={() => removeSpeHandler(index)}
                    className='new-product__form__item-remove'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      style={{ height: '20px', width: '20px', color: 'red' }}
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M6 18 18 6M6 6l12 12'
                      />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          )}

          <FourthButton>Publier</FourthButton>
        </form>
      </div>
    </Layout>
  );
};

export default AddProduct;
