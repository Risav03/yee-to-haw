import { Inter } from 'next/font/google'
import './globals.css'
import myFont from "next/font/local";
import Rainbow from '@/Rainbowkit/Rainbow';
import { Providers } from './Global_Redux/provider';

const inter = Inter({ subsets: ['latin'] })

const font = myFont({src:"../assets/OutlastSlab.woff"})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Providers>
      <Rainbow>
        {children}
      </Rainbow>

      </Providers>
      </body>
    </html>
  )
}
