import React from 'react';
import Layout from '../../components/Layout';
// import '../../../static/stylesheets/contact.css'

export default function IndexPage() {
  return (
    <Layout>
        <h1>contact me</h1>
        <form action="">
            <input type="text" id="name" name="name" placeholder="name" required/>
            <input type="email" id="email" name="email" placeholder="email" required/>
            <textarea name="message" id="" cols="30" rows="10" placeholder="write your message here!" required></textarea>
            <input id="submit-button" type="submit" value="send"/>
        </form>
    </Layout>
  );
}