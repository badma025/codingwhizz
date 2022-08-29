import { NextPage } from 'next'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'

const Hero: NextPage = () => {
  return (
    <section className="mx-auto flex flex-col items-center space-y-5 pt-[60px] text-lg sm:text-xl md:text-3xl">
      <section>
        <p className="mx-auto">
          Greetings! I'm <span className="text-[#3A66FF]">Alim Badmus</span>,
        </p>
      </section>
      <section>
        <p>
          A teenage <span className="text-[#3A66FF]">full-stack</span> web
          developer.
        </p>
      </section>
      <nav className="cursor-pointer transition duration-300 ease-in-out hover:scale-110">
        <Link href="https://github.com/turbofuture1">
          <a target="_blank" aria-label="Github">
            <BsGithub className="text-white mt-[30px]" size={80} />
          </a>
        </Link>
      </nav>
    </section>
  )
}

export default Hero
