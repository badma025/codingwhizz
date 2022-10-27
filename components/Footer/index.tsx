import Link from 'next/link'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import BigLogo from '../Logos/BigLogo'
import SmallLogo from '../Logos/SmallLogo'

const Footer = () => {
  return (
    <section className="mx-auto mt-16 mb-10 flex flex-col items-center justify-evenly space-y-8 border-t-2 border-t-black font-semibold dark:border-t-gray-600 md:flex-row md:space-y-0">
      <div className="mx-auto mt-10 flex w-1/2 flex-col items-center justify-center ">
        <div>
          <div className="hidden md:flex">
            <BigLogo />
          </div>
          <div className="-ml-6 flex md:hidden">
            <SmallLogo />
          </div>
        </div>
        <div className="mt-8 w-[300px] text-center text-[#3a6aff] md:ml-24 md:text-left ">
          <p>
            Making web development a better experience - one article at a time.
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center space-x-3">
          <div className="cursor-pointer">
            <Link href={`https://github.com/turbofuture1`}>
              <BsGithub size={30} />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href={`https://www.linkedin.com/in/turbofuture1/`}>
              <BsLinkedin size={30} />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href={`https://twitter.com/turbofuture__`}>
              <BsTwitter size={30} />
            </Link>
          </div>
        </div>
      </div>

      <div className="md:text-start flex w-1/2 flex-col items-center justify-center text-center">
        <p className="text-[#3a6aff] lg:text-xl">
          Designed and made with 💖 by Alim Badmus
        </p>
      </div>
    </section>
  )
}

export default Footer
