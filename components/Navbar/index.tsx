import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import BigLogo from '../Logos/BigLogo'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  useEffect(() => {
    setTheme("dark")
  }, [])
  
  return (
    <nav className="flex items-center justify-around" id="navbar">
      <div className="ml-6 hidden md:flex">
        <BigLogo />
      </div>

      <div className="flex justify-evenly space-x-7 text-xl">
        <>
          <h3
            className="cursor-pointer transition duration-300 ease-in-out hover:scale-110"
            onClick={() => router.push('https://codingwhizz.org/#about')}
          >
            About
          </h3>
        </>
        <>
          <h3
            className=" cursor-pointer transition duration-300 ease-in-out hover:scale-110"
            onClick={() => router.push('https://codingwhizz.org/#contact')}
          >
            Contact
          </h3>
        </>
        <>
          <h3 className=" cursor-pointer transition duration-300 ease-in-out hover:scale-110">
            Donate
          </h3>
        </>
        <>
          <h3
            className=" cursor-pointer transition duration-300 ease-in-out hover:scale-110"
            onClick={() => router.push('https://codingwhizz.org/#projects')}
          >
            Projects
          </h3>
        </>
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

      <div>
        <button
          onClick={() => router.push('https://codingwhizz.org/blog')}
          className="mr-7 rounded-lg bg-[#F5F1E8] px-7 py-3 text-2xl font-semibold transition duration-300 ease-in-out hover:scale-[1.15] dark:bg-[#0A0E17]"
        >
          Blog
        </button>
      </div>
    </nav>
  )
}

export default Navbar
