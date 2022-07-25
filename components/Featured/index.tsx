import { NextPage } from 'next'
import Image from 'next/image'

const Featured: NextPage = () => {
  return (
    <section
      className="mt-16 flex cursor-pointer flex-col-reverse items-center justify-center 
     
     "
    >
      <div className="bg-[#E0D7C2] rounded-2xl dark:bg-[#1F283D] px-4 py-3 duration-300 ease-in-out hover:scale-110 lg:px-8 lg:py-6  ">
        <div className="flex-start text-start flex justify-start">
          <h2 className=" md:text-md mb-7 text-sm text-[#3A66FF] lg:text-2xl font-bold">
            Featured Article
          </h2>
        </div>

        <div className=" flex-center md:text-md flex flex-col items-center justify-center text-start  text-xs md:flex-row lg:text-2xl font-semibold xl:p-4">
          <div className="space-y-4 md:ml-4 md:w-1/2 xl:mt-4 xl:space-y-10 ">
            <div className="">
              <div className=" flex justify-center">
                <h2 className="">
                  Why you shouldn't be using Angular in 2022.
                </h2>
              </div>
            </div>
            <div className="text-[#3A66FF]">
              <h1>July 4, 2022 • 10 min read</h1>
            </div>
            <div className="">
              <h1 className="flex items-center justify-start text-start  ">
                Read the full article <span className="ml-2 text-2xl">→</span>
              </h1>
            </div>
          </div>
          <div className=" flex-center flex items-center justify-center md:w-1/2">
            <div className="">
              <img src="/angular.png" className='xl:h-60 h-24' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
