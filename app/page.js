import Image from 'next/image'
import plane from "@/assets/plane.png"
import flag from "@/assets/flag.jpg"
import Box from '@/components/box'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-flag">
      <Box/>
    </main>
  )
}
