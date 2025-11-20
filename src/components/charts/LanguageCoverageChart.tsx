'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { ChartDataPoint } from '@/types';

interface LanguageCoverageChartProps {
  data: ChartDataPoint[];
  height?: number;
}

export function LanguageCoverageChart({ data, height = 400 }: LanguageCoverageChartProps) {
  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-consulting-dark mb-4">
        Language Coverage by Department
      </h3>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#0ea5e9" name="Employees" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
