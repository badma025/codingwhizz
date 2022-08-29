import Image from "next/image"

const ImageComponent = ({alt, src, width, height}: any) => {
  return (
    <div className="my-8 flex ">
      <Image
        className="my-8"
        alt={alt}
        src={src}
        width={width}
        height={height}
        priority
      />
    </div>
  )
}

export default ImageComponent