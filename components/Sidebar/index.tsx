import { ArrowDownIcon } from '@heroicons/react/outline'
import { ArrowNarrowDownIcon, ChevronDownIcon } from '@heroicons/react/solid'
import { signOut } from 'firebase/auth'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsPerson } from 'react-icons/bs'
import { HiX, HiMenu } from 'react-icons/hi'
import { auth } from '../../utilities/firebase'
import SmallLogo from '../Logos/SmallLogo'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [moreOptions, setMoreOptions] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [user] = useAuthState(auth)
  return (
    <nav className="" id="sidebar">
      <div className=" flex items-center justify-between text-black dark:text-white">
        <div className="">
          <SmallLogo />
        </div>

        {showSidebar ? (
          <HiX
            className="fixed right-10 top-6 z-50 flex h-10 cursor-pointer items-center text-4xl text-black active:-rotate-45 dark:text-white"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        ) : (
          <HiMenu
            onClick={() => setShowSidebar(!showSidebar)}
            size={40}
            className="mt-5 mr-6 transition duration-300 active:rotate-45"
          />
        )}
      </div>

      <div
        className={`dark:bg-[#181f30] fixed top-0 right-0  z-40 h-full w-full bg-[#E7E0CF] pt-5 pl-10 text-black duration-300 ease-in-out   dark:text-white ${
          showSidebar ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <section>
          <h3
            className="mt-4 inline-block cursor-pointer text-xl font-semibold transition duration-300 ease-in-out hover:scale-110"
            onClick={() => {
              router.push('https://codingwhizz.org/#about')
              setShowSidebar(false)
            }}
          >
            About
          </h3>
        </section>
        <section
          onClick={() => {
            router.push('https://codingwhizz.org/blog')
            setShowSidebar(false)
          }}
        >
          <h3
            className="mt-4 inline-block cursor-pointer text-xl font-semibold
          text-[#0A0E17] transition duration-300 ease-in-out hover:scale-110 dark:text-white"
          >
            Blog
          </h3>
        </section>
        <section>
          <h3
            className="mt-4 inline-block cursor-pointer text-xl font-semibold transition duration-300 ease-in-out hover:scale-110"
            onClick={() => {
              router.push('https://codingwhizz.org/#contact')
              setShowSidebar(false)
            }}
          >
            Contact
          </h3>
        </section>

        <section>
          <h3
            className="mt-4 inline-block cursor-pointer text-xl font-semibold transition duration-300 ease-in-out hover:scale-110"
            onClick={() => {
              router.push('https://codingwhizz.org/#projects')
              setShowSidebar(false)
            }}
          >
            Projects
          </h3>
        </section>

        <div
          className="cursor-pointer"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <h3 className="mt-4 inline-block text-xl font-semibold transition duration-300 ease-in-out hover:scale-110 ">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </h3>
        </div>

        <section>
          <div className="flex items-center space-x-1">
            <div>
              <h3 className="mt-4 inline-block cursor-pointer text-xl font-semibold transition duration-300 ease-in-out hover:scale-110">
                More
              </h3>
            </div>

            <div className="cursor-pointer">
              <ChevronDownIcon
                onClick={() => {
                  setMoreOptions(!moreOptions)
                }}
                className="mt-4 h-7"
              />
            </div>
          </div>

          {moreOptions && (
            <section className="ml-4 flex flex-col space-y-1 ">
              <div className="mt-2">
                <h3
                  className="
                 inline-block cursor-pointer text-lg font-semibold transition duration-300 ease-in-out hover:scale-110"
                  onClick={() =>
                    router.push('https://codingwhizz.org/privacy-policy')
                  }
                >
                  Privacy Policy
                </h3>
              </div>
              <div className="">
                <h3
                  className=" inline-block cursor-pointer text-lg font-semibold transition duration-300 ease-in-out hover:scale-110"
                  onClick={() =>
                    router.push('https://codingwhizz.org/privacy-policy')
                  }
                >
                  About
                </h3>
              </div>
            </section>
          )}
        </section>

        <section className="inline-block">
          <div
            className=" 
            mt-4 flex cursor-pointer  items-center space-x-2 rounded-xl bg-[#E0D7C2] p-3 text-xl transition duration-300 ease-in-out hover:scale-110
         dark:bg-[#1f283d]"
            //  @ts-ignore
            onClick={() => {
              if (!user) router.push('https://codingwhizz.org/portal')
              else signOut(auth)
            }}
          >
            <BsPerson size={30} />
            <h2>
              {user?.displayName}
              {!user && 'Login'}
            </h2>
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Sidebar
