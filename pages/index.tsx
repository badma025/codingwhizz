import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2814752550503599"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <main
        className="font-Poppins  mx-auto min-h-screen max-w-[1500px] bg-[#E7E0CF] text-black dark:bg-[#181f30]
       dark:text-white"
      >
        <Header />
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Other />
        <Contact />
        <Footer />
      </main>
    </html>
  )
}

export default Home
