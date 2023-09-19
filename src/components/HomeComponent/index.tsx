'use client'
import Appbar from '../AppBar'
import LandingPage from '../LandingPage'

function HomeComponent({ userSession }: any) {
  return (
    <>
      <Appbar userSession={userSession} />
      <LandingPage />
    </>
  )
}

export default HomeComponent
