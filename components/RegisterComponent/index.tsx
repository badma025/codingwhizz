import {
  CheckCircleIcon,
  CheckIcon,
  LockClosedIcon,
  XIcon,
} from '@heroicons/react/solid'
import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { auth, db } from '../../utils/firebase'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { isSubmittedState } from '../../atoms'
import { useAuthState } from 'react-firebase-hooks/auth'

const RegisterComponent = () => {
  const [isSubmitted, setIsSubmitted] = useRecoilState(isSubmittedState)
  const [user] = useAuthState(auth)
  const router = useRouter()
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.'),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    }),
    async onSubmit(data, formikHelpers) {

     await createUserWithEmailAndPassword(auth, data.email, data.password)
     


     //  @ts-ignore
     await updateProfile(auth.currentUser, {
           displayName: data.username
      })
     formikHelpers.resetForm()
     setIsSubmitted(true) 
   },
     
  })
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center "
      >
        <label
          className="relative mt-10   flex w-[250px] items-center justify-start space-x-10 rounded-full ring-2 ring-gray-500 focus:ring-gray-500
            sm:w-[300px]"
        >
          <BsPersonCircle size={30} className="absolute  ml-8 text-gray-500" />
          <input
            id="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            className="  h-[50px] w-[200px] rounded-full bg-[#E0D7C2] pl-[40px] pr-[40px] text-sm 
             outline-none dark:bg-[#181f30] sm:h-[55px] sm:w-[225px] sm:text-lg  lg:text-xl "
            placeholder="Username"
          />
          <div>
            {formik.errors.username && formik.touched.username && (
              <div className="flex items-center justify-center">
                <XIcon className="-ml-28 h-10 text-red-500 " />
              </div>
            )}
            {!formik.errors.username && formik.touched.username && (
              <div className="flex items-center justify-center">
                <CheckIcon className="-ml-28 h-10 pl-3 text-green-500 " />
              </div>
            )}
          </div>
        </label>

        <label
          className="relative mt-10   flex w-[250px] items-center justify-start space-x-10 rounded-full ring-2 ring-gray-500 focus:ring-gray-500
            sm:w-[300px] "
        >
          <MdEmail size={30} className="absolute  ml-8 text-gray-500" />
          <input
            type="text"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className=" h-[50px] w-[200px] rounded-full bg-[#E0D7C2] pl-[40px] pr-[40px] text-sm 
             outline-none dark:bg-[#181f30] sm:h-[55px] sm:w-[225px] sm:text-lg  lg:text-xl "
            placeholder="Email"
          />

          <div>
            {formik.errors.email && formik.touched.email && (
              <div className="flex items-center justify-center">
                <XIcon className="-ml-28 h-10 text-red-500 " />
              </div>
            )}
            {!formik.errors.email && formik.touched.email && (
              <div className="flex items-center justify-center">
                <CheckIcon className="-ml-28 h-10 pl-3 text-green-500 " />
              </div>
            )}
          </div>
        </label>

        <label
          className="relative mt-10   flex w-[250px] items-center justify-start space-x-10 rounded-full ring-2 ring-gray-500 focus:ring-gray-500
            sm:w-[300px] "
        >
          <LockClosedIcon className="absolute ml-8 h-8 text-gray-500" />
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            className=" h-[50px] w-[200px] rounded-full bg-[#E0D7C2] pl-[40px] pr-[40px] text-sm 
             outline-none dark:bg-[#181f30] sm:h-[55px] sm:w-[225px] sm:text-lg  lg:text-xl "
            placeholder="Password"
          />

          <div>
            {formik.errors.password && formik.touched.password && (
              <div className="flex items-center justify-center">
                <XIcon className="-ml-28 h-10 text-red-500 " />
              </div>
            )}
            {!formik.errors.password && formik.touched.password && (
              <div className="flex items-center justify-center">
                <CheckIcon className="-ml-28 h-10 pl-3 text-green-500 " />
              </div>
            )}
          </div>
        </label>

        <label
          className="relative mt-10   flex w-[250px] items-center justify-start space-x-10 rounded-full ring-2 ring-gray-500 focus:ring-gray-500
            sm:w-[300px] "
        >
          <CheckCircleIcon className="absolute ml-8 h-8 text-gray-500" />
          <input
            type="password"
            id="confirmPassword"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            className=" h-[50px] w-[200px] rounded-full bg-[#E0D7C2] pl-[40px] pr-[40px] text-sm 
             outline-none dark:bg-[#181f30] sm:h-[55px] sm:w-[225px] sm:text-lg  md:w-[250px] lg:text-xl "
            placeholder="Confirm Password"
          />

          <div>
            {formik.errors.confirmPassword && formik.touched.confirmPassword && (
              <div className="flex items-center justify-center">
                <XIcon className="-ml-36 h-10 text-red-500 " />
              </div>
            )}
            {!formik.errors.confirmPassword && formik.touched.confirmPassword && (
              <div className="flex items-center justify-center">
                <CheckIcon className="-ml-36 h-10 pl-3 text-green-500 " />
              </div>
            )}
          </div>
        </label>

        <button
          type="submit"
          className="mt-10 rounded-2xl bg-[#1f283d] px-6 py-3  transition duration-300 hover:scale-110 md:px-8 md:py-4"
        >
          <h2 className="text-sm md:text-xl">Register</h2>
        </button>
      </form>
    </div>
  )
}

export default RegisterComponent
