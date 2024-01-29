import React, { useState } from 'react';
import './auth.css';
import FourthButton from '../utilities/FourthButton';
import InputFied from '../utilities/InputFied';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className='auth'>
      <h5 className='auth-title'>{isLogin ? 'Connexion' : 'Inscription'} </h5>
      <form className='auth-form' action=''>
        {!isLogin && (
          <InputFied
            onChange={(e) => setName(e.target.value)}
            value={name}
            text='Entrer votre nom'
            type='text'
          />
        )}

        <InputFied
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          text='Entrer votre email'
          type='email'
        />
        <InputFied
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          text='Entrer votre mot de passe'
          type='password'
        />
        {!isLogin && (
          <InputFied
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            text='Confirmer votre mot de passe'
            type='password'
          />
        )}

        <FourthButton>{isLogin ? 'Connexion' : 'Inscription'}</FourthButton>

        <div className='auth-form__sup'>
          <span className='auth-form__sup-1'>
            {isLogin
              ? `Vous n'avez pas de compte?`
              : 'Vous avez deja un compte?'}{' '}
          </span>
          <span
            onClick={() => setIsLogin(!isLogin)}
            className='auth-form__sup-2'
          >
            {isLogin ? `Créer un compte` : 'Connexion'}{' '}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Auth;
