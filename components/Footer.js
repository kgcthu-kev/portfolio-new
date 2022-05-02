function Footer() {
  return (
    <footer className='min-h-[calc(20vh)] w-full max-w-4xl mx-auto flex justify-between px-4 lg:px-0'>
      <div>
        <p> Created by kgcthu with ❤️</p>
        <p> Built with Next.js</p>
      </div>
      <div>
        <ul className='flex gap-3'>
          <li>
            <a href='https://github.com/kgcthu-kev' className='underline'>
              Github
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com/kgcthu.320/'
              className='underline'
            >
              Facebook
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/kgcthu/' className='underline'>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
