import Hero from '../components/home/Hero'
import { useEffect } from 'react'
export default function Home() {
  useEffect(()=>{
    document.title = "Home"
  }, [])
  return (
    <>
  <div className="min-h-[85vh] w-full flex flex-col justify-center items-center bg-white">
    <Hero/>
  </div>
  </>
  )
}
