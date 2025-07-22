'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // هنا تضع كود التحقق والتوثيق الحقيقي لاحقًا
    if (email && password) {
      // تسجيل دخول وهمي (نجاح تلقائي)
      router.push('/dashboard')
    } else {
      alert('الرجاء إدخال البريد الإلكتروني وكلمة المرور')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-6">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">تسجيل الدخول إلى OptaVita OS</h1>
        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold text-white transition"
          >
            تسجيل الدخول
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4">
          لا تملك حسابًا؟{' '}
          <a href="#" className="text-blue-500 hover:underline">
            أنشئ حسابًا جديدًا
          </a>
        </p>
      </div>
    </main>
  )
}
