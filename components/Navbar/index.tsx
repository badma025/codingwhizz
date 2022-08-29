import { ChevronDownIcon, MoonIcon, SunIcon } from '@heroicons/react/solid'
import { signOut } from 'firebase/auth'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsPerson } from 'react-icons/bs'
import { auth } from '../../utilities/firebase'
import BigLogo from '../Logos/BigLogo'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  useEffect(() => {
    setTheme('dark')
  }, [])
  const [moreOptions, setMoreOptions] = useState(false)
  const [user] = useAuthState(auth)

  return (
    <nav className="" id="navbar">
      <div className="container mx-auto flex flex-wrap items-center justify-around">
        <div className="ml-6 hidden md:flex">
          <BigLogo />
        </div>

        <div className="flex items-center space-x-7 text-xl">
          <Link href="https://codingwhizz.org/about">
            <h3 className="cursor-pointer transition duration-300 ease-in-out hover:scale-110">
              About
            </h3>
          </Link>
          <Link href="https://codingwhizz.org/#contact">
            <h3 className=" transition duration-300 ease-in-out hover:scale-110">
              Contact
            </h3>
          </Link>
          <Link href="#">
            <h3 className=" cursor-pointer transition duration-300 ease-in-out hover:scale-110">
              Donate
            </h3>
          </Link>
          <Link href="https://codingwhizz.org/#projects">
            <h3
              className=" cursor-pointer transition duration-300 ease-in-out hover:scale-110"
              onClick={() => router.push('https://codingwhizz.org/#projects')}
            >
              Projects
            </h3>
          </Link>

          <Link href="https://codingwhizz.org/privacy-policy">
            <h3 className="cursor-pointer transition duration-300 ease-in-out hover:scale-110">
              Privacy
            </h3>
          </Link>
          <div
            className="dark:bg-[#1f283f] flex cursor-pointer items-center space-x-2 rounded-xl
bg-[#E0D7C2] p-3 transition duration-300 ease-in-out
         hover:scale-110"
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
        </div>

        <div className="flex">
          {theme === 'dark' ? (
            <MoonIcon
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="h-11"
            />
          ) : (
            <SunIcon
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="h-11"
            />
          )}
        </div>

        <Link href="https://codingwhizz.org/posts">
          <button
            onClick={() => router.push('https://codingwhizz.org/posts')}
            className="mr-7 rounded-lg bg-[#F5F1E8] px-7 py-3 text-2xl font-semibold transition duration-300 ease-in-out hover:scale-[1.15] dark:bg-[#0A0E17]"
          >
            Blog
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
