import TitlePage from '../Components/main/titlePage'
import './projects.css'
import ProjectList from '../Components/projects/projectList'


export const metadata = {
  title: "Projects | Rockai Dev",
  description: "The Best Programming Company in Egypt and Middel East | Specialists in various fields of programming and professionals in helping you build a permanent brand on the Internet | أفضل شركة برمجة في مصر والشرق الأوسط",
};

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
