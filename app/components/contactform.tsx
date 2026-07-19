"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={form.name}
        onChange={handleChange}
        required
        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={form.email}
        onChange={handleChange}
        required
        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        required
        className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-transform hover:-translate-y-1 disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && <p className="text-green-600 text-sm text-center">Message sent!</p>}
      {status === "error" && <p className="text-red-600 text-sm text-center">Something went wrong. Try again.</p>}
    </form>
  );
}