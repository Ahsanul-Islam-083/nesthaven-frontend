"use client";

import { useState } from "react";

interface PasswordInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function PasswordInput({ value, onChange, placeholder }: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-slate-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        tabIndex={-1}
      >
        {show ? (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M17.94 17.94A10.94 10.94 0 0112 20c-7 0-11-8-11-8a21.8 21.8 0 015.06-6.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a21.77 21.77 0 01-3.22 4.44M14.12 14.12a3 3 0 11-4.24-4.24" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        )}
      </button>
    </div>
  );
}