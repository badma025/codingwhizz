import Link from 'next/link'
import React from 'react'
import { MdExitToApp } from 'react-icons/md'

const Chat = () => {
  return (
    <div className=" h-[215px] w-[250px]  rounded-lg bg-[#E0D7C2] dark:bg-[#1F283D] ">
      <div className="mt-6 ml-6 flex  flex-col space-y-3">
        <div className="text-2xl">
          <h1>Chat App</h1>
        </div>
        <div className="text-xl">
          <h2>Created with React and Firebase and deployed on Vercel.</h2>
        </div>
      </div>
      <div className="mr-6 -mt-5 flex justify-end space-x-2">
        <Link href="https://facebook-messenger.vercel.app/">
            <MdExitToApp
              className="mt-8 transition duration-300 hover:animate-bounce"
              size={30}
            />
        </Link>
      </div>
    </div>
  )
}

export default Chat
