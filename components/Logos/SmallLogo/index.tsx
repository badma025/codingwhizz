import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SmallLogo = () => {
  const router = useRouter()
  return (
    <div
      className="ml-6 cursor-pointer text-3xl font-extrabold"
      // @ts-ignore
      onClick={() => router.push('https://codingwhizz.org')}
    >
      <p>&lt;/&gt;</p>
    </div>
  )
}

export default SmallLogo
