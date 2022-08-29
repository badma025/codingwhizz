import Link from "next/link"

const LinkComponent = ({ href, text }: any) => {
  return (
    <div>
      <Link href={href}>
        <p className="text-[#3a6aff]">{text}</p>
      </Link>
    </div>
  )
}

export default LinkComponent
