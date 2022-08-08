import { NextPage } from "next"
import { useTheme } from "next-themes"
import Featured from "../../components/Featured"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Latest from "../../components/Latest"
import Search from "../../components/Search"



const Blog: NextPage = () => {
    const { theme, setTheme } = useTheme()
    setTheme(theme)
  return (
    <div>
      <main
        className="font-Poppins  mx-auto min-h-screen max-w-[1500px] bg-[#E7E0CF] text-black dark:bg-[#181f30]
       dark:text-white"
      >
        <Header />
        <Search />
        <Featured />
        <Latest />
        <Footer />
      </main>
    </div>
  )
}

export default Blog