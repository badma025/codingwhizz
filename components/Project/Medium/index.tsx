import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { MdExitToApp } from 'react-icons/md'

const Medium = () => {
  return (
    <>
      <div className="mt-10 mr-14 flex flex-col text-right">
        <div className="text-lg   font-semibold text-[#3A66FF] sm:text-xl ">
          <h2>Featured Project</h2>
        </div>
        <div className="text-3xl">
          <h2>Medium Clone</h2>
        </div>
      </div>

      <div className=" mt-6 flex flex-col xl:flex-row xl:items-center xl:justify-center">
        <div className="z-50 mx-auto mt-6 h-[260px]  w-[245px] rounded-lg bg-[#E0D7C2] p-8 dark:bg-[#1F283D] xl:mx-0 xl:h-[175px] xl:w-[507px]">
          <div>
            <h2 className="text-xl">
              A Medium clone using Sanity.io for content management and dynamic
              routing using Next.js
            </h2>
          </div>
          <div className="float-right -mr-4 -mt-5 flex space-x-2 xl:-mt-0">
            <Link href="https://github.com/turbofuture1/sanity">
              <a target="_blank" aria-label="Github">
                <BsGithub
                  className="mt-8 transition duration-300 hover:animate-bounce"
                  size={30}
                />
              </a>
            </Link>
            <Link href="https://sanity-theta.vercel.app/">
              <a target="_blank" aria-label="Sanity">
                <MdExitToApp
                  className="mt-8 transition duration-300 hover:animate-bounce"
                  size={30}
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-6 flex justify-evenly xl:hidden">
          <Image
            className="mx-auto"
            src="/projects/medium-image.png"
            width={282}
            height={130}
            layout="fixed"
            alt="medium"
          />
        </div>
        <div className=" mt-6 -ml-20 hidden justify-evenly xl:flex">
          <Image
            className="mx-auto"
            src="/projects/medium-image-big.png"
            width={774 * 0.7}
            height={356 * 0.7}
            layout="fixed"
            alt="medium"
          />
        </div>
      </div>
    </>
  )
}

export default Medium
