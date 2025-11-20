'use client';

import type { MarketOpportunityScore } from '@/types';
import { TrendingUp, Globe2 } from 'lucide-react';

interface MarketOpportunityMatrixProps {
  opportunities: MarketOpportunityScore[];
}

export function MarketOpportunityMatrix({ opportunities }: MarketOpportunityMatrixProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 60) return 'text-blue-600 bg-blue-50 border-blue-200';
    if (score >= 40) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const sortedOpportunities = [...opportunities].sort((a, b) => b.overallScore - a.overallScore);

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-6 w-6 text-primary-600" />
        <h3 className="text-lg font-semibold text-consulting-dark">
          Market Opportunity Assessment
        </h3>
      </div>

      <div className="space-y-4">
        {sortedOpportunities.map((opportunity) => (
          <div
            key={opportunity.marketId}
            className="border-2 rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Globe2 className="h-5 w-5 text-primary-600" />
                <h4 className="font-semibold text-consulting-dark">
                  {opportunity.marketName}
                </h4>
              </div>
              <div className={`px-4 py-2 rounded-lg border-2 font-bold ${getScoreColor(opportunity.overallScore)}`}>
                {opportunity.overallScore.toFixed(0)}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <MetricBadge
                label="Language Readiness"
                value={opportunity.factors.languageReadiness}
              />
              <MetricBadge
                label="Market Size"
                value={opportunity.factors.marketSize}
              />
              <MetricBadge
                label="Competitive Position"
                value={opportunity.factors.competitivePosition}
              />
              <MetricBadge
                label="Regulatory Ease"
                value={opportunity.factors.regulatoryEase}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MetricBadge({ label, value }: { label: string; value: number }) {
  return (
    <div className="text-center">
      <div className="text-xs text-consulting-medium mb-1">{label}</div>
      <div className="text-lg font-semibold text-consulting-dark">{value.toFixed(0)}</div>
      <div className="w-full bg-slate-200 rounded-full h-2 mt-1">
        <div
          className="bg-primary-600 h-2 rounded-full transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
