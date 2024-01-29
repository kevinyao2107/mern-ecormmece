import React from 'react';
import RatingStars from '../../utilities/RatingStars';

const comments = [
  {
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Valerie',
    comments: ` J'adore ce produit! La qualité est exceptionnelle, et il a dépassé
    toutes mes attentes. La conception est élégante et moderne, et il
    s'intègre parfaitement dans ma routine quotidienne. La fonctionnalité
    est impressionnante, et il répond à tous mes besoins. De plus, le
    service client est exceptionnellement réactif et serviable. Je le
    recommande vivement à tous ceux qui recherchent un produit fiable et
    de haute qualité. 5 étoiles sans hésitation!`,
    rating: 4,
  },
  {
    image:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Jack',
    comments: ` J'adore ce produit! La qualité est exceptionnelle, et il a dépassé
    toutes mes attentes. La conception est élégante et moderne, et il
    s'intègre parfaitement dans ma routine quotidienne. La fonctionnalité
    est impressionnante, et il répond à tous mes besoins. De plus, le
    service client est exceptionnellement réactif et serviable. Je le
    recommande vivement à tous ceux qui recherchent un produit fiable et
    de haute qualité. 5 étoiles sans hésitation!`,
    rating: 5,
  },
];

const CommentList = () => {
  return (
    <div>
      {comments.map((comment) => (
        <div className='commentlist'>
          <div className='commentlist-users'>
            <div className='commentlist-users__infos'>
              <img
                className='commentlist-users__infos-img'
                src={comment.image}
                alt=''
              />
              <span className='commentlist-users__infos-name'>
                {comment.name}
              </span>
            </div>
            <div className='commentlist-mobile__reating'>
              <span className='commentlist-mobile__date'>
                22/03/2022, 18:08
              </span>
              <RatingStars rating={comment.rating} />
            </div>
            <p className='commentlist-users_text'>{comment.comments}</p>
          </div>
          <div className='commentlist-reating'>
            <span className='commentlist-reating__date'>22/03/2022, 18:08</span>
            <RatingStars rating={comment.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
