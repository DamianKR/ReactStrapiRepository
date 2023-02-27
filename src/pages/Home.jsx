import React from 'react'
import CategoriesHome from '../components/home/categories/CategoriesHome'
import ContactHome from '../components/home/contactHome/ContactHome'
import FeaturedProducts from '../components/home/featured/FeaturedProducts'
import SliderHome from '../components/home/sliderHome/SliderHome'

function Home() {
  return (
    <div>
       <SliderHome/>
       <FeaturedProducts type='featured'/>
       <CategoriesHome/>
       <FeaturedProducts type='trending'/>
       <ContactHome/>
    </div>
  )
}

export default Home