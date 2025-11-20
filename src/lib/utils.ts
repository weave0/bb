import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export function formatDate(date: Date, format: 'short' | 'long' = 'short'): string {
  const options: Intl.DateTimeFormatOptions = 
    format === 'short'
      ? { year: 'numeric', month: 'short', day: 'numeric' }
      : { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function calculateLanguageGap(
  required: number,
  current: number
): { gap: number; percentage: number } {
  const gap = Math.max(0, required - current);
  const percentage = required > 0 ? (gap / required) * 100 : 0;
  return { gap, percentage };
}

export function scoreMarketOpportunity(factors: {
  languageReadiness: number;
  marketSize: number;
  competitivePosition: number;
  regulatoryEase: number;
}): number {
  const weights = {
    languageReadiness: 0.35,
    marketSize: 0.25,
    competitivePosition: 0.25,
    regulatoryEase: 0.15,
  };

  return (
    factors.languageReadiness * weights.languageReadiness +
    factors.marketSize * weights.marketSize +
    factors.competitivePosition * weights.competitivePosition +
    factors.regulatoryEase * weights.regulatoryEase
  );
}

export function getLanguageProficiencyColor(proficiency: string): string {
  const colors: Record<string, string> = {
    native: '#059669',
    fluent: '#3b82f6',
    professional: '#8b5cf6',
    limited: '#f59e0b',
    none: '#ef4444',
  };
  return colors[proficiency] || '#6b7280';
}

export function getPriorityColor(priority: string): string {
  const colors: Record<string, string> = {
    critical: '#dc2626',
    high: '#f59e0b',
    medium: '#3b82f6',
    low: '#6b7280',
  };
  return colors[priority] || '#6b7280';
}
