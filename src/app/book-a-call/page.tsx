"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookACallPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const response = await fetch("/api/book-a-call", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, description }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("success");
      setMessage(
        "Thank you! We've received your request and will be in touch shortly."
      );
      // Clear the form
      setName("");
      setEmail("");
      setPhone("");
      setDescription("");
    } else {
      setStatus("error");
      setMessage(data.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Book a Discovery Call
        </h1>
        <p className="mt-4 text-lg text-wc_muted">
          Let's discuss how we can help grow your brand. Fill out the form
          below to get started.
        </p>
      </div>

      {status === "success" ? (
        <div className="mt-12 rounded-lg border border-green-500/30 bg-green-500/10 p-6 text-center">
          <h3 className="text-lg font-semibold text-green-400">
            Request Sent!
          </h3>
          <p className="mt-2 text-green-300">{message}</p>
          <Link
            href="/"
            className="mt-4 inline-block text-wc_lime hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-wc_text"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-white/10 bg-transparent px-3 py-2 text-white shadow-sm focus:border-wc_lime focus:ring-wc_lime sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-wc_text"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-white/10 bg-transparent px-3 py-2 text-white shadow-sm focus:border-wc_lime focus:ring-wc_lime sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-wc_text"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-full rounded-md border-white/10 bg-transparent px-3 py-2 text-white shadow-sm focus:border-wc_lime focus:ring-wc_lime sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-wc_text"
            >
              How can we help you?
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-white/10 bg-transparent px-3 py-2 text-white shadow-sm focus:border-wc_lime focus:ring-wc_lime sm:text-sm"
            />
          </div>

          {status === "error" && <p className="text-red-400">{message}</p>}

          <div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full justify-center rounded-md border border-transparent bg-wc_lime px-4 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-wc_lime focus:ring-offset-2 focus:ring-offset-wc_bg disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
