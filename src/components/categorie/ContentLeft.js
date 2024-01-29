import React, { useState } from 'react';
import { marquesElectronic, delevery } from './../../data/data';

function ContentLeft() {
  const [selectedMarques, setSelectedMarques] = useState([]);
  const [deleveryDays, setDeleveryDays] = useState([]);

  const handleCheckboxChange = (marque) => {
    if (selectedMarques.includes(marque)) {
      setSelectedMarques((prevSelected) =>
        prevSelected.filter((selected) => selected !== marque)
      );
    } else {
      setSelectedMarques((prevSelected) => [...prevSelected, marque]);
    }
  };

  const handleCheckboxDaysChange = (delever) => {
    if (deleveryDays.includes(delever)) {
      setDeleveryDays((prevSelected) =>
        prevSelected.filter((selected) => selected !== delever)
      );
    } else {
      setDeleveryDays((prevSelected) => [...prevSelected, delever]);
    }
  };

  return (
    <div className='content-left'>
      <ul className='content-left__els'>
        {marquesElectronic.map((marque) => (
          <li className='content-left__el' key={marque}>
            <label>
              <input
                type='checkbox'
                checked={selectedMarques.includes(marque)}
                onChange={() => handleCheckboxChange(marque)}
              />
              {marque}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <h4 className='content-left__title'>Temps de livraison</h4>
        <ul className='content-left__els'>
          {delevery.map((delever) => (
            <li className='content-left__el' key={delever}>
              <label>
                <input
                  type='checkbox'
                  // checked={selectedMarques.includes(delever)}
                  onChange={() => handleCheckboxDaysChange(delever)}
                />
                {delever}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className='content-left__title'>Prix, €</h4>
        <div className='content-left__els-price'>
          <div className='content-left__els-price__from'>
            <span>De</span>
            <input type='text' />
          </div>
          <div className='content-left__els-price__before'>
            <span>A</span>
            <input type='text' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentLeft;
