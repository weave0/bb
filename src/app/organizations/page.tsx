"use client";

import { useState } from "react";
import Link from "next/link";
import { Globe2, Building2, MapPin, Users, Languages } from "lucide-react";
import type { Organization } from "@/types/models";

export default function OrganizationsPage() {
  const [organizations] = useState<Partial<Organization>[]>([
    {
      id: "1",
      name: "TechCorp International",
      industry: "Technology",
      size: "enterprise",
      headquarters: {
        country: "United States",
        city: "San Francisco",
      },
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
    },
  ]);

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
                className="text-primary-600 font-semibold"
              >
                Organizations
              </Link>
              <Link
                href="/languages"
                className="text-consulting-medium hover:text-primary-600"
              >
                Languages
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-consulting-dark">
            Organizations
          </h1>
          <Link
            href="/organizations/new"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Add Organization
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org) => (
            <OrganizationCard key={org.id} organization={org} />
          ))}
        </div>
      </main>
    </div>
  );
}

function OrganizationCard({
  organization,
}: {
  organization: Partial<Organization>;
}) {
  return (
    <Link
      href={`/organizations/${organization.id}`}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-2 border-transparent hover:border-primary-400"
    >
      <div className="flex items-start gap-3 mb-4">
        <Building2 className="h-8 w-8 text-primary-600 flex-shrink-0" />
        <div>
          <h3 className="text-xl font-bold text-consulting-dark mb-1">
            {organization.name}
          </h3>
          <p className="text-sm text-consulting-medium">
            {organization.industry}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        {organization.headquarters && (
          <div className="flex items-center gap-2 text-consulting-medium">
            <MapPin className="h-4 w-4" />
            <span>
              {organization.headquarters.city},{" "}
              {organization.headquarters.country}
            </span>
          </div>
        )}

        <div className="flex items-center gap-2 text-consulting-medium">
          <Users className="h-4 w-4" />
          <span className="capitalize">{organization.size} organization</span>
        </div>

        <div className="flex items-center gap-2 text-primary-600 font-semibold mt-4">
          <Languages className="h-4 w-4" />
          <span>View Language Coverage →</span>
        </div>
      </div>
    </Link>
  );
}
