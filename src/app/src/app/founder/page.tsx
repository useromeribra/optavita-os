'use client'

import { useEffect, useState } from 'react'

export default function FounderDashboard() {
  const [greeting, setGreeting] = useState('مرحباً أيها المؤسس 👑')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('صباح الفخامة 👑')
    else if (hour < 18) setGreeting('مساء القيادة 👑')
    else setGreeting('مرحباً أيها المؤسس 👑')
  }, [])

  return (
    <main className="min-h-screen bg-black text-white px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">{greeting}</h1>
      <p className="text-gray-400 mb-8">مرحبًا بك في غرفة قيادة OptaVita OS. كل شيء تحت سيطرتك الكاملة.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* التحكم العام */}
        <div className="bg-gradient-to-br from-purple-800 to-indigo-700 p-6 rounded-2xl shadow-xl hover:scale-[1.01] transition">
          <h2 className="text-xl font-semibold mb-2">🧠 غرفة القيادة العامة</h2>
          <p className="mb-3 text-gray-200">تحكم كامل بالمنصة وخدمات الذكاء الاصطناعي.</p>
          <button className="bg-white text-black py-2 px-4 rounded-md">دخول الغرفة</button>
        </div>

        {/* مراجعة المستخدمين */}
        <div className="bg-gray-900 border border-gray-700 p-6 rounded-2xl shadow hover:scale-[1.01] transition">
          <h2 className="text-xl font-semibold mb-2">👥 مراجعة لوحات المستخدمين</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li><a href="/dashboard" className="hover:text-white underline">مستخدم عادي</a></li>
            <li><a href="/company" className="hover:text-white underline">شركة</a></li>
            <li><a href="/vip" className="hover:text-white underline">VIP</a></li>
            <li><a href="/dev" className="hover:text-white underline">مطور</a></li>
          </ul>
        </div>

        {/* تقارير وتحليلات */}
        <div className="bg-gradient-to-tr from-gray-800 to-gray-600 p-6 rounded-2xl shadow-lg hover:scale-[1.01] transition">
          <h2 className="text-xl font-semibold mb-2">📊 التقارير والتحليلات</h2>
          <p className="text-gray-300 mb-3">اطلع على أداء المنصة لحظة بلحظة.</p>
          <button className="bg-yellow-500 text-black py-2 px-4 rounded-md">عرض التقارير</button>
        </div>
      </div>

      <p className="mt-10 text-center text-gray-500 text-sm">
        منصة OptaVita OS — الذكاء بين يديك.
      </p>
    </main>
  )
}
