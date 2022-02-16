import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBars, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  return (
    <header className='sticky top-0 z-50 md:flex items-center justify-center w-full px-5 h-15 bg-gray-50 dark:bg-gray-800'>
      {/* links */}
      <nav className='flex items-center justify-between w-full h-20 max-w-4xl font-medium text-lg'>
        {/* social */}
        <ul className='h-full space-x-14 md:items-center hidden md:flex relative'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='#projects'>Projects</Link>
          </li>

          <li>
            <Link href='/about'>About</Link>
          </li>

          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <ul className='flex items-center h-full space-x-5'>
          <li>
            <a href='https://www.linkedin.com/in/kaung-si-thu-518759224/'>
              <FaLinkedin size={30} />
            </a>
          </li>
          <li>
            <a href='https://github.com/kgcthu-kev'>
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/kgcthu'>
              <FaTwitter size={30} />
            </a>
          </li>
          {/* toggle dark mode */}
          {mounted && (
            <div
              className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${
                resolvedTheme === 'dark' ? 'justify-end' : 'justify-start'
              }`}
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              <span className='absolute left-0'>🌜</span>
              <motion.div
                className='w-5 h-5 bg-white rounded-full z-40'
                layout
                transition={spring}
              />
              <span className='absolute right-0.5'>🌞</span>
            </div>
          )}
        </ul>
        <ul className='md:hidden'>
          {!isOpen ? (
            <FaBars
              className='cursor-pointer z-60'
              size={25}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <ImCross
              className='cursor-pointer z-60'
              size={25}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </ul>

        {/* mobile */}
      </nav>
      {isOpen && (
        <ul className='h-full space-x-1 md:items-center w-full z-50 flex items-center flex-col bg-gray-50 dark:bg-blue p-5 shadow-lg'>
          <li className='py-3'>Home</li>
          <li className='py-3'>Projects</li>
          <li className='py-3'>About</li>
          <li className='py-3'>Contact</li>
        </ul>
      )}
    </header>
  )
}

export default Header
