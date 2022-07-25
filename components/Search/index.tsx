import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'
import { HiSearch } from 'react-icons/hi'

const Search = () => {
  return (
    <section>
      <section className="flex flex-col items-center justify-center">
        <div className="mt-20  flex  text-sm  sm:text-lg lg:text-xl">
          <h2>
            Learn web development with{' '}
            <span className="inline-flex  text-[#3A66FF]">great</span> articles.
          </h2>
        </div>
        <label className="relative mt-10 flex items-center space-x-10 rounded-full -ml-12 ">
          <SearchIcon className="absolute  ml-12 h-5 text-gray-500" />
          <input
            type="text"
            className=" h-[50px] rounded-full bg-[#E0D7C2] pl-[40px] pr-[40px] text-sm outline-none 
            ring-2 ring-gray-500
            focus:ring-gray-500 dark:bg-[#181f30] sm:h-[55px] sm:w-[200px] sm:text-lg md:w-[260px] lg:text-xl"
            placeholder="Search..."
          />
        </label>
      </section>
      <section>
        <div className="flex-center mt-10 flex justify-center text-sm sm:text-lg lg:text-xl">
          <h2>
            Search by{' '}
            <span className="inline-flex text-[#3A66FF] ">topic </span>
          </h2>
        </div>
        <div className="mx-10 mt-3 flex flex-wrap items-center justify-center space-x-3 space-y-3  text-sm sm:text-lg lg:text-xl">
          <div className="  mt-3  flex cursor-pointer rounded-full bg-[#E0D7C2] px-6 py-2 text-[#53b0cc] duration-300 ease-in-out hover:scale-110 dark:bg-[#1F283D]">
            <h2 className="">react</h2>
          </div>
          <div className=" flex cursor-pointer rounded-full bg-[#E0D7C2] px-6 py-2 dark:text-white duration-300 ease-in-out text-black hover:scale-110 dark:bg-[#1F283D]">
            {' '}
            nextjs
          </div>
          <div className=" flex cursor-pointer rounded-full bg-[#E0D7C2] px-6 py-2 dark:text-[#ffcb2c] text-[#c49c24] duration-300 ease-in-out hover:scale-110 dark:bg-[#1F283D]">
            <h2 className="">firebase</h2>
          </div>
          <div className=" flex cursor-pointer rounded-full bg-[#E0D7C2] px-6 py-2 text-[#38bdf8] duration-300 ease-in-out hover:scale-110 dark:bg-[#1F283D]">
            <h2>tailwind</h2>
          </div>
          <div className=" flex cursor-pointer rounded-full bg-[#E0D7C2] px-6 py-2 dark:text-[#fcdc00] text-[#d4b800]
           duration-300 ease-in-out hover:scale-110 dark:bg-[#1F283D]">
            <h2>javascript</h2>
          </div>
          <div className="  flex cursor-pointer rounded-full bg-[#E0D7C2] px-6 py-2 text-[#3178c6] duration-300 ease-in-out hover:scale-110 dark:bg-[#1F283D]">
            <h2>typescript</h2>
          </div>
          <div className="flex cursor-pointer rounded-full bg-[#E0D7C2] px-6 py-2 text-[#f03e2f] duration-300 ease-in-out hover:scale-110 dark:bg-[#1F283D]">
            <h2>sanity</h2>
          </div>
          <div className="flex cursor-pointer rounded-full bg-[#E0D7C2] px-6 py-2 text-[#439755] duration-300 ease-in-out hover:scale-110 dark:bg-[#1F283D]">
            <h2>API</h2>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Search
