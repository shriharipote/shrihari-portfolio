"use client";

import { useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const CONTACT_EMAIL = "poteshreehari@gmail.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name || "Anonymous"}${email ? ` (${email})` : ""}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex max-w-xl flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg border border-[#ddd3c8] bg-[#f5f5f0] px-4 py-2.5 text-sm text-[#2c211d] placeholder:text-[#a89a90] focus:outline-none focus:ring-1 focus:ring-[#a97c6f]"
        />
        <input
          type="email"
          required
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg border border-[#ddd3c8] bg-[#f5f5f0] px-4 py-2.5 text-sm text-[#2c211d] placeholder:text-[#a89a90] focus:outline-none focus:ring-1 focus:ring-[#a97c6f]"
        />
      </div>
      <textarea
        required
        rows={4}
        placeholder="What's on your mind?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="rounded-lg border border-[#ddd3c8] bg-[#f5f5f0] px-4 py-2.5 text-sm text-[#2c211d] placeholder:text-[#a89a90] focus:outline-none focus:ring-1 focus:ring-[#a97c6f]"
      />
      <div>
        <RainbowButton type="submit">Send message</RainbowButton>
      </div>
    </form>
  );
}
