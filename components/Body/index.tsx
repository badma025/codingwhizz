import { HeartIcon } from '@heroicons/react/solid'
import React from 'react'

const Body = () => {
  return (
    <article className="mt-10">
      <div className="mx-auto mt-8 flex  max-w-3xl  flex-col text-lg font-semibold  tracking-wide ">
        <div className="ml-16 mt-10 text-lg">
          <h2>← Back to overview</h2>
        </div>
        <div className="ml-10 mt-10 text-xl md:text-2xl">
          <h2>React + Typescript: cool combo or waste of time?</h2>
          <h2 className="mt-2 text-gray-500">
            April 1<sup>st</sup>, 2022 • 15 min read
          </h2>
        </div>

        <div title='Unlike' className="mt-2 ml-10 flex items-center space-x-2 text-red-600 ">
          <HeartIcon  className="h-10 transition duration-300 ease-in-out hover:scale-110 cursor-pointer" />
          <h2>69</h2>
        </div>

        <div className="flex items-center justify-center ">
          <img
            className="h-48 "
            src="/reactypescript.png"
            alt="react-typescript image"
          />
        </div>

        <div className="text-start mx-auto mt-10 flex max-w-3xl  flex-col items-center justify-center p-5  font-normal ">
          <section>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum faucibus condimentum pretium. In id magna nunc. Aenean
              consectetur quam et justo porta fringilla. Duis semper efficitur
              quam. Proin interdum leo nunc, id viverra dolor mattis eu. Nullam
              tempor metus vel nulla convallis, eu iaculis quam tincidunt.
              Integer diam lacus, dignissim eget tincidunt eu, feugiat eu diam.
              Vestibulum luctus mollis ligula vel aliquet. Vivamus sit amet
              volutpat nulla. Vivamus auctor et metus nec volutpat. Morbi nisi
              purus, tristique condimentum felis et, malesuada auctor ante. Nam
              nulla justo, fermentum id cursus sed, scelerisque quis libero.
            </h3>
          </section>
          <section>
            <img
              className="mt-10 h-40"
              src="/articleImage.png"
              alt="article image"
            />
          </section>

          <section className="mt-10">
            <h3 className="">
              Aliquam rhoncus nibh ac interdum ullamcorper. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Mauris sem lorem, auctor ac
              arcu vel, fermentum commodo mauris. Vestibulum malesuada lacus
              metus, tempor lacinia urna fermentum sed. Etiam laoreet eleifend
              justo, in ullamcorper risus condimentum laoreet. Aenean arcu nisi,
              commodo vitae pulvinar non, pharetra quis augue. Proin nec
              imperdiet neque. Vestibulum posuere, purus ut varius pellentesque,
              lorem justo gravida quam, non semper magna erat vel felis. Aliquam
              erat volutpat. Duis fermentum hendrerit sem sed euismod. Nunc
              bibendum at elit at aliquet. Pellentesque malesuada eget erat sed
              aliquet. Pellentesque massa dolor, sollicitudin in aliquam sit
              amet, blandit quis eros.
            </h3>
          </section>
          <section className="mt-14">
            <div className="text-xl  font-bold tracking-wider">
              <h1 className="text-[#3a6aff]">Conclusion</h1>
            </div>

            <section className="mt-4">
              Suspendisse feugiat nunc accumsan nunc malesuada auctor. Cras vel
              lacus lectus. Phasellus nibh nisi, tincidunt et commodo sit amet,
              tempus nec tellus. Sed eu velit volutpat, pulvinar leo non,
              facilisis ex. Pellentesque eu aliquam justo, id congue risus.
              Morbi dui nulla, dapibus eu vehicula sed, facilisis sed lectus.
              Praesent in lacus quis tortor condimentum commodo vel vitae ipsum.
            </section>
          </section>
        </div>
      </div>
    </article>
  )
}

export default Body
