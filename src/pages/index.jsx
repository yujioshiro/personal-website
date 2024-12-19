import React from 'react';
import Layout from '../components/Layout';

// import '../../static/stylesheets/styles.css';
// import '../../static/stylesheets/homepage-index.css';


const IndexPage = () => (
  <Layout>
    <div class="homepage-sections" id="homepage-about-section">
    <h1>yuji oshiro's website</h1>
    <p>fourth-year computer science student @ Oregon State University, part-time CS tutor. My favorite hobby is talking to people and learning more about the human condition.</p>
    </div>

    {/* <div class="homepage-sections" id="homepage-links-section">
      <h2 class="main-page-subheadings">links</h2>
      <ul class="main-page-descriptions">
        <li><a href="https://github.com/yujioshiro" target="_blank" rel="noopener">github</a></li>
        <li><a href="https://www.linkedin.com/in/yujioshiro/" target="_blank" rel="noopener">linkedin</a></li>
      </ul>
    </div> */}

    <div class="homepage-sections" id="homepage-projects-section">
      <h2 class="main-page-subheadings">things I'm working on</h2>
      <ul class="main-page-descriptions">
        <li>just started a new job! More details coming soon 😁</li>
        <li>ALWAYS trying to build more opportunities for people in Orange County to meet new people and find new friends. Check out some of the events I run <a href="https://yujioshiro.com/meetup/">here</a>!</li>
        {/* <li><a href="https://playlistpal.yujioshiro.com" target="_blank" rel="noopener">Playlist Pal</a>, view <a href="https://github.com/yujioshiro/playlist-pal">GitHub repo</a></li>
        <li><a href="https://courseguide.yujioshiro.com" target="_blank" rel="noopener">Course Guide</a></li>
        <ul>
          <li>This site will let students review their courses and professors</li>
          <li>The frontend is built with React. The charts are created with VictoryCharts</li>
          <li>Currently learning PostgreSQL to build a database to make multi-school possible</li>
          <li>I will initially launch it to  IVC and Saddleback College students and hope to turn it into an open-data project where students from other schools can help collect the course and professor information for their school</li>
        </ul>
        <li><a href="https://merchduck.com" target="_blank" rel="noopener">merchduck</a>, vanilla js</li>
        <li>this website, gatsby.js, view <a href="https://github.com/yujioshiro/personal-website">github repo</a></li>
        <li>view <a href="https://github.com/yujioshiro">more projects</a></li> */}
      </ul>
    </div>

    {/* <div class="homepage-sections" id="homepage-blog-section">
      <h2 class="main-page-subheadings">what I've written about recently</h2>
      <ul class="main-page-descriptions">
      </ul>
    </div> */}

    {/* <div class="homepage-sections">
      <h2 class="main-page-subheadings" id="homepage-searching-section">things I'm looking for</h2>
      <ul class="main-page-descriptions">
        <li>a software developer internship, review my <a href="/resume">resume</a></li>
        <li>to support a research group with programming and data processing tasks, <a href="/contact">recruit me</a></li>
        <ul>
          <li>preference for research groups working with natural world data, human population data, and space</li>
        </ul>
        <li>people to interview. If any of these describes you and you wouldn't mind sharing your story, I'd love to talk to you!</li>
        <ul>
          <li>immigrant (of any country)</li>
          <li>have a big dream</li>
          <li>are working with exclusive technology</li>
        </ul>
      </ul>
    </div> */}
{/* <div class="homepage-sections">

</div> */}

    



    

    

  </Layout>
);

export default IndexPage;
