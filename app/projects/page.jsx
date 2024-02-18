import TitlePage from '../Components/main/titlePage'
import './projects.css'
import ProjectList from '../Components/projectList'

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
