const About = () => {
  return (
    <div className="mt-20 pb-40" id="about">
      <div className="flex flex-col items-center justify-center xl:flex-row xl:space-x-5">
        <div>
          <h1 className=" mx-20 text-3xl font-semibold xl:justify-start">
            About
          </h1>
        </div>
        <div className="mt-5 h-1 w-[200px]  rounded-full bg-[#646464]" />
      </div>
      <div className="mx-20  flex flex-col items-center xl:flex-row justify-center xl:justify-evenly xl:space-x-7">
        <div className=" mt-12 flex  text-center text-lg sm:text-xl  md:text-left xl:w-1/2 ">
          <h2>
            Hello! My name is Alim and I enjoy creating things that live on the
            internet. My passion for web development sprouted at the age of 11,
            after a computer science lesson on HTML and CSS. I very quickly became interested in coding and looked at YouTube tutorials on how to code cool web applications.  Since then, I’ve
            explored more into the world of web development with technologies
            such as <span className="text-[#3A66FF]">Next.js</span>,{' '}
            <span className="text-[#3A66FF]">Tailwind</span> and
            <span className="text-[#3A66FF]"> Firebase</span>.
          </h2>
        </div>
        <div className="mt-10 h-40 w-40">
          <img className="rounded-xl" src="/me.JPG" alt="me" />
        </div>
      </div>
    </div>
  )
}

export default About
