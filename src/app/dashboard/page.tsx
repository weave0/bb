"use client";

import { Building2, Globe2, Languages, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
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
                className="text-primary-600 font-semibold"
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
                className="text-consulting-medium hover:text-primary-600"
              >
                Languages
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-consulting-dark mb-8">
          Globalization Dashboard
        </h1>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            icon={<Building2 className="h-8 w-8 text-primary-600" />}
            title="Active Organizations"
            value="12"
            trend="+2 this month"
          />
          <MetricCard
            icon={<Languages className="h-8 w-8 text-blue-600" />}
            title="Languages Supported"
            value="24"
            trend="Across all clients"
          />
          <MetricCard
            icon={<Globe2 className="h-8 w-8 text-purple-600" />}
            title="Target Markets"
            value="35"
            trend="15 in planning"
          />
          <MetricCard
            icon={<Users className="h-8 w-8 text-green-600" />}
            title="Total Employees Mapped"
            value="4,256"
            trend="+128 updated"
          />
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-consulting-dark mb-4">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <ActionButton
              href="/organizations/new"
              title="Add Organization"
              description="Map a new client organization"
            />
            <ActionButton
              href="/consultation/new"
              title="Schedule Consultation"
              description="Create a new consulting session"
            />
            <ActionButton
              href="/analysis/market"
              title="Market Analysis"
              description="Analyze market opportunities"
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-consulting-dark mb-4">
            Recent Activity
          </h2>
          <div className="space-y-3">
            <ActivityItem
              title="Updated language coverage for TechCorp"
              time="2 hours ago"
              type="update"
            />
            <ActivityItem
              title="Completed market analysis for APAC expansion"
              time="5 hours ago"
              type="completed"
            />
            <ActivityItem
              title="Added new organization: Global Innovations Inc."
              time="1 day ago"
              type="new"
            />
            <ActivityItem
              title="Consultation session with FinanceHub scheduled"
              time="2 days ago"
              type="scheduled"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function MetricCard({
  icon,
  title,
  value,
  trend,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-3">{icon}</div>
      <h3 className="text-sm text-consulting-medium mb-1">{title}</h3>
      <p className="text-3xl font-bold text-consulting-dark mb-1">{value}</p>
      <p className="text-xs text-consulting-medium">{trend}</p>
    </div>
  );
}

function ActionButton({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="p-4 border-2 border-slate-200 rounded-lg hover:border-primary-600 hover:shadow-md transition"
    >
      <h3 className="font-semibold text-consulting-dark mb-1">{title}</h3>
      <p className="text-sm text-consulting-medium">{description}</p>
    </Link>
  );
}

function ActivityItem({
  title,
  time,
  type,
}: {
  title: string;
  time: string;
  type: string;
}) {
  const colors: Record<string, string> = {
    update: "bg-blue-100 text-blue-600",
    completed: "bg-green-100 text-green-600",
    new: "bg-purple-100 text-purple-600",
    scheduled: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded">
      <div
        className={`w-2 h-2 rounded-full mt-2 ${
          colors[type] || "bg-slate-300"
        }`}
      />
      <div className="flex-1">
        <p className="text-consulting-dark">{title}</p>
        <p className="text-sm text-consulting-medium">{time}</p>
      </div>
    </div>
  );
}
