import { useRouter } from 'next/router'

const BigLogo = () => {
  const router = useRouter()
  return (
    <div className="text-3xl font-bold ml-6 cursor-pointer "
    // @ts-ignore
    onClick={() => router.push("https://codingwhizz.org")}>

      <p>&lt;codingwhizz/&gt;</p>
    </div>
  )
}

export default BigLogo
