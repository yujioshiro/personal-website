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
            <article key={project.title} className="">
              <header>{project.liveLink === "N/A"?<h4>{project.title}</h4>:<h4><a href={project.liveLink}>{project.title}</a></h4>}</header>
            {/* <p dangerouslySetInnerHTML={{ __html: project.description }}>{project.description}</p> */}
            <span className="project-description" dangerouslySetInnerHTML={{ __html: project.description }}></span>
            <footer className="project-footer">
              <a href={project.githubLink}>view on github</a>
              {project.article !== "N/A"?<a href={project.article}>read details</a>:null}
            </footer>
            </article>
          </div>

        ))
      }
    </div>
    </Layout>
  )
}