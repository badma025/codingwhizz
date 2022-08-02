import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../utils/firebase'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string()
        .max(255, 'Must be 255 characters or less')
        .required('Required'),
    }),
    async onSubmit(data, formikHelpers) {
      setIsSubmitting(true)
      const payload = {
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: serverTimestamp(),
      }
      const messageCollectionRef = collection(db, 'messages')
      await addDoc(messageCollectionRef, payload)

      formikHelpers.resetForm()
      setIsSubmitted(true)
      setIsSubmitting(false)
    },
  })

  return (
    <footer className="mb-20 flex flex-col justify-center" id="contact">
      <section className="flex flex-col items-center justify-center xl:flex-row xl:space-x-5">
        <div>
          <h1 className=" mx-20 text-3xl font-semibold xl:justify-start">
            Contact
          </h1>
        </div>
        <div className="mt-5 h-1 w-[200px]  rounded-full bg-[#646464]" />
      </section>

      {isSubmitted ? (
        <>
          <section className="mt-10">
            <h2 className="text-center text-lg  text-blue-600 sm:text-xl">
              Thanks for reaching out! I'll get back to you as soon as I can.
            </h2>
          </section>
        </>
      ) : (
        <>
          <section
            className=" mx-20 mt-8 flex max-w-3xl justify-center
       text-center text-lg text-[#3A66FF] sm:text-xl md:text-2xl lg:mx-auto"
          >
            <h2>
              My inbox is always open. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </h2>
          </section>
          <main className="mt-10">
            <form
              className="flex flex-col items-center justify-center space-y-6"
              onSubmit={formik.handleSubmit}
            >
              <input
                type="text"
                className="h-[30px] w-[263px] rounded-lg py-6 px-5 outline-none dark:bg-[#1F283D] md:h-[45px] md:w-[370px] xl:h-[55px] xl:w-[475px]"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                id="name"
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="text-red-600">{formik.errors.name}</div>
              ) : null}
              <input
                type="text"
                className="h-[30px] w-[263px] rounded-lg py-6 px-5 outline-none dark:bg-[#1F283D] md:h-[45px] md:w-[370px] xl:h-[55px] xl:w-[475px]"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
              <textarea
                rows={9}
                className=" w-[263px] rounded-lg py-5 px-5 outline-none scrollbar-hide  dark:bg-[#1F283D]  md:w-[370px] xl:w-[475px]"
                placeholder="Message"
                onChange={formik.handleChange}
                value={formik.values.message}
                id="message"
              />

              {formik.errors.message && formik.touched.message ? (
                <div className="flex justify-start text-red-600">
                  {formik.errors.message}
                </div>
              ) : null}

              <button
                type="submit"
                className="mx-auto mt-10 flex cursor-pointer items-center justify-center rounded-full bg-[#E0D7C2] px-6 py-4  text-2xl transition duration-300 ease-in-out hover:scale-110 dark:bg-[#1F283D]"
                disabled={isSubmitting}
              >
                Say Hello
              </button>
            </form>
          </main>
        </>
      )}
    </footer>
  )
}

export default Contact
