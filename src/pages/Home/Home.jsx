import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Footer from '../../components/shared/Footer/Footer'
import Banner from '../../components/Home/Banner'
import Cards from '../../components/Home/Cards'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Cards />
        <Footer />
    </div>
  )
}

export default Home