import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import BigLogo from '../Logos/BigLogo'
import SmallLogo from '../Logos/SmallLogo'

const Footer = () => {
  return (
    <section className="mt-16 border-t-2 border-t-black dark:border-t-gray-600 mb-10 flex items-center justify-evenly font-semibold flex-col md:flex-row space-y-8 md:space-y-0 mx-auto">
      <div className="flex w-1/2 flex-col items-center justify-center mx-auto mt-10 ">
        <div>
          <div className='hidden md:flex'>
            <BigLogo />
          </div>
          <div className='flex md:hidden -ml-6'>
            <SmallLogo />
          </div>
        </div>
        <div className="mt-8 md:ml-24 w-[300px] text-[#3a6aff] text-center md:text-left ">
          <h2>
            Making web development a better experience - one article at a time.
          </h2>
        </div>
        <div className="mt-4 flex items-center justify-center space-x-3">
          <div className="">
            <BsGithub size={30} />
          </div>
          <div>
            <BsTwitter size={30} />
          </div>
          <div>
            <BsInstagram size={30} />
          </div>
        </div>
      </div>

      <div className="flex w-1/2 flex-col items-center justify-center text-center md:text-start">
        <h2 className="text-[#3a6aff] lg:text-xl">
          Designed and made with 💖 by Alim Badmus
        </h2>
      </div>
    </section>
  )
}

export default Footer
