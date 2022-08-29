import { LockClosedIcon } from '@heroicons/react/solid'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import {
  useAuthState,
} from 'react-firebase-hooks/auth'
import { MdEmail } from 'react-icons/md'
import { auth } from '../../utilities/firebase'

const Login = () => {
  const router = useRouter()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [user] = useAuthState(auth)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [passwordError, setPasswordError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: any) => {

    e.preventDefault()

    setIsSubmitting(true)
    try {
      await signInWithEmailAndPassword(
        auth,
        //  @ts-ignore
        emailRef.current.value,
        // @ts-ignore
        passwordRef.current.value
      )
      
    
    } catch (error: any) {
      if (error.code === 'auth/wrong-password') {
        setPasswordError(true)
      }
      if (error.code === "auth/invalid-email") {
        setEmailError(true)
      }
      else {
        setError(true)
      }
    }
    setIsSubmitting(false)
  }
  return (
    <div className="flex flex-col items-center ">
      <label
        className="relative mt-10 flex items-center justify-start space-x-10 rounded-full ring-2 ring-gray-500
            focus:ring-gray-500 "
      >
        <MdEmail size={30} className="absolute  ml-8 text-gray-500" />
        <input
          type="text"
          className=" h-[50px] rounded-full bg-[#E0D7C2] pl-[40px] pr-[40px] text-sm outline-none 
             dark:bg-[#181f30] sm:h-[55px] sm:w-[200px] sm:text-lg md:w-[260px] lg:text-xl "
          //  @ts-ignore
          ref={emailRef}
          placeholder="Email"
        />
      </label>
      <label
        className="relative mt-10 flex items-center justify-start space-x-10 rounded-full ring-2 ring-gray-500
            focus:ring-gray-500 "
      >
        <LockClosedIcon className="absolute ml-8  h-8 text-gray-500" />
        <input
          type="password"
          className=" h-[50px] rounded-full bg-[#E0D7C2] pl-[40px] pr-[40px] text-sm outline-none 
             dark:bg-[#181f30] sm:h-[55px] sm:w-[200px] sm:text-lg md:w-[260px] lg:text-xl "
          //  @ts-ignore
          ref={passwordRef}
          placeholder="Password"
        />
      </label>
      <button
        disabled={isSubmitting}
        onClick={(e) => handleSubmit(e)}
        className="mt-10 rounded-2xl bg-[#1f283d]  px-8 py-4 transition duration-300 hover:scale-110"
      >
        <h2 className="text-xl">Login</h2>
      </button>

      {passwordError && (
        <div className="sm:text-md mt-2 flex items-center justify-center text-sm text-red-500 md:text-lg ">
          <h2>Incorrect password. Please try again.</h2>
        </div>
      )}
      {emailError && (
        <div className=" sm:text-md mt-2 flex items-center justify-center text-sm text-red-500 md:text-lg ">
          <h2>Incorrect email. Please try again.</h2>
        </div>
      )}
      {error && (
        <div className=" sm:text-md mt-2 flex items-center justify-center text-sm text-red-500 md:text-lg ">
          <h2>Error. Please try again.</h2>
        </div>
      )}
    </div>
  )
}

export default Login
