import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { signOut } from 'firebase/auth'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BsPerson } from 'react-icons/bs'
import { auth } from '../../utils/firebase'
import BigLogo from '../Logos/BigLogo'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  useEffect(() => {
    setTheme("dark")
  }, [])
  const [user] = useAuthState(auth)
  
  return (
    <nav className="flex items-center justify-around" id="navbar">
      <div className="ml-6 hidden md:flex">
        <BigLogo />
      </div>

      <div className="flex items-center justify-evenly space-x-7 text-xl">
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
        <div className='flex items-center p-3 rounded-xl bg-[#1f283d] space-x-2 transition duration-300 ease-in-out hover:scale-110
         cursor-pointer' 
        //  @ts-ignore
         onClick={() => {
          if(!user) router.push("https://codingwhizz.org/portal")
          else signOut(auth)
         }}>
        <BsPerson size={30}/>
         <h2>{user?.displayName}
         {!user && "Login"}</h2>
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
