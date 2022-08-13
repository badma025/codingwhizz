import { NextPage } from 'next'
import { useState } from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

const Header: NextPage = () => {
  

  return (
    <section className="mt-6">
      <nav className="xl:hidden">
        <Sidebar />
      </nav>

      <nav className="hidden xl:block">
        <Navbar />
      </nav>
    </section>
  )
}

export default Header
