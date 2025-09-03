import React from "react";

function App() {
  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">Basavaraj</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#showcase" className="hover:text-blue-600">Showcase</a>
            <a href="#connect" className="hover:text-blue-600">Connect</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Hi, I’m Basavaraj 👋</h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          Product manager, builder, and mentor exploring how AI and education can
          come together to create real-world impact.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center px-6 bg-white">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-700 mb-4 max-w-3xl">
          My journey began in the startup ecosystem, where I learned that
          execution matters far more than just ideas. Over the last 15+ years,
          I’ve worn many hats — from business owner to product manager —
          building solutions, leading teams, and navigating the challenges of
          growth.
        </p>
        <p className="text-lg text-gray-700 mb-4 max-w-3xl">
          Along the way, I realized my strength lies in simplifying complex
          problems and mentoring others who are just starting out. That’s what
          led me to my current focus: <strong>AI and education</strong>. I’m
          building prototypes, exploring practical use cases, and sharing
          insights openly so others can learn and grow with me.
        </p>
        <p className="text-lg text-gray-700 max-w-3xl">
          Looking ahead, I see myself not just as a builder, but as a{" "}
          <strong>bridge between technology, business, and education</strong> —
          someone who can help shape how the next generation learns and creates
          with AI.
        </p>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="min-h-screen flex flex-col justify-center px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6">Showcase</h2>
        <p className="text-lg text-gray-700">Coming soon: my projects, blogs, and experiments.</p>
      </section>

      {/* Connect Section */}
      <section id="connect" className="min-h-screen flex flex-col justify-center px-6 bg-white">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-lg text-gray-700 mb-4">I’d love to hear from you! Reach me at:</p>
        <a
          href="mailto:yourname@example.com"
          className="text-blue-600 font-semibold hover:underline"
        >
          yourname@example.com
        </a>
      </section>
    </div>
  );
}

export default App;
