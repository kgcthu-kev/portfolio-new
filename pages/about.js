/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { myTimeline } from '../utils/data'

function about() {
  return (
    <>
      <Head>
        <title>About Me - Kaung Si Thu</title>
        <meta
          name='description'
          content='Portfolio website of Kaung Si Thu @ kgcthu'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className='w-full max-w-4xl mx-auto'>
        <div className='space-y-5'>
          <h1 className='text-3xl font-bold'>About Me</h1>
          <p>
            Hello, I am Kaung Si Thu @kgcthu! You can call me Kev. I'm a
            22-year-old programmer and 4th year mechanical engineering student
            based in Myanmar. I'm a fast learner and I adore building
            accessible, responsive and fast code.
          </p>
          <p>
            I have been developing web applications for almost a year and love
            it! I learn something new almost every day! Currently, I'm focusing
            on frontend web development, specifically working with React.js,
            Next.js, TypeScript, CSS, HTML and much more! New skills and techs I
            want to learn are Vue.js, Flutter and one backend framework like
            Express.js and Django.
          </p>
          <p>
            Fun Facts: I like advanced technologies and electronic devices. One
            of the people that I idolize is Elon Musk. I'm an introvert and I
            like playing multiplayer games with my fris.
          </p>
        </div>
        <div className='pb-4'>
          <h1 className='text-3xl my-4 font-bold'>My Timeline</h1>
          {myTimeline.map((timeline) => (
            <Post
              key={timeline.year}
              year={timeline.year}
              posts={timeline.posts}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default about

const Post = ({ year, posts }) => {
  return (
    <div>
      <h1 className='font-bold text-lg my-3'>{year}</h1>
      {posts.map((post, index) => (
        <ul key={index}>
          <li className='list-disc text-lg my-2'>{post.month}</li>
          <div className='px-3'>
            <li className='font-semibold my-2'>{post.title}</li>
            <li>{post.description}</li>
          </div>
        </ul>
      ))}
    </div>
  )
}
