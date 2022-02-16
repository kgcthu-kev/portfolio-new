/* eslint-disable react/no-unescaped-entities */
function Skills() {
  return (
    <section className='px-5 py-10 lg:px-0 mt-4'>
      <h1 className='text-3xl mb-4 font-bold'>My Backpack</h1>
      <p className='font-light'>
        You can find the list of my top skills below. I'm also open to learn
        more frontend and mobile related frameworks, libraries, languages, etc!
      </p>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 my-3'>
        <div>
          <h2 className='text-2xl pb-3 font-bold'>Frontend</h2>
          <div className='space-y-2'>
            <p>HTML, CSS & SCSS</p>
            <p>Javascript</p>
            <p>Typescript</p>
            <p>React.js & Next.js</p>
            <p>TailwindCSS</p>
          </div>
        </div>
        <div>
          <h2 className='text-2xl pb-3 font-bold'>Backend</h2>
          <div>
            <p>Firebase</p>
          </div>
        </div>
        <div>
          <h2 className='text-2xl pb-3 font-bold'>Others</h2>
          <div>
            <p>Git & Github</p>
            <p>VSCode</p>
            <p>Stackoverflow</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
