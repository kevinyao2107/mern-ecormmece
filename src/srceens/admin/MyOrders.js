import React from 'react';
import './myorders.css';
import ContentOrder from '../../components/myorders/ContentOrder';
import Layout from '../../components/admin/Layout';

const MyOrders = () => {
  return (
    <main className='my-orders'>
      <Layout>
        <div>
          <ContentOrder />
        </div>
      </Layout>
    </main>
  );
};

export default MyOrders;
