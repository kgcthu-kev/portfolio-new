/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

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
      <div className='px-4 lg:px-0'>
        <div className='w-full max-w-4xl mx-auto'>
          <div className='space-y-5'>
            <h1 className='text-3xl font-bold'>About Me</h1>
            <p className='text-lg'>
              Hello, I am Kaung Si Thu{' '}
              <a
                href='https://www.instagram.com/kgcthu/'
                className='hover:text-blue-900'
                target='_blank'
              >
                @kgcthu
              </a>
              ! You can call me Kev. I'm a 22-year-old web developer and 4th
              year mechanical engineering student based in Myanmar. I'm a fast
              learner and I adore building accessible, responsive and fast code.
            </p>
            <p className='text-lg'>
              I have been developing web applications for almost a year and love
              it! I learn something new almost every day! Currently, I'm
              focusing on frontend web development, specifically working with
              React.js, CSS, HTML and much more! I also want to learn about
              mobile development.
            </p>
            <p className='text-lg'>
              Fun Facts: I like to listen to songs and sing along. I love ITZY's
              Ryujin.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default about
