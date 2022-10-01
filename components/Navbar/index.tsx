import {  MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utilities/firebase'
import BigLogo from '../Logos/BigLogo'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  useEffect(() => {
    setTheme('dark')
  }, [])
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
          <Link href="https://codingwhizz.org/#projects">
            <h3
              className=" cursor-pointer transition duration-300 ease-in-out hover:scale-110"
              onClick={() => router.push('https://codingwhizz.org/#projects')}
            >
              Projects
            </h3>
          </Link>

          <Link href="/resume.pdf">
            <h3
              className=" cursor-pointer transition duration-300 ease-in-out hover:scale-110"
            >
              Resume
            </h3>
          </Link>

          <Link href="https://codingwhizz.org/privacy-policy">
            <h3 className="cursor-pointer transition duration-300 ease-in-out hover:scale-110">
              Privacy
            </h3>
          </Link>
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
