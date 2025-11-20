import Link from 'next/link';
import { Globe2, Building2, Languages, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe2 className="h-8 w-8 text-primary-600" />
              <h1 className="text-2xl font-bold text-consulting-dark">
                BBrown Globalization Platform
              </h1>
            </div>
            <nav className="flex gap-6">
              <Link href="/dashboard" className="text-consulting-medium hover:text-primary-600 transition">
                Dashboard
              </Link>
              <Link href="/organizations" className="text-consulting-medium hover:text-primary-600 transition">
                Organizations
              </Link>
              <Link href="/languages" className="text-consulting-medium hover:text-primary-600 transition">
                Languages
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-consulting-dark mb-6">
            Strategic Globalization Consulting
          </h2>
          <p className="text-xl text-consulting-medium mb-12">
            Comprehensive organizational mapping and language strategy tools for 
            intelligent, data-driven global expansion decisions.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/dashboard"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg"
            >
              Get Started
            </Link>
            <Link 
              href="/about"
              className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Building2 className="h-12 w-12 text-primary-600" />}
            title="Organizational Mapping"
            description="Visualize and analyze organizational structures across global markets"
          />
          <FeatureCard
            icon={<Languages className="h-12 w-12 text-primary-600" />}
            title="Language Coverage"
            description="Comprehensive analysis of language capabilities and market needs"
          />
          <FeatureCard
            icon={<TrendingUp className="h-12 w-12 text-primary-600" />}
            title="Market Expansion"
            description="Data-driven insights for strategic market entry decisions"
          />
          <FeatureCard
            icon={<Globe2 className="h-12 w-12 text-primary-600" />}
            title="Global Strategy"
            description="Intelligent consulting tools for worldwide operations"
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition border border-slate-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-consulting-dark mb-3">{title}</h3>
      <p className="text-consulting-medium">{description}</p>
    </div>
  );
}
