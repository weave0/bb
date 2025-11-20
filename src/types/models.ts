import { z } from 'zod';

// Organization Structure
export const OrganizationSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  industry: z.string(),
  headquarters: z.object({
    country: z.string(),
    city: z.string(),
    region: z.string().optional(),
  }),
  size: z.enum(['small', 'medium', 'large', 'enterprise']),
  foundedYear: z.number().optional(),
  website: z.string().url().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const DepartmentSchema = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid(),
  name: z.string(),
  parentDepartmentId: z.string().uuid().nullable(),
  employeeCount: z.number(),
  primaryLanguages: z.array(z.string()),
  locations: z.array(z.object({
    country: z.string(),
    city: z.string(),
    employeeCount: z.number(),
  })),
});

export const EmployeeSchema = z.object({
  id: z.string().uuid(),
  departmentId: z.string().uuid(),
  role: z.string(),
  level: z.enum(['individual_contributor', 'manager', 'director', 'executive']),
  primaryLanguage: z.string(),
  secondaryLanguages: z.array(z.string()),
  location: z.object({
    country: z.string(),
    city: z.string(),
  }),
});

// Language Coverage
export const LanguageSchema = z.object({
  code: z.string(), // ISO 639-1
  name: z.string(),
  nativeName: z.string(),
  isRTL: z.boolean().default(false),
  speakers: z.number().optional(), // global speakers
});

export const LanguageCoverageSchema = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid(),
  languageCode: z.string(),
  proficiency: z.enum(['native', 'fluent', 'professional', 'limited', 'none']),
  employeeCount: z.number(),
  departments: z.array(z.string()),
  needsAssessment: z.enum(['critical', 'high', 'medium', 'low']),
});

// Market Analysis
export const MarketSchema = z.object({
  id: z.string().uuid(),
  country: z.string(),
  region: z.string(),
  primaryLanguages: z.array(z.string()),
  population: z.number(),
  gdp: z.number().optional(),
  internetPenetration: z.number().optional(), // percentage
  easeOfDoingBusiness: z.number().optional(), // rank
});

export const MarketExpansionPlanSchema = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid(),
  targetMarket: z.string().uuid(),
  status: z.enum(['planning', 'in_progress', 'active', 'on_hold', 'completed']),
  priority: z.enum(['critical', 'high', 'medium', 'low']),
  timeline: z.object({
    startDate: z.date(),
    targetLaunchDate: z.date(),
    actualLaunchDate: z.date().optional(),
  }),
  languageRequirements: z.array(z.object({
    languageCode: z.string(),
    requiredProficiency: z.string(),
    currentCapability: z.string(),
    gap: z.number(), // percentage
  })),
  milestones: z.array(z.object({
    id: z.string(),
    name: z.string(),
    dueDate: z.date(),
    status: z.enum(['not_started', 'in_progress', 'completed', 'blocked']),
  })),
});

// Consultation
export const ConsultationSessionSchema = z.object({
  id: z.string().uuid(),
  organizationId: z.string().uuid(),
  consultantId: z.string().uuid(),
  type: z.enum(['discovery', 'strategy', 'implementation', 'review']),
  status: z.enum(['scheduled', 'in_progress', 'completed', 'cancelled']),
  scheduledAt: z.date(),
  duration: z.number(), // minutes
  notes: z.string().optional(),
  recommendations: z.array(z.object({
    id: z.string(),
    category: z.string(),
    description: z.string(),
    priority: z.enum(['critical', 'high', 'medium', 'low']),
    estimatedEffort: z.string().optional(),
  })),
});

// Type exports
export type Organization = z.infer<typeof OrganizationSchema>;
export type Department = z.infer<typeof DepartmentSchema>;
export type Employee = z.infer<typeof EmployeeSchema>;
export type Language = z.infer<typeof LanguageSchema>;
export type LanguageCoverage = z.infer<typeof LanguageCoverageSchema>;
export type Market = z.infer<typeof MarketSchema>;
export type MarketExpansionPlan = z.infer<typeof MarketExpansionPlanSchema>;
export type ConsultationSession = z.infer<typeof ConsultationSessionSchema>;
