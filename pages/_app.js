import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <ThemeProvider attribute='class'>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
