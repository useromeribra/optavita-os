// src/app/business/page.tsx
'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Rocket, LineChart } from "lucide-react";

export default function BusinessPage() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 flex items-center justify-center gap-2">
        <Briefcase /> مركز الشركات - OptaVita OS
      </h1>

      <Card className="border-blue-500 shadow-xl">
        <CardContent className="p-6 space-y-6">
          <p className="text-muted-foreground">
            مرحبًا بك في غرفة التحكم الخاصة بالشركات. يمكنك هنا إدارة حضورك الرقمي، الوصول لخدمة ملك التسويق الذكي، طلب حلول AI مخصصة، والاطلاع على تقارير الأداء.
          </p>

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">
              👑 ملك التسويق الذكي
            </Button>
            <Button variant="outline" className="w-full">
              💡 طلب حلول AI خاصة
            </Button>
            <Button variant="outline" className="w-full">
              📄 إدارة اشتراكات الشركة
            </Button>
            <Button variant="outline" className="w-full">
              📊 تقارير الأداء والتحليلات
            </Button>
          </div>

          <div className="pt-6">
            <h3 className="font-semibold text-lg">🚀 التوسّع العالمي يبدأ من هنا</h3>
            <p className="text-sm text-muted-foreground">
              ستحصل شركتك على دعم فوري في أكثر من 100 دولة ولغة، بفضل الذكاء الاصطناعي المتقدم في OptaVita OS.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
