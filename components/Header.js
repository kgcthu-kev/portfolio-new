import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FaBars,
  FaEllipsisH,
  FaEllipsisV,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa'

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
    <header className='sticky top-0 z-50 md:flex items-center justify-center w-full h-15 bg-gray-50 dark:bg-gray-800'>
      {/* links */}
      <nav className='flex px-5 items-center justify-between w-full h-20 max-w-4xl font-medium text-lg'>
        {/* social */}
        <ul className='h-full space-x-14 md:items-center hidden md:flex relative'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/#projects'>Projects</Link>
          </li>

          <li>
            <Link href='/about'>About</Link>
          </li>

          <li>
            <Link href='/#contact'>Contact</Link>
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
        {isOpen && (
          // mobile
          <motion.ul
            className='fixed top-0 left-0 h-auto space-x-1 md:items-center w-full z-50 flex items-center bg-gray-700 text-white dark:bg-gray-500 dark:text-black flex-col p-5 shadow-lg md:hidden rounded   translate-x-96'
            animate={{
              x: '0',
            }}
            transition={{ type: 'tween', duration: 0.5 }}
          >
            <li className='py-3'>
              <Link href='/'>Home</Link>
            </li>
            <li className='py-3'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='py-3'>
              <Link href='/about'>About</Link>
            </li>
            <li className='py-3'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </motion.ul>
        )}
        <ul className='md:hidden z-50'>
          {!isOpen ? (
            <FaEllipsisH
              className='cursor-pointer'
              size={25}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <FaEllipsisV
              className='cursor-pointer'
              size={25}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
