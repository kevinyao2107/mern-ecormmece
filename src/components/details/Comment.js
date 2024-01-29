import React, { useState } from 'react';
import RatingStars from '../../utilities/RatingStars';
import SecondaryBtn from '../../utilities/SecondaryBtn';
import RateStars from '../../utilities/RateStars';

const Comment = () => {
  const [rating, setRating] = useState(0);
  return (
    <div className='comment'>
      <form className='comment-form'>
        <RateStars rating={rating} setRating={setRating} />
        <textarea type='text' rows={4} className='comment-form__textarea' />
        <button className='comment-form__btn'>Ajouter un commentaire</button>
      </form>
      <div className='comment-rate'>
        <h4 className='comment-rate__number'>4.9</h4>
        <span className='comment-rate__count'>44 commentaires</span>
        <RatingStars rating={4} />
      </div>
    </div>
  );
};

export default Comment;
