import React from 'react';
import Layout from '../components/Layout';

// import '../../static/stylesheets/styles.css';
// import '../../static/stylesheets/homepage-index.css';


const IndexPage = () => (
  <Layout>
    <div class="homepage-sections" id="homepage-about-section">
    <h1>yuji oshiro's website</h1>
    <p>software engineer @ Pacific Life, fourth-year computer science student @ Oregon State University, part-time CS tutor. My favorite hobby is talking to people and learning more about the human condition.</p>
    </div>
    {/* <div class="homepage-sections" id="homepage-projects-section">
      <h2 class="main-page-subheadings">things I do</h2>
      <ul class="main-page-descriptions">
        <li>ALWAYS trying to build more opportunities for people in Orange County to meet new people and find new friends. Check out some of the events I run <a href="https://yujioshiro.com/meetup/">here</a>!</li>
      </ul>
    </div> */}
  </Layout>
);

export default IndexPage;
