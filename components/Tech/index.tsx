import { NextPage } from 'next'

import React from 'react'
import TechImages from '../TechImages'

const Tech: NextPage = () => {
  return (
    <section  className="mb-[30px]">
      <section className="flex flex-col items-center justify-center xl:flex-row xl:space-x-5">
        <h1 className="mx-20 text-3xl font-semibold xl:justify-start">
          Tech Stack
        </h1>
        <div className="mt-5 h-1 w-[200px]  rounded-full bg-[#646464]" />
      </section>
      <header className="mt-14 flex items-center justify-center text-center text-lg  sm:text-xl ">
        <h2> I have worked with the following technologies:</h2>
      </header>
      <TechImages />
    </section>
  )
}

export default Tech
