// src/app/vip/page.tsx
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function VIPPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-yellow-500 flex items-center justify-center gap-2">
        <Sparkles className="text-yellow-400" /> عضوية VIP الفاخرة
      </h1>

      <Card className="border-yellow-400 shadow-lg">
        <CardContent className="p-6 space-y-4">
          <p className="text-muted-foreground">
            شكرًا لانضمامك إلى عالم النخبة. هذه المنطقة مخصصة فقط للعملاء المميزين، وتحتوي على أقوى الأدوات والامتيازات التي توفرها OptaVita OS.
          </p>

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <Button variant="default" className="bg-yellow-500 hover:bg-yellow-600">
              💼 المستشار التنفيذي الفاخر
            </Button>
            <Button variant="outline">
              🧠 صندوق AI السري
            </Button>
            <Button variant="outline">
              📊 تقرير فاخر شهري
            </Button>
            <Button variant="outline">
              🤝 شبكة علاقات رجال أعمال
            </Button>
          </div>

          <div className="pt-6">
            <h3 className="font-semibold text-lg">🎁 عضويات فاخرة إضافية قادمة</h3>
            <p className="text-sm text-muted-foreground">
              قريبًا ستُضاف ميزات حصرية أخرى مثل: مساعد الاستثمار الذكي، تحليل السوق الفوري، وتجربة فندقية رقمية.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
