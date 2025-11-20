// Sample language data
export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', isRTL: false, speakers: 1500000000 },
  { code: 'es', name: 'Spanish', nativeName: 'Español', isRTL: false, speakers: 559000000 },
  { code: 'zh', name: 'Chinese', nativeName: '中文', isRTL: false, speakers: 1300000000 },
  { code: 'fr', name: 'French', nativeName: 'Français', isRTL: false, speakers: 280000000 },
  { code: 'de', name: 'German', nativeName: 'Deutsch', isRTL: false, speakers: 134000000 },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', isRTL: false, speakers: 125000000 },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', isRTL: true, speakers: 422000000 },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', isRTL: false, speakers: 264000000 },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', isRTL: false, speakers: 258000000 },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', isRTL: false, speakers: 637000000 },
  { code: 'ko', name: 'Korean', nativeName: '한국어', isRTL: false, speakers: 81000000 },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', isRTL: false, speakers: 85000000 },
] as const;

// Industry classifications
export const INDUSTRIES = [
  'Technology',
  'Finance',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'Education',
  'Telecommunications',
  'Energy',
  'Consulting',
  'Media & Entertainment',
  'Transportation',
  'Hospitality',
] as const;

// Organization sizes
export const ORG_SIZES = {
  small: { label: 'Small', range: '1-50 employees' },
  medium: { label: 'Medium', range: '51-250 employees' },
  large: { label: 'Large', range: '251-1000 employees' },
  enterprise: { label: 'Enterprise', range: '1000+ employees' },
} as const;

// Proficiency levels
export const PROFICIENCY_LEVELS = {
  native: { label: 'Native', score: 100, color: '#059669' },
  fluent: { label: 'Fluent', score: 85, color: '#3b82f6' },
  professional: { label: 'Professional', score: 70, color: '#8b5cf6' },
  limited: { label: 'Limited', score: 40, color: '#f59e0b' },
  none: { label: 'None', score: 0, color: '#ef4444' },
} as const;

// Regions
export const WORLD_REGIONS = [
  'North America',
  'Latin America',
  'Europe',
  'Middle East',
  'Africa',
  'Asia Pacific',
  'Oceania',
] as const;

// Priority levels
export const PRIORITY_LEVELS = {
  critical: { label: 'Critical', color: '#dc2626', weight: 4 },
  high: { label: 'High', color: '#f59e0b', weight: 3 },
  medium: { label: 'Medium', color: '#3b82f6', weight: 2 },
  low: { label: 'Low', color: '#6b7280', weight: 1 },
} as const;

// Status types
export const PROJECT_STATUSES = {
  planning: { label: 'Planning', color: '#6b7280' },
  in_progress: { label: 'In Progress', color: '#3b82f6' },
  active: { label: 'Active', color: '#059669' },
  on_hold: { label: 'On Hold', color: '#f59e0b' },
  completed: { label: 'Completed', color: '#8b5cf6' },
} as const;
