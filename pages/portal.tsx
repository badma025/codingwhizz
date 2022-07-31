import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login'
import SignIn from '../components/SignIn'

const Portal = () => {
  const router = useRouter()
  return (
    <section>
      <Header />
      <div className="mt-10 flex flex-col items-center justify-center space-y-3 space-x-3">
        <h1 className="text-xl font-semibold md:text-2xl">Portal</h1>
        <h2 className="text-xl text-[#3a6aff]">
          Enter the &lt;codingwhizz/&gt; realm
        </h2>
      </div>

      <Login />

      <SignIn />

      <div className="mt-10 mb-10 flex flex-col items-center space-y-3 text-xl">
        <h2>
          Forgot Password?{' '}
          <span className=" cursor-pointer text-[#3a6aff]">Reset here </span>
        </h2>
        <h2>
          Don't have an account?{' '}
          <span
            onClick={() => router.push('https://codingwhizz.org/register')}
            className=" cursor-pointer text-[#3a6aff]"
          >
            Register{' '}
          </span>
        </h2>
      </div>
    </section>
  )
}

export default Portal
