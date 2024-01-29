import React from 'react';
import SelectInput from '../../utilities/SelectInput';
import { marquesElectronic } from '../../data/data';
const short = ['Croissant', 'Décroissant'];

const MobileHeader = ({ value, onChange }) => {
  return (
    <div className='mobile__header-select'>
      <div className='mobile__header-select__el'>
        <h5>Marque</h5>
        <SelectInput
          value={value}
          onChange={onChange}
          text={'Marque'}
          options={marquesElectronic}
        />
      </div>
      <div className='mobile__header-select__el'>
        <h5>Trie</h5>
        <SelectInput
          value={value}
          onChange={onChange}
          text={'Trie par'}
          options={short}
        />
      </div>
    </div>
  );
};

export default MobileHeader;
