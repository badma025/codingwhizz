import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const TechImages: NextPage = () => {
  return (
    <figure className="mx-auto mt-10 grid max-w-2xl grid-cols-2 place-items-center items-center justify-center md:grid-cols-3 xl:grid-cols-4">
      <nav className="mb-5">
        <Link href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics">
          <a target="_blank" aria-label="HTML5">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/html5.png"
              width={88.18}
              height={100}
              alt="html5"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <a target="_blank" aria-label="CSS3">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/css3.png"
              width={88.18}
              height={100}
              alt="CSS3"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://www.javascript.com/">
          <a target="_blank" aria-label="Javascript">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/javascript.png"
              width={100}
              height={100}
              alt="Javascript"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://www.typescriptlang.org/">
          <a target="_blank" aria-label="Typescript">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/typescript.png"
              width={100}
              height={100}
              alt="Typescript"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://reactjs.org/">
          <a target="_blank" aria-label="React">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/react.png"
              width={100}
              height={100}
              alt="React"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://nextjs.org/">
          <a target="_blank" aria-label="NextJS">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/next.png"
              width={100}
              height={100}
              alt="Next"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://firebase.google.com/">
          <a target="_blank" aria-label="Firebase">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/firebase.png"
              width={100}
              height={100}
              alt="Firebase"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://mui.com/">
          <a target="_blank" aria-label="Material-UI">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/mui.png"
              width={100}
              height={100}
              alt="MUI"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://www.sanity.io/">
          <a target="_blank" aria-label="Sanity">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/sanity.png"
              width={100}
              height={100}
              alt="Sanity"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://isocpp.org/">
          <a target="_blank" aria-label="C++">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/c++.png"
              width={100}
              height={100}
              alt="C++"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://tailwindcss.com/">
          <a target="_blank" aria-label="Tailwind CSS">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/tailwind.png"
              width={100}
              height={100}
              alt="Taiwind"
            />
          </a>
        </Link>
      </nav>
      <nav className="mb-5">
        <Link href="https://www.figma.com">
          <a target="_blank" aria-label="Figma">
            <Image
              className="cursor-pointer object-contain"
              src="/tech/figma.png"
              width={100}
              height={100}
              alt="Figma"
            />
          </a>
        </Link>
      </nav>
    </figure>
  )
}

export default TechImages
