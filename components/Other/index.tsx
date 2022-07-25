import Chat from '../Project/Chat'
import Netflix from '../Project/Netflix'
import Quiz from '../Project/Quiz'

const Other = () => {
  return (
    <section>
      <header className="flex flex-col items-center justify-center xl:flex-row xl:space-x-5">
        <div>
          <h1 className=" mx-20 text-3xl font-semibold xl:justify-start">
            Other noteworthy projects
          </h1>
        </div>
        <div className="mt-5 h-1 w-[200px]  rounded-full bg-[#646464]" />
      </header>
      <main className="my-20 mx-auto grid items-center  justify-center justify-items-center space-y-7 md:grid-cols-2 xl:grid-cols-3">
        <Netflix />
        <Chat />
        <Quiz />
      </main>
    </section>
  )
}

export default Other
