import React from 'react';
import Layout from '../../components/Layout';
import projectsData from "../../data/projects.json";

export default function ProjectsPage() {
  return (
    <Layout>
        <h1>what I've built</h1>
        <div class="row row-example">
      {
        projectsData.projects.map(project => (
          <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <article key={project.title}>
            {project.liveLink === "N/A"?<h2>{project.title}</h2>:<h2><a href={project.liveLink}>{project.title}</a></h2>}
            <p>{project.description}</p>
            <a href={project.githubLink}>View on Github</a>
            </article>
          </div>

        ))
      }
    </div>
    </Layout>
  )
}

// projectsData.projects.map(project => (
//   <article key={project.title} class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
//     if ({project.title}) {
//     <h2>{project.title}</h2>

//     } else {
//       <h2>Hello</h2>
//     }
//     <p>{project.description}</p>
//     <a href={project.link}>View on Github</a>
//   </article>
// ))