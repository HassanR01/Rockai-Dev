import Image from 'next/image'
import Link from 'next/link'

const getProjects = async () => {
    const apiUrl = process.env.API_URL

    try {
        const res = await fetch(`${apiUrl}/api/projects`, {
            cache: 'no-store',
        })

        if (!res.ok) {
            throw new Error('Cannot find the projects')
        }
        return res.json()
    } catch (error) {
        console.log('Fetching Error' + error);
    }

}

export default async function ProjectList() {
    const { projects } = await getProjects();
    
    let sortProject = projects

    sortProject.reverse()

    return (
        <>
            {sortProject.length > 0 && sortProject.map(project => (
                <div className={`project ${project.category}`} key={project._id}>
                    <div className="image">
                        <Image src={project.image} width={400} height={100} alt={project.title} />
                    </div>
                    <div className="data">
                        <h3 className='font-bold'>{project.title}</h3>
                        {project.description.split(' ').length > 13 ? (<p title={project.description}>{project.description.split(" ").slice(0, 13).join(' ')}...</p>) : (<p>{project.description}.</p>)}
                        <div className="links">
                            <Link className='demo' href={project.link} target='_blank'>visit</Link>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
