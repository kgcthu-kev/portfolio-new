import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

export const ContactUs = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_502wcla',
        'template_dukhdtf',
        form.current,
        'user_UMLFXVp9w8nzkclgPCtBy'
      )
      .then(
        (result) => {
          console.log(result.text)
          toast.success('Thanks for contacting me ^^', {
            autoClose: 5000,
            position: 'top-center',
            transition: 'slide',
          })
        },
        (error) => {
          console.log(error.text)
          toast.error('I do not receive your email, Please try again', {
            autoClose: 5000,
            position: 'top-center',
            transition: 'slide',
          })
        }
      )
    e.target.reset()
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className='px-4 lg:px-0 min-h-[calc(100vh-25vh-5rem)] scroll-my-16'
      id='contact'
    >
      <h1 className='text-3xl font-bold my-4'>Contact Me</h1>
      <div className='flex flex-col'>
        <div className='relative z-0 mb-6 w-full group'>
          <input
            type='text'
            name='from_name'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Name
          </label>
        </div>

        <div className='relative z-0 mb-6 w-full group'>
          <input
            type='email'
            name='user_email'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required
          />
          <label className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Email address
          </label>
        </div>
        <label className='mb-3'>Your message</label>
        <textarea
          name='message'
          rows='4'
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Leave a comment...'
        ></textarea>
        <input
          type='submit'
          value='Send'
          className='button place-self-end my-4'
        />
      </div>
    </form>
  )
}
