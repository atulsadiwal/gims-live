import React from 'react'
import HomePage from './components/HomePage'
import FormSection from './components/FormSection'
import Top from './components/Top'
import LogoSlider from './components/LogoSlider'
import { clubsLogo, collaborationsLogo } from './utils/LogosData'
import { Boxes, Building } from 'lucide-react'
import TestimonialSlider from './components/TestimonialSlider'
import Gallery from './components/Gallery'
import CardsContainer from './components/CardsContainer'
import PlacementHighlights from './components/PlacementHighlights'
import CilebHighlights from './components/CilebHighlights'
import CorporateReviews from './components/CorporateReviews'
import InternationalRelations from './components/InternationalRelations'
import VideoShowcase from './components/VideoShowcase'
import UniversityDetails from './components/UniversityDetails'
import Collaborations from './components/Collaborations'
import AdmissionProcess from './components/AdmissionProcess'
import Affiliated from './components/Affiliated'
import GimsiansSpeak from './components/GimsiansSpeak'
import VideoClips from './components/VideoClips'
import CorporateMentor from './components/CorporateMentor'
import AwardsAndRecognition from './components/AwardsAndRecognition'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <HomePage />
      <FormSection />
      <Top />
      <LogoSlider title={<><Building className='w-6 h-6 sm:h-8 sm:w-8' />Placements - Our Key Recruiters</>} logos={collaborationsLogo} speed={3000} />
      <TestimonialSlider />
      <LogoSlider title={<><Boxes className='w-6 h-6 sm:h-8 sm:w-8' />Institutional Clubs</>} logos={clubsLogo} speed={4000} />
      <Gallery />
      <CardsContainer />
      <PlacementHighlights />                                                                                                                                      {/* Not Done Yet*/}
      <CilebHighlights />
      <CorporateReviews />
      <InternationalRelations />
      <VideoShowcase />
      <UniversityDetails />
      <Collaborations />                                                                                                                                           {/* Not Done Yet*/}
      <AdmissionProcess />
      <Affiliated />
      <GimsiansSpeak />
      <VideoClips />
      <CorporateMentor />

      {/* From here No Component is done */}
      <AwardsAndRecognition />                                                                                                                                       {/*Almost Done*/}
      <Footer />
    </>
  )
}

export default App;
