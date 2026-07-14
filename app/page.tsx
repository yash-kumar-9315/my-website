import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b">
        <span className="text-xl font-bold">MySite</span>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#work" className="hover:text-blue-600">Work</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm building something new.</h1>
        <p className="text-lg text-gray-600 max-w-xl">
          This is a starter site — we'll turn it into whatever you want:
          a portfolio, a business page, or a blog.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* CONTENT SECTION */}
      <section id="about" className="px-8 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">What I'm learning</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Next.js</h3>
            <p className="text-gray-600 text-sm">The framework powering this site.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-600 text-sm">Styling everything you see here.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h3 className="font-semibold mb-2">Deployment</h3>
            <p className="text-gray-600 text-sm">Taking this site live on the internet.</p>
          </div>
        </div>
      </section>

       {/* WORK SECTION */}
      <section id="work" className="px-8 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="aspect-video relative rounded-xl overflow-hidden">
            <Image src="/project1.jpg" alt="Project 1" fill className="object-cover" />
          </div>
          <div className="aspect-video relative rounded-xl overflow-hidden">
            <Image src="/project2.jpg" alt="Project 2" fill className="object-cover" />
          </div>
          <div className="aspect-video relative rounded-xl overflow-hidden">
            <Image src="/project3.jpg" alt="Project 3" fill className="object-cover" />
          </div>
          <div className="aspect-video relative rounded-xl overflow-hidden">
            <Image src="/project4.jpg" alt="Project 4" fill className="object-cover" />
          </div>
        </div>
      </section>

{/* CONTACT SECTION */}
      <section id="contact" className="px-8 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-8">Have a question or want to connect? Reach out below.</p>
        <form className="max-w-md mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            placeholder="Your message"
            rows={4}
            className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-10 text-center text-sm text-gray-500 border-t">
        © 2026 MySite. Built while learning.
      </footer>
    </main>
  );
}