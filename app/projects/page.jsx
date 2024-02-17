import TitlePage from '../Components/main/titlePage'
import './projects.css'
import Image from 'next/image'
import Link from 'next/link'
import ProjectList from '../Components/Projects/projectList'

export default function Projects() {
  return (
    <>
      <TitlePage title={'Projects'} />
      <section id='projects'>
        <div className="projects">
          <ProjectList />
        </div>
      </section>
    </>
  )
}
