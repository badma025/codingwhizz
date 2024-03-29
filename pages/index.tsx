import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import About from '../components/About'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Other from '../components/Other'
import Projects from '../components/Projects'
import Tech from '../components/Tech'

const Home: NextPage = () => {
  return (
    <html lang="en" className="">
      <Head>
        <title>codingwhizz</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A personal portfolio of Alim Badmus' coding projects"
        />
        <meta name="msvalidate.01" content="8DA4C81FDD0353D3383798420D85B453" />
      </Head>

      <main
        className="font-Poppins  mx-auto min-h-screen max-w-[1500px] bg-[#E7E0CF] text-black dark:bg-[#181f30]
       dark:text-white"
      >
        <Header />
        <Hero />
        <Tech />
        <Projects />
        <Other />
        <Footer />
      </main>
    </html>
  )
}

export default Home
