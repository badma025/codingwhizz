import Link from 'next/link'
import React from 'react'
import { MdExitToApp } from 'react-icons/md'

const Netflix = () => {
  return (
    <div className=" h-[188px] w-[250px]  rounded-lg bg-[#E0D7C2] dark:bg-[#1F283D] ">
      <div className="mt-6 ml-6 flex  flex-col space-y-3">
        <div className="text-2xl">
          <h1>Netflix Clone</h1>
        </div>
        <div className="text-xl">
          <h2>Uses the TMDB API to fetch movies.</h2>
        </div>
      </div>
      <div className="mr-6 -mt-5 flex justify-end space-x-2">
        <Link href="https://netflix-clone-a9cd7.web.app">
          <a target="blank" aria-label="Netflix">
            <MdExitToApp
              className="mt-8 transition duration-300 hover:animate-bounce"
              size={30}
            />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Netflix