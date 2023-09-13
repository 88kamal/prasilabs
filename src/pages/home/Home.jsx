import React from 'react'
import Layout from '../../components/layout/Layout'
import { HeroSection } from '../../components/heroSection/HeroSection'
import FourBox from '../../components/fourBox/FourBox'
import About from '../../components/about/About'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import LatestNews from '../../components/latestNews/LatestNews'
import Map from '../../components/map/Map'

function Home() {
  return (
    <Layout>
        <HeroSection/>
        <FourBox/>
        <About/>
        <FeaturedProducts/>
        <LatestNews/>
        <Map/>
    </Layout>
  )
}

export default Home