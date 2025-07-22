'use client'

import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [greeting, setGreeting] = useState('مرحباً')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('صباح الخير 👋')
    else if (hour < 18) setGreeting('مساء الخير 👋')
    else setGreeting('مرحباً 👋')
  }, [])

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">{greeting} في OptaVita OS</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* مساعدك الذكي */}
        <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-[1.01] transition">
          <h2 className="text-xl font-semibold mb-2">🤖 مساعدك الذكي</h2>
          <p className="text-gray-300 mb-3">اسأل أي سؤال أو اطلب أي خدمة الآن.</p>
          <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-md">ابدأ التفاعل</button>
        </div>

        {/* التسويق الذكي */}
        <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-[1.01] transition">
          <h2 className="text-xl font-semibold mb-2">🚀 التسويق الذكي</h2>
          <p className="text-gray-300 mb-3">اطلب من ملك التسويق الترويج لك الآن بـ 100 إعلان.</p>
          <button className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-md">ابدأ التسويق</button>
        </div>

        {/* عرض VIP */}
        <div className="bg-gradient-to-br from-yellow-600 to-yellow-400 p-5 rounded-2xl text-black shadow-xl hover:scale-[1.01] transition">
          <h2 className="text-xl font-bold mb-2">✨ الترقية إلى VIP</h2>
          <p className="mb-3">احصل على مزايا خرافية، سرعة، ذكاء، وخدمات فاخرة.</p>
          <button className="bg-black text-yellow-300 hover:text-white py-2 px-4 rounded-md">ترقية الآن</button>
        </div>
      </div>

      <p className="mt-10 text-gray-400 text-sm text-center">
        المنصة تعمل بـ أكثر من 100 لغة وذكاء اصطناعي متكامل. 🌍🤖
      </p>
    </main>
  )
}
