import { useEffect } from "react";

export default function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <ul className="flex justify-center space-x-6 p-4 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#showcase" className="hover:text-blue-600">Showcase</a></li>
          <li><a href="#connect" className="hover:text-blue-600">Connect</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Basavaraj 👋</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Practical builder, mentor, and AI enthusiast. Sharing insights on how technology meets education and business.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 max-w-2xl text-center">
          With 15+ years in startups and product building, I’m passionate about simplifying technology and helping others grow.
          I’m currently focused on AI × Education, and building practical tools that make a difference.
        </p>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-6">Showcase</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
          {/* Example Project */}
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Fish Compatibility App</h3>
            <p className="text-gray-600 mb-3">A fun AI experiment that checks compatibility of aquarium fishes using Gemini API.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project →</a>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">SkillQuest Club</h3>
            <p className="text-gray-600 mb-3">An initiative to train school children in AI, Data Science, Cybersecurity & Soft Skills.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project →</a>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
        <p className="text-gray-600 mb-6">I’d love to connect with you on my journey.</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">LinkedIn</a>
          <a href="https://github.com" target="_blank" className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900">GitHub</a>
          <a href="mailto:youremail@example.com" className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">Email</a>
        </div>
      </section>
    </div>
  );
}
