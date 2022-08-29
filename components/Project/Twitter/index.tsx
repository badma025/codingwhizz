import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import { MdExitToApp } from 'react-icons/md'

const Twitter = () => {
  return (
    <>
      <div className="mt-10 ml-14  flex flex-col">
        <div className="text-lg  font-semibold text-[#3A66FF] sm:text-xl ">
          <p>Featured Project</p>
        </div>
        <div className="text-3xl ">
          <p>Twitter Clone</p>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row-reverse xl:items-center xl:justify-center">
        <div className="z-50 mx-auto mt-6 h-[250px]  w-[245px] rounded-lg bg-[#E0D7C2] p-8 dark:bg-[#1F283D] xl:mx-0 xl:h-[175px] xl:w-[507px]">
          <div>
            <p className="text-xl">
              A web app created with the same interface as Twitter. Like posts,
              comment and more!
            </p>
          </div>
          <div className="float-right -mr-4 flex space-x-2">
            <Link href="https://github.com/turbofuture1/twitter">
                <BsGithub
                  className="mt-8 transition duration-300 hover:animate-bounce"
                  size={30}
                />
            </Link>
            <Link href="https://twitter-lamda.vercel.app">
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
            src="/projects/twitter-image.png"
            width={282}
            height={130}
            layout="fixed"
            alt="twitter"
          />
        </div>
        <div className=" mt-6 -mr-20 hidden justify-evenly xl:flex">
          <Image
            className="mx-auto"
            src="/projects/twitter-image-big.png"
            width={774 * 0.7}
            height={356 * 0.7}
            layout="fixed"
            alt="twitter"
          />
        </div>
      </div>
    </>
  )
}

export default Twitter
