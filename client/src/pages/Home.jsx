import React from 'react'
import Landing from '../components/Landing'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div >
      <Landing/>
      <LatestCollection/>
      <BestSeller/>
      <NewsLetterBox/>
      <OurPolicy/>
    </div>
  )
}

export default Home
