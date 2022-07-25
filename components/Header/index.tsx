import { NextPage } from 'next'
import { useState } from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

const Header: NextPage = () => {
  

  return (
    <section className="mt-6">
      <nav className="lg:hidden">
        <Sidebar />
      </nav>

      <nav className="hidden lg:block">
        <Navbar />
      </nav>
    </section>
  )
}

export default Header
