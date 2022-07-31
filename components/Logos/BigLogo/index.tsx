import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const BigLogo = () => {
  const router = useRouter()
  return (
    <div className="text-3xl font-bold ml-6 cursor-pointer "
    // @ts-ignore
    onClick={() => router.push("https://codingwhizz.org")}>

      <h1>&lt;codingwhizz/&gt;</h1>
    </div>
  )
}

export default BigLogo
