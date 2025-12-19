import React from 'react'
import HeroSection from '../sections/heroSection'
import StorySection from '../sections/storySection'
import CraftSection from '../sections/CraftSection'
import BestSellersSection from '../sections/BestSellersSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <BestSellersSection />
      <CraftSection />
      
    </div>
  )
}
