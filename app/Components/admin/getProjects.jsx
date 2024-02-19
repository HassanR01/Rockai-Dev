import Link from 'next/link'
import React from 'react'
import EditProjects from './editProjects'

const getProjects = async () => {
  const apiUrl = process.env.API_URL
  const res = await fetch(`${apiUrl}/api/projects`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Cannot fetch the API')
  }

  return res.json()
}

export default async function GetProjects() {
  const { projects } = await getProjects();

  return (
    <>
      <h2>Projects List</h2>
      <div className="projectsList">
        <div className="evid">
          <h3>Name</h3>
          <h3>Date</h3>
          <h3>Type</h3>
          <h3>Link</h3>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <div className="project" key={project._id}>
              <div className="data">
                <h3>{project.title}</h3>
                <h3>{project.createdAt.slice(0, 10)}</h3>
                <h3>{project.category}</h3>
                <Link href={project.link} target='_blank'>Visit</Link>
              </div>
              <div className="editData">
                <EditProjects id={project._id} title={project.title} description={project.description} image={project.image} link={project.link} category={project.category} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
