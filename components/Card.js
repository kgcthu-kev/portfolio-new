/* eslint-disable react/jsx-no-target-blank */
function Card({ title, description, github, demo }) {
  return (
    <div className='flex flex-col justify-between rounded-md bg-gray-300 dark:bg-gray-600 p-4'>
      <h2 className='pb-2 text-2xl font-semibold'>{title}</h2>
      <p>{description}</p>
      <div className='flex pt-4'>
        <a href={github} className='button' target='_blank'>
          Repository
        </a>
        <a href={demo} className='button' target='_blank'>
          Demo
        </a>
      </div>
    </div>
  )
}

export default Card
