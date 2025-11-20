// Common UI types
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
  metadata?: Record<string, any>;
}

export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
  metadata?: Record<string, any>;
}

export interface GeoLocation {
  country: string;
  countryCode: string;
  city: string;
  latitude?: number;
  longitude?: number;
}

// Visualization types
export interface OrgChartNode {
  id: string;
  name: string;
  role?: string;
  department: string;
  parentId?: string;
  employeeCount?: number;
  languageCapabilities?: string[];
}

export interface LanguageHeatmapData {
  department: string;
  language: string;
  proficiency: number; // 0-100
  employeeCount: number;
}

export interface MarketOpportunityScore {
  marketId: string;
  marketName: string;
  overallScore: number; // 0-100
  factors: {
    languageReadiness: number;
    marketSize: number;
    competitivePosition: number;
    regulatoryEase: number;
  };
}

// Filter and search types
export interface FilterOptions {
  industries?: string[];
  regions?: string[];
  languages?: string[];
  sizes?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface SearchResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}
