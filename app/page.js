import Image from 'next/image'
import plane from "@/assets/plane.png"
import Box from '@/components/box'
import Eagle from "@/assets/eagle.png"
import fire from "@/assets/fire.png"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between min-[801px]:bg-flag max-[800px]:bg-flag2 overflow-hidden w-[100%]">
      <div>
        <h1 className='relative z-10 min-[1200px]: min-[801px]:text-[6vw] text-[30vw] my-auto whitespace-nowrap text-gray-200 opacity-60 pt-3'>USD USD USD USD USD USD USD USD USD USD USD USD USD</h1>
      </div>

      <Image className='absolute min-[801px]:w-[25%] min-[801px]:left-40 min-[801px]:top-0 top-[10dvh] w-[50%] -left-12' src={Eagle}></Image>
      <Box/>

      <Image src={plane} className='absolute overflow-hidden min-[801px]:bottom-0 bottom-[4dvh] -right-0  min-[801px]:right-10 min-[801px]:w-[30%] w-[30%]'></Image>
      <Image src={plane} className='absolute overflow-hidden min-[801px]:bottom-0 bottom-[4dvh] -left-0 rotate-180 -scale-y-100 min-[801px]:left-10 min-[801px]:w-[30%] w-[30%]'></Image>
      
      <div>
        <h1 className='relative z-10 min-[801px]:text-[6vw] text-[30vw] my-auto whitespace-nowrap text-gray-200 opacity-60 pb-3'>USD USD USD USD USD USD USD USD USD USD USD USD USD</h1>
      </div>

      <Image src={fire} className='absolute opacity-80 min-[801px]:-bottom-[0.2rem] min-[1200px]:-bottom-[5.6rem] min-[1500px]:-bottom-[10.1rem] max-[800px]:hidden max-[800px]:w-[100%]'></Image>
    </main>
  )
}
