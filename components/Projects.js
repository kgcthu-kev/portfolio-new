import { projectInfo } from '../utils/data'
import Card from './Card'

function Projects() {
  return (
    <section id='projects' className='px-5 lg:px-0 py-4 scroll-my-16'>
      <h1 className='text-3xl mb-4 font-bold'>Featured Projects</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projectInfo.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
