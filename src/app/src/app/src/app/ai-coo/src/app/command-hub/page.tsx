// src/app/command-hub/page.tsx
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'يناير', performance: 78 },
  { name: 'فبراير', performance: 85 },
  { name: 'مارس', performance: 92 },
  { name: 'أبريل', performance: 88 },
  { name: 'مايو', performance: 95 },
];

export default function CommandHub() {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">🚀 غرفة القيادة الفاخرة</h1>

      <Card>
        <CardContent className="p-6 space-y-4">
          <p className="text-muted-foreground">
            هنا يمكنك إدارة كل شيء من مكان واحد: التقارير، الأداء، الخطط المستقبلية، وتحليلات الذكاء الاصطناعي.
          </p>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="performance" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <Button variant="default">📈 عرض تقارير الذكاء الاصطناعي</Button>
            <Button variant="outline">🔔 عرض التنبيهات الفورية</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-bold mb-2">📊 مؤشرات الأداء الرئيسية (KPIs)</h3>
          <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1">
            <li>نسبة النمو الشهري</li>
            <li>معدل اكتساب العملاء</li>
            <li>الاحتفاظ بالمشتركين</li>
            <li>فعالية الحملات التسويقية</li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
