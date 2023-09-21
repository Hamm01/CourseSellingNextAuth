import HomeComponent from '@/components/HomeComponent'
import { meRequestNextAuth } from '@/libs/meRequestNextauth'
interface USERDataResponse {
  username: string | null | undefined
}

export default async function Home() {
  // const userDataResponse = await meRequest()
  const session = await meRequestNextAuth()
  const userSession: USERDataResponse = {
    username: session?.user.username || session?.user.email
  }

  return <HomeComponent userSession={userSession} />
}
