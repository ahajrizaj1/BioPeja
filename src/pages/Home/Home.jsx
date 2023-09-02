import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Footer from '../../components/shared/Footer/Footer'
import Banner from '../../components/Home/Banner'
import Cards from '../../components/Home/Cards'
import Hero from '../../components/shared/Hero'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Cards />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home