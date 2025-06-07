export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Jules</h1>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Features</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
            Welcome to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Jules</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A beautiful and modern Next.js website built with TypeScript and Tailwind CSS. 
            Ready to be customized for your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium py-3 px-8 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Built with Modern Technologies
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Next.js 15</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Built with the latest Next.js features including App Router, Server Components, and optimized performance.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 5v4a2 2 0 002 2h4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">TypeScript</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Fully typed with TypeScript for better development experience, code quality, and maintainability.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M13 5v4a2 2 0 002 2h4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Tailwind CSS</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Styled with Tailwind CSS for rapid UI development with utility-first classes and responsive design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            © 2025 Jules. Ready for your customization.
          </p>
        </div>
      </footer>
    </div>
  );
}
