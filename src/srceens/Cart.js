import React, { useState } from 'react';
import './cart.css';
import DetailsOrder from '../components/cart/DetailsOrder';
import ListProduct from '../components/cart/ListProduct';
import PayemenMethode from '../components/cart/PayemenMethode';
import ShippingMethode from '../components/cart/ShippingMethode';

const Cart = () => {
  const [shippingMethode, setShippingMethode] = useState('Point de relais');
  const [payementMethode, setPayementMethode] = useState(
    'Paiement par carte de crédit'
  );
  return (
    <main className='cart'>
      <h4 className='cart-title'>Panier</h4>
      <div className='cart-grid'>
        <div style={{ boxSizing: 'border-box' }}>
          <ListProduct />
          <ShippingMethode
            shippingMethode={shippingMethode}
            setShippingMethode={setShippingMethode}
          />
          <PayemenMethode
            methodeMethode={payementMethode}
            setMethodeMethode={setPayementMethode}
          />
        </div>
        <div>
          <DetailsOrder payementMethode={payementMethode} />
        </div>
      </div>
    </main>
  );
};

export default Cart;
