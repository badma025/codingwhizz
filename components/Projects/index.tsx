import Medium from '../Project/Medium'
import Twitter from '../Project/Twitter'

const Projects = () => {
  return (
    <section className="mt-20 mb-[90px]" id="projects">
      <header className="flex flex-col items-center justify-center xl:flex-row xl:space-x-5">
        <div>
          <p className=" mx-20 text-3xl font-semibold xl:justify-start">
            Projects
          </p>
        </div>
        <div className="mt-5 h-1 w-[200px]  rounded-full bg-[#646464]" />
      </header>

      <main>
        <Twitter />
        <Medium />
      </main>
    </section>
  )
}

export default Projects
