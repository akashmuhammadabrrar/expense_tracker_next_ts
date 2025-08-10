import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";

export default async function HomePage() {
  const user = await currentUser();

  if(!user){
    return <Guest/>
  }

  return (
    <div className='text-3xl text-center mt-5'>HomePage</div>
  )
}
