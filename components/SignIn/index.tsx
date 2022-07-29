import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { auth } from '../../utils/firebase'


const SignIn = () => {
  return (
    <section className="mt-10 space-y-5">
      <div className=" flex  items-center  justify-center text-black  ">
        <div
          className="flex cursor-pointer items-center  justify-center space-x-3 rounded-2xl bg-white py-2 px-4 font-bold transition duration-300 ease-in-out hover:scale-110"
          onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
        >
          <img className="h-10" src="/google.png" alt="Google logo" />
          <h2>Sign in with Google</h2>
        </div>
      </div>
      <div className=" flex  items-center  justify-center text-white ">
        <div
          className="flex cursor-pointer items-center justify-center space-x-3 rounded-2xl bg-[#333] py-2 px-4 font-bold transition duration-300 ease-in-out  hover:scale-110"
          onClick={() => signInWithPopup(auth, new GithubAuthProvider())}
        >
          <BsGithub className="" size={40} />

          <h2>Sign in with Github</h2>
        </div>
      </div>
    </section>
  )
}

export default SignIn