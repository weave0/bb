// Sample data for BBrown Strategic Globalization Platform

const sampleData = {
  organizations: [
    {
      id: "bbrown-global",
      name: "BBrown Global Solutions",
      type: "Consulting",
      employeeCount: 450,
      headquarters: { country: "United States", city: "New York" },
      departments: [
        {
          id: "exec",
          name: "Executive Leadership",
          employeeCount: 12,
          languages: [
            {
              code: "en",
              name: "English",
              proficiency: "native",
              speakerCount: 12,
            },
            {
              code: "es",
              name: "Spanish",
              proficiency: "professional",
              speakerCount: 8,
            },
            {
              code: "zh",
              name: "Mandarin",
              proficiency: "professional",
              speakerCount: 4,
            },
          ],
        },
        {
          id: "sales-na",
          name: "Sales - North America",
          employeeCount: 85,
          languages: [
            {
              code: "en",
              name: "English",
              proficiency: "native",
              speakerCount: 85,
            },
            {
              code: "es",
              name: "Spanish",
              proficiency: "fluent",
              speakerCount: 42,
            },
            {
              code: "fr",
              name: "French",
              proficiency: "professional",
              speakerCount: 18,
            },
          ],
        },
        {
          id: "sales-emea",
          name: "Sales - EMEA",
          employeeCount: 120,
          languages: [
            {
              code: "en",
              name: "English",
              proficiency: "fluent",
              speakerCount: 120,
            },
            {
              code: "de",
              name: "German",
              proficiency: "native",
              speakerCount: 45,
            },
            {
              code: "fr",
              name: "French",
              proficiency: "native",
              speakerCount: 38,
            },
            {
              code: "it",
              name: "Italian",
              proficiency: "professional",
              speakerCount: 22,
            },
            {
              code: "ar",
              name: "Arabic",
              proficiency: "professional",
              speakerCount: 15,
            },
          ],
        },
        {
          id: "sales-apac",
          name: "Sales - APAC",
          employeeCount: 95,
          languages: [
            {
              code: "en",
              name: "English",
              proficiency: "fluent",
              speakerCount: 95,
            },
            {
              code: "zh",
              name: "Mandarin",
              proficiency: "native",
              speakerCount: 52,
            },
            {
              code: "ja",
              name: "Japanese",
              proficiency: "native",
              speakerCount: 25,
            },
            {
              code: "ko",
              name: "Korean",
              proficiency: "professional",
              speakerCount: 18,
            },
          ],
        },
        {
          id: "consulting",
          name: "Consulting Services",
          employeeCount: 138,
          languages: [
            {
              code: "en",
              name: "English",
              proficiency: "fluent",
              speakerCount: 138,
            },
            {
              code: "es",
              name: "Spanish",
              proficiency: "professional",
              speakerCount: 45,
            },
            {
              code: "de",
              name: "German",
              proficiency: "professional",
              speakerCount: 28,
            },
            {
              code: "fr",
              name: "French",
              proficiency: "professional",
              speakerCount: 32,
            },
            {
              code: "pt",
              name: "Portuguese",
              proficiency: "professional",
              speakerCount: 18,
            },
          ],
        },
      ],
    },
  ],

  markets: [
    {
      id: "us",
      name: "United States",
      region: "North America",
      population: 331000000,
      gdp: 25462.7,
      primaryLanguages: ["en", "es"],
      coverageScore: 95,
      priority: "high",
      opportunity: 85,
      competition: 90,
    },
    {
      id: "uk",
      name: "United Kingdom",
      region: "Europe",
      population: 67000000,
      gdp: 3070.6,
      primaryLanguages: ["en"],
      coverageScore: 88,
      priority: "high",
      opportunity: 78,
      competition: 85,
    },
    {
      id: "germany",
      name: "Germany",
      region: "Europe",
      population: 83000000,
      gdp: 4259.9,
      primaryLanguages: ["de"],
      coverageScore: 72,
      priority: "high",
      opportunity: 82,
      competition: 75,
    },
    {
      id: "france",
      name: "France",
      region: "Europe",
      population: 65000000,
      gdp: 2936.7,
      primaryLanguages: ["fr"],
      coverageScore: 68,
      priority: "medium",
      opportunity: 75,
      competition: 70,
    },
    {
      id: "china",
      name: "China",
      region: "Asia Pacific",
      population: 1412000000,
      gdp: 17963.2,
      primaryLanguages: ["zh"],
      coverageScore: 45,
      priority: "high",
      opportunity: 95,
      competition: 60,
    },
    {
      id: "japan",
      name: "Japan",
      region: "Asia Pacific",
      population: 125000000,
      gdp: 4231.1,
      primaryLanguages: ["ja"],
      coverageScore: 52,
      priority: "medium",
      opportunity: 72,
      competition: 65,
    },
    {
      id: "brazil",
      name: "Brazil",
      region: "Latin America",
      population: 214000000,
      gdp: 1920.1,
      primaryLanguages: ["pt"],
      coverageScore: 35,
      priority: "medium",
      opportunity: 68,
      competition: 45,
    },
    {
      id: "india",
      name: "India",
      region: "Asia Pacific",
      population: 1380000000,
      gdp: 3385.1,
      primaryLanguages: ["hi", "en"],
      coverageScore: 42,
      priority: "high",
      opportunity: 88,
      competition: 55,
    },
    {
      id: "mexico",
      name: "Mexico",
      region: "Latin America",
      population: 128000000,
      gdp: 1414.2,
      primaryLanguages: ["es"],
      coverageScore: 78,
      priority: "medium",
      opportunity: 70,
      competition: 60,
    },
    {
      id: "uae",
      name: "United Arab Emirates",
      region: "Middle East",
      population: 10000000,
      gdp: 507.5,
      primaryLanguages: ["ar", "en"],
      coverageScore: 55,
      priority: "low",
      opportunity: 65,
      competition: 70,
    },
  ],

  languages: [
    {
      code: "en",
      name: "English",
      nativeSpeakers: 1500000000,
      flag: "🇬🇧",
      family: "Germanic",
    },
    {
      code: "es",
      name: "Spanish",
      nativeSpeakers: 460000000,
      flag: "🇪🇸",
      family: "Romance",
    },
    {
      code: "zh",
      name: "Mandarin Chinese",
      nativeSpeakers: 918000000,
      flag: "🇨🇳",
      family: "Sino-Tibetan",
    },
    {
      code: "ar",
      name: "Arabic",
      nativeSpeakers: 274000000,
      flag: "🇸🇦",
      family: "Semitic",
    },
    {
      code: "fr",
      name: "French",
      nativeSpeakers: 280000000,
      flag: "🇫🇷",
      family: "Romance",
    },
    {
      code: "de",
      name: "German",
      nativeSpeakers: 134000000,
      flag: "🇩🇪",
      family: "Germanic",
    },
    {
      code: "ja",
      name: "Japanese",
      nativeSpeakers: 125000000,
      flag: "🇯🇵",
      family: "Japonic",
    },
    {
      code: "pt",
      name: "Portuguese",
      nativeSpeakers: 252000000,
      flag: "🇵🇹",
      family: "Romance",
    },
    {
      code: "it",
      name: "Italian",
      nativeSpeakers: 85000000,
      flag: "🇮🇹",
      family: "Romance",
    },
    {
      code: "ko",
      name: "Korean",
      nativeSpeakers: 81000000,
      flag: "🇰🇷",
      family: "Koreanic",
    },
    {
      code: "hi",
      name: "Hindi",
      nativeSpeakers: 602000000,
      flag: "🇮🇳",
      family: "Indo-Aryan",
    },
  ],

  coverageGaps: [
    {
      market: "China",
      language: "Mandarin Chinese",
      currentCoverage: 45,
      requiredCoverage: 80,
      gap: 35,
      impact: "high",
      recommendation: "Hire 15 Mandarin-fluent consultants in APAC region",
    },
    {
      market: "India",
      language: "Hindi",
      currentCoverage: 15,
      requiredCoverage: 60,
      gap: 45,
      impact: "high",
      recommendation:
        "Partner with local consulting firm or hire 10 Hindi speakers",
    },
    {
      market: "Brazil",
      language: "Portuguese",
      currentCoverage: 35,
      requiredCoverage: 75,
      gap: 40,
      impact: "medium",
      recommendation:
        "Expand consulting team with 8 Portuguese-speaking professionals",
    },
    {
      market: "France",
      language: "French",
      currentCoverage: 68,
      requiredCoverage: 85,
      gap: 17,
      impact: "medium",
      recommendation: "Upskill existing French speakers to fluent level",
    },
  ],
};

// Utility functions
function getProficiencyColor(proficiency) {
  const colors = {
    native: "#10b981",
    fluent: "#3b82f6",
    professional: "#6366f1",
    intermediate: "#f59e0b",
    basic: "#ef4444",
  };
  return colors[proficiency] || "#6b7280";
}

function getPriorityColor(priority) {
  const colors = {
    high: "#ef4444",
    medium: "#f59e0b",
    low: "#3b82f6",
  };
  return colors[priority] || "#6b7280";
}

function calculateOverallCoverage() {
  const markets = sampleData.markets;
  const total = markets.reduce((sum, m) => sum + m.coverageScore, 0);
  return Math.round(total / markets.length);
}

function getUniqueLanguages() {
  const org = sampleData.organizations[0];
  const languageCodes = new Set();

  org.departments.forEach((dept) => {
    dept.languages.forEach((lang) => {
      languageCodes.add(lang.code);
    });
  });

  return Array.from(languageCodes);
}
