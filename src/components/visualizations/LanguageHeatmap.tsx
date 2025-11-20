'use client';

import type { LanguageHeatmapData } from '@/types';
import { getLanguageProficiencyColor } from '@/lib/utils';

interface LanguageHeatmapProps {
  data: LanguageHeatmapData[];
}

export function LanguageHeatmap({ data }: LanguageHeatmapProps) {
  // Get unique departments and languages
  const departments = Array.from(new Set(data.map(d => d.department)));
  const languages = Array.from(new Set(data.map(d => d.language)));

  const getCellData = (dept: string, lang: string) => {
    return data.find(d => d.department === dept && d.language === lang);
  };

  const getColorIntensity = (proficiency: number) => {
    // Convert 0-100 to color intensity
    if (proficiency >= 80) return 'bg-green-600';
    if (proficiency >= 60) return 'bg-blue-500';
    if (proficiency >= 40) return 'bg-purple-500';
    if (proficiency >= 20) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <h3 className="text-lg font-semibold text-consulting-dark mb-4">
        Language Proficiency Heatmap
      </h3>
      <div className="min-w-max">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-slate-300 p-3 bg-slate-100 text-left font-semibold">
                Department
              </th>
              {languages.map(lang => (
                <th key={lang} className="border border-slate-300 p-3 bg-slate-100 text-center font-semibold">
                  {lang}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {departments.map(dept => (
              <tr key={dept}>
                <td className="border border-slate-300 p-3 font-medium bg-slate-50">
                  {dept}
                </td>
                {languages.map(lang => {
                  const cellData = getCellData(dept, lang);
                  return (
                    <td
                      key={`${dept}-${lang}`}
                      className={`border border-slate-300 p-3 text-center ${
                        cellData ? getColorIntensity(cellData.proficiency) : 'bg-slate-100'
                      }`}
                    >
                      {cellData ? (
                        <div className="text-white">
                          <div className="font-bold">{cellData.proficiency}%</div>
                          <div className="text-xs">{cellData.employeeCount} emp</div>
                        </div>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <span className="font-semibold">Proficiency:</span>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-600"></div>
          <span>High (80%+)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500"></div>
          <span>Good (60-79%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-500"></div>
          <span>Medium (40-59%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500"></div>
          <span>Limited (20-39%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500"></div>
          <span>Low (&lt;20%)</span>
        </div>
      </div>
    </div>
  );
}
