import { NextResponse } from "next/server";
import {
  sampleLanguageCoverage,
  sampleMarketDistribution,
  sampleLanguageHeatmap,
  sampleMarketOpportunities,
} from "@/lib/sampleData";

export async function GET() {
  // In production, aggregate this data from the database
  return NextResponse.json({
    success: true,
    data: {
      languageCoverage: sampleLanguageCoverage,
      marketDistribution: sampleMarketDistribution,
      languageHeatmap: sampleLanguageHeatmap,
      marketOpportunities: sampleMarketOpportunities,
      metrics: {
        totalOrganizations: 12,
        totalLanguages: 24,
        totalMarkets: 35,
        totalEmployees: 4256,
      },
    },
  });
}
