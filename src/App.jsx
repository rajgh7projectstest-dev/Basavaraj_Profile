// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center font-sans">
      {/* Hero Section (UPDATED content) */}
      <section className="w-full max-w-3xl text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Building practical AI solutions &amp; mentoring the next generation
        </h1>
        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          I’m Basavaraj — a product manager and builder with 15+ years in startups.
          Today I explore how AI and education can combine to create real-world impact.
          I build small prototypes, mentor learners, and share practical lessons you can apply.
        </p>
        <a
          href="#about"
          className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700"
        >
          Explore my journey
        </a>
      </section>

      {/* Value Section (unchanged structure/content from initial version) */}
      <section className="w-full max-w-4xl grid md:grid-cols-3 gap-6 px-6 py-16">
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md">
          <h3 className="font-semibold mb-2">Mini Case Studies</h3>
          <p className="text-gray-600 text-sm">
            Small AI prototypes, experiments, and what worked (or didn’t).
          </p>
        </div>
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md">
          <h3 className="font-semibold mb-2">Reflections</h3>
          <p className="text-gray-600 text-sm">
            Insights on AI × Education × Business — simple, practical lessons.
          </p>
        </div>
        <div className="border rounded-xl p-6 shadow-sm hover:shadow-md">
          <h3 className="font-semibold mb-2">Community Projects</h3>
          <p className="text-gray-600 text-sm">
            Stories from mentoring and collaborating with students &amp; peers.
          </p>
        </div>
      </section>

      {/* About Section (UPDATED content - Version 2 storytelling) */}
      <section className="w-full max-w-3xl text-center px-6 py-16">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <div className="text-gray-700 leading-relaxed space-y-4 text-left">
          <p>
            My journey began in the startup ecosystem, where I learned that execution
            matters far more than just ideas. Over the last 15+ years, I’ve worn many
            hats — from business owner to product manager — building solutions, leading
            teams, and navigating the challenges of growth.
          </p>

          <p>
            Along the way, I realized my strength lies in simplifying complex problems
            and mentoring others who are just starting out. That’s what led me to my
            current focus: <strong>AI and education</strong>. I’m building prototypes,
            exploring practical use cases, and sharing insights openly so others can
            learn and grow with me.
          </p>

          <p>
            Looking ahead, I see myself not just as a builder, but as a{' '}
            <strong>bridge between technology, business, and education</strong> — someone
            who can help shape how the next generation learns and creates with AI.
          </p>
        </div>
      </section>

      {/* Newsletter Section (unchanged) */}
      <section id="newsletter" className="w-full max-w-md text-center px-6 py-20">
        <h2 className="text-2xl font-bold mb-4">Get Insights</h2>
        <p className="text-gray-600 mb-6">
          Once a month, I share practical takeaways — no fluff, just lessons you can apply.
        </p>
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 border rounded-lg px-4 py-2"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer (unchanged) */}
      <footer className="w-full text-center text-gray-500 text-sm py-6">
        <p>
          Built to share, not to sell. |{' '}
          <a href="https://www.linkedin.com" className="underline" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}
