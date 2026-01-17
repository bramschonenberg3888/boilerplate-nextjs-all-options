export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Next.js Full-Stack Boilerplate
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              Production-ready template with Auth, tRPC, Prisma, and more
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <FeatureCard
              title="🔐 Authentication"
              description="NextAuth.js v5 with Credentials provider and Prisma adapter"
            />
            <FeatureCard
              title="🎨 UI Components"
              description="shadcn/ui with Tailwind CSS and dark mode support"
            />
            <FeatureCard
              title="🗄️ Database"
              description="Prisma v7 ORM with PostgreSQL adapter"
            />
            <FeatureCard
              title="🔌 API Layer"
              description="tRPC v11 with React Query for type-safe APIs"
            />
            <FeatureCard
              title="🛡️ Type Safety"
              description="TypeScript strict mode with Zod validation"
            />
            <FeatureCard
              title="🧪 Testing"
              description="Vitest for unit tests, Playwright for E2E"
            />
            <FeatureCard
              title="✨ Code Quality"
              description="ESLint, Prettier, and Husky pre-commit hooks"
            />
            <FeatureCard
              title="🚀 Deployment"
              description="Vercel-ready with optimized configuration"
            />
          </div>

          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Get Started</h2>
            <div className="space-y-2 text-sm font-mono">
              <p className="text-zinc-600 dark:text-zinc-400"># 1. Copy .env.example to .env.local and configure</p>
              <p className="bg-zinc-200 dark:bg-zinc-800 p-2 rounded">cp .env.example .env.local</p>

              <p className="text-zinc-600 dark:text-zinc-400 mt-4"># 2. Set up your database (optional - comment out if not ready)</p>
              <p className="bg-zinc-200 dark:bg-zinc-800 p-2 rounded">bun db:push</p>

              <p className="text-zinc-600 dark:text-zinc-400 mt-4"># 3. Start development server</p>
              <p className="bg-zinc-200 dark:bg-zinc-800 p-2 rounded">bun dev</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm">{description}</p>
    </div>
  );
}
