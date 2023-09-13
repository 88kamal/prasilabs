import React from 'react'
import TopNavbar from '../topNavbar/TopNavbar'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function Layout({ children }) {
  return (
    <div>
      {/* Header  */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* Top Navbar  */}
      <TopNavbar />

      {/* main content */}
      <div className="content min-h-screen">
        {children}
      </div>

      {/* footer  */}
      <Footer />
    </div>
  )
}

export default Layout