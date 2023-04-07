import React from 'react';
import Layout from '../components/Layout';

// import '../../static/stylesheets/styles.css';
// import '../../static/stylesheets/homepage-index.css';


const IndexPage = () => (
  <Layout>
    <div class="homepage-sections" id="homepage-about-section">
    <h1>welcome to my website!</h1>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;I am a second year computer science student, <a href="https://merchduck.com" target="_blank" rel="noreferrer">business owner</a>, and curious learner of all things around us. {/*Sometimes I <a href="./blog">write</a> about my findings!*/} My favorite hobby is talking to people and learning more about the human condition.</p>
    </div>

    {/* <div class="homepage-sections" id="homepage-experiences-section">
    <h2>experiences</h2>
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
    </div> */}

    {/* <div class="homepage-sections" id="homepage-education-section">
      <h2>education</h2>
      <p>I am currently in my second year of computer science at Irvine Valley College, a 2-year community college in Irvine, California. I will be continuing my computer science studies at ___ this upcoming Fall semester and will be obtaining a bachelors degree in Spring 2025.</p>
    </div> */}

    <div class="homepage-sections" id="homepage-projects-section">
      <h2 class="main-page-subheadings">what I'm working on</h2>
      <ul class="main-page-descriptions">
        <li><a href="https://playlistpal.yujioshiro.com">PlaylistPal</a>, react, view <a href="https://github.com/yujioshiro/playlistpal">github repo</a></li>
        <li><a href="https://timesync.yujioshiro.com">timesync</a>, react, view <a href="https://github.com/yujioshiro/timesync">github repo</a></li>
        <li>this website, gatsby.js, view <a href="https://github.com/yujioshiro/personal-website">github repo</a></li>
        <li>view <a href="/projects">all projects</a></li>
      </ul>
    </div>

    {/* <div class="homepage-sections" id="homepage-blog-section">
      <h2 class="main-page-subheadings">what I've written about recently</h2>
      <ul class="main-page-descriptions">
      </ul>
    </div> */}

    <div class="homepage-sections">
<h2 class="main-page-subheadings" id="homepage-searching-section">what I'm looking for</h2>
    <ul class="main-page-descriptions">
      <li>a software developer internship, review my <a href="/resume">resume</a></li>
      <li>to support a research group with programming and data processing tasks, <a href="/contact">recruit me</a></li>
      <ul>
        <li>preference for research groups working with natural world data, human population data, and space</li>
      </ul>
    </ul>
</div>
{/* <div class="homepage-sections">

</div> */}

    



    

    

  </Layout>
);

export default IndexPage;
