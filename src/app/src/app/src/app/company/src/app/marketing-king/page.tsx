// src/app/marketing-king/page.tsx
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function MarketingKing() {
  const [campaignStarted, setCampaignStarted] = useState(false);

  const handleStartCampaign = () => {
    setCampaignStarted(true);
    console.log('🚀 حملة جديدة بدأت باسم: شركة OptaVita - منصة ذكاء صناعي');
  };

  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">👑 ملك التسويق الذكي</h1>

      <Card>
        <CardContent className="p-6 space-y-4">
          <p className="text-muted-foreground">
            هذا النظام الذكي يقوم تلقائيًا بإنشاء أكثر من 100 فيديو إعلاني ونشرها على جميع المنصات.
          </p>

          {!campaignStarted ? (
            <Button className="bg-green-600 text-white" onClick={handleStartCampaign}>
              🚀 بدء حملة تسويقية جديدة الآن
            </Button>
          ) : (
            <div className="space-y-2">
              <p>✅ تم بدء الحملة بنجاح!</p>
              <ul className="list-disc ml-5 text-sm">
                <li>إنتاج 120 إعلان فيديو عالي الجودة</li>
                <li>نشر تلقائي على TikTok, YouTube Shorts, Instagram Reels</li>
                <li>استهداف الفئة: شباب التقنية المهتمين بالذكاء الاصطناعي</li>
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-2">🤖 دعم AI المباشر</h3>
          <p className="text-muted-foreground mb-3">هل ترغب بتخصيص الإعلان؟ تحدث مع المساعد.</p>
          <Button variant="outline">فتح محادثة مع AI</Button>
        </CardContent>
      </Card>
    </main>
  );
}
