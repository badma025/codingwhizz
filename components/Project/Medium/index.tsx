import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { MdExitToApp } from 'react-icons/md'

const Medium = () => {
  return (
    <>
      <div className="mt-10 mr-14 flex flex-col text-right">
        <div className="text-lg   font-semibold text-[#3A66FF] sm:text-xl ">
          <p>Featured Project</p>
        </div>
        <div className="text-3xl">
          <p>Medium Clone</p>
        </div>
      </div>

      <div className=" mt-6 flex flex-col xl:flex-row xl:items-center xl:justify-center">
        <div className="z-50 mx-auto mt-6 h-[260px]  w-[245px] rounded-lg bg-[#E0D7C2] p-8 dark:bg-[#1F283D] xl:mx-0 xl:h-[175px] xl:w-[507px]">
          <div>
            <p className="text-xl">
              A Medium clone using Sanity.io for content management and dynamic
              routing using Next.js
            </p>
          </div>
          <div className="float-right -mr-4 -mt-5 flex space-x-2 xl:-mt-0">
            <Link href="https://github.com/turbofuture1/sanity">
                <BsGithub
                  className="mt-8 transition duration-300 hover:animate-bounce"
                  size={30}
                />
            </Link>
            <Link href="https://sanity-theta.vercel.app/">
                <MdExitToApp
                  className="mt-8 transition duration-300 hover:animate-bounce"
                  size={30}
                />
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
