"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe2, TrendingUp, Users, MapPin } from "lucide-react";
import { SUPPORTED_LANGUAGES } from "@/lib/constants";

export default function LanguagesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Globe2 className="h-6 w-6 text-primary-600" />
              <span className="text-xl font-bold text-consulting-dark">
                BBrown Platform
              </span>
            </Link>
            <nav className="flex gap-6">
              <Link
                href="/dashboard"
                className="text-consulting-medium hover:text-primary-600"
              >
                Dashboard
              </Link>
              <Link
                href="/organizations"
                className="text-consulting-medium hover:text-primary-600"
              >
                Organizations
              </Link>
              <Link
                href="/languages"
                className="text-primary-600 font-semibold"
              >
                Languages
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-consulting-dark mb-8">
          Language Coverage Analysis
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPORTED_LANGUAGES.map((language) => (
            <LanguageCard key={language.code} language={language} />
          ))}
        </div>
      </main>
    </div>
  );
}

function LanguageCard({
  language,
}: {
  language: (typeof SUPPORTED_LANGUAGES)[number];
}) {
  const formatSpeakers = (count: number) => {
    if (count >= 1000000000) return `${(count / 1000000000).toFixed(1)}B`;
    if (count >= 1000000) return `${(count / 1000000).toFixed(0)}M`;
    return count.toString();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-primary-400">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-consulting-dark">
            {language.name}
          </h3>
          <p
            className="text-lg text-consulting-medium"
            dir={language.isRTL ? "rtl" : "ltr"}
          >
            {language.nativeName}
          </p>
        </div>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
          {language.code.toUpperCase()}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-consulting-medium">
          <Users className="h-4 w-4" />
          <span>{formatSpeakers(language.speakers)} speakers worldwide</span>
        </div>

        {language.isRTL && (
          <div className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded inline-block">
            RTL Language
          </div>
        )}

        <div className="pt-3 border-t border-slate-200">
          <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
            View Coverage Details →
          </button>
        </div>
      </div>
    </div>
  );
}
