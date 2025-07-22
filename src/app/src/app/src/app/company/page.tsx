// src/app/company/page.tsx
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CompanyDashboard() {
  const router = useRouter();

  useEffect(() => {
    console.log('🎯 حملة ذكية بدأت تلقائيًا بواسطة ملك التسويق!');
    // هنا نضيف API لاحقًا لتفعيل الحملة تلقائيًا عند الدخول
  }, []);

  return (
    <main className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">🎯 لوحة تحكم الشركة</h1>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-2">مرحبًا بك، شركة OptaVita</h2>
          <p className="text-muted-foreground mb-4">
            يمكنك إدارة كل خدماتك الذكية من هنا.
          </p>
          <Button onClick={() => router.push('/marketing-king')} className="bg-blue-600 text-white">
            🚀 تشغيل ملك التسويق الذكي
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-2">📊 حالة الحملات</h3>
          <ul className="list-disc ml-5 text-sm">
            <li>تم إنشاء 100 فيديو إعلاني</li>
            <li>تم النشر على Instagram، TikTok، و YouTube</li>
            <li>تحليلات الحملة قيد التحديث</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-2">🤖 مساعد الشركة الذكي</h3>
          <p className="text-muted-foreground mb-3">
            اسأل أي سؤال، وسنقوم بالرد باستخدام الذكاء الصناعي.
          </p>
          <Button variant="outline" onClick={() => router.push('/ai-assistant')}>
            افتح المساعد الذكي
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
