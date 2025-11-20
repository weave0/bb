import type {
  Organization,
  Department,
  LanguageCoverage,
} from "@/types/models";
import type {
  ChartDataPoint,
  LanguageHeatmapData,
  MarketOpportunityScore,
} from "@/types";

// Sample Organizations
export const sampleOrganizations: Partial<Organization>[] = [
  {
    id: "1",
    name: "TechCorp International",
    industry: "Technology",
    size: "enterprise",
    headquarters: {
      country: "United States",
      city: "San Francisco",
    },
    website: "https://techcorp.example.com",
    foundedYear: 2010,
  },
  {
    id: "2",
    name: "Global Finance Group",
    industry: "Finance",
    size: "large",
    headquarters: {
      country: "United Kingdom",
      city: "London",
    },
    website: "https://gfg.example.com",
    foundedYear: 1995,
  },
  {
    id: "3",
    name: "EuroRetail Solutions",
    industry: "Retail",
    size: "medium",
    headquarters: {
      country: "Germany",
      city: "Berlin",
    },
    website: "https://euroretail.example.com",
    foundedYear: 2015,
  },
];

// Sample Language Coverage Data
export const sampleLanguageCoverage: ChartDataPoint[] = [
  { label: "English", value: 450, color: "#0ea5e9" },
  { label: "Spanish", value: 180, color: "#3b82f6" },
  { label: "Mandarin", value: 120, color: "#8b5cf6" },
  { label: "French", value: 95, color: "#ec4899" },
  { label: "German", value: 85, color: "#f59e0b" },
  { label: "Japanese", value: 60, color: "#10b981" },
];

// Sample Market Distribution
export const sampleMarketDistribution: ChartDataPoint[] = [
  { label: "North America", value: 35, color: "#0ea5e9" },
  { label: "Europe", value: 28, color: "#3b82f6" },
  { label: "Asia Pacific", value: 22, color: "#8b5cf6" },
  { label: "Latin America", value: 10, color: "#ec4899" },
  { label: "Middle East", value: 5, color: "#f59e0b" },
];

// Sample Language Heatmap Data
export const sampleLanguageHeatmap: LanguageHeatmapData[] = [
  {
    department: "Sales",
    language: "English",
    proficiency: 95,
    employeeCount: 45,
  },
  {
    department: "Sales",
    language: "Spanish",
    proficiency: 65,
    employeeCount: 28,
  },
  {
    department: "Sales",
    language: "French",
    proficiency: 45,
    employeeCount: 15,
  },
  {
    department: "Engineering",
    language: "English",
    proficiency: 88,
    employeeCount: 120,
  },
  {
    department: "Engineering",
    language: "Mandarin",
    proficiency: 55,
    employeeCount: 30,
  },
  {
    department: "Engineering",
    language: "German",
    proficiency: 35,
    employeeCount: 18,
  },
  {
    department: "Marketing",
    language: "English",
    proficiency: 92,
    employeeCount: 35,
  },
  {
    department: "Marketing",
    language: "Spanish",
    proficiency: 78,
    employeeCount: 22,
  },
  {
    department: "Marketing",
    language: "Japanese",
    proficiency: 42,
    employeeCount: 12,
  },
  {
    department: "Support",
    language: "English",
    proficiency: 98,
    employeeCount: 65,
  },
  {
    department: "Support",
    language: "Spanish",
    proficiency: 82,
    employeeCount: 48,
  },
  {
    department: "Support",
    language: "French",
    proficiency: 75,
    employeeCount: 35,
  },
];

// Sample Market Opportunities
export const sampleMarketOpportunities: MarketOpportunityScore[] = [
  {
    marketId: "1",
    marketName: "Brazil",
    overallScore: 82,
    factors: {
      languageReadiness: 75,
      marketSize: 85,
      competitivePosition: 80,
      regulatoryEase: 70,
    },
  },
  {
    marketId: "2",
    marketName: "Japan",
    overallScore: 78,
    factors: {
      languageReadiness: 65,
      marketSize: 90,
      competitivePosition: 75,
      regulatoryEase: 82,
    },
  },
  {
    marketId: "3",
    marketName: "India",
    overallScore: 75,
    factors: {
      languageReadiness: 70,
      marketSize: 95,
      competitivePosition: 60,
      regulatoryEase: 68,
    },
  },
  {
    marketId: "4",
    marketName: "Germany",
    overallScore: 71,
    factors: {
      languageReadiness: 80,
      marketSize: 70,
      competitivePosition: 65,
      regulatoryEase: 88,
    },
  },
];
