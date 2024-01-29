import React from 'react';

function HeaderFilter() {
  return (
    <div className='header-filter'>
      <h4 className='header-filter__title'>Marque</h4>
      <div className='header-filter__container'>
        <ul className='header-filter__container-items'>
          <li className='header-filter__container-item'>
            <input
              type='text'
              placeholder='Recherche'
              className='header-filter__container-item__input'
            />
          </li>
          <li className='header-filter__container-item'>
            <select
              className='header-filter__container-item__select'
              name=''
              id=''
            >
              <option value=''>Trie par</option>
              <option value=''>Croissant</option>
              <option value=''>Décroissant</option>
            </select>
          </li>
        </ul>
        <div className='header-filter__container-btns'>
          <ul className='header-filter__container-btns__lists'>
            <li className='header-filter__container-btns__list'>
              <button className='header-filter__container-btn'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  style={{ height: '30px', width: '30px', color: '#60047a' }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                  />
                </svg>
              </button>
            </li>
            <li className='header-filter__container-btns__list'>
              <button className='header-filter__container-btn'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  style={{ height: '30px', width: '30px', color: '#60047a' }}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z'
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderFilter;
