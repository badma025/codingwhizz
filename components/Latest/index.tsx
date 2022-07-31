

const Latest = () => {
  return (
    <section className='mt-20 max-w-7xl mx-auto'>
      <div className="mx-auto xl:-mb-16 flex flex-col items-center justify-center space-y-1 text-sm font-bold md:text-lg lg:text-2xl">
        <h2 className="">Latest Posts</h2>
        <h2 className="text-[#3a66ff]">High quality posts made with love :)</h2>
      </div>

       

      <section className=" md:mx-auto mx-6  grid grid-cols-1 items-center justify-center gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        <div
          className="
        group
             w-full cursor-pointer space-y-3 overflow-hidden    rounded-lg  border-2 border-gray-500 p-6 xl:mt-24"
        >
          <img
            className="h-60 w-full object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
            src="/writing.png"
            alt="writing image"
          />
          <h2 className="text-gray-500">March 20, 2020 • 10 min read</h2>
          <h2>How to write a blog - properly.</h2>
        </div>

        <div
          className=" group
             w-full cursor-pointer space-y-3 overflow-hidden    rounded-lg  border-2 border-gray-500 p-6 xl:mt-24"
        >
          <img
            src="/vercel.png"
            className="h-60 w-full object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
            alt="Vercel"
          />
          <h2 className="text-gray-500">May 13, 2022 • 8 min read</h2>
          <h2>How to deploy any web application to Vercel.</h2>
        </div>

        <div
          className="  group
             w-full cursor-pointer space-y-3 overflow-hidden    rounded-lg  border-2 border-gray-500 p-6 xl:mt-24"
        >
          <div>
            <img
              src="/angularjs.png"
              className="h-60 w-full object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
              alt="angularjs image"
            />
          </div>
          <h2 className="text-gray-500">December 21, 2021 • 10 min read</h2>
          <h2>Google terminates support of AngularJS.</h2>
        </div>

        <div
          className="  group
             w-full cursor-pointer space-y-3 overflow-hidden    rounded-lg  border-2 border-gray-500 p-6 xl:mt-24"
        >
          <img
            src="/remix.png"
            className="h-60 w-full object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
            alt="remix image"
          />
          <h2 className="text-gray-500">June 2, 2022 • 5 min read</h2>
          <h2>Remix - finally, a worthy Next.js opponent?</h2>
        </div>

        <div
          className="  group
             w-full cursor-pointer space-y-3 overflow-hidden    rounded-lg  border-2 border-gray-500 p-6 xl:mt-24"
        >
          <img
            src="/nuxt3.png"
            className="h-60 w-full object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
            alt="nuxt3 image"
          />
          <h2 className="text-gray-500">Feburary 22, 2021 • 4 min read</h2>
          <h2>Nuxt 3's game changing release comes with Typescript support.</h2>
        </div>
        <div
          className="group
             w-full cursor-pointer space-y-3 overflow-hidden    rounded-lg  border-2 border-gray-500 p-6 xl:mt-24"
        >
          <img
            src="/reactypescript.png"
            className="h-60 w-full object-cover transition-transform duration-100 ease-in-out group-hover:scale-105"
            alt="nuxt3 image"
          />
          <h2 className="text-gray-500">Feburary 22, 2021 • 4 min read</h2>
          <h2>Is React + Typescript the best combo?</h2>
        </div>
      </section>

      <div className="md:text-md mt-10 mb-3 flex justify-center text-md font-semibold text-[#3A66FF] md:text-2xl transition duration-300 hover:scale-105 ease-in-out cursor-pointer">
        <h2>
          View all posts <span className="ml-2 text-2xl">→</span>
        </h2>
      </div>

      <div>
        <div>
          <h2></h2>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Latest
