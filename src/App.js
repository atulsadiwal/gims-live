import React from 'react'
import UniversityDetails from './components/UniversityDetails'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Top from './components/Top'
import CollaborationsAndClubs from './components/CollaborationsAndClubs'
import Gallery from './components/Gallery'
import CilebHighlights from './components/CilebHighlights'
import Highlights from './components/Highlights'
import StudentReviews from './components/StudentReviews'

const App = () => {
  return (
    <>
      <HomePage />
      <Top />
      {/* <Highlights /> */}
      <StudentReviews />
      <CollaborationsAndClubs />
      <Gallery />
      <UniversityDetails />
      <CilebHighlights />
      <Footer />
    </>
  )
}

export default App