import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://happybirthdayaya-ivory.vercel.app'),
  title: 'Happy Birthday aya! 🎂',
  description: 'A special birthday message for aya 🤍',
  openGraph: {
    title: 'Happy Birthday aya! 🎂',
    description: 'A special birthday message for aya 🤍',
    url: 'https://happybirthdayaya-ivory.vercel.app',
    siteName: 'Birthday Gift',
    type: 'website',
    images: [
      {
        url: 'https://happybirthdayaya-ivory.vercel.app/images/share-cover.png',
        secureUrl: 'https://happybirthdayaya-ivory.vercel.app/images/share-cover.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Happy Birthday aya Cat 🐱🎂',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Birthday aya! 🎂',
    description: 'A special birthday message for aya 🤍',
    images: ['https://happybirthdayaya-ivory.vercel.app/images/share-cover.png'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}