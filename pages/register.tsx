import Header from '../components/Header'
import SignIn from '../components/SignIn'
import RegisterComponent from '../components/RegisterComponent'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'
import { useRecoilState } from 'recoil'
import { isSubmittedState } from '../atoms'

const Register = () => {
  const router = useRouter()
  const [user, loading, error] = useAuthState(auth)
  const [isSubmitted, setIsSubmitted] = useRecoilState(isSubmittedState)
  return (
    <section>
      <Header />
      {isSubmitted ? (
        <div className="-mt-10 flex h-screen items-center justify-center lg:text-2xl text-lg md:text-xl text-[#3a6aff]">
          <h2>
            Thanks for signing up!
          </h2>
        </div>
      ) : (
        <>
          <div className="mt-10 flex flex-col items-center justify-center space-y-3 space-x-3">
            <h1 className="text-xl font-semibold md:text-2xl">Register</h1>
            <h2 className="text-xl text-[#3a6aff]">
              Join the &lt;codingwhizz/&gt; realm
            </h2>
          </div>

          <RegisterComponent />

          <SignIn />

          <div className="text-md mt-10 mb-10 flex flex-col items-center space-y-3 md:text-xl">
            <h2>
              Already have an account?{' '}
              <span
                onClick={() => router.push('https://codingwhizz.org/login')}
                className=" cursor-pointer text-[#3a6aff]"
              >
                Login{' '}
              </span>
            </h2>
            <h2>
              Forgot your password?{' '}
              <span className=" cursor-pointer text-[#3a6aff]">
                Reset here{' '}
              </span>
            </h2>
          </div>
        </>
      )}
    </section>
  )
}

export default Register
