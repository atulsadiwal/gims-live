import React from 'react'
import UniversityDetails from './components/UniversityDetails'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Top from './components/Top'
import Gallery from './components/Gallery'
import CilebHighlights from './components/CilebHighlights'
import TestimonialSlider from './components/TestimonialSlider'
import CardsContainer from './components/CardsContainer'
import LogoSlider from './components/LogoSlider'
import { clubsLogo, collaborationsLogo } from './utils/LogosData'
import { Boxes, Building } from 'lucide-react'
import CorporateReviews from './components/CorporateReviews'
import VideoShowcase from './components/VideoShowcase'
import PlacementHighlights from './components/PlacementHighlights'
import InternationalRelations from './components/InternationalRelations'

const App = () => {
  return (
    <>
      <HomePage />
      <Top />
      <LogoSlider title={<><Building className='w-8 h-8' />Collaborations & MoUs</>} logos={collaborationsLogo} speed={3000} />
      <CardsContainer />
      <LogoSlider title={<><Boxes className='w-8 h-8' />Institutional Clubs</>} logos={clubsLogo} speed={4000} />
      <Gallery />
      <TestimonialSlider />
      <PlacementHighlights />
      <CilebHighlights />
      <InternationalRelations />
      <VideoShowcase />
      <CorporateReviews />
      <UniversityDetails />
      <Footer />
    </>
  )
}

export default App