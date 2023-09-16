'use client'
import Appbar from '../AppBar'
import LandingPage from '../LandingPage'

function HomeComponent({ userDataResponse }: any) {
  return (
    <>
      <Appbar userDataResponse={userDataResponse} />
      <LandingPage />
    </>
  )
}

export default HomeComponent
