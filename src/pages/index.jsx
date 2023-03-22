import React from 'react';
import Layout from '../components/Layout';
import '../../static/stylesheets/styles.css';


const IndexPage = () => (
  <Layout>
    <h1>welcome to my website!</h1>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;I am a second year computer science student, <a href="https://merchduck.com">business owner</a>, and curious learner of all things around us. Sometimes I <a href="./blog">write</a> about my findings! My favorite hobby is talking to people and learning more about the human condition.</p>

    {/* <h2>experiences</h2>
    <ul>
      <li>merchduck // owner & operator</li>
      <ul>
        <li>built an entire screen printing business from the ground up</li>
        <li>perform all operational and financial tasks regarding the growth of the business</li>
      </ul>
      <li>Taco Bell // Level 1 Service Desk Analyst</li>
      <ul>
        <li>Perform troubleshooting</li>
        <li>take calls</li>
      </ul>
      <li>The Darkroom // Assistant Production Manager</li>
      <ul>
        <li>manage anywhere from 5-10 lab techs</li>
        <li>ensure the flow of production runs efficiently</li>
      </ul>
    </ul>
    
    <h2>education</h2>
    <p>I am currently in my second year of computer science at Irvine Valley College, a 2-year community college in Irvine, California. I will be continuing my computer science studies at ___ this upcoming Fall semester and will be obtaining a bachelors degree in Spring 2025.</p> */}

    <h2>what I'm currently working on</h2>
    <ul>
      <li>merchduck website, vanilla JS</li>
      <li>merchandise order management system, react/node</li>
      <li>this website, gatsby.js</li>
    </ul>
    
    <h2>what I've written about recently</h2>
    
    <h2>what I'm currently looking for</h2>
    <ul>
      <li>a jr software developer position</li>
      <ul>
        <li>no preference on industry</li>
        <li>hoping to be part of a team that follows standard development practices and believes in management of people over products</li>
      </ul>
      <li>any research groups that need a programmer on their team</li>
      <ul>
        <li>preference for research groups working with natural world data, i.e. animal/plant biology, human population, space</li>
      </ul>
      <li>any interesting articles or topics</li>
      <ul>
        <li></li>
      </ul>
    </ul>
  </Layout>
);

export default IndexPage;
