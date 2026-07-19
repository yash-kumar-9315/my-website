import Image from "next/image";
import { FadeIn } from "./components/fadein";
import ThemeToggle from "./components/themetoggle";
import ContactForm from "./components/contactform";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b dark:border-gray-800">
        <span className="text-xl font-bold">MySite</span>
        <div className="flex gap-6 items-center text-sm font-medium">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#work" className="hover:text-blue-600">Work</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
          <ThemeToggle />
        </div>
      </nav>

      {/* HERO SECTION */}
      <FadeIn>
        <section className="flex flex-col items-center justify-center text-center px-6 py-32">
          <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m building something new.</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            This is a starter site — we&apos;ll turn it into whatever you want:
            a portfolio, a business page, or a blog.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-transform hover:-translate-y-1">
            Get Started
          </button>
        </section>
      </FadeIn>

      {/* ABOUT SECTION */}
      <FadeIn>
        <section id="about" className="px-8 py-20 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">What I&apos;m learning</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-semibold mb-2">Next.js</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">The framework powering this site.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-semibold mb-2">Tailwind CSS</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Styling everything you see here.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Taking this site live on the internet.</p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* WORK SECTION */}
      <FadeIn>
        <section id="work" className="px-8 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">My Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="aspect-video relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Image src="/project1.jpg" alt="Project 1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="aspect-video relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Image src="/project2.png" alt="Project 2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="aspect-video relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Image src="/project3.jpg" alt="Project 3" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="aspect-video relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
              <Image src="/project4.jpg" alt="Project 4" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CONTACT SECTION */}
      <FadeIn>
        <section id="contact" className="px-8 py-20 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Have a question or want to connect? Reach out below.</p>
          <ContactForm />
        </section>
      </FadeIn>

    </main>
  );
}