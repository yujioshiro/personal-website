import React from 'react';
import Layout from '../../components/Layout';

export default function IndexPage() {
  return (
    <Layout>
        <h1>contact yuji</h1>
        <form action="">
            <input type="text" id="name" name="name" placeholder="name"/>
            <input type="text" id="email" name="email" placeholder="email"/>
            <textarea name="message" id="" cols="30" rows="10" placeholder="write your message here!"></textarea>

        </form>
    </Layout>
  );
}
