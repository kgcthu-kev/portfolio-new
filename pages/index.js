/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kaung Si Thu | Web Developer</title>
        <meta name='description' content='kgcthu portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='w-full max-w-4xl mx-auto'>
        <section className='flex flex-col justify-center mx-auto min-h-[calc(100vh-5rem)] px-5 lg:px-0 '>
          <div className='space-y-3 my-4'>
            <h2 className='text-3xl lg:text-4xl text-gray-700 dark:text-gray-300'>
              👋 Hello! I am
            </h2>

            <h1 className='text-5xl font-bold md:text-6xl'>
              Kaung Si Thu @ Kevin,
            </h1>

            <h4 className='text-3xl font-bold md:text-4xl'>
              and I'm a web developer.
            </h4>
          </div>
          <p className='!leading-loose md:text-xl text-gray-700 dark:text-gray-300'>
            I am an extremely motivated programmer from Yangon, Myanmar. I'm a
            self-taught developer and have been programming for almost a year
            and still learning new technologies every week.{' '}
            <Link href='/about'>
              <a className='underline'>Read More.</a>
            </Link>
          </p>
        </section>

        <Skills />
        <Projects />
      </main>
    </div>
  )
}
