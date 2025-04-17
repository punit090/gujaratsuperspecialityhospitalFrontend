import AboutUsSection from '@/component/AboutUsSection'
import Banner from '@/component/Banner'
import React from 'react'
import "@/assets/css/Home.css"
import OverTeam from '@/component/OverTeam'
import Spesialties from '@/component/Specialties'
import PatientsReviews from '@/component/PatientsReviews'
import OurStorySection from '@/component/OurStorySection'
import EmergencySection from '@/component/EmergencySection'

const page = () => {
  return (
    <React.Fragment>
        <Banner />
        <AboutUsSection />
        <OverTeam />
        <Spesialties />
        <PatientsReviews />
        {/* //// kidney banner section ===>  */}
        <div className='kidenyBanner'></div>

        <OurStorySection />

        <EmergencySection />
    </React.Fragment>
  )
}

export default page