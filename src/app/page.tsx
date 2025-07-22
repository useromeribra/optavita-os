'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // دعم تعدد اللغات تلقائيًا بناءً على لغة المتصفح
    const lang = navigator.language || 'en'
    document.documentElement.lang = lang
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-[#000] via-[#0e0e0e] to-[#1a1a1a] text-white">
      <Image
        src="/logo.png"
        alt="OptaVita OS Logo"
        width={180}
        height={180}
        className="mb-6 animate-pulse"
        priority
      />
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
        Welcome to <span className="text-blue-500">OptaVita OS</span>
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-6 text-gray-300">
        The first fully AI-powered global OS platform. Launch your business into the future
        with intelligent services, over 100 languages, and Smart Marketing King creating 100+ ads on day one.
      </p>
      <Button
        onClick={() => router.push('/dashboard')}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl text-lg shadow-lg"
      >
        Try the Platform
      </Button>
    </main>
  )
}
