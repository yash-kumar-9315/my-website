import Image from "next/image";
import { FadeIn } from "./components/fadein";
import { Hero } from "./components/hero";
import ContactForm from "./components/contactform";

export default function Home() {
  return (
    <main className="n-h-screen bg-background text-foreground">
      {/* HERO SECTION */}
      <FadeIn>
       <section className="flex flex-col items-center justify-center text-center">
        <Hero />
       </section>
      </FadeIn>

      {/* ABOUT SECTION */}
      <FadeIn>
        <section id="about" className="px-8 py-20 bg-surface border-t border-border">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-accent-soft text-accent mb-4">
            Currently learning
          </span>
          <h2 className="text-3xl font-bold mb-6 text-center text-foreground">What I&apos;m learning</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-surface-alt rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg border border-border">
              <h3 className="font-semibold mb-2 text-foreground">Next.js</h3>
              <p className="text-foreground/60 text-sm">The framework powering this site.</p>
            </div>
            <div className="p-6 bg-surface-alt rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg border border-border">
              <h3 className="font-semibold mb-2">Tailwind CSS</h3>
              <p className="text-foreground/60 text-sm">Styling everything you see here.</p>
            </div>
            <div className="p-6 bg-surface-alt rounded-xl shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg border border-border">
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-foreground/60 text-sm">Taking this site live on the internet.</p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* WORK SECTION */}
      <FadeIn>
        <section id="work" className="px-8 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">My Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ma-w-4x1 mx-auto">
            <div className="aspect-video relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] border border-border hover:border-accent">
              <Image src="/project1.jpg" alt="Project 1" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="aspect-video relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] border border-border hover:border-accent">
              <Image src="/project2.png" alt="Project 2" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="aspect-video relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] border border-border hover:border-accent">
              <Image src="/project3.jpg" alt="Project 3" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="aspect-video relative rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] border border-border hover:border-accent">
              <Image src="/project4.jpg" alt="Project 4" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* CONTACT SECTION */}
      <FadeIn>
        <section id="contact" className="relative px-8 py-20 overflow-hidden min-h-[500px]">
         <div className="absolute inset-0 -z-0">
          <Image
           src="/contact.jpg"
           alt=""
           fill
           sizes="100vw"
           className="object-cover"
           />
          <div className="absolute inset-0 bg-background/10" />
        </div>

        <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-accent-soft text-accent mb-4">
          Let&apos;s talk
        </span>
        <h2 className="text-3xl font-bold mb-6 text-center text-foreground">Get in Touch</h2>
        <p className="text-center text-foreground/60 mb-8">Have a question or want to connect? Reach out below.</p>

       {/* glass card */}
        <div className="max-w-md mx-auto rounded-2xl border border-border bg-surface-alt/40 backdrop-blur-xl shadow-lg p-8 shadow-accent-soft/20">
        <ContactForm />
      </div>
    </section>
  </FadeIn>
      </main>
    );
}