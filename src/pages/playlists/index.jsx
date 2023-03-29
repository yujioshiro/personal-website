import React from 'react';
import Layout from '../../components/Layout';

export default function IndexPage() {

  return (
    <Layout>
        <h1>music for me and you {process.env.GATSBY_THIS_IS_A_TEST_VARIABLE}</h1>
    </Layout>
  );

}
