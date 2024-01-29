import React from 'react';
import Layout from '../../components/admin/Layout';
import './notification.css';
const notifications = [
  {
    id: 1,
    title: 'Bienvenue',
    content:
      'Merci de rejoindre notre application. Explorez et profitez de votre expérience!',
  },
  {
    id: 2,
    title: 'Nouvelle fonctionnalité',
    content:
      'Découvrez notre toute nouvelle fonctionnalité qui rendra votre expérience encore meilleure.',
  },
  {
    id: 3,
    title: 'Promotion spéciale',
    content:
      "Profitez d'une promotion spéciale pour nos utilisateurs fidèles. Ne manquez pas cette offre exclusive !",
  },
  {
    id: 4,
    title: 'Maintenance planifiée',
    content:
      'Nous effectuerons une maintenance planifiée ce week-end. Veuillez excuser tout inconvénient.',
  },
  {
    id: 5,
    title: 'Nous apprécions vos retours',
    content:
      'Merci de prendre le temps de nous donner votre avis. Vos retours sont précieux pour nous.',
  },
];

const Notification = () => {
  return (
    <Layout>
      <div>
        <ul className='notifications-container'>
          {notifications.map((notification, index) => (
            <li key={index} className='notification'>
              <h5>{notification.title}</h5>
              <p>{notification.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Notification;
